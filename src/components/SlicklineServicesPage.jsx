'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ServiceIntroCard from './ServiceIntroCard';
import { useLanguage } from '../context/LanguageContext';

const imgFolder = '/images/policies-photo/services/almatar_clean_photos/';

const navServices = [
  { name: 'WELL INTERVENTION SERVICES', href: '/well-services', icon: 'rig' },
  { name: 'COILED TUBING & NITROGEN PUMPING', href: '/coiled-tubing', icon: 'tubing' },
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
  const tr = (english, arabic) => (lang === 'ar' ? arabic : english);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryRef = useRef(null);

  const galleryImages = [
    { src: `${imgFolder}03_field_worker_valve.webp`, title: tr('Field Operations', 'العمليات الميدانية'), subtitle: tr('Technician operating wellhead valve under pressure control', 'فني يشغّل صمام رأس البئر تحت التحكم بالضغط') },
    { src: `${imgFolder}04_service_truck_rig.webp`, title: tr('Mobilization Unit', 'وحدة التجهيز'), subtitle: tr('Heavy-duty slickline service truck deployed at onshore rig site', 'شاحنة خدمات سلك أملس ثقيلة مجهزة في موقع حفر بري') },
    { src: `${imgFolder}05_worker_tool_closeup.webp`, title: tr('Precision Tooling', 'معدات دقيقة'), subtitle: tr('Field engineer inspecting downhole tool assembly before run-in', 'مهندس ميداني يفحص تجميعة الأدوات تحت سطح الأرض قبل التشغيل') },
    { src: `${imgFolder}06_two_workers_rig.webp`, title: tr('Team Execution', 'تنفيذ الفريق'), subtitle: tr('Experienced crew conducting safe wireline intervention', 'طاقم خبير ينفذ تدخلاً آمناً بالسلك') },
  ];

  const processSteps = [
    {
      num: 1,
      title: tr('Planning & Engineering', 'التخطيط والهندسة'),
      desc: tr('Well analysis, tool selection and job planning.', 'تحليل البئر واختيار الأدوات والتخطيط للعمل.'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
      ),
    },
    {
      num: 2,
      title: tr('Mobilization', 'التجهيز والنقل'),
      desc: tr('Equipment and experienced crew deployment.', 'تجهيز المعدات والكوادر الخبيرة.'),
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
      title: tr('Execution', 'التنفيذ'),
      desc: tr('Safe and efficient slickline operations.', 'عمليات سلك أملس آمنة وفعالة.'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
          <path d="M12 2L4 22h16L12 2zM12 2v20" />
        </svg>
      ),
    },
    {
      num: 4,
      title: tr('Data & Analysis', 'البيانات والتحليل'),
      desc: tr('Accurate data acquisition and interpretation.', 'جمع البيانات بدقة وتحليلها.'),
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
      title: tr('Reporting', 'إعداد التقارير'),
      desc: tr('Detailed job report and recommendations.', 'تقرير عمل تفصيلي وتوصيات.'),
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
    <div className="slickline-page-root" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* 1. HERO BANNER SECTION */}
      <section className="slickline-hero-section">
        <div className="slickline-hero-container">
          <div className="slickline-hero-content">
            <div className="section-label-group">
              <span className="orange-bar">—</span>
              <span className="section-label">{tr('OUR SERVICES', 'خدماتنا')}</span>
            </div>
            <h1 className="slickline-hero-title">{tr('SLICKLINE SERVICES', 'خدمات السلك الأملس')}</h1>
            <p className="slickline-hero-lead">
              {tr('Reliable downhole solutions for well measurement, mechanical intervention and reservoir monitoring.', 'حلول موثوقة تحت سطح الأرض لقياس الآبار والتدخل الميكانيكي ومراقبة المكمن.')}
            </p>
            <p className="slickline-hero-desc">
              {tr('ALMATAR provides safe, efficient and cost-effective slickline services to support well integrity, production optimization and reservoir management across onshore operations.', 'تقدم المطر خدمات السلك الأملس الآمنة والفعالة وذات الجدوى الاقتصادية لدعم سلامة الآبار وتحسين الإنتاج وإدارة المكامن في العمليات البرية.')}
            </p>
            <div className="slickline-hero-actions">
              <Link href="/contact" className="slickline-cta-btn">
                {tr('Request Technical Support', 'اطلب الدعم الفني')} <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="slickline-hero-image-wrap">
            <img
              src={`${imgFolder}01_hero_slickline_scene.webp`}
              alt={tr('ALMATAR Slickline Operations Unit', 'وحدة عمليات السلك الأملس التابعة للمطار')}
              className="slickline-hero-img"
            />
            <div className="slickline-badge-overlay">
              <span className="badge-line">{tr('PROVEN EXPERIENCE.', 'خبرة مثبتة.')}</span>
              <span className="badge-line">{tr('SOLUTIONS.', 'حلول.')}</span>
              <span className="badge-highlight">{tr('LASTING VALUE.', 'قيمة مستدامة.')}</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceIntroCard
        eyebrow={tr('PRECISION & PERFORMANCE', 'الدقة والأداء')}
        title={tr('Integrated Slickline Solutions', 'حلول متكاملة للسلك الأملس')}
              description={tr('ALMATAR provides safe, efficient and cost-effective slickline services that support well integrity, production optimization and reservoir management.', 'تقدم المطر خدمات سلك أملس آمنة وفعالة وذات جدوى اقتصادية تدعم سلامة الآبار وتحسين الإنتاج وإدارة المكامن.')}
        image={`${imgFolder}01_hero_slickline_scene.webp`}
        imageAlt={tr('ALMATAR slickline operations', 'عمليات السلك الأملس في المطر')}
      />

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
                  <span>{tr('PRECISION AT EVERY DEPTH', 'دقة في كل عمق')}</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Overview Text & Capabilities */}
            <div className="slickline-overview-center">
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">{tr('TECHNICAL OVERVIEW', 'نظرة فنية')}</span>
              </div>
              <h2 className="slickline-sec-title">{tr('PROVEN SOLUTIONS DOWNHOLE', 'حلول مثبتة تحت سطح الأرض')}</h2>
              <p className="slickline-body-text">
                {tr('Our slickline services use a single-stranded steel wireline to run mechanical tools into the well for measurement, monitoring and light intervention. We deliver reliable data and efficient mechanical solutions to keep your wells performing.', 'تستخدم خدمات السلك الأملس لدينا سلكاً فولاذياً أحادي الجديلة لتشغيل الأدوات الميكانيكية داخل البئر للقياس والمراقبة والتدخل الخفيف. نوفر بيانات موثوقة وحلولاً ميكانيكية فعالة للحفاظ على أداء آباركم.')}
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
                  <span>{tr('Reliable Operations', 'عمليات موثوقة')}</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                  </div>
                  <span>{tr('Experienced Field Teams', 'فرق ميدانية خبيرة')}</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span>{tr('Fit for Onshore Conditions', 'ملائمة للظروف البرية')}</span>
                </div>
                <div className="feature-quad-item">
                  <div className="quad-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <span>{tr('Cost-Effective Solutions', 'حلول فعالة من حيث التكلفة')}</span>
                </div>
              </div>

              {/* Our Slickline Capabilities */}
              <div className="slickline-caps-wrapper">
                <div className="section-label-group">
                  <span className="orange-bar">—</span>
                  <span className="section-label">{tr('OUR SLICKLINE CAPABILITIES', 'قدراتنا في السلك الأملس')}</span>
                </div>
                <p className="slickline-caps-sub">{tr('A complete range of mechanical and measurement solutions.', 'مجموعة متكاملة من الحلول الميكانيكية وحلول القياس.')}</p>

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
                      <h4 className="cap-title">{tr('Well Measurement', 'قياس الآبار')}</h4>
                      <p className="cap-desc">{tr('Accurate depth, fluid level and wellbore surveys.', 'مسوحات دقيقة للعمق ومستوى السوائل وتجويف البئر.')}</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">{tr('Pressure & Temperature', 'الضغط ودرجة الحرارة')}</h4>
                      <p className="cap-desc">{tr('Downhole pressure and temperature surveys.', 'مسوحات الضغط ودرجة الحرارة تحت سطح الأرض.')}</p>
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
                      <h4 className="cap-title">{tr('Setting & Retrieving Plugs', 'تركيب واسترجاع السدادات')}</h4>
                      <p className="cap-desc">{tr('Installation and recovery of bridge plugs, dummy plugs and other downhole equipment.', 'تركيب واسترجاع سدادات الجسر والسدادات الوهمية والمعدات الأخرى تحت سطح الأرض.')}</p>
                    </div>
                  </div>

                  <div className="cap-card">
                    <div className="cap-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M8 3v18M16 3v18M3 12h18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cap-title">{tr('Shifting Sleeves', 'تشغيل الجلب المنزلقة')}</h4>
                      <p className="cap-desc">{tr('Operation of sliding sleeves and circulation devices.', 'تشغيل الجلب المنزلقة وأجهزة التدوير.')}</p>
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
                      <h4 className="cap-title">{tr('Fishing & Retrieval', 'الصيد والاسترجاع')}</h4>
                      <p className="cap-desc">{tr('Recovery of lost tools and downhole equipment.', 'استرجاع الأدوات والمعدات المفقودة تحت سطح الأرض.')}</p>
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
                      <h4 className="cap-title">{tr('Downhole Mechanical Operations', 'عمليات ميكانيكية تحت سطح الأرض')}</h4>
                      <p className="cap-desc">{tr('Various mechanical tasks to support well integrity and production.', 'مهام ميكانيكية متنوعة لدعم سلامة البئر والإنتاج.')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Typical Slickline Toolstring Schematic */}
            <div className="slickline-toolstring-card">
              <h3 className="toolstring-title">{tr('TYPICAL SLICKLINE TOOLSTRING', 'سلسلة أدوات السلك الأملس النموذجية')}</h3>
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
                    <h5 className="lbl-title">{tr('Rope Socket', 'وصلة السلك')}</h5>
                    <p className="lbl-sub">{tr('(Attachment to slickline)', '(تثبيت بالسلك الأملس)')}</p>
                  </div>

                  <div className="label-block" style={{ top: '155px' }}>
                    <h5 className="lbl-title">{tr('Stem', 'الساق')}</h5>
                    <p className="lbl-sub">{tr('(Accelerator / Weight Bar)', '(مسرّع / قضيب وزن)')}</p>
                  </div>

                  <div className="label-block" style={{ top: '260px' }}>
                    <h5 className="lbl-title">{tr('Jars', 'أدوات الطرق')}</h5>
                    <p className="lbl-sub">{tr('(Mechanical or Hydraulic)', '(ميكانيكية أو هيدروليكية)')}</p>
                  </div>

                  <div className="label-block" style={{ top: '345px' }}>
                    <h5 className="lbl-title">{tr('Pulling Tool', 'أداة السحب')}</h5>
                    <p className="lbl-sub">{tr('(for plugs, nipples, etc.)', '(للسدادات والحلمات وغيرها)')}</p>
                  </div>

                  <div className="label-block" style={{ top: '450px' }}>
                    <h5 className="lbl-title">{tr('Gauge / Logging Tool', 'أداة القياس / التسجيل')}</h5>
                    <p className="lbl-sub">{tr('(Pressure, Temperature, etc.)', '(الضغط ودرجة الحرارة وغيرها)')}</p>
                  </div>

                  <div className="label-block" style={{ top: '535px' }}>
                    <h5 className="lbl-title">{tr('Tool End Sub', 'وصلة نهاية الأداة')}</h5>
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
                <span className="section-label">{tr('PRECISION AT DEPTH', 'دقة في الأعماق')}</span>
              </div>
              <h2 className="slickline-sec-title">{tr('MAXIMIZING WELL PERFORMANCE', 'تعظيم أداء البئر')}</h2>
              <p className="slickline-body-text">
                {tr('Slickline operations provide critical data and mechanical solutions that help you make informed decisions, reduce downtime and extend the life of your wells.', 'توفر عمليات السلك الأملس بيانات مهمة وحلولاً ميكانيكية تساعدكم على اتخاذ قرارات مدروسة وتقليل التوقف وإطالة عمر آباركم.')}
              </p>

              <div className="slickline-bullets-list">
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>{tr('Accurate and reliable well data', 'بيانات دقيقة وموثوقة للآبار')}</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>{tr('Supports production optimization', 'يدعم تحسين الإنتاج')}</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>{tr('Minimizes operational time and cost', 'يقلل وقت وتكلفة التشغيل')}</span>
                </div>
                <div className="bullet-item">
                  <div className="check-badge">✓</div>
                  <span>{tr('Applicable to a wide range of well types', 'مناسب لمجموعة واسعة من أنواع الآبار')}</span>
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
                  <text x="350" y="24" fontSize="13" fontWeight="bold" fill="#0B192C">{tr('Surface', 'السطح')}</text>

                  {/* Casing */}
                  <line x1="225" y1="90" x2="340" y2="90" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="90" r="3" fill="#D9531E" />
                  <text x="350" y="94" fontSize="13" fontWeight="bold" fill="#0B192C">{tr('Casing', 'التغليف')}</text>

                  {/* Slickline Toolstring */}
                  <line x1="210" y1="160" x2="340" y2="160" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="160" r="3" fill="#D9531E" />
                  <text x="350" y="164" fontSize="13" fontWeight="bold" fill="#0B192C">{tr('Slickline Toolstring', 'سلسلة أدوات السلك الأملس')}</text>

                  {/* Downhole Tool */}
                  <line x1="217" y1="260" x2="340" y2="260" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="260" r="3" fill="#D9531E" />
                  <text x="350" y="254" fontSize="13" fontWeight="bold" fill="#0B192C">{tr('Downhole Tool', 'أداة تحت سطح الأرض')}</text>
                  <text x="350" y="270" fontSize="11" fill="#64748B">{tr('(Gauge / Plug / etc.)', '(مقياس / سدادة / إلخ)')}</text>

                  {/* Target Zone */}
                  <line x1="225" y1="315" x2="340" y2="315" stroke="#D9531E" strokeWidth="1.5" />
                  <circle cx="340" cy="315" r="3" fill="#D9531E" />
                  <text x="350" y="319" fontSize="13" fontWeight="bold" fill="#D9531E">{tr('Target Zone', 'المنطقة المستهدفة')}</text>
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
              <span className="section-label">{tr('OUR OPERATION PROCESS', 'منهج عملنا')}</span>
            </div>
            <h2 className="slickline-sec-title">{tr('FROM PLANNING TO RESULTS', 'من التخطيط إلى النتائج')}</h2>
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
                <span className="section-label">{tr('FIELD OPERATIONS', 'العمليات الميدانية')}</span>
              </div>
              <h2 className="slickline-sec-title">{tr('IN ACTION', 'قيد التنفيذ')}</h2>
              <p className="gallery-sub">{tr('Delivering reliable slickline services across onshore fields in Syria and the region.', 'نقدم خدمات سلك أملس موثوقة عبر الحقول البرية في سوريا والمنطقة.')}</p>
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
            <span className="section-label">{tr('KEY BENEFITS', 'الفوائد الرئيسية')}</span>
          </div>
          <h2 className="slickline-sec-title">{tr('A SMARTER APPROACH TO WELL INTERVENTION', 'نهج أذكى للتدخل في الآبار')}</h2>

          <div className="benefits-cards-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="benefit-title">{tr('Minimal Footprint', 'متطلبات موقع أقل')}</h3>
              <p className="benefit-desc">{tr('Smaller equipment footprint and reduced site preparation requirements.', 'مساحة أصغر للمعدات ومتطلبات أقل لتجهيز الموقع.')}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="benefit-title">{tr('Fast Deployment', 'تجهيز سريع')}</h3>
              <p className="benefit-desc">{tr('Quick mobilization and rapid rig-up for efficient operations.', 'تجهيز سريع وتركيب فوري لعمليات فعالة.')}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="benefit-title">{tr('Precise Intervention', 'تدخل دقيق')}</h3>
              <p className="benefit-desc">{tr('Accurate depth control and precise downhole tool positioning.', 'تحكم دقيق بالعمق وتموضع دقيق للأدوات تحت سطح الأرض.')}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="benefit-title">{tr('Reduced Downtime', 'تقليل وقت التوقف')}</h3>
              <p className="benefit-desc">{tr('Swift resolution of well issues to return wells to production faster.', 'حل سريع لمشكلات الآبار لإعادتها إلى الإنتاج بسرعة أكبر.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HSE & WELL CONTROL SECTION */}
      <section className="slickline-hse-section">
        <div className="slickline-hse-container">
          <div className="section-label-group">
            <span className="orange-bar">—</span>
            <span className="section-label">{tr('HSE & WELL CONTROL', 'الصحة والسلامة والبيئة والتحكم بالآبار')}</span>
          </div>
          <h2 className="slickline-sec-title">{tr('SAFETY DRIVES EVERY OPERATION', 'السلامة تقود كل عملية')}</h2>
          <p className="slickline-hse-sub">
            {tr('We are committed to the highest standards of HSE, ensuring safe operations for our people, our clients and the environment.', 'نلتزم بأعلى معايير الصحة والسلامة والبيئة، لضمان عمليات آمنة لكوادرنا وعملائنا والبيئة.')}
          </p>

          <div className="hse-cards-grid">
            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z" />
                </svg>
              </div>
              <h3 className="hse-title">{tr('Trained & Certified Personnel', 'كوادر مدرّبة ومعتمدة')}</h3>
              <p className="hse-desc">{tr('Experienced field teams following strict well control & safety procedures.', 'فرق ميدانية خبيرة تتبع إجراءات صارمة للتحكم بالآبار والسلامة.')}</p>
            </div>

            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="hse-title">{tr('Well Control Focus', 'تركيز على التحكم بالآبار')}</h3>
              <p className="hse-desc">{tr('Proven pressure control practices to mitigate risks and protect wellhead integrity.', 'ممارسات مثبتة للتحكم بالضغط للحد من المخاطر وحماية سلامة رأس البئر.')}</p>
            </div>

            <div className="hse-card">
              <div className="hse-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="hse-title">{tr('Protecting People & Environment', 'حماية الكوادر والبيئة')}</h3>
              <p className="hse-desc">{tr('Safe, environmentally sound slickline operations for a sustainable future.', 'عمليات سلك أملس آمنة وسليمة بيئياً لمستقبل مستدام.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER SECTION */}
      <section className="slickline-cta-banner-section">
        <div className="slickline-banner-wrap">
          <img
            src={`${imgFolder}07_pumpjack_scene.webp`}
            alt={tr('Pumpjack Field Scene', 'مشهد حقل نفطي بمضخة')}
            className="banner-bg-img"
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <div className="section-label-group light">
              <span className="orange-bar">—</span>
              <span className="section-label">{tr("LET'S WORK TOGETHER", 'لنعمل معاً')}</span>
            </div>
            <h2 className="banner-title">{tr('NEED SLICKLINE SUPPORT FOR YOUR WELLS?', 'هل تحتاجون إلى دعم السلك الأملس لآباركم؟')}</h2>
            <p className="banner-sub">
              {tr('Get in touch with our technical team to discuss your requirements and find the right solution for your operation.', 'تواصلوا مع فريقنا الفني لمناقشة متطلباتكم وإيجاد الحل المناسب لعملياتكم.')}
            </p>
            <Link href="/contact" className="banner-cta-btn">
              {tr('Request Technical Support', 'اطلب الدعم الفني')} <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
