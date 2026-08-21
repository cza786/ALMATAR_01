'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function Footer() {
  const { t, lang } = useLanguage();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSanityContent('settings', SITE_SETTINGS_QUERY);
        if (data) setSettings(data);
      } catch (err) {
        console.warn('Using default footer settings:', err);
      }
    }
    loadSettings();
  }, []);

  const logoImg = settings?.logo
    ? getImageUrl(settings.logo, '/images/almatar_logo_raw.png?v=5')
    : '/images/almatar_logo_raw.png?v=5';

  const desc =
    (lang === 'ar' ? settings?.descriptionAr : settings?.descriptionEn) || t('footer.desc');
  const email = settings?.contactEmail || 'info@almatar-oil.com';

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/" aria-label="ALMATAR Homepage" className="footer-logo-white-badge">
              <img src={logoImg} alt="ALMATAR Logo" className="footer-logo-img-prominent" />
            </Link>
            <p style={{ marginTop: '1.2rem' }}>{desc}</p>
          </div>

          <div>
            <h4 className="footer-heading">{t('footer.pages')}</h4>
            <ul className="footer-links">
              <li><Link href="/">{t('nav.home')}</Link></li>
              <li><Link href="/about">{t('nav.about')}</Link></li>
              <li><Link href="/well-services">{t('nav.wellServices')}</Link></li>
              <li><Link href="/drilling-fluids">{t('nav.drillingFluids')}</Link></li>
              <li><Link href="/construction">{t('nav.construction')}</Link></li>
              <li><Link href="/qhse">{t('nav.qhse')}</Link></li>
              <li><Link href="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">{t('footer.capabilities')}</h4>
            <ul className="footer-links">
              <li><Link href="/well-services">• {t('nav.wellServices')}</Link></li>
              <li><Link href="/drilling-fluids">• {t('nav.drillingFluids')}</Link></li>
              <li><Link href="/construction">• {t('nav.construction')}</Link></li>
              <li><Link href="/trading">• {t('nav.trading')}</Link></li>
              <li><Link href="/qhse">• {t('nav.qhse')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">{t('footer.contactDetails')}</h4>
            <ul className="footer-links footer-contact-list">
              <li>
                <a href={`mailto:${email}`} className="footer-contact-link">
                  ✉️ {email}
                </a>
              </li>

              {/* Interactive Email Button */}
              <li style={{ marginTop: '0.8rem' }}>
                <a
                  href={`mailto:${email}`}
                  className="interactive-contact-btn btn-email"
                  title="Email ALMATAR"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>{t('footer.emailBtn')}</span>
                </a>
              </li>

              {/* Direct Link to Quote Form */}
              <li style={{ marginTop: '0.4rem' }}>
                <Link
                  href="/contact"
                  className="interactive-contact-btn"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff'
                  }}
                  title="Request Technical Quote"
                >
                  <span>📋 {t('quoteBtn')}</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {(lang === 'ar' ? settings?.copyrightAr : settings?.copyrightEn) || t('footer.rights')}
          </div>
          <div>
            {t('footer.location')}
          </div>
        </div>
      </div>
    </footer>
  );
}
