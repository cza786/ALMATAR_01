 'use client';

import { useEffect, useState } from 'react';
import { client } from './client';

/**
 * Fetch dynamic content from Sanity with real-time server fallback
 * to guarantee immediate updates on published CMS changes without CORS issues.
 */
export async function getSanityContent(type, fallbackGroqQuery, params = {}) {
  try {
    // Use the server proxy for the initial request so tokens remain server-side.
    const search = new URLSearchParams({ type, ...params }).toString();
    const res = await fetch(`/api/sanity?${search}`, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.data) return json.data;
    }
  } catch (err) {
    // Ignore and fallback to client fetch
  }

  try {
    // 2. Direct client fetch fallback
    if (fallbackGroqQuery) {
      const directData = await client.fetch(fallbackGroqQuery, params);
      if (directData) return directData;
    }
  } catch (err) {
    console.warn(`Direct Sanity fetch for ${type} fallback:`, err.message);
  }

  return null;
}

/**
 * Fetch published content and keep the component synchronized with Sanity.
 * The listener emits after a document is published in Studio, so the open
 * website updates without a refresh.
 */
export function useSanityContent(type, query, params = {}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let active = true;

    getSanityContent(type, query, params).then((initialData) => {
      if (active && initialData) setData(initialData);
    }).catch((error) => {
      if (active) console.warn(`Sanity content load failed for ${type}:`, error);
    });

    const subscription = client.listen(query, params, {
      visibility: 'query',
      includeResult: true,
      effectFormat: 'mendoza',
    }).subscribe({
      next: (event) => {
        if (active && event.result) setData(event.result);
      },
      error: (error) => {
        if (active) console.warn(`Sanity live updates failed for ${type}:`, error);
      },
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [type, query, JSON.stringify(params)]);

  return data;
}
