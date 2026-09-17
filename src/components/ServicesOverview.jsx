import Link from 'next/link';

const services = [
  { title: 'Well Intervention Services', href: '/well-services', icon: 'intervention' },
  { title: 'Coiled Tubing & Nitrogen Pumping', href: '/well-services', icon: 'coiled' },
  { title: 'Stimulation & Fracturing', href: '/stimulation-fracturing', icon: 'stimulation' },
  { title: 'Zonal Isolation & Cementing', href: '/zonal-isolation-cementing', icon: 'cementing' },
  { title: 'Wellhead & Xmas Tree Services', href: '/wellhead-xmas-tree', icon: 'wellhead' },
  { title: 'Slickline Services', href: '/slickline-services', icon: 'slickline' },
  { title: 'Well Testing & Flaring', href: '/well-testing', icon: 'testing' },
  { title: 'Drilling and Workover Services', href: '/drilling-workover', icon: 'drilling' },
  { title: 'Total Field Construction & Manpower Logistics', href: '/construction', icon: 'construction' },
];

function ServiceIcon({ type }) {
  const common = { width: 34, height: 34, viewBox: '0 0 34 34', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const shapes = {
    intervention: <><path d="M17 3 9 29M17 3l8 26M12 18h10M10 24h14M14 12h6" /><path d="M8 30h18" /></>,
    coiled: <><circle cx="17" cy="11" r="6" /><circle cx="17" cy="11" r="2" /><path d="M17 17v12M11 29h12M12 25h10" /></>,
    stimulation: <><path d="M17 4v25M12 29h10M11 13l6-9 6 9v16M14 15h6v14h-6z" /></>,
    cementing: <><rect x="11" y="5" width="12" height="24" rx="1" /><path d="M11 11h12M11 22h12M8 29h18" /></>,
    wellhead: <><path d="M17 4v25M9 11h16M7 18h20M11 11v7M23 11v7M5 29h24" /><circle cx="17" cy="18" r="2" /></>,
    slickline: <><path d="M9 28h16M12 28V16h10v12M10 16h14M15 12h4v4h-4zM17 4v8" /><path d="M13 22h8" /></>,
    testing: <><path d="M8 28h18M11 28V17h12v11M8 17h18M14 12h6v5h-6zM17 5v7" /><circle cx="17" cy="9" r="3" /></>,
    drilling: <><path d="M17 3 9 29M17 3l8 26M12 16h10M10 22h14M8 30h18" /></>,
    construction: <><path d="M6 29h22M9 29V15h16v14M12 15V8h10v7M15 22h4v7M8 8h18" /><path d="M17 8V4" /></>,
  };
  return <svg {...common}>{shapes[type]}</svg>;
}

export default function ServicesOverview({ standalone = false }) {
  return (
    <>
      {standalone && (
        <section className="services-hub-hero" aria-labelledby="services-hub-title">
          <img src="/images/banner_well_services_hero.webp" alt="ALMATAR oilfield services" />
          <div className="services-hub-hero-overlay">
            <div className="services-hub-hero-copy">
              <span className="services-overview-eyebrow">ALMATAR PETROLEUM SERVICES</span>
              <h1 id="services-hub-title">Integrated Oilfield<br />Services</h1>
              <p>Reliable technical solutions, experienced people and field-ready support for every stage of your operation.</p>
            </div>
            <span className="services-hub-hero-side">PEOPLE<br />EXPERTISE<br />PERFORMANCE</span>
          </div>
        </section>
      )}
      <section className={`services-overview ${standalone ? 'services-overview-standalone' : ''}`} aria-labelledby="services-overview-title">
      <div className="services-overview-inner">
        <div className="services-overview-heading">
          <span className="services-overview-eyebrow">OUR CAPABILITIES</span>
          <h2 id="services-overview-title">Integrated Field Services</h2>
          <p>Specialized solutions for every stage of your oilfield operation.</p>
        </div>
        <div className="services-overview-grid">
          {services.map((service) => (
              <Link className="services-overview-card" href={service.href} key={service.title}>
                <span className="services-overview-icon"><ServiceIcon type={service.icon} /></span>
                <span className="services-overview-title">{service.title}</span>
                <span className="services-overview-arrow" aria-hidden="true">→</span>
              </Link>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
