'use client';

import { useState, useEffect } from 'react';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { client } from '@/sanity/lib/client';
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';

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
          client.fetch(CONTACT_PAGE_QUERY),
          client.fetch(SITE_SETTINGS_QUERY),
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

  const officeAddress =
    (lang === 'ar'
      ? sanityData?.officeAddressAr || settingsData?.addressAr
      : sanityData?.officeAddressEn || settingsData?.addressEn) || t('contact.locationValue');

  const whatsappNum =
    sanityData?.whatsappNumber || '00963 93 982 2415';
  const phoneNumbers =
    sanityData?.phoneNumbers?.length > 0
      ? sanityData.phoneNumbers
      : settingsData?.contactPhone
      ? [settingsData.contactPhone, settingsData.secondaryPhone].filter(Boolean)
      : ['00963 93 982 2415', '00963 93 140 7723'];

  const emailAddresses =
    sanityData?.emailAddresses?.length > 0
      ? sanityData.emailAddresses
      : settingsData?.contactEmail
      ? [settingsData.contactEmail]
      : ['info@almatar.com'];

  const contactCards = [
    {
      id: 'location',
      type: t('contact.locationLabel').toUpperCase(),
      label: t('contact.locationLabel'),
      value: officeAddress,
      href: '#our-location-map',
      isExternal: false,
      badge: t('contact.mappedBadge').toUpperCase(),
    },
    {
      id: 'whatsapp',
      type: 'WHATSAPP DIRECT',
      label: 'Interactive Chat',
      value: whatsappNum,
      href: `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}`,
      isExternal: true,
      badge: 'FAST RESPONSE',
    },
    {
      id: 'mobile',
      type: t('contact.mobileLabel').toUpperCase(),
      label: t('contact.mobileLabel'),
      value: phoneNumbers,
      href: `tel:${phoneNumbers[0]?.replace(/[^0-9+]/g, '')}`,
      isExternal: false,
    },
    {
      id: 'email',
      type: t('contact.emailLabel').toUpperCase(),
      label: t('contact.emailLabel'),
      value: emailAddresses[0] || 'info@almatar.com',
      href: `mailto:${emailAddresses[0] || 'info@almatar.com'}`,
      isExternal: false,
    },
  ];

  const iconMap = {
    location: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    whatsapp: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.555 4.109 1.524 5.834L0 24l6.326-1.654C8.007 23.279 9.946 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.496-5.073-1.362l-.364-.21-3.766.985.1-3.668-.235-.374A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
    ),
    mobile: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.35z" />
      </svg>
    ),
    email: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
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

                    {card.id === 'location' && (
                      <span className="stack-action-link">🗺️ {t('contact.openMap')} &rarr;</span>
                    )}
                    {card.id === 'whatsapp' && (
                      <span className="stack-action-link">💬 {t('contact.whatsappBtn')} &rarr;</span>
                    )}
                    {card.id === 'email' && (
                      <span className="stack-action-pill">{t('contact.emailBtn')}</span>
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

      {/* INTERACTIVE LOCATION MAP SECTION */}
      <section id="our-location-map" className="ctp-map-section">
        <div className="container">
          <div className="ctp-map-header">
            <div>
              <span className="ctp-hero-eyebrow" style={{ color: 'var(--accent-gold)' }}>{t('contact.mapEyebrow')}</span>
              <h2 className="ctp-map-title">{t('contact.mapTitle')}</h2>
            </div>
            <a
              href="https://maps.app.goo.gl/rZ9DLZ6nyEhxMC2n7"
              target="_blank"
              rel="noopener noreferrer"
              className="ctp-map-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {t('contact.openMap')}
            </a>
          </div>

          <div className="ctp-map-wrapper">
            <iframe
              title="ALMATAR Headquarters Map"
              src={sanityData?.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106465.25997621422!2d36.2307289!3d33.5138073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e3940!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="ctp-map-iframe"
            />

            <div className="ctp-map-overlay-card">
              <div className="ctp-overlay-badge">
                <span className="ctp-dot-active" /> ALMATAR Headquarters
              </div>
              <h3 className="ctp-overlay-heading">{t('contact.overlayHeading')}</h3>
              <p className="ctp-overlay-sub">
                {t('contact.overlaySub')}
              </p>
              <div className="ctp-overlay-meta">
                <div className="ctp-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.35z"/></svg>
                  <span>{phoneNumbers[0] || '00963 52 426 915'}</span>
                </div>
                <div className="ctp-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>{emailAddresses[0] || 'info@almatar.com'}</span>
                </div>
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
