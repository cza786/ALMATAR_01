import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// 1. Manually parse .env.local if dotenv is not present
function loadEnv() {
  const envPath = path.join(rootDir, '.env.local')
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim()
        const val = trimmed.slice(eqIdx + 1).trim()
        if (!process.env[key]) {
          process.env[key] = val
        }
      }
    }
  }
}
loadEnv()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kiftfbv2'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN

if (!token) {
  console.error('❌ Error: SANITY_API_WRITE_TOKEN or SANITY_API_READ_TOKEN is missing in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

console.log(`\n🚀 Connected to Sanity Project: ${projectId} (Dataset: ${dataset})`)
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

// Image asset cache: filePath -> assetDoc
const assetCache = {}

async function uploadImage(relPath) {
  if (!relPath) return null
  const cleanPath = relPath.startsWith('/') ? relPath.slice(1) : relPath
  // strip any query params like ?v=2
  const normalizedRelPath = cleanPath.split('?')[0]
  const fullPath = path.join(rootDir, 'public', normalizedRelPath)

  if (assetCache[normalizedRelPath]) {
    return assetCache[normalizedRelPath]
  }

  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠️ Image file not found: ${fullPath}`)
    return null
  }

  try {
    const filename = path.basename(fullPath)
    console.log(`  📤 Uploading image asset: ${filename}...`)
    const readStream = fs.createReadStream(fullPath)
    const asset = await client.assets.upload('image', readStream, {
      filename,
    })

    const imageRef = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
    assetCache[normalizedRelPath] = imageRef
    console.log(`  ✅ Uploaded asset [${asset._id}] for ${filename}`)
    return imageRef
  } catch (err) {
    console.error(`  ❌ Failed to upload ${normalizedRelPath}:`, err.message)
    return null
  }
}

async function seed() {
  console.log('\n[1/6] ⚙️  Seeding Global Site Settings...')
  const logoAsset = await uploadImage('images/almatar_logo_raw.png')

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'ALMATAR Energy & Oilfield Services',
    logo: logoAsset,
    descriptionEn: 'Premier provider of technical oilfield solutions, well intervention, drilling fluids, and QHSE services across Syria and the Middle East.',
    descriptionAr: 'المزود الرائد للحلول التقنية لحقول النفط، وخدمات الآبار، وسوائل الحفر، وخدمات الصحة والسلامة والبيئة في سوريا والشرق الأوسط.',
    contactEmail: 'info@almatar.com',
    contactPhone: '00963 93 982 2415',
    secondaryPhone: '00963 93 140 7723',
    addressEn: 'Damascus Headquarters, Syrian Arab Republic',
    addressAr: 'المقر الرئيسي: دمشق، الجمهورية العربية السورية',
    socialLinks: [
      { _key: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com' },
      { _key: 'whatsapp', platform: 'WhatsApp', url: 'https://wa.me/963939822415' }
    ]
  })
  console.log('✅ Site Settings seeded successfully.')

  console.log('\n[2/6] 🏠 Seeding Home Page...')
  const slide1Img = await uploadImage('images/hero_drilling_rig.png')
  const slide2Img = await uploadImage('images/service_coiled_tubing.png')
  const slide3Img = await uploadImage('images/service_drilling_fluids.png')
  const slide4Img = await uploadImage('images/service_construction.png')
  const slide5Img = await uploadImage('images/service_wellhead.png')
  const slide6Img = await uploadImage('images/qhse_safety.png')
  const slide7Img = await uploadImage('images/careers_engineers_hero.png')
  const introImg = await uploadImage('images/about_field_operations.png')

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home Page',
    heroSlides: [
      {
        _key: 's1',
        badgeEn: 'Corporate Overview',
        badgeAr: 'نظرة عامة',
        titleEn: 'Excellence in Oilfield & Energy Engineering',
        titleAr: 'الريادة والتميز في هندسة حقول النفط والطاقة',
        subtitleEn: 'Comprehensive upstream solutions, well intervention, and strategic drilling infrastructure.',
        subtitleAr: 'حلول متكاملة لعمليات الاستكشاف والإنتاج، وتدخل الآبار، والبنية التحتية الاستراتيجية للحفر.',
        image: slide1Img,
        link: '/about'
      },
      {
        _key: 's2',
        badgeEn: 'Well Services',
        badgeAr: 'خدمات الآبار',
        titleEn: 'Precision Well Services & Coiled Tubing',
        titleAr: 'خدمات الآبار الدقيقة والأنابيب الملتفة',
        subtitleEn: 'High-pressure stimulation, nitrogen pumping, and specialized wireline operations.',
        subtitleAr: 'عمليات التحفيز عالي الضغط، وضخ النيتروجين، وعمليات السلك المتخصصة.',
        image: slide2Img,
        link: '/well-services'
      },
      {
        _key: 's3',
        badgeEn: 'Drilling Fluids',
        badgeAr: 'سوائل الحفر',
        titleEn: 'Advanced Drilling Fluids & Chemical Solutions',
        titleAr: 'سوائل حفر متطورة وحلول كيميائية متقدمة',
        subtitleEn: 'Engineered mud systems designed for maximum borehole stability and reservoir protection.',
        subtitleAr: 'أنظمة طين هندسية مصممة لتحقيق أقصى استقرار لجدار البئر وحماية المكمن النفطي.',
        image: slide3Img,
        link: '/drilling-fluids'
      },
      {
        _key: 's4',
        badgeEn: 'Civil & Construction',
        badgeAr: 'الإنشاءات والبنى التحتية',
        titleEn: 'Energy Construction & Field Infrastructure',
        titleAr: 'الإنشاءات البترولية والبنية التحتية للحقول',
        subtitleEn: 'Rig site construction, access roads, pipeline civil works, and modular camp facilities.',
        subtitleAr: 'إنشاء مواقع الحفارات، والطرق الميدانية، والأعمال المدنية لخطوط الأنابيب، والمخيمات الميدانية.',
        image: slide4Img,
        link: '/construction'
      },
      {
        _key: 's5',
        badgeEn: 'Trading & Supply',
        badgeAr: 'التوريد والتجارة',
        titleEn: 'Industrial Trading & Technical Procurement',
        titleAr: 'التجارة الصناعية والتوريدات الفنية',
        subtitleEn: 'Certified API wellheads, valves, OCTG casing, drill pipes, and specialized equipment.',
        subtitleAr: 'رؤوس آبار معتمدة API، وصمامات، ومواسير تغليف وأنابيب حفر، ومعدات متخصصة.',
        image: slide5Img,
        link: '/trading'
      },
      {
        _key: 's6',
        badgeEn: 'QHSE & Integrity',
        badgeAr: 'السلامة والجودة والبيئة',
        titleEn: 'Zero-Harm QHSE Standards & Rig Inspection',
        titleAr: 'معايير صارمة للصحة والسلامة وفحص الحفارات',
        subtitleEn: 'Uncompromising commitment to workforce safety, environmental compliance, and asset integrity.',
        subtitleAr: 'التزام لا هوادة فيه بسلامة الكوادر، والامتثال البيئي، وسلامة الأصول التشغيلية.',
        image: slide6Img,
        link: '/qhse'
      },
      {
        _key: 's7',
        badgeEn: 'Careers',
        badgeAr: 'الوظائف والمهن',
        titleEn: 'Build Your Future in Oil & Gas Engineering',
        titleAr: 'ابنِ مستقبلك المهني في هندسة النفط والغاز',
        subtitleEn: 'Join our multidisciplinary engineering team driving energy infrastructure forward.',
        subtitleAr: 'انضم إلى نخبة المهندسين والخبراء لقيادة مستقبل البنية التحتية للطاقة.',
        image: slide7Img,
        link: '/careers'
      }
    ],
    introEyebrowEn: 'EXCELLENCE & DEDICATION',
    introEyebrowAr: 'التميز والتفاني',
    introTitleEn: 'Integrated Oilfield Solutions Across the Entire Energy Value Chain',
    introTitleAr: 'حلول متكاملة لقطاع النفط والغاز عبر سلسلة القيمة بالكامل',
    introDescEn: 'ALMATAR delivers field-proven engineering services, state-of-the-art intervention equipment, and specialized technical teams to maximize reservoir productivity safely and sustainably.',
    introDescAr: 'تقدم شركة المطر خدمات هندسية ميدانية معتمدة، وأحدث معدات التدخل للآبار، وفرقاً فنية متخصصة لرفع إنتاجية المكامن النفطية بأعلى معايير الأمان والاستدامة.',
    introImage: introImg,
    stats: [
      { _key: 'st1', value: 15, prefix: '+', suffix: ' Years', labelEn: 'Operational Experience', labelAr: 'سنوات من الخبرة الميدانية' },
      { _key: 'st2', value: 100, prefix: '', suffix: '%', labelEn: 'Syrian Territory Coverage', labelAr: 'تغطية شاملة للمواقع السورية' },
      { _key: 'st3', value: 99.8, prefix: '', suffix: '%', labelEn: 'Safety & QHSE Compliance', labelAr: 'نسبة الامتثال لمعايير السلامة' },
      { _key: 'st4', value: 50, prefix: '+', suffix: ' Projects', labelEn: 'Successfully Executed', labelAr: 'مشروع منجز بنجاح' }
    ]
  })
  console.log('✅ Home Page seeded successfully.')

  console.log('\n[3/6] 🏢 Seeding About Us Page...')
  const aboutBanner = await uploadImage('images/banner_about_corporate.png')

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: 'About Us Page',
    bannerImage: aboutBanner,
    eyebrowEn: 'CORPORATE OVERVIEW',
    eyebrowAr: 'نظرة عامة على الشركة',
    pageTitleEn: 'Powering Energy Operations With Innovation & Reliability',
    pageTitleAr: 'دعم عمليات الطاقة بالابتكار والموثوقية العالية',
    visionTitleEn: 'Our Corporate Vision',
    visionTitleAr: 'رؤيتنا الاستراتيجية',
    visionDescEn: 'To be the benchmark indigenous oilfield services enterprise in Syria and the regional energy corridor, delivering unmatched engineering quality and technical integrity.',
    visionDescAr: 'أن نكون الشركة الرائدة والنموذج المرجعي في خدمات حقول النفط في سوريا والمنطقة، من خلال تقديم أعلى مستويات الجودة الهندسية والسلامة الفنية.',
    missionTitleEn: 'Our Operational Mission',
    missionTitleAr: 'رسالتنا التشغيلية',
    missionDescEn: 'Empowering operators to unlock subterranean potential through rapid mobilization, precision intervention tools, locally anchored expertise, and uncompromising QHSE standards.',
    missionDescAr: 'تمكين شركات الاستكشاف والإنتاج من تحقيق أقصى كفاءة استخراجية من خلال سرعة الاستجابة، وأحدث معدات التدخل، والخبرات المحلية المؤهلة، مع الالتزام التام بمعايير الجودة والسلامة.',
    operationsImage: introImg,
    syriaTitleEn: 'Syria Strategic Value & National Energy Independence',
    syriaTitleAr: 'الأهمية الاستراتيجية في سوريا وتعزيز قطاع الطاقة الوطني',
    syriaDescEn: 'Rooted with extensive operational knowledge across Syrian oil and gas basins, ALMATAR provides direct logistics, technical field teams, and robust infrastructure to support continuous energy production.',
    syriaDescAr: 'بفضل خبرتنا الميدانية الواسعة في مختلف الأحواض النفطية والغازية السورية، توفر شركة المطر خدمات لوجستية مباشرة وفرقاً فنية وبنية تحتية متطورة لدعم استمرارية الإنتاج الوطني.'
  })
  console.log('✅ About Us Page seeded successfully.')

  console.log('\n[4/6] 💼 Seeding Careers Page...')
  const careersBanner = await uploadImage('images/careers_engineers_hero.png')
  const cultureImg = await uploadImage('images/careers_team_walking.png')

  await client.createOrReplace({
    _id: 'careersPage',
    _type: 'careersPage',
    title: 'Careers Page',
    bannerImage: careersBanner,
    cultureImage: cultureImg,
    eyebrowEn: 'JOIN OUR TEAM',
    eyebrowAr: 'انضم إلى فريقنا',
    pageTitleEn: 'Build Your Career at the Forefront of Energy Engineering',
    pageTitleAr: 'ابنِ مسيرتك المهنية في طليعة هندسة الطاقة',
    pageDescEn: 'At ALMATAR, we invest in our people, cultivate specialized engineering leadership, and foster an environment where technical excellence thrives.',
    pageDescAr: 'في شركة المطر، نستثمر في كوادرنا البشرية ونبني قيادات هندسية متخصصة في بيئة تشجع على التميز والابتكار المستمر.',
    openPositions: [
      {
        _key: 'pos1',
        titleEn: 'Senior Well Intervention Engineer',
        titleAr: 'مهندس أول تدخل آبار',
        departmentEn: 'Well Services',
        departmentAr: 'خدمات الآبار',
        locationEn: 'Field Operations / Damascus',
        locationAr: 'العمليات الميدانية / دمشق',
        typeEn: 'Full-time',
        typeAr: 'دوام كامل',
        descriptionEn: 'Responsible for overseeing high-pressure coiled tubing and stimulation field programs.',
        descriptionAr: 'مسؤول عن الإشراف على برامج الأنابيب الملتفة والتحفيز عالي الضغط في الحقول النفطية.'
      },
      {
        _key: 'pos2',
        titleEn: 'Drilling Fluids Chemist & Mud Specialist',
        titleAr: 'أخصائي كيمياء وسوائل حفر',
        departmentEn: 'Drilling Fluids',
        departmentAr: 'سوائل الحفر',
        locationEn: 'Central Laboratory & Rig Site',
        locationAr: 'المخبر المركزي ومواقع الحفر',
        typeEn: 'Full-time',
        typeAr: 'دوام كامل',
        descriptionEn: 'Formulation, quality testing, and rheology control for water and oil-based drilling fluid systems.',
        descriptionAr: 'تصميم واختبار جودة وضبط لزوجة أنظمة سوائل الحفر المائية والزيتية.'
      }
    ]
  })
  console.log('✅ Careers Page seeded successfully.')

  console.log('\n[5/6] 📞 Seeding Contact Page...')
  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    title: 'Contact Page',
    bannerImage: aboutBanner,
    eyebrowEn: 'GET IN TOUCH',
    eyebrowAr: 'تواصل معنا',
    pageTitleEn: 'Connect With Our Technical & Procurement Team',
    pageTitleAr: 'تواصل مع فريقنا الهندسي والتجاري',
    descEn: 'Whether you require technical field consultation, equipment procurement, or a formal quote, our team is ready to assist.',
    descAr: 'سواء كنت بحاجة إلى استشارة هندسية ميدانية، أو توريد معدات، أو عرض أسعار فني، فإن فريقنا جاهز لخدمتكم.',
    quoteTitleEn: 'REQUEST A TECHNICAL QUOTATION',
    quoteTitleAr: 'طلب عرض أسعار فني',
    quoteDescEn: 'Provide your project requirements below and our lead engineers will prepare a detailed proposal.',
    quoteDescAr: 'يرجى تزويدنا بتفاصيل مشروعكم وسيقوم كبار مهندسينا بإعداد العرض الفني المناسب.',
    officeAddressEn: 'ALMATAR Headquarters, Damascus, Syrian Arab Republic',
    officeAddressAr: 'المقر الرئيسي لشركة المطر، دمشق، الجمهورية العربية السورية',
    whatsappNumber: '00963 93 982 2415',
    phoneNumbers: ['00963 93 982 2415', '00963 93 140 7723', '00963 52 426 915'],
    emailAddresses: ['info@almatar.com', 'procurement@almatar.com'],
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106465.25997621422!2d36.2307289!3d33.5138073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e3940!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s'
  })
  console.log('✅ Contact Page seeded successfully.')

  console.log('\n[6/6] 🛠️ Seeding Core Services...')
  const servicesList = [
    {
      _id: 'service-coiled-tubing',
      titleEn: 'Coiled Tubing & Well Intervention',
      titleAr: 'الأنابيب الملتفة والتدخل في الآبار',
      slug: { _type: 'slug', current: 'coiled-tubing-services' },
      category: 'well-services',
      order: 1,
      shortDescriptionEn: 'Continuous tubing operations for wellbore cleanout, acid stimulation, nitrogen kickoff, and fishing.',
      shortDescriptionAr: 'عمليات الأنابيب المستمرة لتنظيف قعر البئر، والتحفيز بالأحماض، وتنشيط الآبار بالنيتروجين.',
      image: slide2Img,
      features: [
        { _key: 'f1', featureEn: 'Real-time downhole monitoring & depth accuracy', featureAr: 'مراقبة مستمرة للضغط والعمق بدقة عالية' },
        { _key: 'f2', featureEn: 'High-pressure pumping capability up to 10,000 PSI', featureAr: 'قدرة ضخ عالية تصل إلى 10,000 رطل/بوصة مربعة' },
        { _key: 'f3', featureEn: 'Rapid mobilization units across all fields', featureAr: 'وحدات سريعة الاستجابة والتحرك الميداني' }
      ]
    },
    {
      _id: 'service-drilling-fluids',
      titleEn: 'Drilling Fluids Engineering & Chemical Systems',
      titleAr: 'هندسة سوائل الحفر والأنظمة الكيميائية',
      slug: { _type: 'slug', current: 'drilling-fluids-engineering' },
      category: 'drilling-fluids',
      order: 2,
      shortDescriptionEn: 'Formulation and continuous management of water-based and oil-based drilling mud systems.',
      shortDescriptionAr: 'تصميم وإدارة مستمرة لأنظمة طين الحفر المائي والزيتي لضمان استقرار البئر.' ,
      image: slide3Img,
      features: [
        { _key: 'f1', featureEn: 'Shale inhibition and thermal stability', featureAr: 'تثبيط تفكك الصخور الطينية واستقرار حراري ممتاز' },
        { _key: 'f2', featureEn: 'On-site mobile testing laboratories', featureAr: 'مخابر متنقلة للفحص الفوري في موقع الحفارة' },
        { _key: 'f3', featureEn: 'Eco-friendly additives meeting strict QHSE standards', featureAr: 'إضافات صديقة للبيئة مطابقة لمعايير السلامة' }
      ]
    },
    {
      _id: 'service-trading-supply',
      titleEn: 'Oilfield Equipment & Industrial Trading',
      titleAr: 'معدات حقول النفط والتجارة الصناعية',
      slug: { _type: 'slug', current: 'oilfield-equipment-trading' },
      category: 'trading',
      order: 3,
      shortDescriptionEn: 'Global procurement of API 6A/16A wellhead components, valves, OCTG casing, and drilling tools.',
      shortDescriptionAr: 'توريد معتمد لرؤوس الآبار والمحابس ومواسير التغليف وأدوات الحفر المتقدمة.',
      image: slide5Img,
      features: [
        { _key: 'f1', featureEn: 'Fully certified API standard manufacturing', featureAr: 'تصنيع معتمد وفق معايير معهد البترول الأمريكي API' },
        { _key: 'f2', featureEn: 'Expedited customs clearance and field delivery', featureAr: 'تخليص جمركي سريع وتسليم مباشر إلى المواقع' }
      ]
    }
  ]

  for (const s of servicesList) {
    await client.createOrReplace({
      _type: 'service',
      ...s
    })
    console.log(`  ✅ Seeded service: ${s.titleEn}`)
  }

  console.log('\n🎉 ALL SANITY CONTENT & IMAGES SEEDED SUCCESSFULLY!')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('👉 Open your Studio at http://localhost:3333 to view and edit your live data.\n')
}

seed().catch((err) => {
  console.error('❌ Migration failed:', err)
  process.exit(1)
})
