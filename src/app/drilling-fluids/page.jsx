'use client';

import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function DrillingFluidsPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Header Banner */}
        <div className="static-page-banner">
          <img src="/images/banner_drilling_hero.png" alt="Drilling and Fluid Chemistry" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>{t('drillingFluidsPage.eyebrow')}</span>
            <h1 className="static-banner-title">{t('drillingFluidsPage.title')}</h1>
          </div>
        </div>

        <div className="cards-grid">
          <div className="solid-card">
            <div className="card-img-wrap">
              <img src="/images/service_directional_drilling.png" alt="Drilling & Workover" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{t('drillingFluidsPage.card1Title')}</h3>
              <p className="card-text">
                {t('drillingFluidsPage.card1Desc')}
              </p>
              <ul className="card-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> {t('drillingFluidsPage.card1Point1')}</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> {t('drillingFluidsPage.card1Point2')}</li>
              </ul>
            </div>
          </div>

          <div className="solid-card">
            <div className="card-img-wrap">
              <img src="/images/service_drilling_fluids.png" alt="Drilling Fluid Chemistry" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{t('drillingFluidsPage.card2Title')}</h3>
              <p className="card-text">
                {t('drillingFluidsPage.card2Desc')}
              </p>
              <ul className="card-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> {t('drillingFluidsPage.card2Point1')}</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> {t('drillingFluidsPage.card2Point2')}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.construction')}
        subtitle={t('hero.learnMore')}
        link="/construction"
        bgImage="/images/service_heavy_logistics.png"
      />
    </>
  );
}
