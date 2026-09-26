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
  return (
    <main className="cms-page" dir={dir}>
      <section className="cms-page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,10,20,.88), rgba(5,10,20,.28)), url(${hero})` }}>
        <div className="cms-page-hero-copy">
          <span>{localField(content, 'heroEyebrow', lang) || data.adminTitle || localField(data, 'title', lang)}</span>
          <h1>{localField(content, 'heroTitle', lang) || localField(content, 'pageTitle', lang) || localField(data, 'title', lang) || data.adminTitle}</h1>
          <p>{localField(content, 'heroDescription', lang) || localField(content, 'pageDescription', lang)}</p>
        </div>
      </section>
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
              {section.cards?.length > 0 && <div className="cms-card-grid">{section.cards.map((card, cardIndex) => <article key={card._key || cardIndex}><h3>{localField(card, 'title', lang)}</h3><p>{localField(card, 'description', lang)}</p>{getImageUrl(card.image) && <img src={getImageUrl(card.image)} alt="" />}</article>)}</div>}
            </section>
          )
        })}
      </div>
    </main>
  )
}
