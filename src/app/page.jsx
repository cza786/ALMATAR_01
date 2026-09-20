'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import SlantedPortfolioAccordion from '@/components/SlantedPortfolioAccordion';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function Home() {
  const { t, lang } = useLanguage();
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
    ? getImageUrl(homeData.introImage, '/images/about_field_operations.webp?v=15')
    : '/images/about_field_operations.webp?v=15';

  return (
    <main className="home-page" key={lang}>
      {/* Top Dynamic Hero Carousel Header */}
      <HeroCarousel />

      <section id="about-almatar" className="home-intro-section">
        <div className="container">
          <div className="home-intro-panel">
            <div className="home-intro-copy">
              <span className="section-eyebrow">{introEyebrow}</span>
              <h2 className="section-title">{introTitle}</h2>
              <p className="home-intro-description">
                {introDesc}
              </p>
              <Link href="/about" className="home-intro-link">
                <span>{t('homeIntro.readVision')}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="home-intro-visual">
              <img
                src={introImg}
                alt="ALMATAR Field Operations & Oilfield Engineering"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slanted Diagonal Flex Accordion Portfolio Section */}
      <SlantedPortfolioAccordion />

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title={t('nav.about')}
        subtitle={t('hero.learnMore')}
        link="/about"
        bgImage="/images/banner_about_corporate.webp?v=2"
      />

    </main>
  );
}
