'use client';

import NextPageBanner from './NextPageBanner';
import ServiceIntroCard from './ServiceIntroCard';
import { useLanguage } from '@/context/LanguageContext';
import { useSanityContent } from '@/sanity/lib/fetchData';
import { WEBSITE_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';

const base = '/images/policies-photo/services/drilling_workover/';

const copy = {
  en: {
    heroEyebrow: 'RELIABLE OPERATIONS. LONG-TERM VALUE.', heroTitle: <>DRILLING AND<br />WORKOVER SERVICES</>, heroDescription: 'Safe, efficient and technically advanced drilling and workover solutions to unlock the full potential of your assets.', heroButton: 'REQUEST TECHNICAL SUPPORT', heroSide: <>PEOPLE<br />TECHNOLOGY<br />PERFORMANCE</>,
    introEyebrow: 'ENGINEERING EXCELLENCE', introTitle: 'Integrated Drilling & Workover Solutions', introDescription: 'ALMATAR delivers safe, efficient and cost-effective drilling and workover operations using proven techniques, experienced crews and modern equipment. Our solutions are designed to meet complex well objectives while ensuring well integrity, reservoir productivity and long-term value.',
    capabilitiesEyebrow: 'OUR CAPABILITIES', capabilitiesTitle: 'Comprehensive Drilling & Workover Capabilities', constructionEyebrow: 'WELL CONSTRUCTION', constructionTitle: 'From Surface to Target', constructionDescription: 'We plan and execute drilling programs to achieve optimal wellbore placement, ensuring reservoir access, well integrity and long-term productivity.', constructionPoints: ['Optimized well design', 'Accurate trajectory control', 'Real-time monitoring', 'Safe and efficient operations'],
    processEyebrow: 'OUR PROCESS', processTitle: 'From Spud to Completion', process: ['PLANNING & DESIGN', 'SPUD & DRILLING', 'CASING & CEMENTING', 'WORKOVER / COMPLETION', 'TESTING & HANDOVER', 'LONG-TERM SUPPORT'],
    people: [['FIELD OPERATIONS', <>People on the Ground.<br />Performance in the Field.</>, 'Our experienced crews and modern equipment deliver safe and efficient drilling and workover operations in challenging environments.'], ['HSE & QUALITY', 'Safety. Quality. Always.', 'We are committed to conducting our drilling and workover operations with the highest standards of Health, Safety, Environment and Quality.']],
    stats: [['100+', 'WELLS DRILLED & WORKED OVER'], ['EXPERIENCED', 'CREWS AND OPERATORS'], ['ZERO LTIs', 'OUR COMMITMENT TO SAFE OPERATIONS'], ['HIGH QUALITY', 'RELIABLE WELL DELIVERY']], ctaTitle: "LET'S DRIVE YOUR NEXT PROJECT FORWARD", ctaDescription: 'Get in touch with our technical team to discuss your drilling and workover requirements.',
  },
  ar: {
    heroEyebrow: 'عمليات موثوقة. قيمة طويلة الأمد.', heroTitle: <>خدمات الحفر<br />وصيانة الآبار</>, heroDescription: 'حلول حفر وصيانة آبار آمنة وفعالة ومتقدمة تقنياً لتحقيق كامل إمكانات أصولكم.', heroButton: 'اطلب الدعم الفني', heroSide: <>الكوادر<br />التقنية<br />الأداء</>,
    introEyebrow: 'تميز هندسي', introTitle: 'حلول متكاملة للحفر وصيانة الآبار', introDescription: 'تقدم المطر عمليات حفر وصيانة آبار آمنة وفعالة وذات جدوى اقتصادية، بالاعتماد على أساليب مثبتة وفرق خبيرة ومعدات حديثة. صُممت حلولنا لتحقيق أهداف الآبار المعقدة مع الحفاظ على سلامة البئر وإنتاجية المكمن والقيمة طويلة الأمد.',
    capabilitiesEyebrow: 'قدراتنا', capabilitiesTitle: 'قدرات شاملة للحفر وصيانة الآبار', constructionEyebrow: 'إنشاء البئر', constructionTitle: 'من السطح إلى الهدف', constructionDescription: 'نخطط وننفذ برامج الحفر للوصول إلى الموضع الأمثل لتجويف البئر، وضمان الوصول إلى المكمن وسلامة البئر وإنتاجية طويلة الأمد.', constructionPoints: ['تصميم محسّن للبئر', 'تحكم دقيق بالمسار', 'مراقبة فورية', 'عمليات آمنة وفعالة'],
    processEyebrow: 'منهج عملنا', processTitle: 'من بدء الحفر إلى الإكمال', process: ['التخطيط والتصميم', 'بدء الحفر والحفر', 'التغليف والتسميت', 'الصيانة والإكمال', 'الاختبار والتسليم', 'الدعم طويل الأمد'],
    people: [['العمليات الميدانية', <>كوادر في الميدان.<br />أداء في الحقل.</>, 'توفر فرقنا الخبيرة ومعداتنا الحديثة عمليات حفر وصيانة آبار آمنة وفعالة في البيئات الصعبة.'], ['الصحة والسلامة والجودة', 'السلامة والجودة دائماً.', 'نلتزم بتنفيذ عمليات الحفر وصيانة الآبار وفق أعلى معايير الصحة والسلامة والبيئة والجودة.']],
    stats: [['100+', 'بئر تم حفره وصيانته'], ['فرق خبيرة', 'كوادر ومشغّلون'], ['صفر إصابات هدر وقت', 'التزامنا بالعمليات الآمنة'], ['جودة عالية', 'تسليم موثوق للآبار']], ctaTitle: 'لنحرّك مشروعكم القادم إلى الأمام', ctaDescription: 'تواصلوا مع فريقنا الفني لمناقشة متطلبات الحفر وصيانة الآبار.',
  },
};

const capabilities = [
  ['card-directional-drilling.webp', ['WELL PLACEMENT', 'توجيه مسار البئر'], ['Directional Drilling', 'الحفر الموجّه']], ['card-casing-running.webp', ['WELL CONSTRUCTION', 'إنشاء البئر'], ['Casing Running', 'إنزال أنابيب التغليف']], ['card-cementing-support.webp', ['WELL INTEGRITY', 'سلامة البئر'], ['Cementing Support', 'دعم عمليات التسميت']], ['card-workover-operations.webp', ['FIELD OPERATIONS', 'العمليات الميدانية'], ['Workover Operations', 'عمليات صيانة الآبار']], ['card-rig-support.webp', ['DRILLING SERVICES', 'خدمات الحفر'], ['Rig Support Services', 'خدمات دعم الحفارات']], ['card-wellbore-optimization.webp', ['PERFORMANCE', 'الأداء'], ['Wellbore Optimization', 'تحسين تجويف البئر']],
];

export default function LocalizedDrillingWorkoverPage({ cmsData }) {
  const { lang } = useLanguage();
  const fetchedData = useSanityContent('websitePage', WEBSITE_PAGE_QUERY, { pageKey: 'drilling-workover' });
  const data = cmsData || fetchedData;
  const text = copy[lang] || copy.en;
  const localeIndex = lang === 'ar' ? 1 : 0;
  const isArabic = lang === 'ar';

  const heroImg = getImageUrl(data?.heroImage || data?.image || data?.pageContent?.heroImage, `${base}01_drilling_workover_hero.webp`);
  const heroEyebrow = (isArabic ? (data?.heroEyebrowAr || data?.pageContent?.heroEyebrowAr) : (data?.heroEyebrowEn || data?.pageContent?.heroEyebrowEn)) || text.heroEyebrow;
  const heroTitle = (isArabic ? (data?.heroTitleAr || data?.pageContent?.heroTitleAr) : (data?.heroTitleEn || data?.pageContent?.heroTitleEn)) || text.heroTitle;
  const heroDescription = (isArabic ? (data?.heroDescriptionAr || data?.pageContent?.heroDescriptionAr) : (data?.heroDescriptionEn || data?.pageContent?.heroDescriptionEn)) || text.heroDescription;

  const firstSection = data?.sections?.[0] || data?.pageContent?.sections?.[0];
  const introImg = getImageUrl(firstSection?.image || data?.introImage || data?.pageContent?.introImage, `${base}02_integrated_drilling_rig.webp`);
  const introEyebrow = (isArabic ? (firstSection?.eyebrowAr || data?.introEyebrowAr) : (firstSection?.eyebrowEn || data?.introEyebrowEn)) || text.introEyebrow;
  const introTitle = (isArabic ? (firstSection?.titleAr || data?.introTitleAr) : (firstSection?.titleEn || data?.introTitleEn)) || text.introTitle;
  const introDescription = (isArabic ? (firstSection?.descriptionAr || data?.introDescriptionAr) : (firstSection?.descriptionEn || data?.introDescriptionEn)) || text.introDescription;

  const ctaImg = getImageUrl(data?.cta?.image || data?.ctaImage || data?.pageContent?.ctaImage, `${base}08_footer_cta_workers.webp`);
  const ctaTitle = (isArabic ? (data?.cta?.titleAr || data?.ctaTitleAr || data?.pageContent?.ctaTitleAr) : (data?.cta?.titleEn || data?.ctaTitleEn || data?.pageContent?.ctaTitleEn)) || text.ctaTitle;
  const ctaDescription = (isArabic ? (data?.cta?.descriptionAr || data?.ctaDescriptionAr || data?.pageContent?.ctaDescriptionAr) : (data?.cta?.descriptionEn || data?.ctaDescriptionEn || data?.pageContent?.ctaDescriptionEn)) || text.ctaDescription;

  return <div className="total-field-page drilling-page" dir={isArabic ? 'rtl' : 'ltr'}>
    <section className="tf-hero"><img src={heroImg} alt={typeof heroTitle === 'string' ? heroTitle : text.introTitle} /><div className="tf-hero-copy"><span>{heroEyebrow}</span><h1>{heroTitle}</h1><p>{heroDescription}</p><a href="#drilling-capabilities">{text.heroButton} →</a></div><span className="tf-hero-side">{text.heroSide}</span></section>
    <ServiceIntroCard eyebrow={introEyebrow} title={introTitle} description={introDescription} image={introImg} imageAlt={typeof introTitle === 'string' ? introTitle : text.introTitle} />
    <section className="tf-section tf-intro"><div><small>{introEyebrow}</small><h2>{introTitle}</h2><p>{introDescription}</p></div><div className="tf-intro-image"><img src={introImg} alt={typeof introTitle === 'string' ? introTitle : text.introTitle} /></div></section>
    <section id="drilling-capabilities" className="tf-section"><small>{text.capabilitiesEyebrow}</small><h2>{text.capabilitiesTitle}</h2><div className="tf-capabilities">{capabilities.map(([image, eyebrow, title]) => <article key={image}><img src={`${base}${image}`} alt={title[localeIndex]} loading="lazy" /><div className="drilling-capability-overlay"><small>{eyebrow[localeIndex]}</small><h3>{title[localeIndex]}</h3></div></article>)}</div></section>
    <section className="tf-section tf-intro"><div><small>{text.constructionEyebrow}</small><h2>{text.constructionTitle}</h2><p>{text.constructionDescription}</p><p>{text.constructionPoints.map((point) => <span key={point}>✓ {point}<br /></span>)}</p></div><div className="tf-intro-image"><img src={`${base}04_well_construction_cross_section.webp`} alt={text.constructionTitle} /></div></section>
    <section className="tf-section tf-process"><small>{text.processEyebrow}</small><h2>{text.processTitle}</h2><div>{text.process.map((item, index) => <article key={item}><b>{index + 1}</b><strong>{item}</strong></article>)}</div></section>
    <section className="tf-people">{text.people.map(([eyebrow, title, description], index) => <article key={eyebrow}><img src={`${base}${index === 0 ? '03_field_operations_team.webp' : '07_hse_worker_rig.webp'}`} alt={eyebrow} /><div><small>{eyebrow}</small><h2>{title}</h2><p>{description}</p></div></article>)}</section>
    <section className="tf-stats">{text.stats.map(([value, label]) => <b key={value}>{value}<small>{label}</small></b>)}</section>
    <NextPageBanner title={ctaTitle} subtitle={ctaDescription} link="/contact" bgImage={ctaImg} />
  </div>;
}
