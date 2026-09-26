import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'

const rootDir = path.resolve('.')

for (const line of fs.readFileSync(path.join(rootDir, '.env.local'), 'utf8').split(/\r?\n/)) {
  const index = line.indexOf('=')
  if (index > 0 && !process.env[line.slice(0, index)]) process.env[line.slice(0, index)] = line.slice(index + 1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kiftfbv2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

if (!process.env.SANITY_API_WRITE_TOKEN) throw new Error('SANITY_API_WRITE_TOKEN is required')

async function closeAllJobs() {
  const jobs = await client.fetch('*[_type == "job"]{_id, titleEn, isOpen}')
  console.log(`Found ${jobs.length} job documents in Sanity. Updating isOpen to false...`)
  
  for (const job of jobs) {
    await client.patch(job._id).set({ isOpen: false }).commit()
    console.log(`Updated job ${job.titleEn} (${job._id}) -> isOpen: false`)
  }

  const audit = await client.fetch(`{
    "total": count(*[_type == "job"]),
    "open": count(*[_type == "job" && isOpen == true]),
    "closed": count(*[_type == "job" && isOpen == false])
  }`)
  console.log('Sanity Vacancy Audit:', JSON.stringify(audit, null, 2))
}

closeAllJobs().catch(console.error)
