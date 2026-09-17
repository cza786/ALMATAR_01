'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const imgFolder = '/images/policies-photo/services/almatar_clean_photos/';

const navServices = [
  { name: 'WELL INTERVENTION SERVICES', href: '/well-services', icon: 'rig' },
  { name: 'COILED TUBING & NITROGEN PUMPING', href: '/well-services#coiled-tubing', icon: 'tubing' },
  { name: 'STIMULATION & FRACTURING', href: '/stimulation-fracturing', icon: 'stim' },
  { name: 'ZONAL ISOLATION & CEMENTING', href: '/zonal-isolation-cementing', icon: 'zonal' },
  { name: 'WELLHEAD & XMAS TREE SERVICES', href: '/wellhead-xmas-tree', icon: 'wellhead' },
  { name: 'SLICKLINE SERVICES', href: '/slickline-services', icon: 'slickline', active: true },
  { name: 'WELL TESTING & FLARING', href: '/well-services#well-testing', icon: 'testing' },
  { name: 'DRILLING AND WORKOVER SERVICES', href: '/well-services#drilling-workover', icon: 'drilling' },
  { name: 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS', href: '/construction', icon: 'construction' },
];

function NavIcon({ type }) {
  switch (type) {
    case 'rig':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L4 22h16L12 2zM12 2v20M7 14h10M9 10h6" />
        </svg>
      );
    case 'tubing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 12h10M12 7v10" />
        </svg>
      );
    case 'stim':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20v-7l8-5 8 5v7H4zM12 3v5" />
        </svg>
      );
    case 'zonal':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M4 12h16M12 4v16" />
        </svg>
      );
    case 'wellhead':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v4M6 6h12M12 6v6M8 12h8M6 18h12M12 12v6M12 18v4" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      );
    case 'slickline':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M8 6h8M6 12h12M9 18h6" />
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="12" cy="18" r="1.5" />
        </svg>
      );
    case 'testing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case 'drilling':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M4 22h16M7 17l5-5 5 5" />
        </svg>
      );
    case 'construction':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SlicklineServicesPage() {
  const { lang, t } = useLanguage();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryRef = useRef(null);

  const galleryImages = [
    { src: `${imgFolder}03_field_worker_valve.webp`, title: 'Field Operations', subtitle: 'Technician operating wellhead valve under pressure control' },
    { src: `${imgFolder}04_service_truck_rig.webp`, title: 'Mobilization Unit', subtitle: 'Heavy-duty slickline service truck deployed at onshore rig site' },
    { src: `${imgFolder}05_worker_tool_closeup.webp`, title: 'Precision Tooling', subtitle: 'Field engineer inspecting downhole tool assembly before run-in' },
    { src: `${imgFolder}06_two_workers_rig.webp`, title: 'Team Execution', subtitle: 'Experienced crew conducting safe wireline intervention' },
  ];

  const processSteps = [
    {
      num: 1,
      title: 'Planning & Engineering',
      desc: 'Well analysis, tool selection and job planning.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
      ),
    },
    {
      num: 2,
      title: 'Mobilization',
      desc: 'Equipment and experienced crew deployment.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      num: 3,
      title: 'Execution',
      desc: 'Safe and efficient slickline operations.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <path d="M12 2L4 22h16L12 2zM12 2v20" />
        </svg>
      ),
    },
    {
      num: 4,
      title: 'Data & Analysis',
      desc: 'Accurate data acquisition and interpretation.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      num: 5,
      title: 'Reporting',
      desc: 'Detailed job report and recommendations.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isStepPaused, setIsStepPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isStepPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isStepPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
      setIsStepPaused(true);
    } else if (diff < -40) {
      setActiveStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
      setIsStepPaused(true);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const nextGallery = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallery = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const card = galleryRef.current?.children[galleryIndex];
    if (card && window.matchMedia('(max-width: 700px)').matches) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, [galleryIndex]);

  return (
    <div className="slickline-page-root">
      {/* 1. HERO BANNER SECTION */}
      <section className="slickline-hero-section">
        <div className="slickline-hero-container">
          <div className="slickline-hero-content">
            <div className="section-label-group">
              <span className="orange-bar">—</span>
              <span className="section-label">OUR SERVICES</span>
            </div>
            <h1 className="slickline-hero-title">SLICKLINE SERVICES</h1>
            <p className="slickline-hero-lead">
              Reliable downhole solutions for well measurement, mechanical intervention and reservoir monitoring.
            </p>
            <p className="slickline-hero-desc">
              ALMATAR provides safe, efficient and cost-effective slickline services to support well integrity, production optimization and reservoir management across onshore operations.
            </p>
            <div className="slickline-hero-actions">
              <Link href="/contact" className="slickline-cta-btn">
                Request Technical Support <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="slickline-hero-image-wrap">
            <img
              src={`${imgFolder}01_hero_slickline_scene.webp`}
              alt="ALMATAR Slickline Operations Unit"
              className="slickline-hero-img"
            />
            <div className="slickline-badge-overlay">
              <span className="badge-line">PROVEN EXPERIENCE.</span>
              <span className="badge-line">SOLUTIONS.</span>
              <span className="badge-highlight">LASTING VALUE.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL OVERVIEW & CAPABILITIES SECTION */}
      <section className="slickline-overview-section">
        <div className="slickline-overview-container">
          <div className="slickline-overview-grid">
            {/* Left Column: Rig with Depth Scale */}
            <div className="slickline-depth-card">
              <div className="depth-img-wrap">
                <img
                  src={`${imgFolder}02_rig_depth_scene_clean.webp`}
                  alt="Onshore Rig Slickline Depth Scale"
                  className="depth-bg-img"
                />
                {/* Vertical Depth Scale Overlay */}
                <div className="depth-ruler">
                  <div className="depth-mark" style={{ top: '5%' }}><span>0 m</span></div>
                  <div className="depth-mark" style={{ top: '16%' }}><span>500 m</span></div>
                  <div className="depth-mark" style={{ top: '28%' }}><span>1,000 m</span></div>
                  <div className="depth-mark" style={{ top: '40%' }}><span>1,500 m</span></div>
                  <div className="depth-mark" style={{ top: '52%' }}><span>2,000 m</span></div>
                  <div className="depth-mark" style={{ top: '64%' }}><span>2,500 m</span></div>
                  <div className="depth-mark" style={{ top: '76%' }}><span>3,000 m</span></div>
                  <div className="depth-mark" style={{ top: '86%' }}><span>3,500 m</span></div>
                  <div className="depth-mark" style={{ top: '96%' }}><span>4,000 m</span></div>
                  <div className="ruler-line" />
                </div>
                <div className="depth-banner">
                  <span>PRECISION AT EVERY DEPTH</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Overview Text & Capabilities */}
            <div className="slickline-overview-center">
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">TECHNICAL OVERVIEW</span>
              </div>
              <h2 className="slickline-sec-title">PROVEN SOLUTIONS DOWNHOLE</h2>
              <p className="slickline-body-text">
                Our slickline services use a single-stranded steel wireline to run mechanical tools into the well for measurement, monitoring and light intervention. We deliver reliable data and efficient mechanical solutions to keep your wells performing.
              </p>

              {/* 4 Feature Badges Grid */}
              <div className="slickline-features-quad">
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span>Reliable Operations</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                  </div>
                  <span>Experienced Field Teams</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span>Fit for Onshore Conditions</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <span>Cost-Effective Solutions</span>
                </div>
              </div>

              {/* Our Slickline Capabilities */}
              <div className="slickline-caps-wrapper">
                <div className="section-label-group">
                  <span className="orange-bar">—</span>
                  <span className="section-label">OUR SLICKLINE CAPABILITIES</span>
                </div>
                <p className="slickline-caps-sub">A complete range of mechanical and measurement solutions.</p>

                <div className="slickline-caps-grid">
                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Well Measurement</h4>
                      <p className="cap-desc">Accurate depth, fluid level and wellbore surveys.</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Pressure &amp; Temperature</h4>
                      <p className="cap-desc">Downhole pressure and temperature surveys.</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <rect x="5" y="4" width="14" height="16" rx="2" />
                        <path d="M9 9h6M9 15h6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Setting &amp; Retrieving Plugs</h4>
                      <p className="cap-desc">Installation and recovery of bridge plugs, dummy plugs and other downhole equipment.</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M8 3v18M16 3v18M3 12h18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Shifting Sleeves</h4>
                      <p className="cap-desc">Operation of sliding sleeves and circulation devices.</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
                        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8.5" />
                        <path d="M6 14.5V11a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6a7.5 7.5 0 0 0 15 0v-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Fishing &amp; Retrieval</h4>
                      <p className="cap-desc">Recovery of lost tools and downhole equipment.</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">Downhole Mechanical Operations</h4>
                      <p className="cap-desc">Various mechanical tasks to support well integrity and production.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Typical Slickline Toolstring Schematic */}
            <div className="slickline-toolstring-card">
              <h3 className="toolstring-title">TYPICAL SLICKLINE TOOLSTRING</h3>
              <div className="toolstring-diagram-wrap">
                {/* SVG Vector Toolstring Diagram */}
                <svg viewBox="0 0 320 620" className="toolstring-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wireline Thread line */}
                  <line x1="160" y1="10" x2="160" y2="50" stroke="#0B192C" strokeWidth="2.5" strokeDasharray="3 3" />
                  
                  {/* 1. Rope Socket */}
                  <g transform="translate(140, 50)">
                    <rect x="0" y="0" width="40" height="50" rx="4" fill="#E2E8F0" stroke="#0B192C" strokeWidth="2" />
                    <line x1="0" y1="15" x2="40" y2="15" stroke="#0B192C" strokeWidth="1.5" />
                    <line x1="0" y1="35" x2="40" y2="35" stroke="#0B192C" strokeWidth="1.5" />
                    <text x="20" y="30" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0B192C">RS</text>
                  </g>
                  <line x1="180" y1="75" x2="225" y2="75" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="75" r="3" fill="#D9531E" />

                  {/* 2. Stem (Weight Bar) */}
                  <g transform="translate(144, 110)">
                    <rect x="0" y="0" width="32" height="110" rx="3" fill="#CBD5E1" stroke="#0B192C" strokeWidth="2" />
                    <line x1="0" y1="30" x2="32" y2="30" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="0" y1="60" x2="32" y2="60" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="0" y1="90" x2="32" y2="90" stroke="#94A3B8" strokeWidth="1" />
                  </g>
                  <line x1="176" y1="165" x2="225" y2="165" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="165" r="3" fill="#D9531E" />

                  {/* 3. Jars */}
                  <g transform="translate(146, 230)">
                    <rect x="2" y="0" width="28" height="80" fill="#E2E8F0" stroke="#0B192C" strokeWidth="2" />
                    <path d="M8 20 L24 20 M8 40 L24 40 M8 60 L24 60" stroke="#0B192C" strokeWidth="1.5" />
                  </g>
                  <line x1="174" y1="270" x2="225" y2="270" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="270" r="3" fill="#D9531E" />

                  {/* 4. Pulling Tool */}
                  <g transform="translate(142, 320)">
                    <polygon points="4,0 36,0 32,70 8,70" fill="#CBD5E1" stroke="#0B192C" strokeWidth="2" />
                    <line x1="8" y1="35" x2="32" y2="35" stroke="#0B192C" strokeWidth="1.5" />
                  </g>
                  <line x1="174" y1="355" x2="225" y2="355" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="355" r="3" fill="#D9531E" />

                  {/* 5. Gauge / Logging Tool */}
                  <g transform="translate(145, 400)">
                    <rect x="0" y="0" width="30" height="120" rx="15" fill="#0B192C" stroke="#D9531E" strokeWidth="2" />
                    <circle cx="15" cy="30" r="4" fill="#D9531E" />
                    <circle cx="15" cy="60" r="4" fill="#38BDF8" />
                    <circle cx="15" cy="90" r="4" fill="#D9531E" />
                  </g>
                  <line x1="175" y1="460" x2="225" y2="460" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="460" r="3" fill="#D9531E" />

                  {/* 6. Tool End Sub */}
                  <g transform="translate(148, 530)">
                    <polygon points="0,0 24,0 12,35" fill="#D9531E" stroke="#0B192C" strokeWidth="2" />
                  </g>
                  <line x1="172" y1="545" x2="225" y2="545" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="225" cy="545" r="3" fill="#D9531E" />
                </svg>

                {/* Diagram Labels Column */}
                <div className="toolstring-labels-col">
                  <div className="label-block" style={{ top: '65px' }}>
                    <h5 className="lbl-title">Rope Socket</h5>
                    <p className="lbl-sub">(Attachment to slickline)</p>
                  </div>

                  <div className="label-block" style={{ top: '155px' }}>
                    <h5 className="lbl-title">Stem</h5>
                    <p className="lbl-sub">(Accelerator / Weight Bar)</p>
                  </div>

                  <div className="label-block" style={{ top: '260px' }}>
                    <h5 className="lbl-title">Jars</h5>
                    <p className="lbl-sub">(Mechanical or Hydraulic)</p>
                  </div>

                  <div className="label-block" style={{ top: '345px' }}>
                    <h5 className="lbl-title">Pulling Tool</h5>
                    <p className="lbl-sub">(for plugs, nipples, etc.)</p>
                  </div>

                  <div className="label-block" style={{ top: '450px' }}>
                    <h5 className="lbl-title">Gauge / Logging Tool</h5>
                    <p className="lbl-sub">(Pressure, Temperature, etc.)</p>
                  </div>

                  <div className="label-block" style={{ top: '535px' }}>
                    <h5 className="lbl-title">Tool End Sub</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAXIMIZING WELL PERFORMANCE & WELLBORE SCHEMATIC */}
      <section className="slickline-performance-section">
        <div className="slickline-perf-container">
          <div className="slickline-perf-grid">
            <div className="slickline-perf-copy">
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">PRECISION AT DEPTH</span>
              </div>
              <h2 className="slickline-sec-title">MAXIMIZING WELL PERFORMANCE</h2>
              <p className="slickline-body-text">
                Slickline operations provide critical data and mechanical solutions that help you make informed decisions, reduce downtime and extend the life of your wells.
              </p>

              <div className="slickline-bullets-list">
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>Accurate and reliable well data</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>Supports production optimization</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>Minimizes operational time and cost</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>Applicable to a wide range of well types</span>
                </div>
              </div>
            </div>

            {/* Wellbore Diagram Schematic */}
            <div className="slickline-wellbore-schematic-card">
              <div className="schematic-inner">
                <svg viewBox="0 0 450 360" className="wellbore-svg">
                  {/* Rock strata background lines */}
                  <rect x="0" y="0" width="450" height="360" fill="#F8FAFC" />
                  <path d="M0 60 Q 225 70 450 60" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                  <path d="M0 130 Q 225 140 450 130" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                  <path d="M0 220 Q 225 210 450 220" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                  <rect x="0" y="270" width="450" height="90" fill="#FEF3C7" opacity="0.6" />

                  {/* Surface Rig Platform */}
                  <rect x="185" y="10" width="50" height="20" fill="#64748B" rx="2" />
                  <line x1="210" y1="30" x2="210" y2="360" stroke="#0B192C" strokeWidth="2" />

                  {/* Casing Outer Lines */}
                  <rect x="195" y="30" width="30" height="330" fill="none" stroke="#475569" strokeWidth="3" />
                  <rect x="200" y="30" width="20" height="330" fill="none" stroke="#D9531E" strokeWidth="1.5" strokeDasharray="5 3" />

                  {/* Downhole Tool Assembly */}
                  <rect x="203" y="240" width="14" height="60" rx="3" fill="#0B192C" stroke="#D9531E" strokeWidth="2" />
                  <circle cx="210" cy="270" r="3" fill="#38BDF8" />

                  {/* Callout Lines & Tags */}
                  {/* Surface */}
                  <line x1="235" y1="20" x2="340" y2="20" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="20" r="3" fill="#D9531E" />
                  <text x="350" y="24" fontSize="13" fontWeight="bold" fill="#0B192C">Surface</text>

                  {/* Casing */}
                  <line x1="225" y1="90" x2="340" y2="90" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="90" r="3" fill="#D9531E" />
                  <text x="350" y="94" fontSize="13" fontWeight="bold" fill="#0B192C">Casing</text>

                  {/* Slickline Toolstring */}
                  <line x1="210" y1="160" x2="340" y2="160" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="160" r="3" fill="#D9531E" />
                  <text x="350" y="164" fontSize="13" fontWeight="bold" fill="#0B192C">Slickline Toolstring</text>

                  {/* Downhole Tool */}
                  <line x1="217" y1="260" x2="340" y2="260" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="260" r="3" fill="#D9531E" />
                  <text x="350" y="254" fontSize="13" fontWeight="bold" fill="#0B192C">Downhole Tool</text>
                  <text x="350" y="270" fontSize="11" fill="#64748B">(Gauge / Plug / etc.)</text>

                  {/* Target Zone */}
                  <line x1="225" y1="315" x2="340" y2="315" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="315" r="3" fill="#D9531E" />
                  <text x="350" y="319" fontSize="13" fontWeight="bold" fill="#D9531E">Target Zone</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR OPERATION PROCESS SECTION */}
      <section className="slickline-process-section">
        <div className="slickline-process-container">
          <div className="process-header">
            <div className="section-label-group">
              <span className="orange-bar">—</span>
              <span className="section-label">OUR OPERATION PROCESS</span>
            </div>
            <h2 className="slickline-sec-title">FROM PLANNING TO RESULTS</h2>
          </div>

          {/* Desktop Stepper (Grid of 5 cards) */}
          <div className="slickline-stepper slickline-stepper-desktop">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`stepper-item ${activeStep === i ? 'active' : ''}`}
                onClick={() => {
                  setActiveStep(i);
                  setIsStepPaused(true);
                }}
              >
                <div className="step-num-badge">{step.num}</div>
                <div className="step-icon-wrap">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Stepper (Single fixed card with fading text/icon, step numbers under card) */}
          <div
            className="slickline-stepper-mobile"
            onMouseEnter={() => setIsStepPaused(true)}
            onMouseLeave={() => setIsStepPaused(false)}
          >
            <div
              className="stepper-mobile-card"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div key={activeStep} className="stepper-mobile-content">
                <div className="step-icon-wrap">
                  {processSteps[activeStep].icon}
                </div>
                <h4 className="step-title">{processSteps[activeStep].title}</h4>
                <p className="step-desc">{processSteps[activeStep].desc}</p>
              </div>
            </div>

            <div className="stepper-mobile-numbers-wrap">
              <div className="stepper-mobile-connecting-line" />
              {processSteps.map((step, i) => (
                <button
                  key={step.num}
                  type="button"
                  className={`step-num-btn ${activeStep === i ? 'active' : ''}`}
                  onClick={() => {
                    setActiveStep(i);
                    setIsStepPaused(true);
                  }}
                  aria-label={`Step ${step.num}: ${step.title}`}
                >
                  {step.num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FIELD OPERATIONS IN ACTION PHOTO GALLERY */}
      <section className="slickline-gallery-section">
        <div className="slickline-gallery-container">
          <div className="gallery-top-bar">
            <div>
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">FIELD OPERATIONS</span>
              </div>
              <h2 className="slickline-sec-title">IN ACTION</h2>
              <p className="gallery-sub">Delivering reliable slickline services across onshore fields in Syria and the region.</p>
            </div>
            <div className="gallery-controls">
              <button className="gallery-arrow-btn" onClick={prevGallery} aria-label="Previous image">
                ‹
              </button>
              <button className="gallery-arrow-btn" onClick={nextGallery} aria-label="Next image">
                ›
              </button>
            </div>
          </div>

          <div className="gallery-photos-grid" ref={galleryRef}>
            {galleryImages.map((img, idx) => (
              <div className="gallery-card-item" key={img.title}>
                <div className="gallery-img-wrapper">
                  <img src={img.src} alt={img.title} className="gallery-img" />
                </div>
                <div className="gallery-card-body">
                  <h4 className="card-title">{img.title}</h4>
                  <p className="card-desc">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KEY BENEFITS SECTION */}
      <section className="slickline-benefits-section">
        <div className="slickline-benefits-container">
          <div className="section-label-group">
            <span className="orange-bar">—</span>
            <span className="section-label">KEY BENEFITS</span>
          </div>
          <h2 className="slickline-sec-title">A SMARTER APPROACH TO WELL INTERVENTION</h2>

          <div className="benefits-cards-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="benefit-title">Minimal Footprint</h3>
              <p className="benefit-desc">Smaller equipment footprint and reduced site preparation requirements.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="benefit-title">Fast Deployment</h3>
              <p className="benefit-desc">Quick mobilization and rapid rig-up for efficient operations.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="benefit-title">Precise Intervention</h3>
              <p className="benefit-desc">Accurate depth control and precise downhole tool positioning.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="benefit-title">Reduced Downtime</h3>
              <p className="benefit-desc">Swift resolution of well issues to return wells to production faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HSE & WELL CONTROL SECTION */}
      <section className="slickline-hse-section">
        <div className="slickline-hse-container">
          <div className="section-label-group">
            <span className="orange-bar">—</span>
            <span className="section-label">HSE &amp; WELL CONTROL</span>
          </div>
          <h2 className="slickline-sec-title">SAFETY DRIVES EVERY OPERATION</h2>
          <p className="slickline-hse-sub">
            We are committed to the highest standards of HSE, ensuring safe operations for our people, our clients and the environment.
          </p>

          <div className="hse-cards-grid">
            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z" />
                </svg>
              </div>
              <h3 className="hse-title">Trained &amp; Certified Personnel</h3>
              <p className="hse-desc">Experienced field teams following strict well control &amp; safety procedures.</p>
            </div>

            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="hse-title">Well Control Focus</h3>
              <p className="hse-desc">Proven pressure control practices to mitigate risks and protect wellhead integrity.</p>
            </div>

            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="hse-title">Protecting People &amp; Environment</h3>
              <p className="hse-desc">Safe, environmentally sound slickline operations for a sustainable future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER SECTION */}
      <section className="slickline-cta-banner-section">
        <div className="slickline-banner-wrap">
          <img
            src={`${imgFolder}07_pumpjack_scene.webp`}
            alt="Pumpjack Field Scene"
            className="banner-bg-img"
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <div className="section-label-group light">
              <span className="orange-bar">—</span>
              <span className="section-label">LET'S WORK TOGETHER</span>
            </div>
            <h2 className="banner-title">NEED SLICKLINE SUPPORT FOR YOUR WELLS?</h2>
            <p className="banner-sub">
              Get in touch with our technical team to discuss your requirements and find the right solution for your operation.
            </p>
            <Link href="/contact" className="banner-cta-btn">
              Request Technical Support <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
