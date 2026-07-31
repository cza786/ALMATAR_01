'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(true); // Collapsible state
  const pathname = usePathname();

  const serviceSubItems = [
    { href: '/well-services#well-intervention', label: '• Well Intervention' },
    { href: '/well-services#coiled-tubing', label: '• Coiled Tubing & Nitrogen' },
    { href: '/well-services#stimulation-tanks', label: '• Stimulation & Tanks' },
    { href: '/well-services#wellhead-xmas-tree', label: '• Wellhead & Xmas Tree' },
    { href: '/well-services#slickline', label: '• Slickline Services' },
    { href: '/well-services#surface-testing', label: '• Surface Well Testing' }
  ];

  return (
    <div className={`side-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="side-drawer">
        <div className="drawer-header">
          <span className="drawer-title" style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '1.5px' }}>ALMATAR</span>
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
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <nav className="drawer-nav">
          
          {/* Home */}
          {('home'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/" className={`drawer-nav-link ${pathname === '/' ? 'active' : ''}`} onClick={onClose}>
                <span>Home</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* About */}
          {('about'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/about" className={`drawer-nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={onClose}>
                <span>About</span>
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
              <span style={{ fontWeight: 700 }}>Services Portfolio</span>
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
                <span>Drilling & Fluids</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Construction */}
          {('construction'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/construction" className={`drawer-nav-link ${pathname === '/construction' ? 'active' : ''}`} onClick={onClose}>
                <span>Construction</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* QHSE */}
          {('qhse'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/qhse" className={`drawer-nav-link ${pathname === '/qhse' ? 'active' : ''}`} onClick={onClose}>
                <span>QHSE Safety</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

          {/* Contact */}
          {('contact'.includes(searchTerm.toLowerCase()) || !searchTerm) && (
            <div className="drawer-nav-item">
              <Link href="/contact" className={`drawer-nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={onClose}>
                <span>Contact</span>
                <span className="drawer-arrow">&rsaquo;</span>
              </Link>
            </div>
          )}

        </nav>

        <div className="drawer-footer">
          <div className="drawer-contact-info">
            <p>📍 Syria – Damascus / Qamishli</p>
            <p>📞 Tel: 00963 52 426 915</p>
            <p>📱 Mob: 00963 93 982 2415 | 00963 93 140 7723</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
