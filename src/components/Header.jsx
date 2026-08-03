'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ onOpenDrawer }) {
  const pathname = usePathname();
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <header className="top-header">
      <div className="top-header-main">
        {/* Full-width container to push Brand Logo to far-left and Navigation & Mega Menu Box to right */}
        <div className="top-header-fullwidth">
          
          {/* Brand Logo Navigation (Most Left) */}
          <div className="brand-text-nav">
            <Link href="/" className="brand-title-link brand-header-link brand-logo-wrapper" aria-label="ALMATAR Homepage">
              <img src="/images/almatar_logo_transparent.png" alt="ALMATAR Petroleum Services" className="header-logo-img" />
            </Link>
          </div>

          {/* Desktop Navigation Bar: Home, Services, Trading, Careers, Contact */}
          <nav className="main-nav" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            
            {/* Services Dropdown Item */}
            <div className="nav-item-dropdown">
              <Link href="/well-services" className={`nav-link dropdown-toggle-link ${isActive('/well-services') ? 'active' : ''}`}>
                <span>Services</span>
                <svg className="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="nav-dropdown-menu">
                <div className="dropdown-header-bar">
                  <span className="dropdown-header-text">Services Portfolio</span>
                  <span className="dropdown-icon-indicator">&#9662;</span>
                </div>
                <div className="dropdown-links-list">
                  <Link href="/well-services" className="dropdown-link-item">• Well Intervention</Link>
                  <Link href="/well-services" className="dropdown-link-item">• Coiled Tubing & Nitrogen</Link>
                  <Link href="/well-services" className="dropdown-link-item">• Stimulation & Tanks</Link>
                  <Link href="/well-services" className="dropdown-link-item">• Wellhead & Xmas Tree</Link>
                  <Link href="/well-services" className="dropdown-link-item">• Slickline Services</Link>
                  <Link href="/well-services" className="dropdown-link-item">• Surface Well Testing</Link>
                  <Link href="/drilling-fluids" className="dropdown-link-item">• Drilling & Workover</Link>
                  <Link href="/construction" className="dropdown-link-item">• Construction Services</Link>
                </div>
              </div>
            </div>

            <Link href="/trading" className={`nav-link ${isActive('/trading') ? 'active' : ''}`}>Trading</Link>
            <Link href="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>Careers</Link>
            <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </nav>

          {/* Header Actions: Far-Right Mega Menu Box (:::) */}
          <div className="header-actions">
            {/* Mega Menu Right Box Icon (::: inspired by reference image) */}
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
                        <span className="mega-card-title">ABOUT US</span>
                        <div className="mega-title-line"></div>
                      </div>
                      <div className="mega-card-img-wrap">
                        <img src="/images/banner_about_corporate.png" alt="About Us" />
                      </div>
                      <h4 className="mega-card-heading">Who We Are</h4>
                      <p className="mega-card-text">Pioneers in oilfield management & SYR OPCO partnerships.</p>
                    </Link>

                    {/* Card 2: Drilling & Fluids */}
                    <Link href="/drilling-fluids" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                      <div className="mega-card-header">
                        <span className="mega-card-title">DRILLING & FLUIDS</span>
                        <div className="mega-title-line"></div>
                      </div>
                      <div className="mega-card-img-wrap">
                        <img src="/images/service_drilling_fluids.png" alt="Drilling & Fluids" />
                      </div>
                      <h4 className="mega-card-heading">Directional Drilling & Chemistry</h4>
                      <p className="mega-card-text">Hole quality, mud chemistry, and fluid sample testing.</p>
                    </Link>

                    {/* Card 3: Construction & Heavy Equipment */}
                    <Link href="/construction" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                      <div className="mega-card-header">
                        <span className="mega-card-title">CONSTRUCTION</span>
                        <div className="mega-title-line"></div>
                      </div>
                      <div className="mega-card-img-wrap">
                        <img src="/images/service_construction.png" alt="Construction & Logistics" />
                      </div>
                      <h4 className="mega-card-heading">Field Construction & Logistics</h4>
                      <p className="mega-card-text">Heavy transportations, site camps, and technical manpower.</p>
                    </Link>

                    {/* Card 4: QHSE Safety */}
                    <Link href="/qhse" className="mega-card" onClick={() => setIsMegaOpen(false)}>
                      <div className="mega-card-header">
                        <span className="mega-card-title">QHSE SAFETY</span>
                        <div className="mega-title-line"></div>
                      </div>
                      <div className="mega-card-img-wrap">
                        <img src="/images/qhse_safety.png" alt="QHSE Commitment" />
                      </div>
                      <h4 className="mega-card-heading">Quality & Environmental Standards</h4>
                      <p className="mega-card-text">Rigorous health, safety, and environmental excellence.</p>
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
    </header>
  );
}
