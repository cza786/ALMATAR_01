export default function WellServicesPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      
      {/* Static Header Banner */}
      <div className="static-page-banner">
        <img src="/images/banner_well_services_hero.png" alt="Almatar Well Services" />
        <div className="static-banner-overlay">
          <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>TECHNICAL PORTFOLIO</span>
          <h1 className="static-banner-title">ALMATAR WELL SERVICES</h1>
        </div>
      </div>

      <div className="cards-grid">
        
        {/* 1. Well Intervention Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/banner_well_services_hero.png" alt="Well Intervention" />
          </div>
          <div className="card-body">
            <h3 className="card-title">WELL INTERVENTION SERVICES</h3>
            <p className="card-text">
              ALMATAR offers an extensive range of well intervention services and global experience to extend the life of producing wells by improving performance or providing access to stranded or additional hydrocarbon reserves.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Tailor-made solutions to meet customers' well data needs</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Multi-functional deployment equipment for rapid deployment on land</li>
            </ul>
          </div>
        </div>

        {/* 2. Coiled Tubing Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_coiled_tubing.png" alt="Coiled Tubing" />
          </div>
          <div className="card-body">
            <h3 className="card-title">COILED TUBING SERVICES</h3>
            <p className="card-text">
              Comprehensive coiled tubing service based on a wide range of proven abilities. With units suitable for operation in Zone I and Zone II environments, ALMATAR coiled tubing product line is well supported by auxiliary facilities.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> CT Package customizable for job-specific requirements</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> High-pressure / High-temperature & H2S applications</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Coiled Tubing size starting from 1.5" up to 2"</li>
            </ul>
          </div>
        </div>

        {/* 3. High Pressure Pumping & Stimulation */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_pumping_stimulation.png" alt="Pumping and Stimulation" />
          </div>
          <div className="card-body">
            <h3 className="card-title">HIGH PRESSURE PUMPING & STIMULATION</h3>
            <p className="card-text">
              Full range of chemical and hydraulic stimulation techniques offered either within high pressure pumping service line or combined with coiled tubing or Nitrogen systems to create highly conductive reservoir flow paths.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Matrix acidizing to high pressure fracturing services</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> State of the art high pressure twin pumping units</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Twin Batch Mixer for land and Zone I & Zone II systems</li>
            </ul>
          </div>
        </div>

        {/* 4. Fluid Storage Tank Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/frac_tanks.png" alt="Fluid Storage Tanks" />
          </div>
          <div className="card-body">
            <h3 className="card-title">FLUID STORAGE TANK SERVICES</h3>
            <p className="card-text">
              Our fleet of available tanks is ideally located for multi-location operations. Our team safely and efficiently coordinates all logistics for equipment and fluid tank transport.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 500 BBL FRAC Tanks</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Acid Transport Tanks</li>
            </ul>
          </div>
        </div>

        {/* 5. Nitrogen Pumping Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_nitrogen_pumping.png" alt="Nitrogen Pumping" />
          </div>
          <div className="card-body">
            <h3 className="card-title">NITROGEN PUMPING SERVICES</h3>
            <p className="card-text">
              Offered as a standalone service line and support service for gas lifting, wellbore cleanouts, and process plant purging to nitrified acid and foam.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Ambient vaporizers to diesel Zone II rated units</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Capable of 10,000 psi and 180,000 SCF/HR</li>
            </ul>
          </div>
        </div>

        {/* 6. Wellhead & Xmas Tree Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_wellhead.png" alt="Wellhead and Xmas Tree" />
          </div>
          <div className="card-body">
            <h3 className="card-title">WELLHEAD & CHRISTMAS TREE SERVICES</h3>
            <p className="card-text">
              WH & Xmas Tree management and preventative maintenance following international standards recommendations for dimensional and functional interchangeability.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 1. Visual inspection for corrosion & damage</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 2. Function testing Christmas tree & wellhead valves</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 3. Full greasing and sealant injection</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 4. Pressure integrity checks on all void spaces</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 5. Reenergizing & retesting wellhead seals</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 6. Thread repairs & packing port thread rectification</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 7. Hand wheels, bearings, bonnet seals & gauges replacement</li>
            </ul>
          </div>
        </div>

        {/* 7. Slickline Services */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_slickline.png" alt="Slickline Services" />
          </div>
          <div className="card-body">
            <h3 className="card-title">SLICKLINE SERVICES</h3>
            <p className="card-text">
              Extensive range of slickline services from basic completion intervention to advanced applications. Standard 108" slickline as well as 125" and 160" slicklines with performance equivalent to braided cable.
            </p>
            <ul className="card-list">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Pressure control equipment 3" to 7 5/8"</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Pressure ratings from 5K psi to 15K psi</li>
            </ul>
          </div>
        </div>

        {/* 8. Surface Well Testing */}
        <div className="solid-card">
          <div className="card-img-wrap">
            <img src="/images/service_well_testing.png" alt="Surface Well Testing" />
          </div>
          <div className="card-body">
            <h3 className="card-title">SURFACE WELL TESTING & MONITORING</h3>
            <p className="card-text">
              Surface production testing and flowback services enabling client operational efficiency and maximum initial production optimization.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
