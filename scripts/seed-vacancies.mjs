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

const dummyJobsSource = fs.readFileSync(path.join(rootDir, 'src/data/dummyJobs.js'), 'utf8')
const dummyJobsModule = await import(`data:text/javascript;base64,${Buffer.from(dummyJobsSource).toString('base64')}`)
const jobs = dummyJobsModule.DUMMY_JOBS

async function uploadImage(relativePath) {
  const fullPath = path.join(rootDir, 'public', relativePath)
  const asset = await client.assets.upload('image', fs.createReadStream(fullPath), { filename: path.basename(fullPath) })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

const heroImage = await uploadImage('images/careers_engineers_hero.webp')
const vacancyLocationEn = 'Syria, Al-Hasakah, Qamishli'
const vacancyLocationAr = 'سوريا، الحسكة، القامشلي'

await client.createIfNotExists({ _id: 'careersPage', _type: 'careersPage', title: 'Careers Page' })
await client.patch('careersPage').set({
  bannerImage: heroImage,
  eyebrowEn: 'PEOPLE · GROWTH · INNOVATION',
  eyebrowAr: 'الأفراد · النمو · الابتكار',
  pageTitleEn: 'Build Your Future With ALMATAR',
  pageTitleAr: 'ابنِ مستقبلك مع المطار',
  pageDescEn: 'Join a team where expertise, ambition and teamwork create real progress.',
  pageDescAr: 'انضم إلى فريق تصنع فيه الخبرة والطموح والعمل الجماعي تقدماً حقيقياً.',
  heroButtonEn: 'Explore vacancies',
  heroButtonAr: 'استكشف الوظائف',
  heroSideTextEn: 'PEOPLE\nGROWTH\nINNOVATION\nTHE FUTURE',
  heroSideTextAr: 'الأفراد\nالنمو\nالابتكار\nالمستقبل',
  vacanciesEyebrowEn: 'JOIN THE TEAM',
  vacanciesEyebrowAr: 'الفرص المتاحة',
  vacanciesTitleEn: 'Current Vacancies',
  vacanciesTitleAr: 'الوظائف الشاغرة الحالية',
  vacanciesDescEn: 'Find your next opportunity with ALMATAR.',
  vacanciesDescAr: 'اكتشف دورك القادم مع المطار.',
  openLabelEn: 'OPEN',
  openLabelAr: 'مفتوحة',
  closedLabelEn: 'CLOSED',
  closedLabelAr: 'مغلقة',
  viewDetailsEn: 'View Details',
  viewDetailsAr: 'عرض التفاصيل',
  postedLabelEn: 'Posted',
  postedLabelAr: 'نُشرت',
  emptyMessageEn: 'There are no vacancies at this time.',
  emptyMessageAr: 'لا توجد وظائف شاغرة حالياً.',
}).commit()

for (let index = 0; index < jobs.length; index += 1) {
  const source = jobs[index]
  const existing = await client.fetch('*[_type == "job" && slug.current == $slug && !(_id in path("drafts.**"))][0]{_id}', { slug: source.slug })
  const document = {
    ...source,
    _type: 'job',
    slug: { _type: 'slug', current: source.slug },
    locationEn: vacancyLocationEn,
    locationAr: vacancyLocationAr,
    heroImage,
    applicationEmail: 'hr@almatar.com',
    order: index + 1,
  }
  delete document._id

  if (existing?._id) {
    await client.patch(existing._id).set(document).commit()
    console.log(`Updated vacancy: ${source.titleEn}`)
  } else {
    await client.create(document)
    console.log(`Created vacancy: ${source.titleEn}`)
  }
}

const audit = await client.fetch(`{
  "total": count(*[_type == "job" && !(_id in path("drafts.**"))]),
  "bilingual": count(*[_type == "job" && defined(titleEn) && defined(titleAr) && defined(descriptionEn) && defined(descriptionAr) && !(_id in path("drafts.**"))]),
  "open": count(*[_type == "job" && isOpen == true && !(_id in path("drafts.**"))]),
  "closed": count(*[_type == "job" && isOpen == false && !(_id in path("drafts.**"))])
}`)
console.log(`Vacancy import complete: ${JSON.stringify(audit)}`)
