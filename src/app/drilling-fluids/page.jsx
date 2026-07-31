import NextPageBanner from '@/components/NextPageBanner';

export default function DrillingFluidsPage() {
  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Static Header Banner */}
        <div className="static-page-banner">
          <img src="/images/banner_drilling_hero.png" alt="Drilling and Fluid Chemistry" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>ADVANCED DRILLING</span>
            <h1 className="static-banner-title">DRILLING & FLUID CHEMICAL SERVICES</h1>
          </div>
        </div>

        <div className="cards-grid">
          <div className="solid-card">
            <div className="card-img-wrap">
              <img src="/images/service_directional_drilling.png" alt="Drilling & Workover" />
            </div>
            <div className="card-body">
              <h3 className="card-title">DRILLING AND WORKOVER SERVICES</h3>
              <p className="card-text">
                ALMATAR Petroleum Services provides the latest drilling technologies for directional drilling, casing running, and cementing services.
              </p>
              <ul className="card-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Faster rates of penetration & superior hole quality</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Precise wellbore placement for land operations</li>
              </ul>
            </div>
          </div>

          <div className="solid-card">
            <div className="card-img-wrap">
              <img src="/images/service_drilling_fluids.png" alt="Drilling Fluid Chemistry" />
            </div>
            <div className="card-body">
              <h3 className="card-title">DRILLING FLUID & CHEMICAL SERVICES</h3>
              <p className="card-text">
                Innovative fluid systems and products designed to advance the science of drilling wells. Fluid chemistry specially formulated and tested for harsh applications.
              </p>
              <ul className="card-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> On-site engineer advice and training</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Laboratory specialists for sample analysis & custom fluids</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Construction & Logistics"
        subtitle="Learn more"
        link="/construction"
        bgImage="/images/service_heavy_logistics.png"
      />
    </>
  );
}
