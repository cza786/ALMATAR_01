'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import SlantedPortfolioAccordion from '@/components/SlantedPortfolioAccordion';
import NextPageBanner from '@/components/NextPageBanner';
import QuoteModal from '@/components/QuoteModal';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div key={lang}>
      {/* Top Dynamic Hero Carousel Header */}
      <HeroCarousel />

      {/* KEY FIGURES & STATISTICS SECTION (Directly Under Header / Hero) */}
      <section className="home-stats-section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="minimalist-stats-bar">
            {/* Stat 1: 20+ Years */}
            <div className="minimalist-stat-item">
              <div className="stat-big-number">{t('stats.years')}</div>
              <div className="stat-sub-label">{t('stats.yearsLabel')}</div>
            </div>

            <div className="stat-vertical-divider" />

            {/* Stat 2: 300+ Projects */}
            <div className="minimalist-stat-item">
              <div className="stat-big-number">{t('stats.projects')}</div>
              <div className="stat-sub-label">{t('stats.projectsLabel')}</div>
            </div>

            <div className="stat-vertical-divider" />

            {/* Stat 3: 150+ Wells */}
            <div className="minimalist-stat-item">
              <div className="stat-big-number">{t('stats.wells')}</div>
              <div className="stat-sub-label">{t('stats.wellsLabel')}</div>
            </div>

            <div className="stat-vertical-divider" />

            {/* Stat 4: 100% Safety */}
            <div className="minimalist-stat-item">
              <div className="stat-big-number">{t('stats.safety')}</div>
              <div className="stat-sub-label">{t('stats.safetyLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        {/* Main Intro Card */}
        <div className="about-hero-card">
          <div className="about-split-grid">
            <div>
              <span className="section-eyebrow">{t('homeIntro.eyebrow')}</span>
              <h2 className="section-title">{t('homeIntro.title')}</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {t('homeIntro.desc')}
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
                <img src="/images/about_field_operations.png" alt="Drilling Rig Operation" />
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
        bgImage="/images/banner_about_corporate.png"
      />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
