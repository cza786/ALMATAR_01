'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, lang } = useLanguage();
  const [sanitySlides, setSanitySlides] = useState(null);

  useEffect(() => {
    async function loadHomeContent() {
      try {
        const homeData = await getSanityContent('home', HOME_PAGE_QUERY);
        if (homeData?.heroSlides?.length > 0) {
          setSanitySlides(homeData.heroSlides);
        }
      } catch (err) {
        console.warn('Using default hero carousel slides:', err);
      }
    }
    loadHomeContent();
  }, []);

  const defaultSlides = [
    {
      tag: t('hero.slide1Tag'),
      title: t('hero.slide1Title'),
      description: t('hero.slide1Desc'),
      image: '/images/hero_drilling_rig.png',
      link: '/about',
      tabLabel: t('hero.tabs.overview'),
    },
    {
      tag: t('hero.slide2Tag'),
      title: t('hero.slide2Title'),
      description: t('hero.slide2Desc'),
      image: '/images/service_coiled_tubing.png',
      link: '/well-services',
      tabLabel: t('hero.tabs.wellServices'),
    },
    {
      tag: t('hero.slide3Tag'),
      title: t('hero.slide3Title'),
      description: t('hero.slide3Desc'),
      image: '/images/service_drilling_fluids.png',
      link: '/drilling-fluids',
      tabLabel: t('hero.tabs.drillingFluids'),
    },
    {
      tag: t('hero.slide4Tag'),
      title: t('hero.slide4Title'),
      description: t('hero.slide4Desc'),
      image: '/images/service_construction.png',
      link: '/construction',
      tabLabel: t('hero.tabs.construction'),
    },
    {
      tag: t('hero.slide5Tag'),
      title: t('hero.slide5Title'),
      description: t('hero.slide5Desc'),
      image: '/images/service_wellhead.png',
      link: '/trading',
      tabLabel: t('hero.tabs.trading'),
    },
    {
      tag: t('hero.slide6Tag'),
      title: t('hero.slide6Title'),
      description: t('hero.slide6Desc'),
      image: '/images/qhse_safety.png?v=2',
      link: '/qhse',
      tabLabel: t('hero.tabs.qhse'),
    },
  ];

  const slides = sanitySlides
    ? sanitySlides.map((s, idx) => ({
        tag: (lang === 'ar' ? s.badgeAr : s.badgeEn) || defaultSlides[idx % defaultSlides.length]?.tag,
        title: (lang === 'ar' ? s.titleAr : s.titleEn) || defaultSlides[idx % defaultSlides.length]?.title,
        description: (lang === 'ar' ? s.subtitleAr : s.subtitleEn) || defaultSlides[idx % defaultSlides.length]?.description,
        image: s.image ? getImageUrl(s.image, defaultSlides[idx % defaultSlides.length]?.image) : defaultSlides[idx % defaultSlides.length]?.image,
        link: s.link || defaultSlides[idx % defaultSlides.length]?.link,
        tabLabel: (lang === 'ar' ? s.badgeAr : s.badgeEn) || defaultSlides[idx % defaultSlides.length]?.tabLabel,
      }))
    : defaultSlides;

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
              <span className="hero-tag">{slide.tag}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              
              <Link href={slide.link} className="btn-learn-more">
                <span>{t('hero.learnMore')}</span>
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
                style={{ cursor: 'pointer' }}
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
