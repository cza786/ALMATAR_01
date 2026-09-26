'use client'

import { useSanityContent } from '@/sanity/lib/fetchData'
import { SERVICE_PAGE_QUERY, WEBSITE_PAGE_QUERY } from '@/sanity/lib/queries'
import WebsitePageRenderer from './WebsitePageRenderer'

export default function CmsRoute({ pageKey, serviceKey, fallback }) {
  const data = useSanityContent(
    serviceKey ? 'servicePage' : 'websitePage',
    serviceKey ? SERVICE_PAGE_QUERY : WEBSITE_PAGE_QUERY,
    serviceKey ? { routeKey: serviceKey } : { pageKey },
  )
  return data ? <WebsitePageRenderer data={data} /> : fallback
}
