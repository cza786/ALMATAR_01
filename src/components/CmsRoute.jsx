'use client'

import React from 'react'
import { useSanityContent } from '@/sanity/lib/fetchData'
import { SERVICE_PAGE_QUERY, WEBSITE_PAGE_QUERY } from '@/sanity/lib/queries'
import WebsitePageRenderer from './WebsitePageRenderer'

export default function CmsRoute({ pageKey, serviceKey, fallback }) {
  const data = useSanityContent(
    serviceKey ? 'servicePage' : 'websitePage',
    serviceKey ? SERVICE_PAGE_QUERY : WEBSITE_PAGE_QUERY,
    serviceKey ? { routeKey: serviceKey } : { pageKey },
  )
  return data && data.sections && data.sections.length > 2 ? (
    <WebsitePageRenderer data={data} />
  ) : (
    React.isValidElement(fallback)
      ? React.cloneElement(fallback, { cmsData: data })
      : fallback
  )
}

