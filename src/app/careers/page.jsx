'use client'

import '../career-detail.css'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'

function localized(lang, ar, en, fallback = '') { return lang === 'ar' ? (ar || en || fallback) : (en || ar || fallback) }

function Icon({ type }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'people') return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></svg>
  if (type === 'growth') return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /><path d="m14 6 3-3 3 3" /></svg>
  if (type === 'safety') return <svg {...common}><path d="M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>
  return <svg {...common}><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" /></svg>
}

function ApplyModal({ job, lang, onClose }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  async function submit(event) {
    event.preventDefault(); setStatus('sending'); setError('')
    const response = await fetch('/api/careers/apply', { method: 'POST', body: new FormData(event.currentTarget) })
    const result = await response.json()
    if (!response.ok) { setError(result.error || 'Could not submit application.'); setStatus('error'); return }
    setStatus('success')
  }
  return <div className="career-modal-backdrop" role="presentation" onClick={onClose}><section className="career-modal" role="dialog" aria-modal="true" aria-labelledby="career-modal-title" onClick={(event) => event.stopPropagation()}><button type="button" className="career-modal-close" onClick={onClose} aria-label="Close">×</button>{status === 'success' ? <div className="career-success"><span>✓</span><h2>{lang === 'ar' ? 'تم إرسال طلبك' : 'Application sent'}</h2><p>{lang === 'ar' ? 'سيتواصل معك فريق الموارد البشرية قريباً.' : 'Our HR team will review your application and contact you soon.'}</p></div> : <><p className="career-modal-kicker">{lang === 'ar' ? 'التقديم على الوظيفة' : 'APPLY FOR THIS ROLE'}</p><h2 id="career-modal-title">{localized(lang, job.titleAr, job.titleEn)}</h2><p className="career-modal-meta">{localized(lang, job.departmentAr, job.departmentEn)} · {localized(lang, job.locationAr, job.locationEn)}</p><form onSubmit={submit} className="career-application-form"><input type="hidden" name="jobId" value={job._id} /><input type="hidden" name="jobTitle" value={job.titleEn} /><label>{lang === 'ar' ? 'الاسم الكامل' : 'Full name'}<input name="fullName" required /></label><label>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}<input name="email" type="email" required /></label><label>{lang === 'ar' ? 'الهاتف' : 'Phone'}<input name="phone" /></label><label className="career-form-wide">{lang === 'ar' ? 'رسالة' : 'Message'}<textarea name="message" rows="4" /></label><label className="career-form-wide">{lang === 'ar' ? 'السيرة الذاتية (PDF/DOC)' : 'Resume (PDF/DOC)'}<input name="resume" type="file" accept=".pdf,.doc,.docx" required /></label>{error && <p className="career-form-error">{error}</p>}<button className="career-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : (lang === 'ar' ? 'إرسال الطلب' : 'Submit application')} <span>→</span></button></form></>}</section></div>
}

export default function CareersPage() {
  const { lang } = useLanguage()
  const data = useSanityContent('careers', CAREERS_PAGE_QUERY)
  const [department, setDepartment] = useState('all')
  const [location, setLocation] = useState('all')
  const [selectedJob, setSelectedJob] = useState(null)
  const pageTitle = localized(lang, data?.pageTitleAr, data?.pageTitleEn, lang === 'ar' ? 'ابنِ مستقبلك مع المطر' : 'Build Your Future With ALMATAR')
  const pageDesc = localized(lang, data?.pageDescAr, data?.pageDescEn, lang === 'ar' ? 'انضم إلى فريقنا وساهم في صناعة مستقبل أفضل.' : 'Join a team where expertise, ambition and teamwork create real progress.')
  const bannerImage = data?.bannerImage ? getImageUrl(data.bannerImage, '/images/careers_engineers_hero.webp') : '/images/careers_engineers_hero.webp'
  const cultureImage = data?.cultureImage ? getImageUrl(data.cultureImage, '/images/careers_team_walking.webp') : '/images/careers_team_walking.webp'
  const jobs = data?.jobs || []
  const departments = useMemo(() => [...new Set(jobs.map((job) => job.departmentEn).filter(Boolean))], [jobs])
  const locations = useMemo(() => [...new Set(jobs.map((job) => job.locationEn).filter(Boolean))], [jobs])
  const filteredJobs = jobs.filter((job) => (department === 'all' || job.departmentEn === department) && (location === 'all' || job.locationEn === location))

  return <main className="careers-reference-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}><section className="career-reference-hero"><img src={bannerImage} alt="ALMATAR field operations" /><div className="career-reference-hero-overlay"><div><p className="career-reference-kicker">{localized(lang, data?.eyebrowAr, data?.eyebrowEn, 'PEOPLE · GROWTH · INNOVATION')}</p><h1>{pageTitle}</h1><p className="career-reference-hero-desc">{pageDesc}</p><a href="#vacancies" className="career-reference-hero-button">{lang === 'ar' ? 'استكشف الوظائف' : 'Explore vacancies'} <span>→</span></a></div><p className="career-reference-side-label">PEOPLE<br />GROWTH<br />INNOVATION<br />THE FUTURE</p></div></section><section className="career-stat-strip" aria-label="ALMATAR careers facts">{[['people', '38+', lang === 'ar' ? 'عاماً من الخبرة' : 'Years of experience'], ['growth', '15+', lang === 'ar' ? 'تخصصاً مهنياً' : 'Professional disciplines'], ['safety', '100%', lang === 'ar' ? 'التزام بالسلامة' : 'Safety commitment'], ['team', '01', lang === 'ar' ? 'فريق واحد' : 'One team']].map(([icon, value, label]) => <div key={label}><Icon type={icon} /><strong>{value}</strong><span>{label}</span></div>)}</section><section className="career-vacancies-section" id="vacancies"><div className="career-section-heading"><div><p className="career-reference-kicker">{lang === 'ar' ? 'الفرص المتاحة' : 'JOIN THE TEAM'}</p><h2>{lang === 'ar' ? 'الوظائف الشاغرة الحالية' : 'Current Vacancies'}</h2></div><p>{lang === 'ar' ? 'اكتشف دورك القادم مع المطر.' : 'Find your next opportunity with ALMATAR.'}</p></div><div className="career-filters"><select value={department} onChange={(event) => setDepartment(event.target.value)}><option value="all">{lang === 'ar' ? 'كل الأقسام' : 'All departments'}</option>{departments.map((item) => <option key={item} value={item}>{item}</option>)}</select><select value={location} onChange={(event) => setLocation(event.target.value)}><option value="all">{lang === 'ar' ? 'كل المواقع' : 'All locations'}</option>{locations.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>{filteredJobs.length ? <div className="career-job-grid">{filteredJobs.map((job) => <article className="career-job-card" key={job._id}><div className="career-job-card-top"><span className="career-job-icon"><Icon type="team" /></span><span className="career-open-badge">{lang === 'ar' ? 'مفتوحة' : 'OPEN'}</span></div><h3>{localized(lang, job.titleAr, job.titleEn)}</h3><p className="career-job-meta">{localized(lang, job.departmentAr, job.departmentEn)} · {localized(lang, job.locationAr, job.locationEn)}</p><p className="career-job-type">{localized(lang, job.employmentTypeAr, job.employmentType, 'Full-time')}</p><p className="career-job-description">{localized(lang, job.descriptionAr, job.descriptionEn, lang === 'ar' ? 'انضم إلى فريقنا المتخصص.' : 'Join our specialist team and help deliver field-proven energy solutions.')}</p><Link className="career-job-card-link" href={`/careers/${job.slug || job._id}`}>{lang === 'ar' ? 'عرض الوظيفة والتقديم' : 'View role & apply'} <span>→</span></Link></article>)}</div> : <div className="career-empty-state">{lang === 'ar' ? 'لا توجد وظائف مفتوحة حالياً. يرجى العودة قريباً.' : 'There are no open vacancies at the moment. Please check back soon.'}</div>}</section><section className="career-why-section"><div className="career-why-image"><img src={cultureImage} alt={lang === 'ar' ? 'فريق المطر في موقع العمل' : 'ALMATAR team in the field'} /></div><div className="career-why-copy"><p className="career-reference-kicker">{lang === 'ar' ? 'لماذا تعمل معنا' : 'WHY WORK WITH US'}</p><h2>{lang === 'ar' ? 'الخبرة تصنع التقدم' : 'Experience creates progress.'}</h2><p>{lang === 'ar' ? 'نمنح كل شخص مساحة للنمو والتعلم وصنع تأثير حقيقي في قطاع الطاقة.' : 'We give every person room to learn, grow and make a meaningful impact across the energy sector.'}</p><div className="career-why-points"><div><Icon type="growth" /><span>{lang === 'ar' ? 'نمو مهني مستمر' : 'Professional growth'}</span></div><div><Icon type="people" /><span>{lang === 'ar' ? 'ثقافة تعاونية' : 'Collaborative culture'}</span></div><div><Icon type="safety" /><span>{lang === 'ar' ? 'سلامة أولاً' : 'Safety first'}</span></div><div><Icon type="team" /><span>{lang === 'ar' ? 'أثر حقيقي' : 'Real impact'}</span></div></div></div></section></main>
}
