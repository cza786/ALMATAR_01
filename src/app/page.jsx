'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import SlantedPortfolioAccordion from '@/components/SlantedPortfolioAccordion';
import NextPageBanner from '@/components/NextPageBanner';
import QuoteModal from '@/components/QuoteModal';
import { useLanguage } from '@/context/LanguageContext';
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function Home() {
  const { t, lang } = useLanguage();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    async function loadHomeContent() {
      try {
        const data = await getSanityContent('home', HOME_PAGE_QUERY);
        if (data) setHomeData(data);
      } catch (err) {
        console.warn('Using default home content:', err);
      }
    }
    loadHomeContent();
  }, []);

  const introEyebrow =
    (lang === 'ar' ? homeData?.introEyebrowAr : homeData?.introEyebrowEn) || t('homeIntro.eyebrow');
  const introTitle =
    (lang === 'ar' ? homeData?.introTitleAr : homeData?.introTitleEn) || t('homeIntro.title');
  const introDesc =
    (lang === 'ar' ? homeData?.introDescAr : homeData?.introDescEn) || t('homeIntro.desc');
  const introImg = homeData?.introImage
    ? getImageUrl(homeData.introImage, '/images/about_field_operations.png')
    : '/images/about_field_operations.png';

  return (
    <div key={lang}>
      {/* Top Dynamic Hero Carousel Header */}
      <HeroCarousel />

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        {/* Main Intro Card */}
        <div className="about-hero-card">
          <div className="about-split-grid">
            <div>
              <span className="section-eyebrow">{introEyebrow}</span>
              <h2 className="section-title">{introTitle}</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {introDesc}
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn-contact-header">
                  <span>{t('homeIntro.readVision')}</span>
                  <span style={{ marginInlineStart: '6px' }}>&rarr;</span>
                </Link>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="btn-contact-header"
                  style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', boxShadow: '0 4px 15px rgba(2, 132, 199, 0.35)' }}
                >
                  {t('quoteBtn')}
                </button>
              </div>
            </div>

            <div>
              <div className="circle-img-container">
                <img src={introImg} alt="Drilling Rig Operation" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slanted Diagonal Flex Accordion Portfolio Section */}
      <SlantedPortfolioAccordion />

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.about')}
        subtitle={t('hero.learnMore')}
        link="/about"
        bgImage="/images/banner_about_corporate.png?v=2"
      />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
