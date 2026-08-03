'use client';

export default function CareersPage() {
  const pillars = [
    {
      title: 'Professional Environment',
      desc: 'Collaborate with internationally reputed technical organizations and top SYR OPCO field experts.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: 'Career Growth',
      desc: 'Continuous advancement opportunities in specialized well intervention, directional drilling, and project management.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Training & Development',
      desc: 'State-of-the-art technology training and hands-on skill enhancement with advanced down-hole systems.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      title: 'Health & Safety',
      desc: 'Zero-compromise QHSE commitment protecting our people, operating facilities, and environmental resources.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', paddingBottom: '4rem' }}>
      
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        
        {/* Top Hero Section */}
        <div className="careers-hero-card">
          <div className="careers-hero-grid">
            <div className="careers-hero-content">
              <h1 className="careers-main-title">CAREERS</h1>
              <p className="careers-hero-desc">
                Join our team and be part of our journey towards excellence.
              </p>
            </div>
            
            <div className="careers-hero-img-wrap">
              <img src="/images/careers_engineers_hero.png" alt="ALMATAR Petroleum Engineers" />
            </div>
          </div>
        </div>

        {/* 4 Pillars Section (Professional Environment, Career Growth, Training, Safety) */}
        <div className="careers-pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-wrap">
                {item.icon}
              </div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

