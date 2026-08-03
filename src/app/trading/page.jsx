'use client';

import Link from 'next/link';

export default function TradingPage() {
  const products = [
    {
      title: 'Drilling & Workover Chemicals',
      desc: 'High-performance synthetic fluids, mud additives, loss-circulation materials, and specialized chemical stimulation fluids.',
      image: '/images/service_drilling_fluids.png'
    },
    {
      title: 'Wellhead & Downhole Equipment',
      desc: 'API-certified wellheads, Xmas trees, production packers, tubing hangers, and pressure control valves.',
      image: '/images/service_wellhead.png'
    },
    {
      title: 'Coiled Tubing & Heavy Spares',
      desc: 'Zone I & II coiled tubing unit components, high-pressure pumps, frac tanks, and specialized spare parts.',
      image: '/images/service_coiled_tubing.png'
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="container">
          <div className="hero-badge">ALMATAR TRADING DIVISION</div>
          <h1 className="page-hero-title">OILFIELD TRADING & EQUIPMENT SUPPLY</h1>
          <p className="page-hero-subtitle">
            Sourcing high-spec drilling chemicals, downhole tools, and heavy oilfield equipment through trusted international partner networks.
          </p>
        </div>
      </section>

      <section className="section-padding bg-dark-card">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">TRADING PORTFOLIO</span>
            <h2 className="section-title">Specialized Oilfield Supplies</h2>
          </div>

          <div className="grid-3-col">
            {products.map((item, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.desc}</p>
                  <Link href="/contact" className="btn-card-action">Inquire Details &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
