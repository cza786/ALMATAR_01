'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '../context/LanguageContext';

export default function SideDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(true); // Collapsible state
  const pathname = usePathname();
  const { lang, toggleLanguage, t } = useLanguage();

  const serviceSubItems = [
    { href: '/well-services#well-intervention', label: `• ${t('drawer.subItems.wellIntervention')}` },
    { href: '/well-services#coiled-tubing', label: `• ${t('drawer.subItems.coiledTubing')}` },
    { href: '/well-services#stimulation-tanks', label: `• ${t('drawer.subItems.stimulationTanks')}` },
    { href: '/well-services#wellhead-xmas-tree', label: `• ${t('drawer.subItems.wellheadXmasTree')}` },
    { href: '/well-services#slickline', label: `• ${t('drawer.subItems.slickline')}` },
    { href: '/well-services#surface-testing', label: `• ${t('drawer.subItems.surfaceTesting')}` }
  ];

  return (
    <div className={`side-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="side-drawer">
        <div className="drawer-header">
          <Link href="/" onClick={onClose} aria-label="ALMATAR Homepage">
            <img src="/images/almatar_logo_transparent.png?v=12" alt="ALMATAR Petroleum Services" style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }} />
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
            <span>{lang === 'en' ? 'التحويل إلى العربية (Arabic)' : 'Switch to English'}</span>
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
              <Link href="/about" className={`drawer-nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.about')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Collapsible Services Portfolio Item */}
          <div className="drawer-nav-item">
            <div
              className={`drawer-nav-link ${pathname === '/well-services' ? 'active' : ''}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <span style={{ fontWeight: 700 }}>{t('nav.portfolio')}</span>
              <span className={`drawer-arrow ${isServicesOpen ? 'expanded' : ''}`}>
                {isServicesOpen ? '▾' : '›'}
              </span>
            </div>

            {/* Collapsible Sub-menu items */}
            {isServicesOpen && (
              <div className="drawer-sub-container">
                {serviceSubItems.map((sub, idx) => (
                  <div key={idx} className="drawer-nav-sub-item">
                    <Link
                      href={sub.href}
                      className="drawer-nav-link sub-link"
                      onClick={onClose}
                    >
                      <span>{sub.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drilling & Fluids */}
          {('drilling'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/drilling-fluids" className={`drawer-nav-link ${pathname === '/drilling-fluids' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.drillingFluids')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Construction */}
          {('construction'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/construction" className={`drawer-nav-link ${pathname === '/construction' ? 'active' : ''}`} onClick={onClose}>
                <span>{t('nav.construction')}</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

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
            <p>📍 {t('contact.locationValue')}</p>
            <p>📞 Tel: 00963 52 426 915</p>
            <p>📱 Mob: 00963 93 982 2415 | 00963 93 140 7723</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
