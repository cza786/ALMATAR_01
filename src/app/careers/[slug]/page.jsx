'use client'

import '../../career-detail.css'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { JOB_DETAIL_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'

function localized(lang, ar, en) { return lang === 'ar' ? (ar || en || '') : (en || ar || '') }
function lines(value) { return String(value || '').split(/\r?\n/).map((item) => item.replace(/^\s*[-•*]\s*/, '').trim()).filter(Boolean) }

function DetailSection({ label, title, text, list = false }) {
  if (!text) return null
  return <section className="job-detail-section"><p className="job-detail-kicker">{label}<span /></p><h2>{title}</h2>{list ? <ul>{lines(text).map((item) => <li key={item}>{item}</li>)}</ul> : <p>{text}</p>}</section>
}

function ApplicationForm({ job, lang }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  async function submit(event) {
    event.preventDefault(); setStatus('sending'); setError('')
    const response = await fetch('/api/careers/apply', { method: 'POST', body: new FormData(event.currentTarget) })
    const result = await response.json()
    if (!response.ok) { setError(result.error || 'Could not submit application.'); setStatus('error'); return }
    setStatus('success')
  }
  if (status === 'success') return <div className="job-application-success">✓ {lang === 'ar' ? 'تم إرسال طلبك بنجاح.' : 'Your application was sent successfully.'}</div>
  return <form className="job-application-form" onSubmit={submit}><input type="hidden" name="jobId" value={job._id} /><input type="hidden" name="jobTitle" value={job.titleEn} /><input type="hidden" name="applicationEmail" value={job.applicationEmail || 'hr@almatar.com'} /><label>{lang === 'ar' ? 'الاسم الكامل' : 'Full name'}<input name="fullName" required /></label><label>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}<input name="email" type="email" required /></label><label>{lang === 'ar' ? 'الهاتف' : 'Phone'}<input name="phone" /></label><label className="job-form-full">{lang === 'ar' ? 'السيرة الذاتية' : 'Resume'}<input name="resume" type="file" accept=".pdf,.doc,.docx" required /></label><label className="job-form-full">{lang === 'ar' ? 'رسالة' : 'Message'}<textarea name="message" rows="4" /></label>{error && <p className="job-form-error">{error}</p>}<button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : (lang === 'ar' ? 'إرسال الطلب' : 'Apply Now')} <span>→</span></button></form>
}

export default function JobDetailPage() {
  const { lang } = useLanguage()
  const params = useParams()
  const slug = params?.slug || ''
  const job = useSanityContent('jobDetail', JOB_DETAIL_QUERY, { slug })
  if (!job) return <main className="job-detail-page"><div className="job-detail-loading">Loading vacancy…</div></main>

  const title = localized(lang, job.titleAr, job.titleEn)
  const department = localized(lang, job.departmentAr, job.departmentEn)
  const location = localized(lang, job.locationAr, job.locationEn)
  const heroImage = job.heroImage ? getImageUrl(job.heroImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const details = [
    ['Job Title', title, 'briefcase'], ['Company', localized(lang, job.companyAr, job.companyEn), 'building'], ['Department', department, 'people'], ['Reports To', localized(lang, job.reportsToAr, job.reportsToEn), 'hierarchy'], ['Sector', localized(lang, job.sectorAr, job.sectorEn), 'gear'], ['Country / City', location, 'pin'], ['Employment Type', localized(lang, job.employmentTypeAr, job.employmentType), 'file'], ['Experience', localized(lang, job.experienceAr, job.experienceEn), 'chart'], ['Education', localized(lang, job.educationAr, job.educationEn), 'cap'], ['Language', localized(lang, job.languageAr, job.languageEn), 'globe'],
  ].filter(([, value]) => value)

  return <main className="job-detail-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}><section className="job-detail-hero"><img src={heroImage} alt={title} /><div className="job-detail-hero-overlay"><div className="job-detail-hero-content"><p className="job-breadcrumb"><Link href="/">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link><span>/</span><Link href="/careers">{lang === 'ar' ? 'الوظائف' : 'Careers'}</Link><span>/</span>{title}</p><h1>{title}</h1><p className="job-detail-department">{department} <span>/</span> {localized(lang, job.sectorAr, job.sectorEn)}</p><p className="job-detail-intro">{localized(lang, job.descriptionAr, job.descriptionEn)}</p><a href="#apply" className="job-apply-button">{lang === 'ar' ? 'تقدم الآن' : 'Apply Now'} <span>→</span></a></div></div></section><section className="job-facts-card">{details.map(([label, value, icon]) => <div key={label}><span className={`job-fact-icon ${icon}`}>⌁</span><small>{label}</small><strong>{value}</strong></div>)}</section><section className="job-detail-content"><div><DetailSection label={lang === 'ar' ? 'وصف الوظيفة' : 'JOB DESCRIPTION'} title={lang === 'ar' ? 'ملخص الوظيفة' : 'Job Summary'} text={localized(lang, job.summaryAr, job.summaryEn) || localized(lang, job.descriptionAr, job.descriptionEn)} /><DetailSection label={lang === 'ar' ? 'المسؤوليات' : 'KEY RESPONSIBILITIES'} title={lang === 'ar' ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'} text={localized(lang, job.responsibilitiesAr, job.responsibilitiesEn)} list /></div><div><DetailSection label={lang === 'ar' ? 'التعليم والمؤهلات' : 'EDUCATION & QUALIFICATIONS'} title={lang === 'ar' ? 'التعليم والمؤهلات' : 'Education & Qualifications'} text={localized(lang, job.qualificationsAr, job.qualificationsEn)} list /><DetailSection label={lang === 'ar' ? 'متطلبات الخبرة' : 'EXPERIENCE REQUIREMENTS'} title={lang === 'ar' ? 'متطلبات الخبرة' : 'Experience Requirements'} text={localized(lang, job.experienceRequirementsAr, job.experienceRequirementsEn) || localized(lang, job.requirementsAr, job.requirementsEn)} list /><DetailSection label={lang === 'ar' ? 'بيئة العمل' : 'WORK ENVIRONMENT'} title={lang === 'ar' ? 'بيئة العمل' : 'Work Environment'} text={localized(lang, job.workEnvironmentAr, job.workEnvironmentEn)} list /></div></section><section className="job-detail-apply" id="apply"><div><p className="job-detail-kicker">{lang === 'ar' ? 'الخطوة التالية' : 'TAKE THE NEXT STEP'}<span /></p><h2>{lang === 'ar' ? 'هل أنت مهتم بهذه الفرصة؟' : 'Interested in this opportunity?'}</h2><p>{lang === 'ar' ? `تقدم الآن لوظيفة ${title}.` : `Join ALMATAR as our next ${title}.`}</p></div><ApplicationForm job={job} lang={lang} /></section></main>
}
