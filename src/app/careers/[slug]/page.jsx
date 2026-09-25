'use client'

import '../../career-detail.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { JOB_DETAIL_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'
import { DUMMY_JOBS } from '@/data/dummyJobs'

function localized(lang, ar, en) { return lang === 'ar' ? (ar || en || '') : (en || ar || '') }
function lines(value) { return String(value || '').split(/\r?\n/).map((item) => item.replace(/^\s*[-•*]\s*/, '').trim()).filter(Boolean) }
function DetailSection({ label, title, text, list = false }) {
  if (!text) return null
  return <section className="job-detail-section"><p className="job-detail-kicker">{label}<span /></p><h2>{title}</h2>{list ? <ul>{lines(text).map((item) => <li key={item}>{item}</li>)}</ul> : <p>{text}</p>}</section>
}

export default function JobDetailPage() {
  const { lang } = useLanguage()
  const params = useParams()
  const slug = params?.slug || ''
  const sanityJob = useSanityContent('jobDetail', JOB_DETAIL_QUERY, { slug })
  const fallbackJob = DUMMY_JOBS.find((item) => item.slug === slug || item._id === slug)
  const job = sanityJob ? { ...(fallbackJob || {}), ...sanityJob } : fallbackJob
  if (!job) return <main className="job-detail-page"><div className="job-detail-loading">Loading vacancy…</div></main>

  const title = localized(lang, job.titleAr, job.titleEn)
  const department = localized(lang, job.departmentAr, job.departmentEn)
  const location = localized(lang, job.locationAr, job.locationEn)
  const heroImage = job.heroImage ? getImageUrl(job.heroImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const details = [
    ['Job Title', title], ['Company', localized(lang, job.companyAr, job.companyEn)], ['Department', department], ['Reports To', localized(lang, job.reportsToAr, job.reportsToEn)], ['Sector', localized(lang, job.sectorAr, job.sectorEn)], ['Country / City', location], ['Employment Type', localized(lang, job.employmentTypeAr, job.employmentType)], ['Experience', localized(lang, job.experienceAr, job.experienceEn)], ['Education', localized(lang, job.educationAr, job.educationEn)], ['Language', localized(lang, job.languageAr, job.languageEn)],
  ].filter(([, value]) => value)

  return <main className="job-detail-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <section className="job-detail-hero"><img src={heroImage} alt={title} /><div className="job-detail-hero-overlay"><div className="job-detail-hero-content"><p className="job-breadcrumb"><Link href="/">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link><span>/</span><Link href="/careers">{lang === 'ar' ? 'الوظائف' : 'Careers'}</Link><span>/</span>{title}</p><h1>{title}</h1><p className="job-detail-department">{department} <span>/</span> {localized(lang, job.sectorAr, job.sectorEn)}</p><p className="job-detail-intro">{localized(lang, job.descriptionAr, job.descriptionEn)}</p></div></div></section>
    <section className="job-facts-card">{details.map(([label, value]) => <div key={label}><span className="job-fact-icon">⌁</span><small>{label}</small><strong>{value}</strong></div>)}</section>
    <section className="job-detail-content"><div><DetailSection label={lang === 'ar' ? 'وصف الوظيفة' : 'JOB DESCRIPTION'} title={lang === 'ar' ? 'ملخص الوظيفة' : 'Job Summary'} text={localized(lang, job.summaryAr, job.summaryEn) || localized(lang, job.descriptionAr, job.descriptionEn)} /><DetailSection label={lang === 'ar' ? 'المسؤوليات' : 'KEY RESPONSIBILITIES'} title={lang === 'ar' ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'} text={localized(lang, job.responsibilitiesAr, job.responsibilitiesEn)} list /></div><div><DetailSection label={lang === 'ar' ? 'التعليم والمؤهلات' : 'EDUCATION & QUALIFICATIONS'} title={lang === 'ar' ? 'التعليم والمؤهلات' : 'Education & Qualifications'} text={localized(lang, job.qualificationsAr, job.qualificationsEn)} list /><DetailSection label={lang === 'ar' ? 'متطلبات الخبرة' : 'EXPERIENCE REQUIREMENTS'} title={lang === 'ar' ? 'متطلبات الخبرة' : 'Experience Requirements'} text={localized(lang, job.experienceRequirementsAr, job.experienceRequirementsEn) || localized(lang, job.requirementsAr, job.requirementsEn)} list /><DetailSection label={lang === 'ar' ? 'بيئة العمل' : 'WORK ENVIRONMENT'} title={lang === 'ar' ? 'بيئة العمل' : 'Work Environment'} text={localized(lang, job.workEnvironmentAr, job.workEnvironmentEn)} list /></div></section>
  </main>
}
