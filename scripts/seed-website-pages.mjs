import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __filename = fileURLToPath(import.meta.url)
const rootDir = path.resolve(path.dirname(__filename), '..')

function loadEnv() {
  const envPath = path.join(rootDir, '.env.local')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const index = trimmed.indexOf('=')
    if (index > 0 && !process.env[trimmed.slice(0, index)]) {
      process.env[trimmed.slice(0, index)] = trimmed.slice(index + 1)
    }
  }
}

loadEnv()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kiftfbv2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
})

const uploaded = new Map()

async function uploadImage(relativePath) {
  if (!relativePath) return null
  if (uploaded.has(relativePath)) return uploaded.get(relativePath)

  const fullPath = path.join(rootDir, 'public', relativePath.replace(/^\//, ''))
  if (!fs.existsSync(fullPath)) {
    console.warn(`Missing local image: ${relativePath}`)
    uploaded.set(relativePath, null)
    return null
  }

  const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
    filename: path.basename(fullPath),
  })
  const image = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  uploaded.set(relativePath, image)
  return image
}

function section(key, title, description, imagePath, bullets = [], cards = []) {
  return {
    _key: key,
    sectionKey: key,
    titleEn: title,
    descriptionEn: description,
    image: imagePath ? { __localPath: imagePath } : undefined,
    imageAltEn: title,
    bulletsEn: bullets,
    cards: cards.map(([cardTitle, cardDescription, cardImage]) => ({
      _key: `${key}-${cardTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
      titleEn: cardTitle,
      descriptionEn: cardDescription,
      image: cardImage ? { __localPath: cardImage } : undefined,
    })),
  }
}

const image = (name) => `images/policies-photo/services/${name}`

const pages = [
  {
    key: 'services', title: 'Integrated Oilfield Services', eyebrow: 'ALMATAR PETROLEUM SERVICES',
    description: 'Specialized solutions for every stage of your oilfield operation.',
    hero: 'images/banner_well_services_hero.webp',
    sections: [section('capabilities', 'Integrated Field Services', 'Reliable technical solutions, experienced people and field-ready support for every stage of your operation.', 'images/banner_well_services_hero.webp')],
  },
  {
    key: 'well-services', title: 'Well Intervention Services', eyebrow: 'WELL SERVICES',
    description: 'Field-proven well intervention, workover and production-support solutions.',
    hero: image('drilling_workover/well-intervention-hero-clear.webp'),
    sections: [section('capability', 'Well Intervention & Workover', 'Experienced teams and dependable equipment for safe, efficient well operations.', image('drilling_workover/field-operations-clear.webp'), ['Well intervention operations', 'Workover and rig support', 'Wellbore optimization'])],
  },
  {
    key: 'drilling-workover', title: 'Drilling & Workover Services', eyebrow: 'DRILLING & WORKOVER',
    description: 'Integrated drilling, workover and well construction support for demanding field operations.',
    hero: image('drilling_workover/01_drilling_workover_hero.webp'),
    sections: [section('delivery', 'Integrated Drilling Support', 'From well planning and construction through field execution and verification.', image('drilling_workover/02_integrated_drilling_rig.webp'), ['Drilling support', 'Workover operations', 'Directional drilling', 'Casing and cementing support'])],
  },
  {
    key: 'drilling-fluids', title: 'Drilling Fluids & Chemistry', eyebrow: 'DRILLING & FLUIDS',
    description: 'Hole-quality, mud-chemistry and fluid-testing solutions for stable, efficient drilling.',
    hero: 'images/service_drilling_fluids.webp',
    sections: [section('chemistry', 'Drilling Fluids Engineering', 'Formulation, monitoring and optimization of drilling-fluid systems for changing well conditions.', 'images/service_drilling_fluids.webp', ['Water-based and oil-based systems', 'On-site fluid testing', 'Chemical treatment and optimization'])],
  },
  {
    key: 'coiled-tubing', title: 'Coiled Tubing & Nitrogen Pumping', eyebrow: 'WELL SERVICES',
    description: 'Efficient well intervention solutions for clean-up, stimulation, unloading and production recovery.',
    hero: image('almatar_coiled_tubing_photos/01_clean_hero_coiled_tubing.webp'),
    sections: [section('field-capability', 'Reliable Coiled Tubing Solutions', 'Experienced field teams, dependable equipment and disciplined execution for safer and more productive well operations.', image('almatar_coiled_tubing_photos/02_nitrogen_lifting.webp'), ['Well clean-up', 'Nitrogen pumping', 'Stimulation support'])],
  },
  {
    key: 'stimulation-fracturing', title: 'Stimulation & Fracturing', eyebrow: 'WELL SERVICES',
    description: 'Engineered pumping and stimulation programs to improve well productivity and reservoir performance.',
    hero: image('almatar_stimulation_all_photos/01_hero_stimulation_fracturing.webp'),
    sections: [section('solutions', 'Reservoir Stimulation Solutions', 'Fit-for-purpose stimulation, pumping and fracturing support for conventional and challenging wells.', image('almatar_stimulation_all_photos/02_reservoir_cross_section.webp'), ['Acid stimulation', 'Fracturing support', 'Pumping and treatment design'])],
  },
  {
    key: 'zonal-isolation-cementing', title: 'Zonal Isolation & Cementing', eyebrow: 'OUR SERVICES',
    description: 'Reliable wellbore isolation for safer, more productive and longer-lasting wells.',
    hero: image('almatar_zonal_isolation_photos/01_hero_cementing_operation.webp'),
    sections: [section('integrity', 'Integrated Zonal Isolation Solutions', 'Engineered cementing and wellbore isolation services that protect production, assets and the environment throughout the life of the well.', image('almatar_zonal_isolation_photos/02_wellbore_cementing_diagram.webp'), ['Reliable zonal isolation', 'Engineered solutions', 'Experienced field teams']), section('capabilities', 'Our Cementing Capabilities', 'Tailored solutions for every well.', image('almatar_zonal_isolation_photos/04_field_proven_cementing_operation.webp'), [], [['Primary Cementing', 'Engineered primary cementing for surface, intermediate and production casings.'], ['Remedial / Squeeze Cementing', 'Restore zonal isolation and address unwanted fluid migration.'], ['Plug & Abandonment Support', 'Cementing solutions for well suspension and abandonment operations.'], ['Cement Evaluation', 'Post-job evaluation and integrity assessment using industry-standard tools and analysis.']])],
  },
  {
    key: 'slickline-services', title: 'Slickline Services', eyebrow: 'WELL SERVICES',
    description: 'Reliable downhole solutions for measurement, mechanical intervention and reservoir monitoring.',
    hero: image('almatar_clean_photos/01_hero_slickline_scene.webp'),
    sections: [section('downhole', 'Downhole Intervention & Measurement', 'Disciplined slickline operations delivered by experienced field teams.', image('almatar_clean_photos/02_rig_depth_scene_clean.webp'), ['Mechanical intervention', 'Well measurement and surveys', 'Plug setting and retrieval'])],
  },
  {
    key: 'slickline', title: 'Slickline Services', eyebrow: 'WELL SERVICES',
    description: 'Reliable downhole solutions for measurement, mechanical intervention and reservoir monitoring.',
    hero: image('almatar_clean_photos/01_hero_slickline_scene.webp'),
    sections: [section('downhole', 'Downhole Intervention & Measurement', 'Disciplined slickline operations delivered by experienced field teams.', image('almatar_clean_photos/02_rig_depth_scene_clean.webp'), ['Mechanical intervention', 'Well measurement and surveys', 'Plug setting and retrieval'])],
  },
  {
    key: 'well-testing', title: 'Well Testing & Flaring', eyebrow: 'WELL SERVICES',
    description: 'Safe, accurate surface testing and controlled flaring for reliable production evaluation.',
    hero: image('almatar_well_testing_clean_photos/01_hero_well_testing_scene.webp'),
    sections: [section('testing', 'Surface Well Testing', 'Real-time monitoring, pressure measurement and controlled testing for confident operational decisions.', image('almatar_well_testing_clean_photos/02_realtime_monitoring_worker.webp'), ['Surface well testing', 'Pressure and temperature monitoring', 'Controlled flaring'])],
  },
  {
    key: 'wellhead-xmas-tree', title: 'Wellhead & Xmas Tree Services', eyebrow: 'WELL SERVICES',
    description: 'Wellhead and Christmas tree support for safe installation, maintenance and production operations.',
    hero: image('almatar_wellhead_text_free_separate_photos/01_wellhead_hero_workers.webp'),
    sections: [section('wellhead', 'Wellhead Integrity & Support', 'Field-ready wellhead and Christmas tree services supported by experienced technicians.', image('almatar_wellhead_text_free_separate_photos/02_xmas_tree_wellhead.webp'), ['Installation and maintenance', 'Wellhead inspection', 'Production support'])],
  },
  {
    key: 'construction', title: 'Total Field Construction & Manpower Logistics', eyebrow: 'FIELD CONSTRUCTION & LOGISTICS',
    description: 'End-to-end field construction, logistics, manpower and site-support solutions.',
    hero: image('almatar_total_field_all_photos/01_hero_total_field_construction.webp'),
    sections: [section('delivery', 'Integrated Field Delivery', 'Safe, efficient and reliable field construction and manpower logistics from base to site.', image('almatar_total_field_all_photos/02_heavy_haulage_transport-hd.webp'), ['Heavy transport', 'Site mobilization', 'Certified technical manpower', 'Camp and catering support'])],
  },
  {
    key: 'trading', title: 'Trading & Supply', eyebrow: 'EQUIPMENT SUPPLY & CHEMICALS',
    description: 'API-certified tools, wellheads, drilling chemicals and industrial equipment delivered to the field.',
    hero: 'images/trading_hero_industrial.webp',
    sections: [section('supply', 'Oilfield Equipment & Industrial Supply', 'Reliable procurement and delivery support for oilfield operations.', 'images/trading_supply_chain_dark.webp', ['Wellhead components and valves', 'Drilling tools and chemicals', 'Industrial equipment supply'])],
  },
  {
    key: 'policies', title: 'Policies', eyebrow: 'ALMATAR STANDARDS',
    description: 'Company policies that guide safe, ethical and responsible operations.',
    hero: 'images/policies-photo/anti-bribery-hero.webp',
    sections: [section('standards', 'Our Policies', 'Clear standards for quality, safety, security, ethics and responsible business conduct.', 'images/policies-photo/confidentiality-and-data-protection-hero.webp')],
  },
  {
    key: 'our-team', title: 'Our Team', eyebrow: 'OUR PEOPLE',
    description: 'Experienced engineers, operators and support teams delivering disciplined field performance.',
    hero: 'images/careers_team_walking.webp',
    sections: [section('people', 'People Behind Performance', 'Our teams combine technical expertise, field experience and a strong commitment to safety.', 'images/careers_engineers_hero.webp')],
  },
]

const serviceDocs = [
  ['well-intervention', 'Well Intervention Services', 'well-services', 'drilling_workover/well-intervention-hero-clear.webp'],
  ['coiled-tubing', 'Coiled Tubing & Nitrogen Pumping', 'well-services', 'almatar_coiled_tubing_photos/01_clean_hero_coiled_tubing.webp'],
  ['stimulation-fracturing', 'Stimulation & Fracturing', 'well-services', 'almatar_stimulation_all_photos/01_hero_stimulation_fracturing.webp'],
  ['zonal-isolation-cementing', 'Zonal Isolation & Cementing', 'well-services', 'almatar_zonal_isolation_photos/01_hero_cementing_operation.webp'],
  ['wellhead-xmas-tree', 'Wellhead & Xmas Tree Services', 'well-services', 'almatar_wellhead_text_free_separate_photos/01_wellhead_hero_workers.webp'],
  ['slickline-services', 'Slickline Services', 'well-services', 'almatar_clean_photos/01_hero_slickline_scene.webp'],
  ['well-testing', 'Well Testing & Flaring', 'well-services', 'almatar_well_testing_clean_photos/01_hero_well_testing_scene.webp'],
  ['drilling-workover', 'Drilling & Workover Services', 'well-services', 'drilling_workover/01_drilling_workover_hero.webp'],
  ['construction', 'Total Field Construction & Manpower Logistics', 'construction', 'almatar_total_field_all_photos/01_hero_total_field_construction.webp'],
]

const arabicPageCopy = {
  services: ['خدمات حقول النفط المتكاملة', 'خدمات البترول المتكاملة', 'حلول متخصصة لكل مرحلة من مراحل عمليات حقول النفط.'],
  'well-services': ['خدمات التدخل في الآبار', 'خدمات الآبار', 'حلول مجرّبة للتدخل في الآبار والإصلاح ودعم الإنتاج.'],
  'drilling-workover': ['خدمات الحفر والإصلاح', 'الحفر والإصلاح', 'دعم متكامل للحفر وإصلاح الآبار وإنشائها في العمليات الميدانية الصعبة.'],
  'drilling-fluids': ['سوائل الحفر والكيمياء', 'الحفر والسوائل', 'حلول جودة البئر وكيمياء الطين واختبار السوائل لحفر مستقر وفعّال.'],
  'coiled-tubing': ['الأنابيب الملتفة وضخ النيتروجين', 'خدمات الآبار', 'حلول فعّالة للتدخل والتنظيف والتحفيز واستعادة الإنتاج.'],
  'stimulation-fracturing': ['التحفيز والتكسير الهيدروليكي', 'خدمات الآبار', 'برامج ضخ وتحفيز مصممة لتحسين إنتاجية الآبار وأداء المكمن.'],
  'zonal-isolation-cementing': ['العزل الطبقي والإسمنت', 'خدماتنا', 'عزل موثوق لجدار البئر من أجل آبار أكثر أماناً وإنتاجية واستدامة.'],
  'slickline-services': ['خدمات السلك المعدني', 'خدمات الآبار', 'حلول موثوقة للقياس والتدخل الميكانيكي ومراقبة المكامن.'],
  slickline: ['خدمات السلك المعدني', 'خدمات الآبار', 'حلول موثوقة للقياس والتدخل الميكانيكي ومراقبة المكامن.'],
  'well-testing': ['اختبار الآبار والحرق', 'خدمات الآبار', 'اختبار سطحي آمن ودقيق وحرق مضبوط لتقييم الإنتاج بثقة.'],
  'wellhead-xmas-tree': ['خدمات رؤوس الآبار وشجرة الميلاد', 'خدمات الآبار', 'دعم رؤوس الآبار وشجرة الميلاد للتركيب والصيانة والإنتاج الآمن.'],
  construction: ['الإنشاءات الميدانية والنقل والكوادر', 'الإنشاءات واللوجستيات', 'حلول متكاملة للإنشاءات والنقل والكوادر ودعم المواقع.'],
  trading: ['التجارة والتوريد', 'توريد المعدات والمواد الكيميائية', 'أدوات معتمدة من API ورؤوس آبار ومواد حفر ومعدات صناعية تصل إلى الموقع.'],
  policies: ['السياسات', 'معايير المطار', 'سياسات الشركة التي توجه عمليات آمنة وأخلاقية ومسؤولة.'],
  'our-team': ['فريقنا', 'كوادرنا', 'مهندسون ومشغلون وفرق دعم ذوو خبرة يقدمون أداءً ميدانياً منضبطاً.'],
}

const arabicServiceCopy = {
  'well-intervention': ['خدمات التدخل في الآبار', 'حلول ميدانية موثوقة للتدخل في الآبار والإصلاح ودعم الإنتاج.'],
  'coiled-tubing': ['الأنابيب الملتفة وضخ النيتروجين', 'عمليات الأنابيب الملتفة للتنظيف والتحفيز ورفع الإنتاج.'],
  'stimulation-fracturing': ['التحفيز والتكسير الهيدروليكي', 'برامج ضخ وتحفيز هندسية لتحسين إنتاجية الآبار وأداء المكمن.'],
  'zonal-isolation-cementing': ['العزل الطبقي والإسمنت', 'خدمات إسمنت وعزل هندسية لحماية سلامة البئر والإنتاج والبيئة.'],
  'wellhead-xmas-tree': ['خدمات رؤوس الآبار وشجرة الميلاد', 'تركيب وصيانة وفحص رؤوس الآبار وشجرات الميلاد ودعم الإنتاج.'],
  'slickline-services': ['خدمات السلك المعدني', 'عمليات سلك معدني منضبطة للقياس والتدخل الميكانيكي ومراقبة المكامن.'],
  'well-testing': ['اختبار الآبار والحرق', 'اختبار سطحي آمن ودقيق ومراقبة للضغط والحرارة وحرق مضبوط.'],
  'drilling-workover': ['خدمات الحفر والإصلاح', 'دعم متكامل للحفر وإصلاح الآبار وإنشائها في العمليات الميدانية.'],
  construction: ['الإنشاءات الميدانية واللوجستيات', 'إنشاءات ميدانية ونقل وكوادر ودعم مواقع آمن وموثوق.'],
}

const servicePageLinks = [
  ['service-well-intervention', 'well-services'],
  ['service-coiled-tubing', 'coiled-tubing'],
  ['service-stimulation-fracturing', 'stimulation-fracturing'],
  ['service-zonal-isolation-cementing', 'zonal-isolation-cementing'],
  ['service-slickline-services', 'slickline-services'],
  ['service-well-testing', 'well-testing'],
  ['service-wellhead-xmas-tree', 'wellhead-xmas-tree'],
  ['service-drilling-workover', 'drilling-workover'],
  ['service-drilling-fluids', 'drilling-fluids'],
  ['service-construction', 'construction'],
  ['service-trading-supply', 'trading'],
]

function clean(value) {
  if (Array.isArray(value)) return value.map(clean)
  if (!value || typeof value !== 'object') return value
  if (value.__localPath) return uploaded.get(value.__localPath) || undefined
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined).map(([key, item]) => [key, clean(item)]))
}

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN && !process.env.SANITY_API_READ_TOKEN) throw new Error('No Sanity token configured')

  console.log(`Seeding ${pages.length} Website Page documents...`)
  for (const page of pages) {
    const arabic = arabicPageCopy[page.key] || [page.title, page.eyebrow, page.description]
    const heroImage = await uploadImage(page.hero)
    const preparedSections = []
    for (const item of page.sections) {
      for (const card of item.cards || []) {
        if (card.image?.__localPath) await uploadImage(card.image.__localPath)
      }
      if (item.image?.__localPath) await uploadImage(item.image.__localPath)
      preparedSections.push(clean(item))
    }
    await client.createOrReplace({
      _id: `websitePage-${page.key}`,
      _type: 'websitePage',
      pageKey: page.key,
      adminTitle: page.title,
      pageTitleEn: page.title,
      pageTitleAr: arabic[0],
      pageDescriptionEn: page.description,
      pageDescriptionAr: arabic[2],
      heroImage,
      heroEyebrowEn: page.eyebrow,
      heroEyebrowAr: arabic[1],
      heroTitleEn: page.title,
      heroTitleAr: arabic[0],
      heroDescriptionEn: page.description,
      heroDescriptionAr: arabic[2],
      sections: preparedSections.map((item) => ({
        ...item,
        eyebrowAr: arabic[1],
        titleAr: arabic[0],
        descriptionAr: arabic[2],
        imageAltAr: arabic[0],
        bulletsAr: item.bulletsEn?.map((bullet) => `حلول ${bullet}`) || [],
      })),
      seo: { titleEn: `${page.title} | ALMATAR`, titleAr: `${arabic[0]} | المطار`, descriptionEn: page.description, descriptionAr: arabic[2], image: heroImage },
      publishedNote: 'Initial content imported from the existing ALMATAR service page. Edit and publish this document to update CMS-connected layouts.',
    })
    console.log(`  ✓ ${page.key}`)
  }

  console.log(`Seeding missing Service & Solution documents...`)
  for (let index = 0; index < serviceDocs.length; index += 1) {
    const [slug, title, category, imagePath] = serviceDocs[index]
    const id = `service-${slug}`
    const serviceArabic = arabicServiceCopy[slug] || [title, `تقدم المطار خدمات ${title} لعمليات حقول نفط آمنة وموثوقة.`]
    const preparedServiceImage = await uploadImage(imagePath.startsWith('images/') ? imagePath : `images/policies-photo/services/${imagePath}`)
    const exists = await client.fetch('*[_id == $id][0]{_id,image}', { id })
    if (exists) {
      const servicePatch = {
        titleAr: serviceArabic[0],
        shortDescriptionAr: serviceArabic[1],
        fullDescriptionAr: serviceArabic[1],
      }
      if (!exists.image && preparedServiceImage) servicePatch.image = preparedServiceImage
      await client.patch(id).set(servicePatch).commit()
      console.log(`updated bilingual ${slug}`)
    }
    if (exists) {
      console.log(`  • kept existing ${slug}`)
      continue
    }
    const serviceImage = await uploadImage(imagePath.startsWith('images/') ? imagePath : `images/policies-photo/services/${imagePath}`)
    await client.create({
      _id: id,
      _type: 'service',
      titleEn: title,
      titleAr: serviceArabic[0],
      slug: { _type: 'slug', current: slug },
      category,
      order: index + 1,
      shortDescriptionEn: `ALMATAR ${title.toLowerCase()} support for safe, reliable oilfield operations.`,
      shortDescriptionAr: `تقدم المطار خدمات ${title} لعمليات حقول نفط آمنة وموثوقة.`,
      image: preparedServiceImage,
      features: [],
    })
    console.log(`  ✓ ${slug}`)
  }

  console.log('Copying complete bilingual page content into Service & Solution documents...')
  for (const [serviceId, routeKey] of servicePageLinks) {
    const page = await client.fetch('*[_type == "websitePage" && pageKey == $routeKey][0]{heroImage,heroEyebrowEn,heroEyebrowAr,heroTitleEn,heroTitleAr,heroDescriptionEn,heroDescriptionAr,sections}', { routeKey })
    if (!page) {
      console.warn(`Missing website page content for ${routeKey}`)
      continue
    }
    await client.patch(serviceId).set({
      pageContent: {
        routeKey,
        heroImage: page.heroImage,
        heroEyebrowEn: page.heroEyebrowEn,
        heroEyebrowAr: page.heroEyebrowAr,
        heroTitleEn: page.heroTitleEn,
        heroTitleAr: page.heroTitleAr,
        heroDescriptionEn: page.heroDescriptionEn,
        heroDescriptionAr: page.heroDescriptionAr,
        sections: page.sections || [],
      },
    }).commit()
    console.log(`copied ${serviceId} <- ${routeKey}`)
  }

  console.log('Sanity service content is ready.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
