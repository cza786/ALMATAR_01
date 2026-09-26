'use client'

import '../career-detail.css'
import { useLanguage } from '@/context/LanguageContext'
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'

function localized(lang, ar, en, fallback = '') {
  return lang === 'ar' ? (ar || en || fallback) : (en || ar || fallback)
}

function Icon({ type }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'check') return <svg {...common}><polyline points="20 6 9 17 4 12" /></svg>
  return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></svg>
}

export default function CareersPage() {
  const { lang } = useLanguage()
  const data = useSanityContent('careers', CAREERS_PAGE_QUERY)

  // Hero section content
  const pageTitle = localized(lang, data?.pageTitleAr, data?.pageTitleEn, 'Build Your Future With ALMATAR')
  const pageDesc = localized(lang, data?.pageDescAr, data?.pageDescEn, 'Join a team where expertise, ambition and teamwork create real progress.')
  const bannerImage = data?.bannerImage ? getImageUrl(data.bannerImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const heroSideText = localized(lang, data?.heroSideTextAr, data?.heroSideTextEn, lang === 'ar' ? 'الأفراد\nالنمو\nالابتكار\nالمستقبل' : 'PEOPLE\nGROWTH\nINNOVATION\nTHE FUTURE')

  // Why Work With Us section content
  const whyWorkEyebrow = localized(lang, data?.whyWorkEyebrowAr, data?.whyWorkEyebrowEn, lang === 'ar' ? 'لماذا تعمل مع المطر؟' : 'WHY WORK WITH ALMATAR?')
  const whyWorkHeading = localized(lang, data?.whyWorkHeadingAr, data?.whyWorkHeadingEn, lang === 'ar' ? 'أكثر من مجرد وظيفة، إنها رسالة وهدف' : "More Than a Job, It's a Purpose")
  const whyWorkLead = localized(lang, data?.whyWorkLeadAr, data?.whyWorkLeadEn, lang === 'ar' ? 'في شركة المطر للخدمات البترولية، نوفر بيئة عمل محفزة وفرص تعلم وتطوير مستمرة لنمو مسارك المهني.' : 'At ALMATAR Petroleum Services, we offer a challenging work environment, continuous learning opportunities and the chance to grow your career while contributing to the energy that drives the world.')
  const cultureImage = data?.cultureImage ? getImageUrl(data.cultureImage, bannerImage) : bannerImage
  const whyItems = data?.whyItems?.length ? data.whyItems : [
    { titleEn: 'GROW YOUR CAREER', titleAr: 'طور مسارك المهني', descEn: 'Development programs and on-the-job training to help you reach your full potential.', descAr: 'برامج تطوير وتدريب عملي لمساعدتك على تحقيق أقصى إمكانياتك.' },
    { titleEn: 'WORK SAFELY', titleAr: 'بيئة عمل آمنة', descEn: 'We prioritise the health and safety of our people in everything we do.', descAr: 'نضع صحة وسلامة كوادرنا على رأس أولوياتنا في كافة مواقع العمل.' },
    { titleEn: 'BE PART OF A TEAM', titleAr: 'كن جزءاً من فريق', descEn: 'Collaborate with experienced professionals and build lasting relationships.', descAr: 'تعاون مع خبراء ومهندسين متخصصين وابنِ علاقات مهنية مستدامة.' },
    { titleEn: 'MAKE AN IMPACT', titleAr: 'اصنع أثراً ملموساً', descEn: 'Contribute to reliable energy solutions that power communities worldwide.', descAr: 'ساهم في تقديم حلول طاقة موثوقة تمكن المكتسبات التنموية.' },
    { titleEn: 'OUR VALUES', titleAr: 'قيمنا الراسخة', descEn: 'Integrity, innovation and excellence are at the core of our culture and every decision we make.', descAr: 'النزاهة، الابتكار والتميز هي جوهر ثقافتنا وركيزة كافة قراراتنا.' },
  ]

  return (
    <main className="careers-reference-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="career-reference-hero">
        <img src={bannerImage} alt="ALMATAR field operations" />
        <div className="career-reference-hero-overlay">
          <div>
            <p className="career-reference-kicker">{localized(lang, data?.eyebrowAr, data?.eyebrowEn, 'PEOPLE · GROWTH · INNOVATION')}</p>
            <h1>{pageTitle}</h1>
            <p className="career-reference-hero-desc">{pageDesc}</p>
          </div>
          <p className="career-reference-side-label">{heroSideText.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="career-why-section">
        <div className="career-why-image">
          <img src={cultureImage} alt={whyWorkHeading} />
        </div>
        <div className="career-why-copy">
          <p className="career-reference-kicker">{whyWorkEyebrow}</p>
          <h2>{whyWorkHeading}</h2>
          <p>{whyWorkLead}</p>
          <div className="career-why-points">
            {whyItems.map((item, idx) => (
              <div key={idx}>
                <Icon type="check" />
                <div>
                  <strong>{localized(lang, item.titleAr, item.titleEn)}</strong>
                  {item.descEn && <p style={{ margin: '0.2rem 0 0', fontSize: '0.78rem', color: '#596d82', fontWeight: 400 }}>{localized(lang, item.descAr, item.descEn)}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
