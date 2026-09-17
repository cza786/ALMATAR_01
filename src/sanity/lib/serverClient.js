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
