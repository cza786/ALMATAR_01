'use client';

import { useState, useEffect } from 'react';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { client } from '@/sanity/lib/client';
import { ABOUT_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function loadAboutContent() {
      try {
        const data = await client.fetch(ABOUT_PAGE_QUERY);
        if (data) setAboutData(data);
      } catch (err) {
        console.warn('Using default about page content:', err);
      }
    }
    loadAboutContent();
  }, []);

  const bannerImg = aboutData?.bannerImage
    ? getImageUrl(aboutData.bannerImage, '/images/banner_about_corporate.png?v=2')
    : '/images/banner_about_corporate.png?v=2';

  const operationsImg = aboutData?.operationsImage
    ? getImageUrl(aboutData.operationsImage, '/images/about_field_operations.png')
    : '/images/about_field_operations.png';

  const eyebrow =
    (lang === 'ar' ? aboutData?.eyebrowAr : aboutData?.eyebrowEn) || t('aboutPage.eyebrow');
  const pageTitle =
    (lang === 'ar' ? aboutData?.pageTitleAr : aboutData?.pageTitleEn) || t('aboutPage.title');

  const visionTitle =
    (lang === 'ar' ? aboutData?.visionTitleAr : aboutData?.visionTitleEn) || t('aboutPage.visionTitle');
  const visionDesc =
    (lang === 'ar' ? aboutData?.visionDescAr : aboutData?.visionDescEn) || t('aboutPage.visionDesc');

  const missionTitle =
    (lang === 'ar' ? aboutData?.missionTitleAr : aboutData?.missionTitleEn) || t('aboutPage.missionTitle');
  const missionDesc =
    (lang === 'ar' ? aboutData?.missionDescAr : aboutData?.missionDescEn) || t('aboutPage.missionDesc');

  const syriaTitle =
    (lang === 'ar' ? aboutData?.syriaTitleAr : aboutData?.syriaTitleEn) || t('aboutPage.syriaTitle');
  const syriaDesc =
    (lang === 'ar' ? aboutData?.syriaDescAr : aboutData?.syriaDescEn) || t('aboutPage.syriaDesc');

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Header Banner */}
        <div className="static-page-banner">
          <img src={bannerImg} alt="Almatar Corporate About" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>{eyebrow}</span>
            <h1 className="static-banner-title">{pageTitle}</h1>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="about-hero-card position-relative">
          <div className="about-split-grid">
            <div className="vision-mission-wrap">
              <div className="vm-box">
                <h3 className="vm-title">{visionTitle}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  &ldquo;{visionDesc}&rdquo;
                </p>
              </div>

              <div className="vm-box mission">
                <h3 className="vm-title">{missionTitle}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {missionDesc}
                </p>
              </div>
            </div>

            <div>
              <div className="circle-img-container">
                <img src={operationsImg} alt="Almatar Field Operations" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-hero-card position-relative" style={{ backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1rem' }}>
            {syriaTitle}
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
            {syriaDesc}
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
