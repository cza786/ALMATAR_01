'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SlantedPortfolioAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const services = [
    {
      id: 'well-services',
      number: '01',
      tag: 'WELL SERVICES',
      title: 'ADVANCED WELL INTERVENTION & STIMULATION',
      shortTitle: 'Well Intervention & CT',
      description: 'Maximize hydrocarbon recovery with engineered down-hole tools, Zone I & II Coiled Tubing units, nitrogen lift, and high-pressure matrix stimulation.',
      features: ['Zone I & II Coiled Tubing', 'High Pressure Pumping', '7-Point Wellhead Maintenance'],
      image: '/images/service_coiled_tubing.png',
      link: '/well-services',
      color: 'var(--accent-gold)'
    },
    {
      id: 'drilling-fluids',
      number: '02',
      tag: 'DRILLING & FLUIDS',
      title: 'DIRECTIONAL DRILLING & FLUID CHEMISTRY',
      shortTitle: 'Drilling & Fluid Chemistry',
      description: 'Precision wellbore trajectory control combined with custom-formulated drilling fluid systems and advanced laboratory testing facilities.',
      features: ['Directional Drilling', 'Water & Oil-Based Mud', 'Laboratory Analysis'],
      image: '/images/service_drilling_fluids.png',
      link: '/drilling-fluids',
      color: 'var(--accent-cyan)'
    },
    {
      id: 'construction',
      number: '03',
      tag: 'CONSTRUCTION & LOGISTICS',
      title: 'TOTAL FIELD CONSTRUCTION & HEAVY LOGISTICS',
      shortTitle: 'Construction & Logistics',
      description: 'Comprehensive field infrastructure construction, heavy machinery transport, 500 BBL FRAC tank fleets, technical manpower, and camp catering.',
      features: ['Heavy Transport Fleet', 'FRAC Tank Rentals', 'Modular Site Camps'],
      image: '/images/service_construction.png',
      link: '/construction',
      color: '#10b981'
    },
    {
      id: 'qhse',
      number: '04',
      tag: 'QHSE COMMITMENT',
      title: 'QUALITY, HEALTH, SAFETY & ENVIRONMENT (QHSE)',
      shortTitle: 'QHSE Safety & Compliance',
      description: 'Rigorous safety standards, risk mitigation frameworks, site hazard assessments, and certified technical training across all Syrian field sites.',
      features: ['Zero Harm Policy', '7-Point Site Inspection', 'ISO Standard Compliance'],
      image: '/images/qhse_safety.png',
      link: '/qhse',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="slanted-portfolio-section">
      <div className="container position-relative" style={{ zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>CORE OPERATIONAL CAPABILITIES</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>SPECIALIZED OILFIELD PORTFOLIO</h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '720px', margin: '0.6rem auto 0 auto' }}>
            Hover across any operational card to smoothly reveal its full engineering capabilities, technical specifications, and service options.
          </p>
        </div>

        {/* Slanted Diagonal Accordion Container */}
        <div className="luxurious-accordion-grid">
          {services.map((item, index) => {
            const isHovered = index === hoveredIndex;
            return (
              <div
                key={item.id}
                className={`luxurious-card-item ${isHovered ? 'expanded' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Background Image Wrapper (Inverse Skewed) */}
                <div className="lux-bg-wrapper">
                  <img src={item.image} alt={item.title} className="lux-bg-img" />
                  <div className="lux-gradient-overlay"></div>
                </div>

                {/* Inner Content (Upright Inverse Skewed) */}
                <div className="lux-card-inner">
                  
                  {/* Line 1: Number & Eyebrow Tag */}
                  <div className="lux-line-1">
                    <span className="lux-card-num">{item.number}</span>
                    <span className="lux-card-tag" style={{ color: item.color }}>{item.tag}</span>
                  </div>

                  {/* Line 2: Main Title */}
                  <div className="lux-line-2">
                    <h3 className="lux-card-title">{item.title}</h3>
                  </div>

                  {/* Line 3: Description */}
                  <div className="lux-line-3">
                    <p className="lux-card-desc">{item.description}</p>
                  </div>

                  {/* Line 4: Feature Badges (Animated Line 4) */}
                  <div className="lux-line-4">
                    <div className="lux-feature-pills">
                      {item.features.map((feat, fIdx) => (
                        <span key={fIdx} className="lux-pill">{feat}</span>
                      ))}
                    </div>
                  </div>

                  {/* Line 5: Luxurious Action Link Button (Animated Line 5) */}
                  <div className="lux-line-5">
                    <Link href={item.link} className="lux-action-btn">
                      <span>Explore Capability</span>
                      <span className="lux-arrow">&rarr;</span>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
