'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '../context/LanguageContext';
import AlmatarLogo from './AlmatarLogo';
import QuoteModal from './QuoteModal';

export default function Header({ onOpenDrawer }) {
  const pathname = usePathname();
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const isActive = (path) => pathname === path;

  return (
    <>
      <header className="top-header">
        <div className="top-header-main">
          {/* Full-width container to push Brand Logo to far-left and Navigation & Mega Menu Box to right */}
          <div className="top-header-fullwidth">
            
            {/* Brand Logo Navigation (Most Left) */}
            <div className="brand-text-nav">
              <Link href="/" className="brand-logo-white-badge" aria-label="ALMATAR Homepage">
                <img src="/images/almatar_logo_transparent.png?v=7" alt="ALMATAR Petroleum Services" className="header-logo-img-prominent" />
              </Link>
            </div>

            {/* Desktop Navigation Bar */}
            <nav className="main-nav" aria-label="Main Navigation">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>{t('nav.home')}</Link>
              <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>{t('nav.about')}</Link>
              
              {/* Services Dropdown Item */}
              <div className="nav-item-dropdown">
                <Link href="/well-services" className={`nav-link dropdown-toggle-link ${isActive('/well-services') || isActive('/drilling-fluids') || isActive('/construction') ? 'active' : ''}`}>
                  <span>{t('nav.services')}</span>
                  <svg className="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="nav-dropdown-menu">
                  <div className="dropdown-header-bar">
                    <span className="dropdown-header-text">{t('nav.portfolio')}</span>
                    <span className="dropdown-icon-indicator">&#9662;</span>
                  </div>
                  <div className="dropdown-links-list">
                    <Link href="/well-services" className="dropdown-link-item">• {t('nav.wellServices')}</Link>
                    <Link href="/drilling-fluids" className="dropdown-link-item">• {t('nav.drillingFluids')}</Link>
                    <Link href="/construction" className="dropdown-link-item">• {t('nav.construction')}</Link>
                  </div>
                </div>
              </div>

              <Link href="/trading" className={`nav-link ${isActive('/trading') ? 'active' : ''}`}>{t('nav.trading')}</Link>
              <Link href="/qhse" className={`nav-link ${isActive('/qhse') ? 'active' : ''}`}>{t('nav.qhse')}</Link>
              <Link href="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>{t('nav.careers')}</Link>
              <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>{t('nav.contact')}</Link>
            </nav>

            {/* Header Actions: Request Quote + Language Switcher + Mega Menu Box */}
            <div className="header-actions">
              
              {/* Request a Quote Form Trigger Button */}
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-contact-header header-quote-btn"
                title={t('quoteBtn')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>{t('quoteBtn')}</span>
              </button>

              {/* Arabic / English Toggle Switcher Icon Button */}
              <button
                onClick={toggleLanguage}
                className="lang-switcher-btn"
                title={lang === 'en' ? 'Switch to Arabic (التحويل للعربية)' : 'Switch to English'}
                aria-label="Toggle Language"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
                </svg>
                <span className="lang-switcher-text">{lang === 'en' ? 'العربية' : 'EN'}</span>
              </button>

              {/* Mega Menu Right Box Icon */}
              <div 
                className="megamenu-trigger-wrap"
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <button 
                  className={`grid-menu-btn ${isMegaOpen ? 'active' : ''}`}
                  onClick={() => setIsMegaOpen(!isMegaOpen)}
                  aria-label="Toggle Mega Menu"
                >
                  {isMegaOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="5" cy="5" r="2.2" />
                      <circle cx="12" cy="5" r="2.2" />
                      <circle cx="19" cy="5" r="2.2" />
                      <circle cx="5" cy="12" r="2.2" />
                      <circle cx="12" cy="12" r="2.2" />
                      <circle cx="19" cy="12" r="2.2" />
                      <circle cx="5" cy="19" r="2.2" />
                      <circle cx="12" cy="19" r="2.2" />
                      <circle cx="19" cy="19" r="2.2" />
                    </svg>
                  )}
                </button>

                {/* Mega Menu Dropdown Panel */}
                <div className={`mega-menu-panel ${isMegaOpen ? 'open' : ''}`}>
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid">
                      
                      {/* Card 1: About Us */}
                      <Link href="/about" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card1Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/banner_about_corporate.png?v=2" alt="About Us" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card1Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card1Text')}</p>
                      </Link>

                      {/* Card 2: Well Services */}
                      <Link href="/well-services" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card2Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/banner_well_services_hero.png" alt="Well Services" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card2Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card2Text')}</p>
                      </Link>

                      {/* Card 3: Drilling & Fluids */}
                      <Link href="/drilling-fluids" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card3Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/service_drilling_fluids.png" alt="Drilling & Fluids" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card3Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card3Text')}</p>
                      </Link>

                      {/* Card 4: Construction */}
                      <Link href="/construction" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card4Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/service_construction.png" alt="Construction & Logistics" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card4Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card4Text')}</p>
                      </Link>

                      {/* Card 5: Trading */}
                      <Link href="/trading" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card5Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/service_wellhead.png" alt="Oilfield Trading" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card5Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card5Text')}</p>
                      </Link>

                      {/* Card 6: QHSE Safety */}
                      <Link href="/qhse" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card6Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/qhse_safety.png?v=2" alt="QHSE Commitment" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card6Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card6Text')}</p>
                      </Link>

                      {/* Card 7: Careers */}
                      <Link href="/careers" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card7Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/careers_engineers_hero.png" alt="Careers at AlMatar" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card7Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card7Text')}</p>
                      </Link>

                      {/* Card 8: Contact Us */}
                      <Link href="/contact" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                        <div className="mega-card-header">
                          <span className="mega-card-title">{t('mega.card8Title')}</span>
                          <div className="mega-title-line"></div>
                        </div>
                        <div className="mega-card-img-wrap">
                          <img src="/images/service_site_camp.png" alt="Contact Us" />
                        </div>
                        <h4 className="mega-card-heading">{t('mega.card8Heading')}</h4>
                        <p className="mega-card-text">{t('mega.card8Text')}</p>
                      </Link>

                    </div>
                  </div>
                </div>

              </div>

              <button className="drawer-toggle-btn desktop-hide" onClick={onOpenDrawer} aria-label="Open Side Drawer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

          </div>
        </div>
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </header>
    </>
  );
}
