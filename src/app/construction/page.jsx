import NextPageBanner from '@/components/NextPageBanner';

export default function ConstructionPage() {
  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Static Header Banner */}
        <div className="static-page-banner">
          <img src="/images/service_construction.png" alt="Construction & Logistics" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>FIELD INFRASTRUCTURE</span>
            <h1 className="static-banner-title">CONSTRUCTION & LOGISTICS SERVICES</h1>
          </div>
        </div>

        <div className="about-hero-card">
          <h2 className="section-title">FULL CONSTRUCTION & FIELD SUPPORT</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            ALMATAR in collaboration with highly reputed Partners are leading the way, breaking ground and discovering new paths, while raising industry standards. As safety, performance, and reliability of equipment and personnel play a vital role, ALMATAR provides all required construction services:
          </p>

          <div className="cards-grid" style={{ marginTop: '2rem' }}>
            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/service_heavy_logistics.png" alt="Logistics & Heavy Transportations" />
              </div>
              <div className="card-body">
                <h3 className="card-title">🚛 LOGISTICS & TRANSPORTATIONS</h3>
                <p className="card-text">Full fleet transportation coordination for heavy oilfield equipment, fluid tanks, and field materials.</p>
              </div>
            </div>

            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/service_manpower_supply.png" alt="Manpower Supply" />
              </div>
              <div className="card-body">
                <h3 className="card-title">👷 MANPOWER SUPPLY</h3>
                <p className="card-text">Certified engineering, drilling, and technical personnel for onshore field operations.</p>
              </div>
            </div>

            <div className="solid-card">
              <div className="card-img-wrap">
                <img src="/images/service_site_camp.png" alt="Catering & Site Camp" />
              </div>
              <div className="card-body">
                <h3 className="card-title">🍱 CATERING & SITE CAMP</h3>
                <p className="card-text">Comprehensive camp management, catering, and hospitality services for remote drilling sites.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Oilfield Trading"
        subtitle="Learn more"
        link="/trading"
        bgImage="/images/service_drilling_fluids.png"
      />
    </>
  );
}
