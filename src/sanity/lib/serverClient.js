import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env.js'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // Public pages use published content; the CDN is faster and appropriate here.
  useCdn: true,
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
