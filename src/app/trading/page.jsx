'use client';

import NextPageBanner from '@/components/NextPageBanner';

export default function TradingPage() {

  const whatWeTradeItems = [
    'Pipes, Tubing & Casing',
    'Valves & Fittings',
    'Flanges & Gaskets',
    'Drilling & Production Equipment',
    'Instrumentation & Control Equipment',
    'Safety Equipment & Accessories',
    'Industrial Chemicals',
    'Electrical & Mechanical Components',
  ];

  const commitmentItems = [
    {
      title: 'Quality Assurance',
      desc: 'We ensure all products are sourced from reputed manufacturers and comply with international quality standards.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      title: 'Reliable Supply Chain',
      desc: 'Our strong network enables timely delivery and consistent availability of critical materials.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: 'Competitive Pricing',
      desc: 'We deliver cost-effective solutions without compromising on quality and reliability.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      desc: 'We understand client requirements and provide tailored solutions to support their operational success.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.35z"/>
        </svg>
      ),
    },
  ];

  const industriesWeServe = [
    {
      name: ['Oil & Gas', 'Exploration'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <path d="M5 5h14M5 19h14"/>
          <rect x="9" y="7" width="6" height="10" rx="1"/>
          <line x1="5" y1="12" x2="9" y2="12"/>
          <line x1="15" y1="12" x2="19" y2="12"/>
        </svg>
      ),
    },
    {
      name: ['Drilling', 'Operations'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M8 6h8M9 10h6M10 14h4M11 18h2"/>
          <rect x="7" y="2" width="10" height="4" rx="1"/>
        </svg>
      ),
    },
    {
      name: ['Production &', 'Maintenance'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      name: ['Petrochemical', 'Industry'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20M7 10v12M17 10v12M2 10h20M5 6l7-4 7 4"/>
          <rect x="9" y="14" width="6" height="8"/>
        </svg>
      ),
    },
    {
      name: ['Energy &', 'Infrastructure'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
        </svg>
      ),
    },
    {
      name: ['Marine &', 'Offshore'],
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/>
          <path d="M4 18l-1-5h18l-1 5M12 2v9M8 9h8"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="tr-hero">
        <div className="tr-hero-bg">
          <img src="/images/trading_hero_industrial.png" alt="ALMATAR Trading â€“ Industrial Supply" />
          <div className="tr-hero-overlay" />
        </div>
        <div className="tr-hero-content container">
          <h1 className="tr-hero-title">TRADING</h1>
          <div className="tr-hero-accent-line" />
          <p className="tr-hero-desc">
            ALMATAR is engaged in the trading and supply of high-quality
            materials and equipment for the oil and gas industry. We partner
            with trusted global manufacturers to deliver reliable products
            that meet international standards.
          </p>
        </div>
      </section>

      {/* ===================== MAIN CONTENT SECTION ===================== */}
      <section className="tr-main-section">
        <div className="container">
          <div className="tr-main-grid">

            {/* LEFT COL: What We Trade */}
            <div className="tr-what-col">
              <h2 className="tr-col-heading">WHAT WE TRADE</h2>
              <div className="tr-col-accent" />
              <p className="tr-col-lead">
                We supply a wide range of products essential for exploration, drilling,
                production and maintenance operations.
              </p>
              <ul className="tr-trade-list">
                {whatWeTradeItems.map((item, idx) => (
                  <li key={idx} className="tr-trade-item">
                    <span className="tr-check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER COL: Image */}
            <div className="tr-img-col">
              <img
                src="/images/service_wellhead.png"
                alt="Industrial gauges and pipes â€“ ALMATAR Trading"
                className="tr-center-img"
              />
            </div>

            {/* RIGHT COL: Our Commitment */}
            <div className="tr-commitment-col">
              <h2 className="tr-col-heading">OUR COMMITMENT</h2>
              <div className="tr-col-accent" />
              <div className="tr-commitment-list">
                {commitmentItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="tr-commit-item">
                      <div className="tr-commit-icon">{item.icon}</div>
                      <div className="tr-commit-text">
                        <div className="tr-commit-title">{item.title}</div>
                        <div className="tr-commit-desc">{item.desc}</div>
                      </div>
                    </div>
                    {idx < commitmentItems.length - 1 && <div className="tr-commit-divider" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES WE SERVE ===================== */}
      <section className="tr-industries-section">
        <div className="container">
          <h2 className="tr-industries-heading">INDUSTRIES WE SERVE</h2>
          <div className="tr-col-accent tr-industries-accent" />
          <div className="tr-industries-row">
            {industriesWeServe.map((ind, idx) => (
              <div key={idx} className="tr-industry-box">
                <div className="tr-industry-icon">{ind.icon}</div>
                <div className="tr-industry-name">
                  {ind.name.map((line, i) => (
                    <span key={i}>{line}{i < ind.name.length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEXT PAGE BANNER ===================== */}
      <NextPageBanner
        title="Safety & QHSE"
        subtitle="Learn more"
        link="/qhse"
        bgImage="/images/qhse_inspection_team.png"
      />
    </>
  );
}
