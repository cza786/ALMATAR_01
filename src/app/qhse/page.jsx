'use client'

import '../qhse.css'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { QHSE_PAGE_QUERY } from '@/sanity/lib/queries'
import { getImageUrl } from '@/sanity/lib/image'
import { useSanityContent } from '@/sanity/lib/fetchData'
import { QHSE_FALLBACK } from '@/data/qhseFallback'

const text = (lang, item, key, fallback = '') => item ? (item[`${key}${lang === 'ar' ? 'Ar' : 'En'}`] || item[`${key}${lang === 'ar' ? 'En' : 'Ar'}`] || fallback) : fallback
const image = (value, fallback) => value ? (typeof value === 'string' ? value : getImageUrl(value, fallback)) : fallback

function Icon({ name = 'shield' }) {
  const paths = {
    shield: <><path d="M12 3 20 6v5.5c0 4.7-3.3 8.2-8 9.8-4.7-1.6-8-5.1-8-9.8V6l8-3Z" /><path d="m8.7 12 2.1 2.1 4.7-4.8" /></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></>,
    hardhat: <><path d="M4 17h16M6 17v-3a6 6 0 0 1 12 0v3M3 17h18v3H3z" /></>,
    leaf: <><path d="M20 4C9 4 4 9 4 20c8.5 0 14-4.5 16-16Z" /><path d="M4 20c3-5 7-8 12-10" /></>,
    report: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="m19 15 2 1-2 3-2-1a8 8 0 0 1-3 2v2h-4v-2a8 8 0 0 1-3-2l-2 1-2-3 2-1a8 8 0 0 1 0-6L3 8l2-3 2 1a8 8 0 0 1 3-2V2h4v2a8 8 0 0 1 3 2l2-1 2 3-2 1a8 8 0 0 1 0 6Z" /></>,
  }
  return <svg className="qhse-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.shield}</svg>
}

function Heading({ eyebrow, title }) {
  return <div className="qhse-heading"><p>{eyebrow}</p><h2>{title}</h2></div>
}

function Table({ headers, rows }) {
  return <div className="qhse-table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={`${row.join('-')}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
}

export default function QhsePage() {
  const { lang } = useLanguage()
  const data = useSanityContent('qhse', QHSE_PAGE_QUERY) || QHSE_FALLBACK
  const [openDocument, setOpenDocument] = useState(null)
  const ar = lang === 'ar'
  const pick = (key, fallback = '') => data[`${key}${ar ? 'Ar' : 'En'}`] || data[`${key}${ar ? 'En' : 'Ar'}`] || fallback
  const protocols = data.protocols || []
  const documents = data.documents || []

  return <main className="qhse-page" dir={ar ? 'rtl' : 'ltr'}>
    <section className="qhse-hero"><img src={image(data.heroImage, '/images/qhse-hero.webp')} alt={pick('heroTitle')} /><div className="qhse-hero-overlay"><div className="qhse-container"><p className="qhse-eyebrow">{pick('heroEyebrow')}</p><h1>{pick('heroTitle')}</h1><p>{pick('heroDescription')}</p></div></div></section>

    <section className="qhse-container qhse-section qhse-commitment"><div className="qhse-two-col"><div><Heading eyebrow={pick('commitmentEyebrow')} title={pick('commitmentTitle')} /><p className="qhse-lead">{pick('commitmentDescription')}</p></div><img className="qhse-commitment-image" src={image(data.commitmentImage, '/images/qhse_safety.webp')} alt={pick('commitmentTitle')} /></div><div className="qhse-card-grid four">{(data.commitmentCards || []).map((item, index) => <article className="qhse-soft-card" key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><h3>{text(lang, item, 'title')}</h3><p>{text(lang, item, 'detail')}</p></article>)}</div></section>

    <section className="qhse-container qhse-section"><div className="qhse-two-col qhse-policy-grid"><div><Heading eyebrow={pick('policyEyebrow')} title={pick('policyTitle')} /></div><div className="qhse-bullet-grid">{(data.policyBullets || []).map((item, index) => <div className="qhse-bullet" key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><span>{text(lang, item, 'title')}</span></div>)}</div></div></section>

    <section className="qhse-container qhse-section qhse-split-section"><div><Heading eyebrow={pick('objectivesEyebrow')} title={pick('objectivesTitle')} /><Table headers={ar ? ['الهدف', 'مؤشر الأداء', 'المستهدف'] : ['Objective', 'KPI', 'Target']} rows={(data.objectives || []).map((item) => [text(lang, item, 'objective'), text(lang, item, 'kpi'), text(lang, item, 'target')])} /></div><div><Heading eyebrow={pick('governanceEyebrow')} title={pick('governanceTitle')} /><div className="qhse-card-grid three">{(data.governanceCards || []).map((item, index) => <article className="qhse-outline-card" key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><h3>{text(lang, item, 'title')}</h3><p>{text(lang, item, 'detail')}</p></article>)}</div></div></section>

    <section className="qhse-container qhse-section"><Heading eyebrow={pick('protocolsEyebrow')} title={pick('protocolsTitle')} /><div className="qhse-protocol-grid">{protocols.map((item, index) => <article className="qhse-protocol-card" key={`${item.titleEn}-${index}`}><img src={image(item.image, '/images/qhse_safety.webp')} alt={text(lang, item, 'title')} /><div><h3>{text(lang, item, 'title')}</h3><small>{item.code}</small><ul>{(ar ? item.bulletsAr : item.bulletsEn || item.bulletsAr || item.bulletsEn)?.slice(0, 4).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section>

    <section className="qhse-container qhse-section qhse-split-section"><div><Heading eyebrow={pick('toleranceEyebrow')} title={pick('toleranceTitle')} /><Table headers={ar ? ['السياسة', 'المرجع'] : ['Policy', 'Reference']} rows={(data.tolerancePolicies || []).map((item) => [text(lang, item, 'policy'), text(lang, item, 'reference')])} /></div><div><Heading eyebrow={pick('emergencyEyebrow')} title={pick('emergencyTitle')} /><Table headers={ar ? ['الحالة', 'الاستجابة', 'المرجع'] : ['Scenario', 'Response', 'Reference']} rows={(data.emergencyRows || []).map((item) => [text(lang, item, 'scenario'), text(lang, item, 'response'), text(lang, item, 'reference')])} /></div></section>

    <section className="qhse-qms"><div className="qhse-container"><Heading eyebrow={pick('qmsEyebrow')} title={pick('qmsTitle')} /><div className="qhse-qms-intro"><p>{pick('qmsDescription')}</p><div className="qhse-qms-image"><img src={image(data.qmsImage, '/images/qhse_inspection_team.webp')} alt={pick('qmsTitle')} /><span>{pick('qmsImageNote')}</span></div></div><div className="qhse-certifications">{(data.certifications || []).map((item, index) => <div key={`${item.code}-${index}`}><Icon name="shield" /><strong>{item.code}</strong><span>{text(lang, item, 'detail')}</span></div>)}</div><div className="qhse-process">{(data.qmsSteps || []).map((item, index) => <div key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><span>{text(lang, item, 'title')}</span></div>)}</div></div></section>

    <section className="qhse-container qhse-section"><Heading eyebrow={pick('auditEyebrow')} title={pick('auditTitle')} /><div className="qhse-card-grid four">{(data.auditCards || []).map((item, index) => <article className="qhse-soft-card" key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><h3>{text(lang, item, 'title')}</h3><p>{text(lang, item, 'detail')}</p></article>)}</div></section>

    <section className="qhse-container qhse-section"><Heading eyebrow={pick('metricsEyebrow')} title={pick('metricsTitle')} /><div className="qhse-metrics">{(data.metrics || []).map((item, index) => <div key={`${item.titleEn}-${index}`}><Icon name={item.icon} /><span>{text(lang, item, 'title')}</span><strong>{item.value}</strong></div>)}</div></section>

    <section className="qhse-container qhse-section"><Heading eyebrow={pick('documentsEyebrow')} title={pick('documentsTitle')} /><div className="qhse-documents"><Table headers={ar ? ['#', 'السياسة', 'المرجع', 'الإجراء'] : ['#', 'Policy', 'Reference', 'Action']} rows={documents.map((item, index) => [index + 1, text(lang, item, 'policy'), text(lang, item, 'reference'), <button type="button" key={`${item.policyEn}-button`} onClick={() => setOpenDocument(item)}>{ar ? 'عرض / تنزيل' : 'View / Download'} →</button>])} /></div></section>

    <section className="qhse-cta"><div className="qhse-container"><div><p className="qhse-eyebrow">{ar ? 'تواصل معنا' : 'GET IN TOUCH'}</p><h2>{pick('ctaTitle')}</h2><p>{pick('ctaDescription')}</p></div><a href={`mailto:${data.ctaEmail || 'qhse@almatar-oil.com'}`}>{data.ctaEmail || 'qhse@almatar-oil.com'} <span>→</span></a></div></section>

    {openDocument && <div className="qhse-modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setOpenDocument(null)}><section className="qhse-modal" role="dialog" aria-modal="true"><button type="button" className="qhse-modal-close" onClick={() => setOpenDocument(null)}>×</button><h2>{text(lang, openDocument, 'policy')}</h2>{openDocument.fileUrl || openDocument.url ? <iframe src={`${openDocument.fileUrl || openDocument.url}#toolbar=0`} title={text(lang, openDocument, 'policy')} /> : <p>{ar ? 'لم يتم تحميل وثيقة لهذه السياسة بعد.' : 'No document has been uploaded for this policy yet.'}</p>}</section></div>}
  </main>
}
