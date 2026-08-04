'use client';

import NextPageBanner from '@/components/NextPageBanner';

export default function ContactPage() {

  const contactCards = [
    {
      id: 'location',
      type: 'Location',
      label: 'Headquarters',
      value: 'Syria – Damascus / Qamishli',
      href: '#our-location-map',
      isExternal: false,
      badge: 'Mapped Below',
    },
    {
      id: 'telephone',
      type: 'Telephone',
      label: 'Direct Line',
      value: '00963 52 426 915',
      href: 'tel:0096352426915',
      isExternal: false,
    },
    {
      id: 'mobile',
      type: 'Mobile',
      label: 'Direct Lines',
      value: ['00963 93 982 2415', '00963 93 140 7723'],
      href: 'tel:00963939822415',
      isExternal: false,
    },
    {
      id: 'email',
      type: 'Email',
      label: 'Enquiries',
      value: 'info@almatar.com',
      href: 'mailto:info@almatar.com',
      isExternal: false,
    },
  ];

  const iconMap = {
    location: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    telephone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.35z"/>
      </svg>
    ),
    mobile: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    email: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  };

  return (
    <>
      {/* HERO BANNER */}
      <section className="ctp-hero">
        <div className="ctp-hero-bg">
          <img src="/images/banner_about_corporate.png" alt="Contact ALMATAR Headquarters" />
          <div className="ctp-hero-overlay" />
        </div>
        <div className="ctp-hero-content container">
          <span className="ctp-hero-eyebrow">GET IN TOUCH</span>
          <h1 className="ctp-hero-title">Contact ALMATAR</h1>
          <div className="ctp-hero-accent" />
          <p className="ctp-hero-desc">
            Reach our technical and procurement teams directly. We are based in Syria
            and operate across the region to serve the oil and gas industry.
          </p>
        </div>
      </section>

      {/* COMPACT CONTACT CARDS — 4 Column Grid */}
      <section className="ctp-cards-section">
        <div className="container">
          <div className="ctp-cards-grid">
            {contactCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                className="ctp-card"
              >
                <div className="ctp-card-bar" />
                <div className="ctp-card-header-row">
                  <div className="ctp-card-icon">{iconMap[card.id]}</div>
                  {card.badge && <span className="ctp-card-chip">{card.badge}</span>}
                </div>
                <div className="ctp-card-type">{card.type}</div>
                <div className="ctp-card-label">{card.label}</div>
                <div className="ctp-card-value">
                  {Array.isArray(card.value)
                    ? card.value.map((v, i) => <span key={i} className="ctp-val-line">{v}</span>)
                    : <span className="ctp-val-line">{card.value}</span>
                  }
                </div>
                <div className="ctp-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE LOCATION MAP SECTION */}
      <section id="our-location-map" className="ctp-map-section">
        <div className="container">
          <div className="ctp-map-header">
            <div>
              <span className="ctp-hero-eyebrow" style={{ color: 'var(--accent-gold)' }}>HEADQUARTERS LOCATION</span>
              <h2 className="ctp-map-title">Syria Headquarters & Operations Map</h2>
            </div>
            <a
              href="https://maps.app.goo.gl/rZ9DLZ6nyEhxMC2n7"
              target="_blank"
              rel="noopener noreferrer"
              className="ctp-map-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Open in Google Maps
            </a>
          </div>

          <div className="ctp-map-wrapper">
            {/* Embedded Google Map iframe */}
            <iframe
              title="ALMATAR Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106465.25997621422!2d36.2307289!3d33.5138073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e3940!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="ctp-map-iframe"
            />

            {/* Corporate Location Floating Badge */}
            <div className="ctp-map-overlay-card">
              <div className="ctp-overlay-badge">
                <span className="ctp-dot-active" /> ALMATAR Headquarters
              </div>
              <h3 className="ctp-overlay-heading">Damascus & Qamishli, Syria</h3>
              <p className="ctp-overlay-sub">
                Integrated Oilfield & Projects Management Headquarters & Operational Base.
              </p>
              <div className="ctp-overlay-meta">
                <div className="ctp-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.35z"/></svg>
                  <span>00963 52 426 915</span>
                </div>
                <div className="ctp-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>info@almatar.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PAGE BANNER */}
      <NextPageBanner
        title="Home"
        subtitle="Learn more"
        link="/"
        bgImage="/images/hero_drilling_rig.png"
      />
    </>
  );
}

