import { client } from './client';

/**
 * Fetch dynamic content from Sanity with real-time server fallback
 * to guarantee immediate updates on published CMS changes without CORS issues.
 */
export async function getSanityContent(type, fallbackGroqQuery) {
  try {
    // 1. Use the cached server-side proxy route to avoid exposing Sanity credentials.
    const res = await fetch(`/api/sanity?type=${type}`);
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
      const directData = await client.fetch(fallbackGroqQuery);
      if (directData) return directData;
    }
  } catch (err) {
    console.warn(`Direct Sanity fetch for ${type} fallback:`, err.message);
  }

  return null;
}
