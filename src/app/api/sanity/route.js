import { NextResponse } from 'next/server';
import { serverClient } from '@/sanity/lib/serverClient';
import {
  HOME_PAGE_QUERY,
  ABOUT_PAGE_QUERY,
  CAREERS_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  SERVICES_QUERY,
} from '@/sanity/lib/queries';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const QUERIES = {
  home: HOME_PAGE_QUERY,
  about: ABOUT_PAGE_QUERY,
  careers: CAREERS_PAGE_QUERY,
  contact: CONTACT_PAGE_QUERY,
  settings: SITE_SETTINGS_QUERY,
  services: SERVICES_QUERY,
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type && QUERIES[type]) {
      const data = await serverClient.fetch(QUERIES[type]);
      return NextResponse.json(
        { data },
        {
          headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
          },
        }
      );
    }

    // Default: fetch all site data
    const [home, about, careers, contact, settings, services] = await Promise.all([
      serverClient.fetch(HOME_PAGE_QUERY),
      serverClient.fetch(ABOUT_PAGE_QUERY),
      serverClient.fetch(CAREERS_PAGE_QUERY),
      serverClient.fetch(CONTACT_PAGE_QUERY),
      serverClient.fetch(SITE_SETTINGS_QUERY),
      serverClient.fetch(SERVICES_QUERY),
    ]);

    return NextResponse.json(
      { home, about, careers, contact, settings, services },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching Sanity content via server client:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
