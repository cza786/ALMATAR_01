'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SlantedPortfolioAccordion() {
  const { t } = useLanguage();
  const cardsRef = useRef(null);

  const scrollCards = (direction) => {
    cardsRef.current?.scrollBy({
      left: direction * cardsRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      id: 'well-services',
      number: '01',
      tag: t('accordion.item1.tag'),
      title: t('accordion.item1.title'),
      shortTitle: t('accordion.item1.tag'),
      description: t('accordion.item1.desc'),
      features: t('accordion.item1.feats') || ['Zone I & II Coiled Tubing', 'High Pressure Pumping', 'Wellhead Maintenance'],
      image: '/images/policies-photo/services/drilling_workover/well-intervention-hero-clear.webp',
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
      image: '/images/banner_drilling_hero.webp',
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
      image: '/images/policies-photo/services/almatar_total_field_all_photos/01_hero_total_field_construction.webp',
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
      image: '/images/qhse_safety.webp',
      link: '/qhse',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="slanted-portfolio-section">
      <div className="container position-relative" style={{ zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header home-portfolio-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>{t('accordion.eyebrow')}</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>{t('accordion.title')}</h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '720px', margin: '0.6rem 0 0' }}>
            {t('accordion.subtitle')}
          </p>
        </div>

        {/* Slanted Diagonal Accordion Container */}
        <div className="home-service-carousel">
          <button
            type="button"
            className="home-service-carousel-arrow home-service-carousel-arrow-left"
            aria-label="Show previous service"
            onClick={() => scrollCards(-1)}
          >
            &larr;
          </button>

          <div className="home-service-cards" ref={cardsRef}>
          {services.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`home-service-card home-service-card-${item.id}`}
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
                    <span className="lux-action-btn">
                      <span>{t('accordion.explore')}</span>
                      <span className="lux-arrow">&rarr;</span>
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}
          </div>

          <button
            type="button"
            className="home-service-carousel-arrow home-service-carousel-arrow-right"
            aria-label="Show next service"
            onClick={() => scrollCards(1)}
          >
            &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
