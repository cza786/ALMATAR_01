'use client';

import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function QhsePage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Header Banner */}
        <div className="static-page-banner">
          <img src="/images/qhse_safety.png?v=2" alt="QHSE Safety Commitment" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-green)' }}>{t('qhsePage.eyebrow')}</span>
            <h1 className="static-banner-title">{t('qhsePage.title')}</h1>
          </div>
        </div>

        <div className="about-hero-card">
          <div className="about-split-grid">
            <div>
              <h2 className="section-title" style={{ color: 'var(--accent-gold)' }}>{t('qhsePage.title')}</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-dark)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {t('qhsePage.desc')}
              </p>
            </div>
            <div>
              <div className="circle-img-container">
                <img src="/images/qhse_inspection_team.png" alt="QHSE Safety Inspection Team" />
              </div>
            </div>
          </div>

          <div className="cards-grid" style={{ marginTop: '2.5rem' }}>
            <div className="solid-card">
              <div className="card-body">
                <h3 className="card-title">🛡️ {t('qhsePage.commit1Title')}</h3>
                <p className="card-text">{t('qhsePage.commit1Desc')}</p>
              </div>
            </div>

            <div className="solid-card">
              <div className="card-body">
                <h3 className="card-title">📜 {t('qhsePage.commit2Title')}</h3>
                <p className="card-text">{t('qhsePage.commit2Desc')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.contact')}
        subtitle={t('hero.learnMore')}
        link="/contact"
        bgImage="/images/service_site_camp.png"
      />
    </>
  );
}
