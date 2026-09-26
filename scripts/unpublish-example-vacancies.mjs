import fs from 'node:fs'
import { createClient } from '@sanity/client'

for (const line of fs.readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
  const index = line.indexOf('=')
  if (index > 0 && !process.env[line.slice(0, index)]) {
    process.env[line.slice(0, index)] = line.slice(index + 1)
  }
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const titles = ['Drilling Engineer', 'HSE Officer', 'Field Operations Supervisor', 'Procurement Specialist', 'Finance Analyst', 'HR Coordinator']
const jobs = await client.fetch('*[_type == "job" && titleEn in $titles && !(_id in path("drafts.**"))]', { titles })
console.log('Matching published vacancies:', jobs.map(({ _id, titleEn, isOpen }) => ({ _id, titleEn, isOpen })))

if (process.argv.includes('--apply') && jobs.length) {
  if (!process.env.SANITY_API_WRITE_TOKEN) throw new Error('SANITY_API_WRITE_TOKEN is required')
  let transaction = client.transaction()
  for (const job of jobs) {
    const { _id, _rev, _createdAt, _updatedAt, ...fields } = job
    transaction = transaction.createIfNotExists({ ...fields, _id: `drafts.${_id}`, isOpen: false }).delete(_id)
  }
  await transaction.commit()
  console.log('Unpublished matching vacancies; copies remain in Sanity drafts.')
}

const response = await fetch(`https://almatar-oil.com/api/sanity?type=careers&t=${Date.now()}`, { cache: 'no-store' })
console.log('Live careers API status:', response.status)
if (response.ok) {
  const { data } = await response.json()
  console.log('Live vacancy listing:', data?.jobs?.map(({ _id, titleEn, isOpen }) => ({ _id, titleEn, isOpen })))
}
