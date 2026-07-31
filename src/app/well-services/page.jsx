'use client';

import { useState } from 'react';
import Link from 'next/link';
import NextPageBanner from '@/components/NextPageBanner';

export default function WellServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const topRowServices = [
    {
      id: 'well-intervention',
      title: 'WELL INTERVENTION SERVICES',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4V58" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M16 58L32 10L48 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 38H42" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M25 28H39" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="18" r="4" fill="var(--accent-gold)"/>
          <path d="M12 58H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'ALMATAR offers an extensive range of well intervention services and global experience to extend the life of producing wells by improving performance or providing access to stranded hydrocarbon reserves.',
      points: [
        'Tailor-made solutions to meet customers\' well data needs',
        'Multi-functional deployment equipment for rapid deployment on land'
      ]
    },
    {
      id: 'coiled-tubing',
      title: 'COILED TUBING & NITROGEN',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="28" r="18" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="28" r="10" stroke="var(--accent-gold)" strokeWidth="2.5"/>
          <circle cx="32" cy="28" r="4" fill="currentColor"/>
          <path d="M32 46V58" stroke="currentColor" strokeWidth="3"/>
          <path d="M14 58H50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M46 28H56V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Comprehensive coiled tubing service based on a wide range of proven abilities. With units suitable for operation in Zone I and Zone II environments, supported by auxiliary facilities.',
      points: [
        'CT Package customizable for job-specific requirements',
        'High-pressure / High-temperature & H2S applications',
        'Coiled Tubing size starting from 1.5" up to 2"'
      ]
    },
    {
      id: 'stimulation',
      title: 'STIMULATION',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 54V24L32 10L44 24V54" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <rect x="26" y="32" width="12" height="22" stroke="var(--accent-gold)" strokeWidth="2.5" rx="2"/>
          <path d="M12 54H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 10V4" stroke="var(--accent-gold)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 16L32 10L38 16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Full range of chemical and hydraulic stimulation techniques offered either within high pressure pumping service line or combined with coiled tubing or Nitrogen systems.',
      points: [
        'Matrix acidizing to high pressure fracturing services',
        'State of the art high pressure twin pumping units',
        'Twin Batch Mixer for land and Zone I & Zone II systems'
      ]
    },
    {
      id: 'cementing',
      title: 'CEMENTING',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="16" width="28" height="38" rx="4" stroke="currentColor" strokeWidth="3"/>
          <path d="M24 16V10C24 7.79086 25.7909 6 28 6H36C38.2091 6 40 7.79086 40 10V16" stroke="var(--accent-gold)" strokeWidth="2.5"/>
          <path d="M18 30H46" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M18 42H46" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M12 54H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Engineered zonal isolation cementing operations, slurry formulations, and primary or remedial cementing packages for oilfield well integrity.',
      points: [
        'Primary and secondary zonal isolation cementing',
        'API laboratory slurry testing and quality assurance'
      ]
    },
    {
      id: 'wellhead',
      title: 'WELLHEAD & XMAS TREE SERVICES',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6V58" stroke="currentColor" strokeWidth="3"/>
          <path d="M14 24H50" stroke="currentColor" strokeWidth="3"/>
          <path d="M18 40H46" stroke="currentColor" strokeWidth="3"/>
          <circle cx="14" cy="24" r="5" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <circle cx="50" cy="24" r="5" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <circle cx="18" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="white"/>
          <circle cx="46" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="white"/>
          <path d="M10 58H54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'WH & Xmas Tree management and preventative maintenance following international standards recommendations for dimensional and functional interchangeability.',
      points: [
        '1. Visual inspection for corrosion & damage',
        '2. Function testing Christmas tree & wellhead valves',
        '3. Full greasing and sealant injection',
        '4. Pressure integrity checks on all void spaces',
        '5. Reenergizing & retesting wellhead seals',
        '6. Thread repairs & packing port thread rectification',
        '7. Hand wheels, bearings, bonnet seals & gauges replacement'
      ]
    }
  ];

  const bottomRowServices = [
    {
      id: 'slickline',
      title: 'SLICKLINE SERVICES',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="24" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="3"/>
          <circle cx="26" cy="48" r="6" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <circle cx="38" cy="48" r="6" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <path d="M20 24V14L32 6L44 14V24" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Extensive range of slickline services from basic completion intervention to advanced applications. Standard 108" slickline as well as 125" and 160" slicklines.',
      points: [
        'Pressure control equipment 3" to 7 5/8"',
        'Pressure ratings from 5K psi to 15K psi'
      ]
    },
    {
      id: 'well-testing',
      title: 'SURFACE WELL TESTING & MONITORING',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="20" width="36" height="20" rx="10" stroke="currentColor" strokeWidth="3"/>
          <path d="M22 40V54" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M42 40V54" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="30" r="4" fill="var(--accent-gold)"/>
          <path d="M12 54H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 10V20" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="10" r="3" stroke="var(--accent-gold)" strokeWidth="2"/>
        </svg>
      ),
      description: 'Surface production testing and flowback services enabling client operational efficiency and maximum initial production optimization.',
      points: [
        '3-Phase test separator units',
        'Real-time data acquisition and pressure monitoring'
      ]
    },
    {
      id: 'drilling-workover',
      title: 'DRILLING & WORKOVER SERVICES',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6L14 54H50L32 6Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M23 30H41" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M19 42H45" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="22" r="3" fill="var(--accent-gold)"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Directional drilling, workover rigs, and wellbore cleanout engineering supporting onshore field developments in Syria.',
      points: [
        'Onshore workover and drilling rig packages',
        'Directional bottom-hole assembly (BHA) engineering'
      ]
    },
    {
      id: 'construction-services',
      title: 'CONSTRUCTION SERVICES',
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 54V24L32 10L50 24V54" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <rect x="24" y="32" width="16" height="22" stroke="var(--accent-gold)" strokeWidth="2.5"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 22H38" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Full field construction services including logistics coordination, heavy equipment transportation, skilled manpower supply, and site catering.',
      points: [
        'Logistics & heavy transport fleet',
        'Certified technical manpower supply',
        'Site camp & catering management'
      ]
    }
  ];

  return (
    <>
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <div className="static-page-banner" style={{ marginBottom: '2.5rem' }}>
        <img src="/images/banner_well_services_hero.png" alt="Almatar Well Services" />
        <div className="static-banner-overlay">
          <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>TECHNICAL PORTFOLIO</span>
          <h1 className="static-banner-title">OUR SERVICES</h1>
          <p style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '1.05rem', maxWidth: '750px' }}>
            ALMATAR offers a wide range of services designed to optimize production, extend reservoir life, and ensure operational excellence across all onshore sites.
          </p>
        </div>
      </div>

      {/* Inch-Perfect Clean White Service Icon Panel Grid (Matching User Screenshot) */}
      <div className="services-icon-panel">
        
        {/* Row 1: 5 Columns */}
        <div className="services-icon-grid row-5-cols">
          {topRowServices.map((service) => (
            <div 
              key={service.id}
              className={`icon-service-card ${selectedService?.id === service.id ? 'active-selected' : ''}`}
              onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
            >
              <div className="card-top-accent"></div>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="icon-card-title">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Row Divider */}
        <div className="services-row-divider"></div>

        {/* Row 2: 4 Columns (Centered) */}
        <div className="services-icon-grid row-4-cols">
          {bottomRowServices.map((service) => (
            <div 
              key={service.id}
              className={`icon-service-card ${selectedService?.id === service.id ? 'active-selected' : ''}`}
              onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
            >
              <div className="card-top-accent"></div>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="icon-card-title">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>

      {/* Selected Service Detailed View Drawer / Card */}
      {selectedService && (
        <div className="service-detail-drawer">
          <div className="drawer-header-row">
            <div>
              <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>TECHNICAL SPECIFICATIONS</span>
              <h2 className="drawer-title" style={{ fontSize: '1.6rem', color: 'var(--accent-gold)' }}>{selectedService.title}</h2>
            </div>
            <button className="drawer-close-btn" onClick={() => setSelectedService(null)}>&times;</button>
          </div>
          <p style={{ color: '#e2e8f0', lineHeight: '1.7', fontSize: '1.05rem', margin: '1rem 0' }}>
            {selectedService.description}
          </p>
          <ul className="card-list" style={{ marginTop: '1rem' }}>
            {selectedService.points.map((pt, idx) => (
              <li key={idx} style={{ color: '#ffffff', marginBottom: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent-gold)" style={{ minWidth: '18px' }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Drilling & Fluids"
        subtitle="Learn more"
        link="/drilling-fluids"
        bgImage="/images/banner_drilling_hero.png"
      />
    </>
  );
}
