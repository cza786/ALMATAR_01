'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function QuoteModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      serviceType: '',
      projectDescription: ''
    });
    onClose();
  };

  const serviceOptions = t('quote.servicesOptions') || [];

  return (
    <div className="quote-modal-overlay" onClick={handleClose}>
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="quote-modal-close" onClick={handleClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="quote-success-state">
            <div className="quote-success-icon">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="quote-modal-title">{t('quote.successTitle')}</h3>
            <p className="quote-modal-sub">{t('quote.successDesc')}</p>
            <button className="btn-contact-header" onClick={handleClose} style={{ marginTop: '1.5rem', cursor: 'pointer' }}>
              {t('quote.closeBtn')}
            </button>
          </div>
        ) : (
          <>
            <div className="quote-modal-header">
              <div className="quote-header-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>ALMATAR Technical Procurement</span>
              </div>
              <h2 className="quote-modal-title">{t('quote.modalTitle')}</h2>
              <p className="quote-modal-sub">{t('quote.modalSub')}</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form-grid">
              {/* Row 1: Name & Company */}
              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label htmlFor="quote-name">{t('quote.nameLabel')} <span className="required-star">*</span></label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    required
                    placeholder={t('quote.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    className="quote-form-input"
                  />
                </div>

                <div className="quote-form-group">
                  <label htmlFor="quote-company">{t('quote.companyLabel')}</label>
                  <input
                    type="text"
                    id="quote-company"
                    name="company"
                    placeholder={t('quote.companyPlaceholder')}
                    value={formData.company}
                    onChange={handleChange}
                    className="quote-form-input"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service Type */}
              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label htmlFor="quote-phone">{t('quote.phoneLabel')} <span className="required-star">*</span></label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    required
                    placeholder={t('quote.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="quote-form-input"
                  />
                </div>

                <div className="quote-form-group">
                  <label htmlFor="quote-service">{t('quote.serviceLabel')}</label>
                  <select
                    id="quote-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="quote-form-select"
                  >
                    <option value="">{t('quote.serviceSelectDefault')}</option>
                    {Array.isArray(serviceOptions) && serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Project Description */}
              <div className="quote-form-group full-width">
                <label htmlFor="quote-desc">{t('quote.descLabel')}</label>
                <textarea
                  id="quote-desc"
                  name="projectDescription"
                  rows="4"
                  placeholder={t('quote.descPlaceholder')}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="quote-form-textarea"
                />
              </div>

              <div className="quote-form-actions">
                <button type="submit" className="quote-submit-btn">
                  <span>{t('quote.submitBtn')}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
