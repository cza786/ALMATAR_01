'use client';

import { useState } from 'react';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function WellServicesPage() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const topRowServices = [
    {
      id: 'well-intervention',
      title: t('wellServicesPage.services.wellIntervention.title'),
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
      description: t('wellServicesPage.services.wellIntervention.desc'),
      points: [
        t('wellServicesPage.services.wellIntervention.p1'),
        t('wellServicesPage.services.wellIntervention.p2')
      ]
    },
    {
      id: 'coiled-tubing',
      title: t('wellServicesPage.services.coiledTubing.title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="32" cy="24" r="16" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="24" r="8" stroke="var(--accent-gold)" strokeWidth="2.5"/>
          <path d="M32 40V56" stroke="currentColor" strokeWidth="3"/>
          <path d="M16 56H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: t('wellServicesPage.services.coiledTubing.desc'),
      points: [
        t('wellServicesPage.services.coiledTubing.p1'),
        t('wellServicesPage.services.coiledTubing.p2')
      ]
    },
    {
      id: 'stimulation',
      title: t('wellServicesPage.services.stimulation.title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 54V24L32 10L44 24V54" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <rect x="26" y="32" width="12" height="22" stroke="var(--accent-gold)" strokeWidth="2.5" rx="2"/>
          <path d="M12 54H52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 10V4" stroke="var(--accent-gold)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 16L32 10L38 16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: t('wellServicesPage.services.stimulation.desc'),
      points: [
        t('wellServicesPage.services.stimulation.p1'),
        t('wellServicesPage.services.stimulation.p2'),
        t('wellServicesPage.services.stimulation.p3')
      ]
    },
    {
      id: 'zonal-isolation',
      title: t('wellServicesPage.services.zonalIsolation.title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="12" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="3"/>
          <line x1="16" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="2.5"/>
          <line x1="16" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="44" r="3" fill="var(--accent-gold)"/>
          <path d="M8 58H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: t('wellServicesPage.services.zonalIsolation.desc'),
      points: [
        t('wellServicesPage.services.zonalIsolation.p1'),
        t('wellServicesPage.services.zonalIsolation.p2')
      ]
    },
    {
      id: 'wellhead',
      title: t('xmasTreeTitle'),
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
      description: t('wellServicesPage.services.wellhead.desc'),
      points: [
        t('wellServicesPage.services.wellhead.p1'),
        t('wellServicesPage.services.wellhead.p2'),
        t('wellServicesPage.services.wellhead.p3'),
        t('wellServicesPage.services.wellhead.p4'),
        t('wellServicesPage.services.wellhead.p5'),
        t('wellServicesPage.services.wellhead.p6'),
        t('wellServicesPage.services.wellhead.p7')
      ]
    }
  ];

  const bottomRowServices = [
    {
      id: 'slickline',
      title: t('wellServicesPage.services.slickline.title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="24" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="3"/>
          <circle cx="26" cy="48" r="6" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <circle cx="38" cy="48" r="6" stroke="var(--accent-gold)" strokeWidth="2.5" fill="white"/>
          <path d="M20 24V14L32 6L44 14V24" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: t('wellServicesPage.services.slickline.desc'),
      points: [
        t('wellServicesPage.services.slickline.p1'),
        t('wellServicesPage.services.slickline.p2')
      ]
    },
    {
      id: 'well-testing',
      title: t('wellServicesPage.services.testing.title'),
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
      description: t('wellServicesPage.services.testing.desc'),
      points: [
        t('wellServicesPage.services.testing.p1'),
        t('wellServicesPage.services.testing.p2')
      ]
    },
    {
      id: 'drilling-workover',
      title: t('drillingFluidsPage.card1Title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6L14 54H50L32 6Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M23 30H41" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M19 42H45" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="32" cy="22" r="3" fill="var(--accent-gold)"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: t('drillingFluidsPage.card1Desc'),
      points: [
        t('drillingFluidsPage.card1Point1'),
        t('drillingFluidsPage.card1Point2')
      ]
    },
    {
      id: 'construction-services',
      title: t('constructionPage.title'),
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 54V24L32 10L50 24V54" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <rect x="24" y="32" width="16" height="22" stroke="var(--accent-gold)" strokeWidth="2.5"/>
          <path d="M8 54H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 22H38" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: t('constructionPage.card1Desc'),
      points: [
        t('constructionPage.card1Point1'),
        t('constructionPage.card1Point2'),
        t('constructionPage.card2Point2')
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
          <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>{t('wellServicesPage.eyebrow')}</span>
          <h1 className="static-banner-title">{t('wellServicesPage.title')}</h1>
          <p style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '1.05rem', maxWidth: '750px' }}>
            {t('wellServicesPage.heroDesc')}
          </p>
        </div>
      </div>

      {/* Clean White Service Icon Panel Grid */}
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
        title={t('nav.drillingFluids')}
        subtitle={t('hero.learnMore')}
        link="/drilling-fluids"
        bgImage="/images/banner_drilling_hero.png"
      />
    </>
  );
}
