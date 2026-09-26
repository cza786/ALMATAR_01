'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { SITE_SETTINGS_QUERY, CONTACT_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { useSanityContent } from '@/sanity/lib/fetchData';

export default function Footer() {
  const { t, lang } = useLanguage();
  const settings = useSanityContent('settings', SITE_SETTINGS_QUERY);
  const contact = useSanityContent('contact', CONTACT_PAGE_QUERY);

  const logoImg = settings?.logo
    ? getImageUrl(settings.logo, '/images/almatar_logo_raw.webp?v=5')
    : '/images/almatar_logo_raw.webp?v=5';

  const desc = (lang === 'ar' ? settings?.descriptionAr : settings?.descriptionEn) || settings?.descriptionEn || t('footer.desc');
  const email = settings?.contactEmail || contact?.emailAddresses?.[0] || 'info@almatar-oil.com';
  const qhseLabel = t('nav.qhse').replace(/\s+safety$/i, '');
  const copyright = (lang === 'ar' ? settings?.copyrightAr : settings?.copyrightEn) || settings?.copyrightEn || t('footer.rights');
  const headOffice = (lang === 'ar' ? contact?.headOfficeAr : contact?.headOfficeEn) || contact?.headOfficeEn || t('footer.headOffice');
  const headOfficeAddress = (lang === 'ar' ? contact?.headOfficeAddressAr : contact?.headOfficeAddressEn) || contact?.headOfficeAddressEn || t('footer.location');
  const companyOffice = (lang === 'ar' ? contact?.companyOfficeAr : contact?.companyOfficeEn) || contact?.companyOfficeEn || t('footer.companyOffice');
  const companyOfficeAddress = (lang === 'ar' ? contact?.companyOfficeAddressAr : contact?.companyOfficeAddressEn) || contact?.companyOfficeAddressEn || t('footer.companyOfficeAddress');

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/" aria-label="Al-Matar Company homepage" className="footer-logo-white-badge">
              <img src={logoImg} alt="Al-Matar Company logo" className="footer-logo-img-prominent" />
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
              <li><Link href="/qhse">{qhseLabel}</Link></li>
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

              <li className="footer-address-item">
                <strong>{headOffice}</strong>
                <span>{headOfficeAddress}</span>
              </li>
              <li className="footer-address-item">
                <strong>{companyOffice}</strong>
                <span>{companyOfficeAddress}</span>
              </li>

            </ul>
          </div>

        </div>
        {settings?.socialLinks?.length > 0 && <div className="footer-social-links">{settings.socialLinks.map((social) => <a key={social._key || social.url} href={social.url} target="_blank" rel="noreferrer">{social.platform}</a>)}</div>}

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {copyright}
          </div>
          <div>
            {t('footer.location')}
          </div>
        </div>
      </div>
    </footer>
  );
}
