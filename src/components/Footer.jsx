'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/">
              <img src="/images/almatar_logo_transparent.png" alt="ALMATAR Logo" className="footer-logo-img" />
            </Link>
            <p>{t('footer.desc')}</p>
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
            <ul className="footer-links">
              <li><span style={{ color: '#d1d5db' }}>📍 {t('contact.locationValue')}</span></li>
              <li><a href="tel:0096352426915" style={{ color: '#d1d5db' }}>📞 Tel: 00963 52 426 915</a></li>
              <li><a href="tel:00963939822415" style={{ color: '#d1d5db' }}>📱 Mob: 00963 93 982 2415</a></li>
              <li><a href="tel:00963931407723" style={{ color: '#d1d5db' }}>📱 Mob: 00963 93 140 7723</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </div>
          <div>
            {t('footer.location')}
          </div>
        </div>
      </div>
    </footer>
  );
}
