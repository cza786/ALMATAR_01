import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'

const rootDir = path.resolve('.')
const envPath = path.join(rootDir, '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const index = line.indexOf('=')
    if (index > 0 && !process.env[line.slice(0, index)]) process.env[line.slice(0, index)] = line.slice(index + 1)
  }
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kiftfbv2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

const data = await client.fetch(`{
  "careersPage": *[_type == "careersPage"][0],
  "jobCount": count(*[_type == "job"]),
  "openJobCount": count(*[_type == "job" && isOpen != false]),
  "jobs": *[_type == "job"]{ _id, titleEn, titleAr, isOpen }
}`)

console.log(JSON.stringify(data, null, 2))
