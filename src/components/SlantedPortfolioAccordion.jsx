'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SlantedPortfolioAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: 'well-services',
      tag: 'WELL SERVICES',
      title: 'ADVANCED WELL INTERVENTION & STIMULATION',
      shortTitle: 'Well Services & Intervention',
      description: 'Increase production from older and marginal fields with engineered fluids, down-hole systems, Coiled Tubing Zone I & II units, and complete zonal isolation cementing.',
      image: '/images/service_coiled_tubing.png',
      link: '/well-services',
      tabLabel: 'WELL SERVICES'
    },
    {
      id: 'drilling-fluids',
      tag: 'DRILLING & FLUIDS',
      title: 'DIRECTIONAL DRILLING & FLUID CHEMISTRY',
      shortTitle: 'Drilling & Fluid Chemistry',
      description: 'Delivering superior hole quality and precise wellbore placement combined with innovative fluid chemistry systems and laboratory sample specialists.',
      image: '/images/service_drilling_fluids.png',
      link: '/drilling-fluids',
      tabLabel: 'DRILLING & FLUIDS'
    },
    {
      id: 'construction',
      tag: 'CONSTRUCTION & LOGISTICS',
      title: 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS',
      shortTitle: 'Construction & Logistics',
      description: 'In collaboration with highly reputed partners, ALMATAR provides comprehensive construction, heavy equipment transportations, manpower, and catering services.',
      image: '/images/service_construction.png',
      link: '/construction',
      tabLabel: 'CONSTRUCTION'
    },
    {
      id: 'qhse',
      tag: 'QHSE COMMITMENT',
      title: 'QUALITY, HEALTH, SAFETY & ENVIRONMENTAL (QHSE)',
      shortTitle: 'QHSE Safety & Policy',
      description: 'Demonstrating an ongoing and determined commitment to improving health and safety at work throughout our organization and operating facilities.',
      image: '/images/qhse_safety.png',
      link: '/qhse',
      tabLabel: 'QHSE SAFETY'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length, isPaused]);

  return (
    <section 
      className="slanted-hero-section" 
      style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container position-relative" style={{ zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>OUR SPECIALIZED CAPABILITIES</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>CORE OPERATIONAL PORTFOLIO</h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
            Hover or click across our interactive slanted portfolio cards to explore integrated oilfield solutions in Syria.
          </p>
        </div>

        {/* Slanted Diagonal Flex Accordion Container */}
        <div className="slanted-accordion-container">
          {services.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.id}
                className={`slanted-card-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Background Image (Inverse Skewed) */}
                <div className="slanted-card-bg-wrap">
                  <img src={item.image} alt={item.title} className="slanted-card-bg" />
                  <div className="slanted-card-overlay"></div>
                </div>

                {/* Inner Content Container with Inverse Skew so text/images are upright */}
                <div className="slanted-card-inner">
                  {isActive ? (
                    <div className="active-card-content">
                      <span className="hero-tag">{item.tag}</span>
                      <h3 className="hero-title" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)' }}>{item.title}</h3>
                      <p className="hero-description">{item.description}</p>
                      
                      <div className="hero-btn-wrap">
                        <Link href={item.link} className="btn-learn-more">
                          <span>Explore {item.tabLabel}</span>
                          <span className="arrow-circle">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="inactive-card-content">
                      <span className="inactive-tag-number">0{index + 1}</span>
                      <h4 className="inactive-card-title">{item.shortTitle}</h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accordion Navigation Tabs */}
        <div className="slanted-nav-bar">
          <div className="slanted-tabs-grid" style={{ gridTemplateColumns: `repeat(${services.length}, 1fr)` }}>
            {services.map((item, i) => (
              <div
                key={item.id}
                className={`slanted-tab-item ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <span>{item.tabLabel}</span>
                <div className="progress-track">
                  {i === activeIndex && <div className="progress-fill"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
