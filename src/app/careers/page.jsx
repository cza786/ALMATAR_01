'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CAREERS_PAGE_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function CareersPage() {
  const { t, lang } = useLanguage();
  const [careersData, setCareersData] = useState(null);
  const [settingsData, setSettingsData] = useState(null);

  useEffect(() => {
    async function loadCareersContent() {
      try {
        const [careersRes, settingsRes] = await Promise.all([
          getSanityContent('careers', CAREERS_PAGE_QUERY),
          getSanityContent('settings', SITE_SETTINGS_QUERY),
        ]);
        if (careersRes) setCareersData(careersRes);
        if (settingsRes) setSettingsData(settingsRes);
      } catch (err) {
        console.warn('Using default careers content:', err);
      }
    }
    loadCareersContent();
  }, []);

  const bannerImg = careersData?.bannerImage
    ? getImageUrl(careersData.bannerImage, '/images/careers_engineers_hero.png')
    : '/images/careers_engineers_hero.png';

  const cultureImg = careersData?.cultureImage
    ? getImageUrl(careersData.cultureImage, '/images/careers_team_walking.png')
    : '/images/careers_team_walking.png';

  const heroEyebrow =
    (lang === 'ar' ? careersData?.eyebrowAr : careersData?.eyebrowEn) || t('careers.heroEyebrow');
  const heroTitle =
    (lang === 'ar' ? careersData?.pageTitleAr : careersData?.pageTitleEn) || t('careers.heroTitle');
  const heroDesc =
    (lang === 'ar' ? careersData?.pageDescAr : careersData?.pageDescEn) || t('careers.heroDesc');

  const contactEmail = settingsData?.contactEmail || 'info@almatar-oil.com';

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

  const openPositions = careersData?.openPositions || [];

  return (
    <>
      {/* ===================== 1. HERO SECTION ===================== */}
      <section className="cr-hero">
        <div className="cr-hero-bg">
          <img src={bannerImg} alt="Build Your Future With ALMATAR" />
          <div className="cr-hero-overlay" />
        </div>
        <div className="cr-hero-content container">
          <span className="cr-hero-eyebrow">{heroEyebrow}</span>
          <h1 className="cr-hero-title">
            {heroTitle}
          </h1>
          <p className="cr-hero-desc">
            {heroDesc}
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
            <span className="cr-eyebrow-gold">{t('careers.whyWorkEyebrow')}</span>
            <h2 className="cr-strength-heading">{t('careers.whyWorkHeading')}</h2>
            <p className="cr-strength-desc">
              {t('careers.whyWorkLead')}
            </p>
            <Link href="/about" className="cr-hero-btn">
              {t('hero.learnMore')} <span className="cr-btn-arrow">&rsaquo;</span>
            </Link>
          </div>

          {/* Right Column: Team Image */}
          <div className="cr-strength-img-wrap">
            <img
              src={cultureImg}
              alt="Together, We Achieve More — ALMATAR Engineers Team"
              className="cr-strength-img"
            />
          </div>
        </div>
      </section>

      {/* ===================== OPEN POSITIONS (IF AVAILABLE IN SANITY) ===================== */}
      {openPositions.length > 0 && (
        <section className="cr-why-section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <div className="cr-section-header">
              <span className="cr-eyebrow-gold">{lang === 'ar' ? 'الوظائف المتاحة' : 'OPEN VACANCIES'}</span>
              <h2 className="cr-main-heading">{lang === 'ar' ? 'انضم إلى كادرنا المتخصص' : 'Current Job Opportunities'}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {openPositions.map((pos, i) => (
                <div key={i} style={{ background: '#ffffff', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      {(lang === 'ar' ? pos.departmentAr : pos.departmentEn) || 'Engineering'}
                    </span>
                    <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', color: '#475569' }}>
                      {(lang === 'ar' ? pos.typeAr : pos.typeEn) || 'Full-time'}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>
                    {(lang === 'ar' ? pos.titleAr : pos.titleEn) || 'Engineer'}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {(lang === 'ar' ? pos.descriptionAr : pos.descriptionEn) || ''}
                  </p>
                  <a
                    href={`mailto:${contactEmail}?subject=Application%20for%20${encodeURIComponent(pos.titleEn || 'Position')}`}
                    className="btn-contact-header"
                    style={{ fontSize: '0.85rem', padding: '8px 16px', display: 'inline-block' }}
                  >
                    {lang === 'ar' ? 'تقديم الآن عبر البريد' : 'Apply via Email'} &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

            <a href={`mailto:${contactEmail}?subject=Job%20Application%20-%20ALMATAR%20Careers`} className="cr-cta-btn">
              {t('careers.submitCv')} <span className="cr-cta-btn-arrow">&rsaquo;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
