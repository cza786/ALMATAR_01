'use client'

import '../career-detail.css'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'
import { DUMMY_JOBS } from '@/data/dummyJobs'

function localized(lang, ar, en, fallback = '') {
  return lang === 'ar' ? (ar || en || fallback) : (en || ar || fallback)
}

function Icon({ type }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'calendar') return <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
  if (type === 'pin') return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  if (type === 'file') return <svg {...common}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
  if (type === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></svg>
  return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></svg>
}

function formatDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`))
}

export default function CareersPage() {
  const { lang } = useLanguage()
  const data = useSanityContent('careers', CAREERS_PAGE_QUERY)
  const pageTitle = localized(lang, data?.pageTitleAr, data?.pageTitleEn, 'Build Your Future With ALMATAR')
  const pageDesc = localized(lang, data?.pageDescAr, data?.pageDescEn, 'Join a team where expertise, ambition and teamwork create real progress.')
  const bannerImage = data?.bannerImage ? getImageUrl(data.bannerImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const jobs = data?.jobs?.length ? data.jobs : DUMMY_JOBS

  return <main className="careers-reference-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <section className="career-reference-hero"><img src={bannerImage} alt="ALMATAR field operations" /><div className="career-reference-hero-overlay"><div><p className="career-reference-kicker">PEOPLE · GROWTH · INNOVATION</p><h1>{pageTitle}</h1><p className="career-reference-hero-desc">{pageDesc}</p><a href="#vacancies" className="career-reference-hero-button">{lang === 'ar' ? 'استكشف الوظائف' : 'Explore vacancies'} <span>→</span></a></div><p className="career-reference-side-label">PEOPLE<br />GROWTH<br />INNOVATION<br />THE FUTURE</p></div></section>
    <section className="career-vacancies-section" id="vacancies"><div className="career-section-heading"><div><p className="career-reference-kicker">{lang === 'ar' ? 'الفرص المتاحة' : 'JOIN THE TEAM'}</p><h2>{lang === 'ar' ? 'الوظائف الشاغرة الحالية' : 'Current Vacancies'}</h2></div><p>{lang === 'ar' ? 'اكتشف دورك القادم مع المطر.' : 'Find your next opportunity with ALMATAR.'}</p></div>
      <div className="career-job-grid">{jobs.map((job) => <article className="career-job-card" key={job._id}><div className="career-job-card-top"><span className="career-job-icon"><Icon type="briefcase" /></span><span className={`career-open-badge ${job.isOpen === false ? 'is-closed' : ''}`}>{job.isOpen === false ? 'CLOSED' : 'OPEN'}</span></div><h3>{localized(lang, job.titleAr, job.titleEn)}</h3><div className="career-job-meta"><span><Icon type="briefcase" />{localized(lang, job.departmentAr, job.departmentEn)}</span><span><Icon type="pin" />{localized(lang, job.locationAr, job.locationEn)}</span><span><Icon type="file" />{localized(lang, job.employmentTypeAr, job.employmentType, 'Full-time')}</span></div><p className="career-job-description">{localized(lang, job.descriptionAr, job.descriptionEn)}</p><div className="career-job-card-footer"><span><Icon type="calendar" />Posted {formatDate(job.postedDate)}</span>{job.isOpen === false ? <span className="career-closed-label">Closed</span> : <Link className="career-job-card-link" href={`/careers/${job.slug || job._id}`}>View Details <span>→</span></Link>}</div></article>)}</div>
    </section>
  </main>
}
