import NextPageBanner from '@/components/NextPageBanner';

export default function QhsePage() {
  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Static Header Banner */}
        <div className="static-page-banner">
          <img src="/images/qhse_safety.png" alt="QHSE Safety Commitment" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-green)' }}>POLICY & OBJECTIVES</span>
            <h1 className="static-banner-title">QUALITY, HEALTH, SAFETY & ENVIRONMENTAL (QHSE)</h1>
          </div>
        </div>

        <div className="about-hero-card">
          <div className="about-split-grid">
            <div>
              <h2 className="section-title" style={{ color: 'var(--accent-gold)' }}>MANAGEMENT COMMITMENT STATEMENT</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-dark)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                It is our intent to demonstrate an ongoing and determined commitment to improving health and safety at work throughout our organization. We will ensure the health and safety at work of all our people and any other people who may be affected by our work activities and comply with the requirements of health and safety legislation.
              </p>
            </div>
            <div>
              <div className="circle-img-container">
                <img src="/images/qhse_inspection_team.png" alt="QHSE Safety Inspection Team" />
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Through the implementation of the Health and Safety policy, the Management are committed to achieving the following objectives:</h3>

          <ul className="card-list" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Safe Working Environment:</strong> To provide, as far as reasonably practicable, a safe and healthy working environment, safe premises and facilities for staff and visitors.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Stressors Mitigation:</strong> To create for employees a working environment where potential work-related stressors are avoided, minimized or mitigated through good management practices, effective HR policies and staff development.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Staff Responsibility Awareness:</strong> To ensure that all staff are aware of their health and safety responsibilities and know what is expected of them to discharge responsibilities assigned.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Training & Competency:</strong> To ensure staff have access to appropriate training and development to enable them to discharge competently their assigned responsibilities.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Effective Consultation System:</strong> To have an effective system for communicating and consulting on health and safety matters and securing the co-operation of employees.</li>
          </ul>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Careers"
        subtitle="Learn more"
        link="/careers"
        bgImage="/images/careers_engineers_hero.png"
      />
    </>
  );
}
