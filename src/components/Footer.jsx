'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import AlmatarLogo from './AlmatarLogo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/" aria-label="ALMATAR Homepage" className="footer-logo-white-badge">
              <img src="/images/almatar_logo.png" alt="ALMATAR Logo" className="footer-logo-img-prominent" />
            </Link>
            <p style={{ marginTop: '1.2rem' }}>{t('footer.desc')}</p>
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
              <li><span style={{ color: '#475569' }}>📍 {t('contact.locationValue')}</span></li>
              <li><a href="tel:0096352426915" style={{ color: '#475569' }}>📞 Tel: 00963 52 426 915</a></li>
              <li><a href="tel:00963939822415" style={{ color: '#475569' }}>📱 Mob: 00963 93 982 2415</a></li>
              
              {/* Interactive WhatsApp Button */}
              <li style={{ marginTop: '0.6rem' }}>
                <a
                  href="https://wa.me/963939822415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-contact-btn btn-whatsapp"
                  title="WhatsApp ALMATAR"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.555 4.109 1.524 5.834L0 24l6.326-1.654C8.007 23.279 9.946 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.496-5.073-1.362l-.364-.21-3.766.985.1-3.668-.235-.374A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span>{t('footer.whatsappBtn')}</span>
                </a>
              </li>

              {/* Interactive Email Button */}
              <li style={{ marginTop: '0.4rem' }}>
                <a
                  href="mailto:info@almatar.com"
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
