'use client';

import NextPageBanner from '@/components/NextPageBanner';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting ALMATAR Integrated Oilfield & Projects Management. Our technical engineering team will review your inquiry and contact you shortly.');
  };

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Static Header Banner */}
        <div className="static-page-banner">
          <img src="/images/banner_about_corporate.png" alt="Contact Almatar Headquarters" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>GET IN TOUCH</span>
            <h1 className="static-banner-title">CONTACT ALMATAR HEADQUARTERS</h1>
          </div>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card (Solid Dark Black) */}
          <div className="contact-info-card">
            <div>
              <span className="brand-sub">ALMATAR PETROLEUM SERVICES</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginTop: '0.3rem' }}>SYRIA OFFICES</h3>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Headquarters Location</strong>
                <a href="https://maps.app.goo.gl/rZ9DLZ6nyEhxMC2n7" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', fontSize: '0.95rem', display: 'block', textDecoration: 'none' }}>Syria – Damascus / Qamishli</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Telephone Number</strong>
                <a href="tel:0096352426915" style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', display: 'block' }}>Tel: 00963 52 426 915</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Mobile Direct Lines</strong>
                <a href="tel:00963939822415" style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', display: 'block' }}>Mob: 00963 93 982 2415</a>
                <a href="tel:00963931407723" style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', display: 'block' }}>Mob: 00963 93 140 7723</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Email Enquiries</strong>
                <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>info@almatar.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>Send Technical Service Request</h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                  <input type="text" id="contact-name" className="form-control" placeholder="e.g. Eng. Hassan Al-Ali" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address *</label>
                  <input type="email" id="contact-email" className="form-control" placeholder="name@company.com" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                  <input type="tel" id="contact-phone" className="form-control" placeholder="+963 ..." />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Requested Service Scope</label>
                  <input type="text" id="contact-subject" className="form-control" placeholder="Coiled Tubing / Wellhead / Drilling Fluid" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Operational Specifications / Message *</label>
                <textarea id="contact-message" className="form-control" placeholder="Detail your oilfield project requirements..." required></textarea>
              </div>

              <button type="submit" className="btn-submit">SUBMIT REQUEST TO ALMATAR &rarr;</button>
            </form>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Home"
        subtitle="Learn more"
        link="/"
        bgImage="/images/hero_drilling_rig.png"
      />
    </>
  );
}
