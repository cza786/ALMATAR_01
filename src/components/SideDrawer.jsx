'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '../context/LanguageContext';

export default function SideDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();

  const desktopServiceSubItems = [
    { href: '/well-services', label: t('nav.wellServices') },
    { href: '/drilling-fluids', label: t('nav.drillingFluids') },
    { href: '/construction', label: t('nav.construction') },
  ];

  return (
    <div className={`side-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="side-drawer">
        <div className="drawer-header">
          <Link href="/" onClick={onClose} aria-label="ALMATAR Homepage">
            <img src="/images/almatar_logo_transparent.webp?v=12" alt="ALMATAR Petroleum Services" style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }} />
          </Link>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Side Drawer">&times;</button>
        </div>

        <div className="drawer-search">
          <div className="search-input-wrap">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder={t('drawer.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Language Switcher */}
        <div style={{ padding: '0.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={toggleLanguage}
            className="lang-switcher-btn"
            style={{ width: '100%', justifyContent: 'center' }}
            aria-label="Toggle Language"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{t('drawer.switchLang')}</span>
          </button>
        </div>

        <nav className="drawer-nav">
          
          {/* Home */}
          {('home'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/" className={`drawer-nav-link ${pathname === '/' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.home')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* About */}
          {('about'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <div className={`drawer-nav-split ${pathname === '/about' ? 'active' : ''}`}>
                <Link href="/about" className="drawer-nav-primary" onClick={onClose}>{t('nav.about')}</Link>
                <button type="button" className={`drawer-submenu-trigger ${isAboutOpen ? 'expanded' : ''}`} onClick={() => setIsAboutOpen(!isAboutOpen)} aria-expanded={isAboutOpen} aria-controls="drawer-about-menu" aria-label={`Open ${t('nav.about')} menu`}>
                  <span className="drawer-arrow">⌄</span>
                </button>
              </div>
              {isAboutOpen && (
                <div className="drawer-sub-container" id="drawer-about-menu">
                  <div className="drawer-nav-sub-item">
                    <Link href="/our-team" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• {t('nav.ourTeam')}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Collapsible Services Portfolio Item */}
          <div className="drawer-nav-item">
            <div className={`drawer-nav-split ${pathname === '/services' || pathname === '/well-services' || pathname === '/drilling-fluids' || pathname === '/construction' ? 'active' : ''}`}>
              <Link href="/services" className="drawer-nav-primary" onClick={onClose}>{t('nav.services')}</Link>
              <button type="button" className={`drawer-submenu-trigger ${isServicesOpen ? 'expanded' : ''}`} onClick={() => setIsServicesOpen(!isServicesOpen)} aria-expanded={isServicesOpen} aria-controls="drawer-services-menu" aria-label={`Open ${t('nav.services')} menu`}>
                <span className="drawer-arrow">⌄</span>
              </button>
            </div>

            {/* Collapsible Sub-menu items */}
            {isServicesOpen && (
              <div className="drawer-sub-container" id="drawer-services-menu">
                {desktopServiceSubItems.map((sub) => (
                  <div key={sub.href} className="drawer-nav-sub-item">
                    <Link
                      href={sub.href}
                      className="drawer-nav-link sub-link"
                      onClick={onClose}
                    >
                      <span>• {sub.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trading */}
          {('trading'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/trading" className={`drawer-nav-link ${pathname === '/trading' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.trading')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* QHSE */}
          {('qhse'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/qhse" className={`drawer-nav-link ${pathname === '/qhse' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.qhse')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Careers */}
          {('careers'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/careers" className={`drawer-nav-link ${pathname === '/careers' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.careers')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Policies */}
          {('policies'.includes(searchTerm.toLowerCase()) || 'employee security'.includes(searchTerm.toLowerCase()) || 'substance abuse'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <div className={`drawer-nav-split ${pathname.startsWith('/policies') ? 'active' : ''}`}>
                <Link href="/policies" className="drawer-nav-primary" onClick={onClose}>{t('nav.policies')}</Link>
                <button type="button" className={`drawer-submenu-trigger ${isPoliciesOpen ? 'expanded' : ''}`} onClick={() => setIsPoliciesOpen(!isPoliciesOpen)} aria-expanded={isPoliciesOpen} aria-controls="drawer-policies-menu" aria-label={`Open ${t('nav.policies')} menu`}>
                  <span className="drawer-arrow">⌄</span>
                </button>
              </div>
              {isPoliciesOpen && (
                <div className="drawer-sub-container" id="drawer-policies-menu">
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/health-safety-and-environment.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Quality, Health, Safety &amp; Environment (QHSE)</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Employee Security and Site Safety</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Anti-Bribery and Gifts Policy</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/conflict-of-interest-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>Conflict of Interest Policy</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/vehicle-and equipment-usage-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Vehicle and Equipment Usage</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/substance-abuse-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Substance Abuse Policy</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Incident Reporting and Crisis Management</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/Confidentiality-and-data-protection-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Confidentiality and Data Protection</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/employment-affairs-and-workplace-conduct-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Employment Affairs and Workplace Conduct</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/procurement-and-supply-chain-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Procurement and Supply Chain</span>
                    </Link>
                  </div>
                  <div className="drawer-nav-sub-item">
                    <Link href="/images/policies-photo/pdfs/quality-policy.pdf" target="_blank" rel="noreferrer" className="drawer-nav-link sub-link" onClick={onClose}>
                      <span>• Quality Policy</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}


          {/* Contact */}
          {('contact'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/contact" className={`drawer-nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.contact')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

        </nav>

        <div className="drawer-footer">
          <div className="drawer-contact-info">
            <p>✉️ <a href="mailto:info@almatar-oil.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@almatar-oil.com</a></p>
            <div style={{ marginTop: '0.8rem' }}>
              <a
                href="mailto:info@almatar-oil.com"
                className="interactive-contact-btn btn-email"
                style={{ display: 'inline-flex', padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <span>✉️ {t('footer.emailBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
