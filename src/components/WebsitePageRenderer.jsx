'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { getImageUrl } from '@/sanity/lib/image'

const localField = (item, field, lang) => {
  if (!item) return ''
  const primary = `${field}${lang === 'ar' ? 'Ar' : 'En'}`
  const fallback = `${field}${lang === 'ar' ? 'En' : 'Ar'}`
  return item[primary] || item[fallback] || ''
}

export default function WebsitePageRenderer({ data }) {
  const { lang } = useLanguage()
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  if (!data) return null

  const content = data.pageContent || data
  const hero = getImageUrl(content.heroImage || data.image, '/images/hero_drilling_rig.webp')
  const stats = content.stats || data.stats || []
  const cta = content.cta || data.cta
  const documents = content.documents || data.documents || []
  const heroGradient = lang === 'ar'
    ? 'linear-gradient(270deg, rgba(5,10,20,.88), rgba(5,10,20,.28))'
    : 'linear-gradient(90deg, rgba(5,10,20,.88), rgba(5,10,20,.28))'
  return (
    <main className="cms-page" dir={dir}>
      <section className="cms-page-hero" style={{ backgroundImage: `${heroGradient}, url(${hero})` }}>
        <div className="cms-page-hero-copy">
          <span>{localField(content, 'heroEyebrow', lang) || data.adminTitle || localField(data, 'title', lang)}</span>
          <h1>{localField(content, 'heroTitle', lang) || localField(content, 'pageTitle', lang) || localField(data, 'title', lang) || data.adminTitle}</h1>
          <p>{localField(content, 'heroDescription', lang) || localField(content, 'pageDescription', lang)}</p>
        </div>
      </section>
      {stats.length > 0 && <section className="cms-page-stats">{stats.map((stat, index) => <div key={stat._key || index}><strong>{stat.value}</strong><span>{localField(stat, 'label', lang)}</span></div>)}</section>}
      {content.introTitleEn || content.introTitleAr || content.introDescriptionEn || content.introDescriptionAr ? <section className="cms-page-intro"><div><span className="cms-eyebrow">{localField(content, 'introEyebrow', lang)}</span><h2>{localField(content, 'introTitle', lang)}</h2><p>{localField(content, 'introDescription', lang)}</p></div>{getImageUrl(content.introImage) && <img src={getImageUrl(content.introImage)} alt={lang === 'ar' ? content.introImageAltAr || content.introImageAltEn || '' : content.introImageAltEn || ''} />}</section> : null}
      <div className="cms-page-sections">
        {content.sections?.map((section, index) => {
          const image = getImageUrl(section.image)
          const bullets = section[lang === 'ar' ? 'bulletsAr' : 'bulletsEn'] || section.bulletsEn || []
          return (
            <section className={`cms-content-section ${index % 2 ? 'cms-content-section-reverse' : ''}`} key={section._key || section.sectionKey || index}>
              <div className="cms-content-copy">
                {localField(section, 'eyebrow', lang) && <span className="cms-eyebrow">{localField(section, 'eyebrow', lang)}</span>}
                <h2>{localField(section, 'title', lang) || section.sectionKey}</h2>
                <p>{localField(section, 'description', lang)}</p>
                {bullets.length > 0 && <ul>{bullets.map((bullet, bulletIndex) => <li key={`${section._key || index}-${bulletIndex}`}>{bullet}</li>)}</ul>}
                {section.ctaLink && (section.ctaLabelEn || section.ctaLabelAr) && <Link href={section.ctaLink}>{localField(section, 'ctaLabel', lang)} →</Link>}
              </div>
              {image && <img src={image} alt={lang === 'ar' ? section.imageAltAr || section.imageAltEn || '' : section.imageAltEn || ''} />}
              {section.cards?.length > 0 && <div className="cms-card-grid">{section.cards.map((card, cardIndex) => <article key={card._key || cardIndex}><h3>{localField(card, 'title', lang)}</h3><p>{localField(card, 'description', lang)}</p>{getImageUrl(card.image) && <img src={getImageUrl(card.image)} alt="" />}{card.link && <Link href={card.link}>{lang === 'ar' ? 'اقرأ المزيد' : 'Learn more'} →</Link>}</article>)}</div>}
            </section>
          )
        })}
      </div>
      {documents.length > 0 && <section className="cms-page-documents"><h2>{lang === 'ar' ? 'المستندات' : 'Documents'}</h2><div>{documents.map((document, index) => { const href = document.fileUrl || document.url; return href ? <a key={document._key || index} href={href} target="_blank" rel="noreferrer"><strong>{localField(document, 'title', lang)}</strong><span>{localField(document, 'description', lang)}</span><em>↓</em></a> : null })}</div></section>}
      {cta && (cta.titleEn || cta.titleAr) && <section className="cms-page-cta" style={getImageUrl(cta.image) ? { backgroundImage: `linear-gradient(90deg, rgba(5,10,20,.9), rgba(5,10,20,.45)), url(${getImageUrl(cta.image)})` } : undefined}><div><span className="cms-eyebrow">{lang === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}</span><h2>{localField(cta, 'title', lang)}</h2><p>{localField(cta, 'description', lang)}</p>{cta.link && <Link href={cta.link}>{localField(cta, 'button', lang) || (lang === 'ar' ? 'اعرف المزيد' : 'Learn more')} →</Link>}</div></section>}
    </main>
  )
}
