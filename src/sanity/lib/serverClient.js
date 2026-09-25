import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env.js'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // The API route is an uncached live-content fallback, so read directly from
  // Sanity instead of allowing the CDN to serve an older published revision.
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

// Use this client only for server-side mutations. The token must belong to a
// Sanity API token with permission to create contactSubmission documents.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})
