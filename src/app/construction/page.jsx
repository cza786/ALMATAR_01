'use client';

import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function ConstructionPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Header Banner */}
        <div className="static-page-banner">
          <img src="/images/service_construction.png" alt="Construction & Logistics" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>{t('constructionPage.eyebrow')}</span>
            <h1 className="static-banner-title">{t('constructionPage.title')}</h1>
          </div>
        </div>

        <div className="about-hero-card">
          <h2 className="section-title">{t('constructionPage.title')}</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            {t('constructionPage.card1Desc')}
          </p>

          <div className="cards-grid" style={{ marginTop: '2rem' }}>
            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/service_heavy_logistics.png" alt="Logistics & Heavy Transportations" />
              </div>
              <div className="card-body">
                <h3 className="card-title">🚛 {t('constructionPage.card1Title')}</h3>
                <p className="card-text">{t('constructionPage.card1Desc')}</p>
              </div>
            </div>

            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/service_manpower_supply.png" alt="Manpower Supply" />
              </div>
              <div className="card-body">
                <h3 className="card-title">👷 {t('constructionPage.card2Title')}</h3>
                <p className="card-text">{t('constructionPage.card2Desc')}</p>
              </div>
            </div>

            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/frac_tanks.png" alt="FRAC Tanks & Containment" />
              </div>
              <div className="card-body">
                <h3 className="card-title">🛢️ {t('constructionPage.card3Title')}</h3>
                <p className="card-text">{t('constructionPage.card3Desc')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.trading')}
        subtitle={t('hero.learnMore')}
        link="/trading"
        bgImage="/images/service_drilling_fluids.png"
      />
    </>
  );
}
