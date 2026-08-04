'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CareersPage() {
  const { t } = useLanguage();

  const whyIcons = [
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    )
  ];

  const rawWhyItems = t('careers.whyItems') || [];
  const whyWorkItems = rawWhyItems.map((item, idx) => ({
    ...item,
    icon: whyIcons[idx % whyIcons.length]
  }));

  const benefitIcons = [
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M6 12h.01M18 12h.01"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 9v6M9 12h6"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20M4 18v-4a8 8 0 0 1 16 0v4M9 10a3 3 0 0 1 6 0"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v-4h-4V8H8V4H4v16h16v-4z"/>
        <circle cx="6" cy="2" r="2"/>
      </svg>
    ),
    (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    )
  ];

  const rawBenefits = t('careers.benefitsItems') || [];
  const employeeBenefits = rawBenefits.map((item, idx) => ({
    ...item,
    icon: benefitIcons[idx % benefitIcons.length]
  }));

  return (
    <>
      {/* ===================== 1. HERO SECTION ===================== */}
      <section className="cr-hero">
        <div className="cr-hero-bg">
          <img src="/images/careers_engineers_hero.png" alt="Build Your Future With ALMATAR" />
          <div className="cr-hero-overlay" />
        </div>
        <div className="cr-hero-content container">
          <span className="cr-hero-eyebrow">{t('careers.heroEyebrow')}</span>
          <h1 className="cr-hero-title">
            {t('careers.heroTitle')}
          </h1>
          <p className="cr-hero-desc">
            {t('careers.heroDesc')}
          </p>
          <a href="#submit-cv" className="cr-hero-btn">
            {t('careers.joinTeam')} <span className="cr-btn-arrow">&rsaquo;</span>
          </a>
        </div>
      </section>

      {/* ===================== 2. WHY WORK WITH ALMATAR ===================== */}
      <section className="cr-why-section">
        <div className="container">
          <div className="cr-section-header">
            <span className="cr-eyebrow-gold">{t('careers.whyWorkEyebrow')}</span>
            <h2 className="cr-main-heading">{t('careers.whyWorkHeading')}</h2>
            <p className="cr-lead-desc">
              {t('careers.whyWorkLead')}
            </p>
          </div>

          <div className="cr-why-grid">
            {whyWorkItems.map((item, idx) => (
              <div key={idx} className="cr-why-box">
                <div className="cr-why-icon">{item.icon}</div>
                <h3 className="cr-why-box-title">{item.title}</h3>
                <p className="cr-why-box-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. OUR PEOPLE, OUR STRENGTH ===================== */}
      <section className="cr-strength-section">
        <div className="cr-strength-grid">
          {/* Left Column: Dark Content */}
          <div className="cr-strength-content">
            <span className="cr-eyebrow-gold">OUR PEOPLE, OUR STRENGTH</span>
            <h2 className="cr-strength-heading">Together, We Achieve More</h2>
            <p className="cr-strength-desc">
              We believe in building long-term relationships with our employees based on trust,
              respect and teamwork. At ALMATAR, you&apos;ll find a supportive environment where your
              ideas are valued and your contributions matter.
            </p>
            <Link href="/about" className="cr-hero-btn">
              LEARN MORE ABOUT US <span className="cr-btn-arrow">&rsaquo;</span>
            </Link>
          </div>

          {/* Right Column: Team Image */}
          <div className="cr-strength-img-wrap">
            <img
              src="/images/careers_team_walking.png"
              alt="Together, We Achieve More — ALMATAR Engineers Team"
              className="cr-strength-img"
            />
          </div>
        </div>
      </section>

      {/* ===================== 4. EMPLOYEE BENEFITS ===================== */}
      <section className="cr-benefits-section">
        <div className="container">
          <div className="cr-benefits-header">
            <span className="cr-eyebrow-gold">{t('careers.benefitsEyebrow')}</span>
            <div className="cr-gold-accent-bar" />
          </div>

          <div className="cr-benefits-grid">
            {employeeBenefits.map((item, idx) => (
              <div key={idx} className="cr-benefit-box">
                <div className="cr-benefit-icon">{item.icon}</div>
                <h3 className="cr-benefit-box-title">{item.title}</h3>
                <p className="cr-benefit-box-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 5. READY TO MAKE A DIFFERENCE CTA ===================== */}
      <section id="submit-cv" className="cr-cta-banner">
        <div className="container">
          <div className="cr-cta-inner">
            <div className="cr-cta-left">
              <div className="cr-cta-icon-circle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <div className="cr-cta-text-group">
                <span className="cr-cta-eyebrow">{t('careers.ctaEyebrow')}</span>
                <h2 className="cr-cta-heading">
                  {t('careers.ctaHeading')}
                </h2>
              </div>
            </div>

            <a href="mailto:info@almatar.com?subject=Job%20Application%20-%20ALMATAR%20Careers" className="cr-cta-btn">
              {t('careers.submitCv')} <span className="cr-cta-btn-arrow">&rsaquo;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
