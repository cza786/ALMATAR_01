'use client'

import '../career-detail.css'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'
import { careerVacanciesVisible } from '@/lib/careerVisibility'

function localized(lang, ar, en, fallback = '') {
  return lang === 'ar' ? (ar || en || fallback) : (en || ar || fallback)
}

function Icon({ type }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'calendar') return <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
  if (type === 'pin') return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  if (type === 'file') return <svg {...common}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
  if (type === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></svg>
  if (type === 'check') return <svg {...common}><polyline points="20 6 9 17 4 12" /></svg>
  return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></svg>
}

function formatDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`))
}

export default function CareersPage() {
  const { lang } = useLanguage()
  const data = useSanityContent('careers', CAREERS_PAGE_QUERY)

  // Hero section content
  const pageTitle = localized(lang, data?.pageTitleAr, data?.pageTitleEn, 'Build Your Future With ALMATAR')
  const pageDesc = localized(lang, data?.pageDescAr, data?.pageDescEn, 'Join a team where expertise, ambition and teamwork create real progress.')
  const bannerImage = data?.bannerImage ? getImageUrl(data.bannerImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const heroButton = localized(lang, data?.heroButtonAr, data?.heroButtonEn, lang === 'ar' ? 'استكشف الوظائف' : 'Explore vacancies')
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

  // Vacancies section content
  const jobs = careerVacanciesVisible
    ? (data?.jobs || []).filter((job) => job.isOpen !== false)
    : []
  const vacanciesEyebrow = localized(lang, data?.vacanciesEyebrowAr, data?.vacanciesEyebrowEn, lang === 'ar' ? 'الفرص المتاحة' : 'JOIN THE TEAM')
  const vacanciesTitle = localized(lang, data?.vacanciesTitleAr, data?.vacanciesTitleEn, lang === 'ar' ? 'الوظائف الشاغرة الحالية' : 'Current Vacancies')
  const vacanciesDesc = localized(lang, data?.vacanciesDescAr, data?.vacanciesDescEn, lang === 'ar' ? 'اكتشف دورك القادم مع المطار.' : 'Find your next opportunity with ALMATAR.')
  const openLabel = localized(lang, data?.openLabelAr, data?.openLabelEn, lang === 'ar' ? 'مفتوحة' : 'OPEN')
  const closedLabel = localized(lang, data?.closedLabelAr, data?.closedLabelEn, lang === 'ar' ? 'مغلقة' : 'CLOSED')
  const viewDetails = localized(lang, data?.viewDetailsAr, data?.viewDetailsEn, lang === 'ar' ? 'عرض التفاصيل' : 'View Details')
  const postedLabel = localized(lang, data?.postedLabelAr, data?.postedLabelEn, lang === 'ar' ? 'نُشرت' : 'Posted')
  const emptyMessage = localized(lang, data?.emptyMessageAr, data?.emptyMessageEn, lang === 'ar' ? 'لا توجد وظائف شاغرة حالياً.' : 'There are no vacancies at this time.')

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
            <a href="#vacancies" className="career-reference-hero-button">{heroButton} <span>→</span></a>
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

      {/* Vacancies Section */}
      <section className="career-vacancies-section" id="vacancies">
        <div className="career-section-heading">
          <div>
            <p className="career-reference-kicker">{vacanciesEyebrow}</p>
            <h2>{vacanciesTitle}</h2>
          </div>
          <p>{vacanciesDesc}</p>
        </div>
        <div className="career-job-grid">
          {jobs.length ? jobs.map((job) => (
            <article className="career-job-card" key={job._id}>
              <div className="career-job-card-top">
                <span className="career-job-icon"><Icon type="briefcase" /></span>
                <span className={`career-open-badge ${job.isOpen === false ? 'is-closed' : ''}`}>{job.isOpen === false ? closedLabel : openLabel}</span>
              </div>
              <h3>{localized(lang, job.titleAr, job.titleEn)}</h3>
              <div className="career-job-meta">
                <span><Icon type="briefcase" />{localized(lang, job.departmentAr, job.departmentEn)}</span>
                <span><Icon type="pin" />{localized(lang, job.locationAr, job.locationEn)}</span>
                <span><Icon type="file" />{localized(lang, job.employmentTypeAr, job.employmentType, 'Full-time')}</span>
              </div>
              <p className="career-job-description">{localized(lang, job.descriptionAr, job.descriptionEn)}</p>
              <div className="career-job-card-footer">
                <span><Icon type="calendar" />{postedLabel} {formatDate(job.postedDate)}</span>
                {job.isOpen === false ? <span className="career-closed-label">{closedLabel}</span> : <Link className="career-job-card-link" href={`/careers/${job.slug || job._id}`}>{viewDetails} <span>→</span></Link>}
              </div>
            </article>
          )) : <p className="career-empty-state">{emptyMessage}</p>}
        </div>
      </section>
    </main>
  )
}
