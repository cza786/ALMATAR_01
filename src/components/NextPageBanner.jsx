'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function NextPageBanner({ title, subtitle, link, bgImage }) {
  const { t } = useLanguage();
  const displaySubtitle = subtitle || t('hero.learnMore') || "Learn more";

  return (
    <section className="next-page-banner-section">
      <Link href={link} className="next-page-banner-wrapper" aria-label={`Navigate to ${title}`}>
        <div className="next-page-bg">
          <img src={bgImage} alt={title} />
          <div className="next-page-overlay"></div>
        </div>
        
        <div className="container next-page-content text-center">
          <h2 className="next-page-title">{title}</h2>
          <div className="next-page-link">
            <span className="next-arrow">&rarr;</span>
            <span>{displaySubtitle}</span>
          </div>
        </div>
      </Link>
    </section>
  );
}

