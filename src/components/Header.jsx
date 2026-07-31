'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ onOpenDrawer }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="top-header">
      <div className="top-header-main">
        {/* Full-width container to push Brand Text to far-left and Get In Touch button to far-right */}
        <div className="top-header-fullwidth">
          
          {/* Brand Text Navigation (Most Left) */}
          <div className="brand-text-nav">
            <Link href="/" className="brand-title-link brand-header-link">
              <img src="/images/almatar_logo_transparent.png" alt="ALMATAR PETROLEUM SERVICES" className="header-logo-img" style={{ height: '75px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 0px 12px rgba(255,255,255,0.45))' }} />
            </Link>
          </div>

          {/* Centered Main Navigation Links */}
          <nav className="main-nav" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            
            {/* Services Collapsible Dropdown Navigation Item */}
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

            <Link href="/drilling-fluids" className={`nav-link ${isActive('/drilling-fluids') ? 'active' : ''}`}>Drilling</Link>
            <Link href="/construction" className={`nav-link ${isActive('/construction') ? 'active' : ''}`}>Construction</Link>
            <Link href="/qhse" className={`nav-link ${isActive('/qhse') ? 'active' : ''}`}>QHSE</Link>
            <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </nav>

          {/* Header Actions: Get In Touch Button (Most Right) */}
          <div className="header-actions">
            <Link href="/contact" className="btn-contact-header">Get In Touch</Link>
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
