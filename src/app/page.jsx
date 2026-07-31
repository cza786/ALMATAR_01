'use client';

import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import SlantedPortfolioAccordion from '@/components/SlantedPortfolioAccordion';
import NextPageBanner from '@/components/NextPageBanner';

export default function Home() {
  return (
    <>
      {/* Top Dynamic Hero Carousel Header */}
      <HeroCarousel />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
        {/* Main Intro Card */}
        <div className="about-hero-card">
          <div className="about-split-grid">
            <div>
              <span className="section-eyebrow">ABOUT ALMATAR</span>
              <h2 className="section-title">INTEGRATED OILFIELD & PROJECTS MANAGEMENT</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                ALMATAR is a provider of oil and gas supplies and services in Syria supporting onshore oil operations in the region. Our vision is to build on our reputation within the SYR OPCO and expand further through technical collaboration with internationally reputed organizations.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/about" className="btn-contact-header">Read Company Vision & Mission &rarr;</Link>
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
        title="About us"
        subtitle="Learn more"
        link="/about"
        bgImage="/images/banner_about_corporate.png"
      />
    </>
  );
}
