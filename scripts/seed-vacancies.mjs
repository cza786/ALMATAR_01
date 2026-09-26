import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'

const rootDir = fs.existsSync(path.resolve('.env.local')) ? path.resolve('.') : path.resolve('..')
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

const whyItems = [
  { titleEn: 'GROW YOUR CAREER', titleAr: 'طور مسارك المهني', descEn: 'Development programs and on-the-job training to help you reach your full potential.', descAr: 'برامج تطوير وتدريب عملي لمساعدتك على تحقيق أقصى إمكانياتك.' },
  { titleEn: 'WORK SAFELY', titleAr: 'بيئة عمل آمنة', descEn: 'We prioritise the health and safety of our people in everything we do.', descAr: 'نضع صحة وسلامة كوادرنا على رأس أولوياتنا في كافة مواقع العمل.' },
  { titleEn: 'BE PART OF A TEAM', titleAr: 'كن جزءاً من فريق', descEn: 'Collaborate with experienced professionals and build lasting relationships.', descAr: 'تعاون مع خبراء ومهندسين متخصصين وابنِ علاقات مهنية مستدامة.' },
  { titleEn: 'MAKE AN IMPACT', titleAr: 'اصنع أثراً ملموساً', descEn: 'Contribute to reliable energy solutions that power communities worldwide.', descAr: 'ساهم في تقديم حلول طاقة موثوقة تمكن المكتسبات التنموية.' },
  { titleEn: 'OUR VALUES', titleAr: 'قيمنا الراسخة', descEn: 'Integrity, innovation and excellence are at the core of our culture and every decision we make.', descAr: 'النزاهة، الابتكار والتميز هي جوهر ثقافتنا وركيزة كافة قراراتنا.' },
]

const benefitsItems = [
  { titleEn: 'Competitive Compensation', titleAr: 'تعويضات ومكافآت تنافسية', descEn: 'We offer competitive salaries and performance-based rewards.', descAr: 'نقدم رواتب مجزية وحوافز مرتبطة بالأداء والإنجاز.' },
  { titleEn: 'Training & Development', titleAr: 'التدريب والتطوير المستمر', descEn: 'Continuous learning opportunities to enhance your skills and grow.', descAr: 'فرص تعليم مستمرة لتعزيز مهاراتك الفنية والقيادية.' },
  { titleEn: 'Safe & Supportive Work Environment', titleAr: 'بيئة عمل آمنة وداعمة', descEn: 'We are committed to providing a safe, inclusive and respectful workplace.', descAr: 'نلتزم بتوفير مكان عمل آمن، محترم وشامل للجميع.' },
  { titleEn: 'Career Growth Opportunities', titleAr: 'فرص الترقية والنمو', descEn: 'Clear career paths and opportunities to advance within the company.', descAr: 'مسارات مهنية واضحة وفرص حقيقية للترقي داخل الشركة.' },
  { titleEn: 'Performance Recognition', titleAr: 'تقدير الأداء والإنجاز', descEn: 'We recognise and reward the dedication and achievements of our people.', descAr: 'نحتفي بتفاني وإنجازات فريقنا ونكافئ التميز بشكل مستمر.' },
]

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
  whyWorkEyebrowEn: 'WHY WORK WITH ALMATAR?',
  whyWorkEyebrowAr: 'لماذا تعمل مع المطر؟',
  whyWorkHeadingEn: "More Than a Job, It's a Purpose",
  whyWorkHeadingAr: 'أكثر من مجرد وظيفة، إنها رسالة وهدف',
  whyWorkLeadEn: 'At ALMATAR Petroleum Services, we offer a challenging work environment, continuous learning opportunities and the chance to grow your career while contributing to the energy that drives the world.',
  whyWorkLeadAr: 'في شركة المطر للخدمات البترولية، نوفر بيئة عمل محفزة وفرص تعلم وتطوير مستمرة لنمو مسارك المهني مع المساهمة في قطاع الطاقة الحيوي.',
  cultureImage: heroImage,
  whyItems,
  benefitsEyebrowEn: 'EMPLOYEE BENEFITS',
  benefitsEyebrowAr: 'مزايا الموظفين',
  benefitsItems,
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
  ctaEyebrowEn: 'READY TO MAKE A DIFFERENCE?',
  ctaEyebrowAr: 'هل أنت جاهز لصناعة الفارق؟',
  ctaHeadingEn: 'Join ALMATAR and be part of a team that powers progress.',
  ctaHeadingAr: 'انضم إلى المطر وكن جزءاً من فريق يقود التقدم والتميز.',
  ctaButtonEn: 'SUBMIT YOUR CV',
  ctaButtonAr: 'أرسل سيرتك الذاتية',
}).commit()

for (let index = 0; index < jobs.length; index += 1) {
  const source = jobs[index]
  const existing = await client.fetch('*[_type == "job" && slug.current == $slug && !(_id in path("drafts.**"))][0]{_id}', { slug: source.slug })
  const document = {
    ...source,
    _type: 'job',
    slug: { _type: 'slug', current: source.slug },
    isOpen: true,
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
