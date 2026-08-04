'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      tag: 'INTEGRATED OILFIELD MANAGEMENT',
      title: 'INTEGRATED OILFIELD & PROJECTS MANAGEMENT',
      description: 'ALMATAR provides a range of specialized services and solutions to the oil and gas industry within SYR OPCO with technical collaboration with internationally reputed organizations.',
      image: '/images/hero_drilling_rig.png',
      link: '/about',
      tabLabel: 'OVERVIEW'
    },
    {
      tag: 'WELL SERVICES',
      title: 'ADVANCED WELL INTERVENTION & STIMULATION',
      description: 'Increase production from older and marginal fields with engineered fluids, down-hole systems, Coiled Tubing Zone I & II units, and complete zonal isolation cementing.',
      image: '/images/service_coiled_tubing.png',
      link: '/well-services',
      tabLabel: 'WELL SERVICES'
    },
    {
      tag: 'DRILLING & FLUIDS',
      title: 'DIRECTIONAL DRILLING & FLUID CHEMISTRY',
      description: 'Delivering superior hole quality and precise wellbore placement combined with innovative fluid chemistry systems and laboratory sample specialists.',
      image: '/images/service_drilling_fluids.png',
      link: '/drilling-fluids',
      tabLabel: 'DRILLING & FLUIDS'
    },
    {
      tag: 'CONSTRUCTION & LOGISTICS',
      title: 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS',
      description: 'In collaboration with highly reputed partners, ALMATAR provides comprehensive construction, heavy equipment transportations, manpower, and catering services.',
      image: '/images/service_construction.png',
      link: '/construction',
      tabLabel: 'CONSTRUCTION'
    },
    {
      tag: 'OILFIELD TRADING',
      title: 'OILFIELD TRADING & EQUIPMENT SUPPLY',
      description: 'Sourcing high-spec drilling chemicals, downhole tools, API certified wellheads, and heavy oilfield equipment through trusted international partner networks.',
      image: '/images/service_wellhead.png',
      link: '/trading',
      tabLabel: 'TRADING'
    },
    {
      tag: 'QHSE COMMITMENT',
      title: 'QUALITY, HEALTH, SAFETY & ENVIRONMENTAL (QHSE)',
      description: 'Demonstrating an ongoing and determined commitment to improving health and safety at work throughout our organization and operating facilities.',
      image: '/images/qhse_safety.png',
      link: '/qhse',
      tabLabel: 'QHSE SAFETY'
    },
    {
      tag: 'JOIN OUR TEAM',
      title: 'BUILD YOUR FUTURE WITH ALMATAR PETROLEUM SERVICES',
      description: 'Join our team of dedicated field engineers and technical experts. Discover professional growth, modern equipment, and competitive employee benefits.',
      image: '/images/careers_engineers_hero.png',
      link: '/careers',
      tabLabel: 'CAREERS'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-header-section">
      <div className="hero-slider-container">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === currentIndex ? 'active' : ''}`}>
            <div className="hero-slide-bg">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="container hero-content-wrap position-relative">
              {/* Golden Transparent Logo Badge in Hero Section (Home Screen Only) */}
              <div className="hero-corner-emblem">
                <img src="/images/almatar_logo_transparent.png" alt="ALMATAR Logo" className="hero-emblem-img" />
              </div>

              <span className="hero-tag">{slide.tag}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              
              <Link href={slide.link} className="btn-learn-more">
                <span>Learn more</span>
                <span className="arrow-circle">&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Tabs Grid with Progress Indicators */}
      <div className="hero-nav-bar">
        <div className="container">
          <div className="hero-tabs-grid">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`hero-tab-item ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              >
                <div className="tab-label-wrap">
                  <span className="tab-dot-mini"></span>
                  <span>{slide.tabLabel}</span>
                </div>
                <div className="progress-track">
                  {i === currentIndex && <div className="progress-fill"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
