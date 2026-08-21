'use client';

import { useState, useEffect } from 'react';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [sanityData, setSanityData] = useState(null);
  const [settingsData, setSettingsData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    async function loadSanityContent() {
      try {
        const [contactRes, settingsRes] = await Promise.all([
          getSanityContent('contact', CONTACT_PAGE_QUERY),
          getSanityContent('settings', SITE_SETTINGS_QUERY),
        ]);
        if (contactRes) setSanityData(contactRes);
        if (settingsRes) setSettingsData(settingsRes);
      } catch (err) {
        console.warn('Using default contact page content:', err);
      }
    }
    loadSanityContent();
  }, []);

  const bannerImgUrl = sanityData?.bannerImage
    ? getImageUrl(sanityData.bannerImage, '/images/banner_about_corporate.png?v=2')
    : '/images/banner_about_corporate.png?v=2';

  const heroEyebrow =
    (lang === 'ar' ? sanityData?.eyebrowAr : sanityData?.eyebrowEn) || t('contact.eyebrow');
  const heroTitle =
    (lang === 'ar' ? sanityData?.pageTitleAr : sanityData?.pageTitleEn) || t('contact.title');
  const heroDesc =
    (lang === 'ar' ? sanityData?.descAr : sanityData?.descEn) || t('contact.desc');

  const quoteTitle =
    (lang === 'ar' ? sanityData?.quoteTitleAr : sanityData?.quoteTitleEn) ||
    (lang === 'ar' ? 'طلب عرض أسعار فني' : 'REQUEST A QUOTATION');
  const quoteDesc =
    (lang === 'ar' ? sanityData?.quoteDescAr : sanityData?.quoteDescEn) ||
    (lang === 'ar'
      ? 'يرجى تزويدنا بتفاصيل مشروعكم وسيقوم فريقنا الهندسي بإعداد العرض الفني المناسب.'
      : 'Provide your project details below and our technical engineering team will prepare a formal proposal.');

  const emailAddresses =
    sanityData?.emailAddresses?.length > 0
      ? sanityData.emailAddresses
      : settingsData?.contactEmail
      ? [settingsData.contactEmail]
      : ['info@almatar-oil.com'];

  const contactCards = [
    {
      id: 'email',
      type: t('contact.emailLabel').toUpperCase(),
      label: t('contact.emailLabel'),
      value: emailAddresses[0] || 'info@almatar-oil.com',
      href: `mailto:${emailAddresses[0] || 'info@almatar-oil.com'}`,
      isExternal: false,
    },
    {
      id: 'quote',
      type: (lang === 'ar' ? 'طلب عرض أسعار فني' : 'TECHNICAL QUOTATION'),
      label: (lang === 'ar' ? 'استجابة سريعة' : 'Engineering Proposal'),
      value: (lang === 'ar' ? 'يرجى تزويدنا بتفاصيل مشروعكم عبر النموذج أدناه' : 'Submit your technical specifications via the form'),
      href: '#quote-form-section',
      isExternal: false,
    }
  ];

  const iconMap = {
    email: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    quote: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to submit form. Please try again.');
        // If API responds with error, keep user informed
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = t('quote.servicesOptions') || [];

  return (
    <>
      {/* HERO BANNER */}
      <section className="ctp-hero">
        <div className="ctp-hero-bg">
          <img src={bannerImgUrl} alt="Contact ALMATAR Headquarters" />
          <div className="ctp-hero-overlay" />
        </div>
        <div className="ctp-hero-content container text-center">
          <span className="ctp-hero-eyebrow">{heroEyebrow}</span>
          <h1 className="ctp-hero-title">{heroTitle}</h1>
          <div className="ctp-hero-accent" />
          <p className="ctp-hero-desc">{heroDesc}</p>
        </div>
      </section>

      {/* SPLIT SECTION: VERTICAL CARDS STACK (LEFT) & REQUEST A QUOTE FORM (RIGHT) */}
      <section className="ctp-split-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="ctp-split-grid">
            
            {/* LEFT COLUMN: VERTICAL STACK OF 4 CONTACT CARDS */}
            <div className="ctp-cards-stack">
              {contactCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  className="stack-contact-card"
                >
                  <div className="stack-card-icon-wrap">
                    {iconMap[card.id]}
                  </div>

                  <div className="stack-card-content">
                    <h4 className="stack-card-title">{card.type}</h4>
                    
                    <div className="stack-card-text">
                      {Array.isArray(card.value)
                        ? card.value.map((v, i) => <span key={i} className="stack-val-line">{v}</span>)
                        : <span className="stack-val-line">{card.value}</span>
                      }
                    </div>

                    {card.id === 'email' && (
                      <span className="stack-action-pill">{t('contact.emailBtn')}</span>
                    )}
                    {card.id === 'quote' && (
                      <span className="stack-action-pill" style={{ background: 'var(--accent-cyan)', color: '#ffffff' }}>
                        {lang === 'ar' ? 'نموذج الطلب' : 'Request Form'} &rarr;
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* RIGHT COLUMN: REQUEST A QUOTATION FORM CARD */}
            <div className="ctp-form-column">
              <div className="quote-modal-card split-form-card">
                
                {submitted ? (
                  <div className="quote-success-state text-center">
                    <div className="quote-success-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="quote-modal-title">{t('quote.successTitle')}</h3>
                    <p className="quote-modal-sub">{t('quote.successDesc')}</p>
                    <button
                      className="btn-contact-header"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', company: '', phone: '', serviceType: '', projectDescription: '' });
                      }}
                      style={{ marginTop: '1.5rem', cursor: 'pointer' }}
                    >
                      {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="quote-modal-header" style={{ marginBottom: '2rem' }}>
                      <h2 className="quote-modal-title" style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', letterSpacing: '-0.5px' }}>
                        {quoteTitle}
                      </h2>
                      <p className="quote-modal-sub" style={{ color: '#64748b', fontSize: '0.95rem' }}>
                        {quoteDesc}
                      </p>
                    </div>

                    {submitError && (
                      <div style={{ padding: '0.75rem 1rem', background: '#fef2f2', color: '#dc2626', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem', border: '1px solid #fecaca' }}>
                        ⚠️ {submitError}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="split-form-grid">
                      {/* Row 1: Name & Company */}
                      <div className="quote-form-row">
                        <div className="quote-form-group">
                          <label htmlFor="split-quote-name" className="light-form-label">
                            {t('quote.nameLabel')} <span className="required-star">*</span>
                          </label>
                          <input
                            type="text"
                            id="split-quote-name"
                            name="name"
                            required
                            placeholder={t('quote.namePlaceholder')}
                            value={formData.name}
                            onChange={handleInputChange}
                            className="light-form-input"
                          />
                        </div>

                        <div className="quote-form-group">
                          <label htmlFor="split-quote-company" className="light-form-label">
                            {t('quote.companyLabel')}
                          </label>
                          <input
                            type="text"
                            id="split-quote-company"
                            name="company"
                            placeholder={t('quote.companyPlaceholder')}
                            value={formData.company}
                            onChange={handleInputChange}
                            className="light-form-input"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Service Type */}
                      <div className="quote-form-row">
                        <div className="quote-form-group">
                          <label htmlFor="split-quote-phone" className="light-form-label">
                            {t('quote.phoneLabel')} <span className="required-star">*</span>
                          </label>
                          <input
                            type="tel"
                            id="split-quote-phone"
                            name="phone"
                            required
                            placeholder={t('quote.phonePlaceholder')}
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="light-form-input"
                          />
                        </div>

                        <div className="quote-form-group">
                          <label htmlFor="split-quote-service" className="light-form-label">
                            {t('quote.serviceLabel')}
                          </label>
                          <select
                            id="split-quote-service"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="light-form-select"
                          >
                            <option value="">{t('quote.serviceSelectDefault')}</option>
                            {serviceOptions.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Project Description */}
                      <div className="quote-form-group full-width">
                        <label htmlFor="split-quote-desc" className="light-form-label">
                          {t('quote.descLabel')}
                        </label>
                        <textarea
                          id="split-quote-desc"
                          name="projectDescription"
                          rows="4"
                          placeholder={t('quote.descPlaceholder')}
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          className="light-form-textarea"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="quote-form-submit-wrap" style={{ marginTop: '1.5rem' }}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-contact-header light-submit-btn"
                        >
                          {isSubmitting
                            ? (lang === 'ar' ? 'جاري الإرسال إلى النظام...' : 'Submitting to Sanity...')
                            : (lang === 'ar' ? 'إرسال طلب عرض الأسعار' : 'SUBMIT QUOTATION REQUEST')}
                        </button>
                      </div>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEXT PAGE BANNER */}
      <NextPageBanner
        title={t('nav.home')}
        subtitle={t('hero.learnMore')}
        link="/"
        bgImage="/images/hero_drilling_rig.png"
      />
    </>
  );
}
