'use client';

import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Header Banner */}
        <div className="static-page-banner">
          <img src="/images/banner_about_corporate.png" alt="Almatar Corporate About" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>{t('aboutPage.eyebrow')}</span>
            <h1 className="static-banner-title">{t('aboutPage.title')}</h1>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="about-hero-card position-relative">
          <div className="about-split-grid">
            <div className="vision-mission-wrap">
              <div className="vm-box">
                <h3 className="vm-title">{t('aboutPage.visionTitle')}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  &ldquo;{t('aboutPage.visionDesc')}&rdquo;
                </p>
              </div>

              <div className="vm-box mission">
                <h3 className="vm-title">{t('aboutPage.missionTitle')}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {t('aboutPage.missionDesc')}
                </p>
              </div>
            </div>

            <div>
              <div className="circle-img-container">
                <img src="/images/about_field_operations.png" alt="Almatar Field Operations" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-hero-card position-relative" style={{ backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1rem' }}>{t('aboutPage.syriaTitle')}</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
            {t('aboutPage.syriaDesc')}
          </p>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.wellServices')}
        subtitle={t('hero.learnMore')}
        link="/well-services"
        bgImage="/images/banner_well_services_hero.png"
      />
    </>
  );
}
