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
    ['well-intervention', '01', 'WELL INTERVENTION SERVICES', 'Well Intervention Services', '/images/policies-photo/services/drilling_workover/well-intervention-hero-clear.webp', '/well-services', 'var(--accent-gold)'],
    ['coiled-tubing', '02', 'COILED TUBING & NITROGEN PUMPING', 'Coiled Tubing & Nitrogen Pumping', '/images/policies-photo/services/almatar_coiled_tubing_photos/01_clean_hero_coiled_tubing.webp', '/coiled-tubing', 'var(--accent-gold)'],
    ['stimulation', '03', 'STIMULATION & FRACTURING', 'Stimulation & Fracturing', '/images/policies-photo/services/almatar_stimulation_all_photos/01_hero_stimulation_fracturing.webp', '/stimulation-fracturing', '#10b981'],
    ['zonal-isolation', '04', 'ZONAL ISOLATION & CEMENTING', 'Zonal Isolation & Cementing', '/images/policies-photo/services/almatar_zonal_isolation_photos/01_hero_cementing_operation.webp', '/zonal-isolation-cementing', '#10b981'],
    ['wellhead', '05', 'WELLHEAD & XMAS TREE SERVICES', 'Wellhead & Xmas Tree Services', '/images/policies-photo/services/almatar_wellhead_text_free_separate_photos/01_wellhead_hero_workers.webp', '/wellhead-xmas-tree', '#f59e0b'],
    ['slickline', '06', 'SLICKLINE SERVICES', 'Slickline Services', '/images/policies-photo/services/almatar_clean_photos/01_hero_slickline_scene.webp', '/slickline-services', '#f59e0b'],
    ['well-testing', '07', 'WELL TESTING & FLARING', 'Well Testing & Flaring', '/images/policies-photo/services/almatar_well_testing_clean_photos/01_hero_well_testing_scene.webp', '/well-testing', '#06b6d4'],
    ['drilling-workover', '08', 'DRILLING & WORKOVER SERVICES', 'Drilling & Workover Services', '/images/banner_drilling_hero.webp', '/drilling-workover', 'var(--accent-cyan)'],
    ['construction', '09', 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS', 'Total Field Construction & Manpower Logistics', '/images/policies-photo/services/almatar_total_field_all_photos/03_rig_and_site_mobilization-hd.webp', '/construction', '#10b981'],
  ];

  return (
    <section className="slanted-portfolio-section">
      <div className="container position-relative" style={{ zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header home-portfolio-header">
          <span className="section-eyebrow">{t('accordion.eyebrow')}</span>
          <h2 className="section-title">{t('accordion.title')}</h2>
          <p className="section-subtitle">
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
          {services.map(([id, number, tag, title, image, link, color]) => {
            return (
              <Link
                key={id}
                href={link}
                className={`home-service-card home-service-card-${id}`}
              >
                {/* Background Image Wrapper (Inverse Skewed) */}
                <div className="lux-bg-wrapper">
                  <img src={image} alt={title} className="lux-bg-img" loading="lazy" />
                  <div className="lux-gradient-overlay"></div>
                </div>

                {/* Inner Content (Upright Inverse Skewed) */}
                <div className="lux-card-inner">
                  
                  {/* Line 1: Number & Eyebrow Tag */}
                  <div className="lux-line-1">
                    <span className="lux-card-num">{number}</span>
                    <span className="lux-card-tag" style={{ color }}>{tag}</span>
                  </div>

                  {/* Line 2: Main Title */}
                  <div className="lux-line-2">
                    <h3 className="lux-card-title">{title}</h3>
                  </div>

                  {/* Line 3: Description */}
                  <div className="lux-line-3" aria-hidden="true" />

                  {/* Line 4: Feature Badges (Animated Line 4) */}
                  <div className="lux-line-4" aria-hidden="true" />

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
