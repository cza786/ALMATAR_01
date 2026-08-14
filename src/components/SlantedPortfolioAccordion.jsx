'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function SlantedPortfolioAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { t } = useLanguage();

  const services = [
    {
      id: 'well-services',
      number: '01',
      tag: t('accordion.item1.tag'),
      title: t('accordion.item1.title'),
      shortTitle: t('accordion.item1.tag'),
      description: t('accordion.item1.desc'),
      features: t('accordion.item1.feats') || ['Zone I & II Coiled Tubing', 'High Pressure Pumping', 'Wellhead Maintenance'],
      image: '/images/service_coiled_tubing.png',
      link: '/well-services',
      color: 'var(--accent-gold)'
    },
    {
      id: 'drilling-fluids',
      number: '02',
      tag: t('accordion.item2.tag'),
      title: t('accordion.item2.title'),
      shortTitle: t('accordion.item2.tag'),
      description: t('accordion.item2.desc'),
      features: t('accordion.item2.feats') || ['Directional Drilling', 'Water & Oil-Based Mud', 'Laboratory Analysis'],
      image: '/images/service_drilling_fluids.png',
      link: '/drilling-fluids',
      color: 'var(--accent-cyan)'
    },
    {
      id: 'construction',
      number: '03',
      tag: t('accordion.item3.tag'),
      title: t('accordion.item3.title'),
      shortTitle: t('accordion.item3.tag'),
      description: t('accordion.item3.desc'),
      features: t('accordion.item3.feats') || ['Heavy Transport Fleet', 'FRAC Tank Rentals', 'Modular Site Camps'],
      image: '/images/service_construction.png',
      link: '/construction',
      color: '#10b981'
    },
    {
      id: 'qhse',
      number: '04',
      tag: t('accordion.item4.tag'),
      title: t('accordion.item4.title'),
      shortTitle: t('accordion.item4.tag'),
      description: t('accordion.item4.desc'),
      features: t('accordion.item4.feats') || ['Zero Harm Policy', '7-Point Site Inspection', 'ISO Standard Compliance'],
      image: '/images/qhse_safety.png?v=2',
      link: '/qhse',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="slanted-portfolio-section">
      <div className="container position-relative" style={{ zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>{t('accordion.eyebrow')}</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>{t('accordion.title')}</h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '720px', margin: '0.6rem auto 0 auto' }}>
            {t('accordion.subtitle')}
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
                onClick={() => setHoveredIndex(index)}
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
                      <span>{t('accordion.explore')}</span>
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
