'use client';
import Link from 'next/link';
import ServiceIntroCard from './ServiceIntroCard';
import { useLanguage } from '@/context/LanguageContext';
import '@/app/wellhead.css';

const imgBase = '/images/policies-photo/services/almatar_wellhead_text_free_separate_photos/';

const navServices = [
  { name: 'WELL INTERVENTION SERVICES', href: '/well-services', icon: 'rig' },
  { name: 'COILED TUBING & NITROGEN PUMPING', href: '/well-services#coiled-tubing', icon: 'tubing' },
  { name: 'STIMULATION & FRACTURING', href: '/stimulation-fracturing', icon: 'stim' },
  { name: 'ZONAL ISOLATION & CEMENTING', href: '/zonal-isolation-cementing', icon: 'zonal' },
  { name: 'WELLHEAD & XMAS TREE SERVICES', href: '/wellhead-xmas-tree', icon: 'wellhead', active: true },
  { name: 'SLICKLINE SERVICES', href: '/slickline-services', icon: 'slickline' },
  { name: 'WELL TESTING & FLARING', href: '/well-services#well-testing', icon: 'testing' },
  { name: 'DRILLING AND WORKOVER SERVICES', href: '/well-services#drilling-workover', icon: 'drilling' },
  { name: 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS', href: '/construction', icon: 'construction' },
];

const keyComponents = [
  { num: 1, name: 'Choke Valve', desc: 'Controls production flow rate' },
  { num: 2, name: 'Upper Master Valve', desc: 'Primary isolation valve' },
  { num: 3, name: 'Lower Master Valve', desc: 'Secondary isolation valve' },
  { num: 4, name: 'Wing Valve', desc: 'Routes production to flowline' },
  { num: 5, name: 'Tubing Head', desc: 'Connects tubing string' },
  { num: 6, name: 'Casing Head', desc: 'Connects casing strings' },
  { num: 7, name: 'Pressure Monitoring', desc: 'Real-time well pressure data' },
];

const capabilities = [
  {
    title: 'INSTALLATION & COMMISSIONING',
    desc: 'Complete wellhead and Xmas tree installation with expert supervision.',
    icon: 'wrenches'
  },
  {
    title: 'INSPECTION & ASSESSMENT',
    desc: 'Detailed inspection, condition assessment and reporting.',
    icon: 'search'
  },
  {
    title: 'PREVENTIVE MAINTENANCE',
    desc: 'Planned maintenance to ensure reliability and extend service life.',
    icon: 'maintenance'
  },
  {
    title: 'VALVE REPAIR & REPLACEMENT',
    desc: 'Repair, overhaul and replacement of all types of wellhead valves.',
    icon: 'valve'
  },
  {
    title: 'PRESSURE TESTING',
    desc: 'Hydrostatic and function testing to verify integrity.',
    icon: 'gauge'
  },
  {
    title: 'LEAK DETECTION & REMEDIATION',
    desc: 'Advanced detection and sealing solutions to prevent leaks.',
    icon: 'leak'
  },
  {
    title: 'EMERGENCY WELLHEAD SUPPORT',
    desc: 'Rapid response for wellhead issues and pressure control situations.',
    icon: 'siren'
  }
];

const lifecycleSteps = [
  { num: '01', title: 'INSPECTION', desc: 'Assess condition and identify needs', icon: 'clipboard' },
  { num: '02', title: 'PLANNING', desc: 'Develop tailored maintenance plan', icon: 'plan' },
  { num: '03', title: 'EXECUTION', desc: 'Carry out service with expert team', icon: 'execute' },
  { num: '04', title: 'TESTING', desc: 'Verify integrity and performance', icon: 'test' },
  { num: '05', title: 'CERTIFICATION', desc: 'Document and ensure compliance', icon: 'badge' },
];

const arabicKeyComponents = [
  { num: 1, name: 'صمام الخنق', desc: 'يتحكم بمعدل تدفق الإنتاج' },
  { num: 2, name: 'الصمام الرئيسي العلوي', desc: 'صمام العزل الأساسي' },
  { num: 3, name: 'الصمام الرئيسي السفلي', desc: 'صمام العزل الثانوي' },
  { num: 4, name: 'الصمام الجانبي', desc: 'يوجّه الإنتاج إلى خط الجريان' },
  { num: 5, name: 'رأس أنابيب الإنتاج', desc: 'يربط سلسلة أنابيب الإنتاج' },
  { num: 6, name: 'رأس التغليف', desc: 'يربط سلاسل التغليف' },
  { num: 7, name: 'مراقبة الضغط', desc: 'بيانات ضغط البئر الفورية' },
];

const arabicCapabilities = [
  { title: 'التركيب والتشغيل', desc: 'تركيب متكامل لرؤوس الآبار وشجرة الميلاد بإشراف خبراء.', icon: 'wrenches' },
  { title: 'الفحص والتقييم', desc: 'فحص تفصيلي وتقييم للحالة وإصدار التقارير.', icon: 'search' },
  { title: 'الصيانة الوقائية', desc: 'صيانة مخططة لضمان الموثوقية وإطالة عمر الخدمة.', icon: 'maintenance' },
  { title: 'إصلاح الصمامات واستبدالها', desc: 'إصلاح وتجديد واستبدال جميع أنواع صمامات رؤوس الآبار.', icon: 'valve' },
  { title: 'اختبار الضغط', desc: 'اختبارات هيدروستاتيكية ووظيفية للتحقق من السلامة.', icon: 'gauge' },
  { title: 'كشف التسرب والمعالجة', desc: 'حلول متقدمة للكشف والمعالجة لمنع التسربات.', icon: 'leak' },
  { title: 'دعم طوارئ رؤوس الآبار', desc: 'استجابة سريعة لمشكلات رؤوس الآبار وحالات التحكم بالضغط.', icon: 'siren' },
];

const arabicLifecycleSteps = [
  { num: '01', title: 'الفحص', desc: 'تقييم الحالة وتحديد الاحتياجات', icon: 'clipboard' },
  { num: '02', title: 'التخطيط', desc: 'إعداد خطة صيانة مخصصة', icon: 'plan' },
  { num: '03', title: 'التنفيذ', desc: 'تنفيذ الخدمة بفريق خبير', icon: 'execute' },
  { num: '04', title: 'الاختبار', desc: 'التحقق من السلامة والأداء', icon: 'test' },
  { num: '05', title: 'الاعتماد', desc: 'توثيق الامتثال وضمانه', icon: 'badge' },
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
          <path d="M12 2v20M6 8h12M4 14h16M8 20h8" />
          <circle cx="6" cy="8" r="1.5" fill="currentColor" />
          <circle cx="18" cy="8" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'slickline':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="7" r="4" />
          <path d="M12 11v11M8 22h8" />
        </svg>
      );
    case 'testing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l4-4M12 7v1" />
        </svg>
      );
    case 'drilling':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L3 20h18L12 2zM12 9v6" />
        </svg>
      );
    case 'construction':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h6M9 15h6" />
        </svg>
      );
    default:
      return null;
  }
}

function CapIcon({ type }) {
  switch (type) {
    case 'wrenches':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'search':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'valve':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
        </svg>
      );
    case 'gauge':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
          <path d="M12 12l3-4" />
        </svg>
      );
    case 'leak':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'siren':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
          <path d="M12 3v3M5 6l2 2M19 6l-2 2M12 9a6 6 0 0 0-6 6v3h12v-3a6 6 0 0 0-6-6zM4 21h16" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WellheadXmasTreePage() {
  const { lang } = useLanguage();
  const tr = (english, arabic) => (lang === 'ar' ? arabic : english);
  const pageComponents = lang === 'ar' ? arabicKeyComponents : keyComponents;
  const pageCapabilities = lang === 'ar' ? arabicCapabilities : capabilities;
  const pageLifecycleSteps = lang === 'ar' ? arabicLifecycleSteps : lifecycleSteps;

  return (
    <div className="wellhead-page">
      {/* 1. HERO SECTION */}
      <section className="wellhead-hero">
        <img
          src={`${imgBase}01_wellhead_hero_workers.webp`}
          alt={tr('Wellhead & Xmas Tree Services', 'خدمات رؤوس الآبار وشجرة الميلاد')}
          className="wellhead-hero-img"
        />
        <div className="wellhead-hero-overlay" />
        
        <div className="wellhead-hero-content">
          <span className="wellhead-kicker">{tr('OUR SERVICES', 'خدماتنا')}</span>
          <h1 className="wellhead-hero-title">
            {tr('WELLHEAD &', 'رؤوس الآبار و')}<br />
            {tr('XMAS TREE SERVICES', 'شجرة الميلاد')}
          </h1>
          <p className="wellhead-hero-tagline">
            {tr('SAFE PRESSURE CONTROL. RELIABLE OPERATIONS. LONG-TERM INTEGRITY.', 'تحكم آمن بالضغط. عمليات موثوقة. سلامة طويلة الأمد.')}
          </p>
          <Link href="/contact" className="wellhead-orange-btn">
            {tr('REQUEST TECHNICAL SUPPORT', 'اطلب الدعم الفني')} <span className="arrow">→</span>
          </Link>
        </div>

        <div className="wellhead-hero-vertical-tag">
          <span>{tr('ENERGY', 'الطاقة')}</span>
          <span>{tr('PEOPLE', 'الكوادر')}</span>
          <span>{tr('PROGRESS', 'التقدم')}</span>
        </div>
      </section>

      <ServiceIntroCard
        eyebrow={tr('PRESSURE CONTROL & INTEGRITY', 'التحكم بالضغط وسلامة البئر')}
        title={tr('Reliable Wellhead Solutions', 'حلول موثوقة لرؤوس الآبار')}
        description={tr('ALMATAR delivers wellhead and Xmas tree installation, inspection, maintenance and repair services for safe, compliant and reliable production operations.', 'تقدم المطر خدمات تركيب وفحص وصيانة وإصلاح رؤوس الآبار وشجرة الميلاد لضمان عمليات إنتاج آمنة ومتوافقة وموثوقة.')}
        image={`${imgBase}01_wellhead_hero_workers.webp`}
        imageAlt={tr('Wellhead service team', 'فريق خدمات رؤوس الآبار')}
      />

      {/* 3. TECHNICAL OVERVIEW & DIAGRAM SECTION */}
      <section className="wellhead-overview-section">
        <div className="wellhead-overview-grid">
          {/* Left Column: Text & 3 Badges */}
          <div className="wellhead-overview-left">
            <div className="section-label-group">
              <span className="orange-bar">—</span>
              <span className="section-label">{tr('TECHNICAL OVERVIEW', 'نظرة فنية')}</span>
            </div>
            <h2 className="wellhead-section-heading">
              {tr('WELLHEAD & XMAS TREE SYSTEM', 'نظام رأس البئر وشجرة الميلاد')}
            </h2>
            <p className="wellhead-overview-text">
              {tr('The wellhead and Xmas tree provide critical pressure control, enabling safe and efficient production operations. We deliver installation, maintenance, inspection and repair services to ensure long-term integrity and reliable performance in compliance with international standards.', 'يوفر رأس البئر وشجرة الميلاد تحكماً أساسياً بالضغط يتيح عمليات إنتاج آمنة وفعالة. نقدم خدمات التركيب والصيانة والفحص والإصلاح لضمان سلامة طويلة الأمد وأداء موثوق وفق المعايير الدولية.')}
            </p>

            <div className="wellhead-three-badges">
              <div className="badge-item">
                <div className="badge-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span>{tr('SAFETY', 'السلامة')}<br />{tr('FOCUSED', 'أولاً')}</span>
              </div>

              <div className="badge-item">
                <div className="badge-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <span>{tr('RELIABLE', 'عمليات')}<br />{tr('OPERATIONS', 'موثوقة')}</span>
              </div>

              <div className="badge-item">
                <div className="badge-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span>{tr('MAXIMUM', 'أقصى')}<br />{tr('UPTIME', 'جاهزية')}</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Diagram with Callouts */}
          <div className="wellhead-diagram-center">
            <div className="diagram-wrapper">
              <img
                src={`${imgBase}02_xmas_tree_wellhead.webp`}
                alt={tr('Wellhead and Xmas Tree Technical Diagram', 'مخطط فني لرأس البئر وشجرة الميلاد')}
                className="wellhead-diagram-img"
              />

              {/* Technical Callouts overlay */}
              <div className="callout callout-top-left">
                <span className="callout-title">{tr('PRESSURE GAUGE', 'مقياس الضغط')}</span>
                <span className="callout-sub">{tr('(ANNULUS)', '(الحيز الحلقي)')}</span>
                <div className="callout-line line-top-left" />
              </div>

              <div className="callout callout-mid-left">
                <span className="callout-title">{tr('UPPER MASTER', 'الصمام الرئيسي')}</span>
                <span className="callout-title">{tr('VALVE', 'العلوي')}</span>
                <div className="callout-line line-mid-left" />
              </div>

              <div className="callout callout-low-left">
                <span className="callout-title">{tr('LOWER MASTER', 'الصمام الرئيسي')}</span>
                <span className="callout-title">{tr('VALVE', 'السفلي')}</span>
                <div className="callout-line line-low-left" />
              </div>

              <div className="callout callout-top-right">
                <span className="callout-title">{tr('CHOKE VALVE', 'صمام الخنق')}</span>
                <div className="callout-line line-top-right" />
              </div>

              <div className="callout callout-mid-right">
                <span className="callout-title">{tr('WING VALVE', 'الصمام الجانبي')}</span>
                <span className="callout-sub">{tr('(PRODUCTION)', '(الإنتاج)')}</span>
                <div className="callout-line line-mid-right" />
              </div>

              <div className="callout callout-tubing-right">
                <span className="callout-title">{tr('TUBING HEAD', 'رأس أنابيب الإنتاج')}</span>
                <div className="callout-line line-tubing-right" />
              </div>

              <div className="callout callout-casing-right">
                <span className="callout-title">{tr('CASING HEAD', 'رأس التغليف')}</span>
                <div className="callout-line line-casing-right" />
              </div>
            </div>
          </div>

          {/* Right Column: Key Components */}
          <div className="wellhead-overview-right">
            <h3 className="key-components-heading">{tr('KEY COMPONENTS', 'المكونات الأساسية')}</h3>
            <div className="key-components-list">
              {pageComponents.map((comp) => (
                <div key={comp.num} className="component-row">
                  <div className="comp-num-badge">{comp.num}</div>
                  <div className="comp-info">
                    <h4 className="comp-name">{comp.name}</h4>
                    <p className="comp-desc">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICE CAPABILITIES */}
      <section className="wellhead-capabilities-section">
        <div className="section-label-group">
          <span className="orange-bar">—</span>
          <span className="section-label">{tr('OUR SERVICE CAPABILITIES', 'قدراتنا الخدمية')}</span>
        </div>

        <div className="capabilities-grid">
          {pageCapabilities.map((cap, i) => (
            <div key={i} className="capability-card">
              <div className="cap-icon-wrap">
                <CapIcon type={cap.icon} />
              </div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DARK BANNER (PRESSURE CONTROL & INTEGRITY) */}
      <section className="wellhead-dark-banner">
        <div className="dark-banner-container">
          <div className="dark-banner-left">
            <div className="section-label-group light">
              <span className="orange-bar">—</span>
              <span className="section-label light-text">{tr('PRESSURE CONTROL & INTEGRITY', 'التحكم بالضغط وسلامة البئر')}</span>
            </div>
            <h2 className="dark-banner-title">
              {tr('PROVEN SOLUTIONS', 'حلول مثبتة')}<br />
              {tr('FOR A SAFER TOMORROW', 'لغدٍ أكثر أماناً')}
            </h2>
          </div>

          <div className="dark-banner-center">
            <p>
              {tr('We ensure wellhead integrity through engineering expertise, industry best practices and a commitment to operational safety. Our services minimize risk, prevent downtime and maximize the value of your assets.', 'نضمن سلامة رؤوس الآبار بفضل الخبرة الهندسية وأفضل الممارسات الصناعية والالتزام بالسلامة التشغيلية. تقلل خدماتنا المخاطر وتمنع التوقف وتعظم قيمة أصولكم.')}
            </p>
          </div>

          <div className="dark-banner-right">
            <div className="dark-value-item">
              <div className="dark-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span>{tr('RISK REDUCTION', 'خفض المخاطر')}</span>
            </div>

            <div className="dark-value-item">
              <div className="dark-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <span>{tr('OPERATIONAL EXCELLENCE', 'تميز تشغيلي')}</span>
            </div>

            <div className="dark-value-item">
              <div className="dark-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span>{tr('LONG-TERM ASSET VALUE', 'قيمة الأصول طويلة الأمد')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE LIFECYCLE SECTION */}
      <section className="wellhead-lifecycle-section">
        <div className="section-label-group">
          <span className="orange-bar">—</span>
          <span className="section-label">{tr('SERVICE LIFECYCLE', 'دورة حياة الخدمة')}</span>
        </div>
        <h2 className="wellhead-section-heading">
          {tr('FROM INSPECTION TO LONG-TERM PERFORMANCE', 'من الفحص إلى الأداء طويل الأمد')}
        </h2>

        <div className="lifecycle-content-grid">
          <div className="lifecycle-steps-row">
            {pageLifecycleSteps.map((step, idx) => (
              <div key={idx} className="lifecycle-step-node">
                <div className="step-header-row">
                  <div className="step-icon-circle">
                    {step.icon === 'clipboard' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      </svg>
                    )}
                    {step.icon === 'plan' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.icon === 'execute' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {step.icon === 'test' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 12l4-4" />
                      </svg>
                    )}
                    {step.icon === 'badge' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    )}
                  </div>
                  {idx < pageLifecycleSteps.length - 1 && (
                    <span className="step-arrow">→</span>
                  )}
                </div>
                <div className="step-text-content">
                  <span className="step-num">{step.num}</span>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lifecycle-right-card">
            <img
              src={`${imgBase}03_engineer_rigs_sunset.webp`}
              alt={tr('Reliable wellhead solutions', 'حلول موثوقة لرؤوس الآبار')}
              className="lifecycle-card-img"
            />
            <div className="lifecycle-card-overlay">
              <h3>{tr('RELIABLE WELLHEAD SOLUTIONS FOR SUSTAINABLE PRODUCTION', 'حلول موثوقة لرؤوس الآبار من أجل إنتاج مستدام')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DUAL CARDS SECTION: FIELD & HSE */}
      <section className="wellhead-dual-section">
        <div className="dual-cards-grid">
          {/* Card 1: IN THE FIELD */}
          <div className="dual-card field-card">
            <div className="dual-card-img-wrap">
              <img
                src={`${imgBase}04_workers_wellhead.webp`}
                alt={tr('In The Field Experience', 'خبرة العمل الميداني')}
              />
            </div>
            <div className="dual-card-body">
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">{tr('IN THE FIELD', 'في الميدان')}</span>
              </div>
              <h3 className="dual-card-heading">{tr('EXPERIENCE THAT DELIVERS', 'خبرة تحقق النتائج')}</h3>
              <p className="dual-card-desc">
                {tr('Our teams operate in challenging environments, delivering reliable wellhead services across onshore and offshore locations. We combine technical expertise with a strong safety culture to keep your operations running.', 'تعمل فرقنا في البيئات الصعبة، وتقدم خدمات موثوقة لرؤوس الآبار في المواقع البرية والبحرية. نجمع بين الخبرة الفنية وثقافة السلامة الراسخة للحفاظ على استمرارية عملياتكم.')}
              </p>
              <Link href="/projects" className="wellhead-orange-btn inline-btn">
                {tr('OUR PROJECTS', 'مشاريعنا')} <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: HSE & QUALITY */}
          <div className="dual-card hse-card">
            <div className="dual-card-body">
              <div className="section-label-group">
                <span className="orange-bar">—</span>
                <span className="section-label">{tr('HSE & QUALITY', 'الصحة والسلامة والبيئة والجودة')}</span>
              </div>
              <h3 className="dual-card-heading">{tr('PEOPLE. PROCESS. A SAFER TOMORROW.', 'الكوادر. العمليات. غد أكثر أماناً.')}</h3>

              <div className="hse-four-pillars">
                <div className="hse-pillar-item">
                  <div className="hse-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="hse-pillar-info">
                    <h4>{tr('ZERO HARM', 'صفر ضرر')}</h4>
                    <p>{tr('Our people come first, always.', 'كوادرنا تأتي أولاً دائماً.')}</p>
                  </div>
                </div>

                <div className="hse-pillar-item">
                  <div className="hse-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div className="hse-pillar-info">
                    <h4>{tr('ENVIRONMENTAL RESPONSIBILITY', 'المسؤولية البيئية')}</h4>
                    <p>{tr('Minimizing our footprint.', 'تقليل أثرنا البيئي.')}</p>
                  </div>
                </div>

                <div className="hse-pillar-item">
                  <div className="hse-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="hse-pillar-info">
                    <h4>{tr('COMPLIANCE', 'الامتثال')}</h4>
                    <p>{tr('With international standards.', 'للمعايير الدولية.')}</p>
                  </div>
                </div>

                <div className="hse-pillar-item">
                  <div className="hse-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="hse-pillar-info">
                    <h4>{tr('CONTINUOUS IMPROVEMENT', 'التحسين المستمر')}</h4>
                    <p>{tr('Safer, smarter operations.', 'عمليات أكثر أماناً وذكاءً.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BY THE NUMBERS & BOTTOM CTA BANNER */}
      <section className="wellhead-stats-cta-section">
        {/* By The Numbers */}
        <div className="by-the-numbers-container">
          <div className="numbers-header">
            <div className="section-label-group">
              <span className="orange-bar">—</span>
              <span className="section-label">{tr('BY THE NUMBERS', 'بالأرقام')}</span>
            </div>
            <h3 className="numbers-heading">{tr('TRUSTED PARTNER IN OILFIELD SERVICES', 'شريك موثوق في خدمات حقول النفط')}</h3>
          </div>

          <div className="numbers-grid">
            <div className="num-stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <div className="stat-value">10+</div>
              <div className="stat-label">{tr('YEARS OF EXPERIENCE', 'سنوات من الخبرة')}</div>
            </div>

            <div className="num-stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stat-value">200+</div>
              <div className="stat-label">{tr('SKILLED PROFESSIONALS', 'كوادر محترفة')}</div>
            </div>

            <div className="num-stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
                  <path d="M12 2L4 22h16L12 2zM12 2v20" />
                </svg>
              </div>
              <div className="stat-value">100+</div>
              <div className="stat-label">{tr('PROJECTS DELIVERED', 'مشروع تم تسليمه')}</div>
            </div>

            <div className="num-stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="stat-value">{tr('MULTIPLE REGIONS', 'مناطق متعددة')}</div>
              <div className="stat-label">{tr('ONSHORE & OFFSHORE', 'عمليات برية وبحرية')}</div>
            </div>

            <div className="num-stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="stat-value">{tr('ZERO', 'صفر')}</div>
              <div className="stat-label">{tr('MAJOR HSE INCIDENTS', 'حوادث جسيمة في الصحة والسلامة والبيئة')}</div>
            </div>
          </div>
        </div>

        {/* Burnt Orange Bottom CTA Banner */}
        <div className="bottom-cta-banner">
          <img
            src={`${imgBase}07_workers_oilfield_sunset.webp`}
            alt={tr('Operations Moving', 'عمليات مستمرة')}
            className="cta-bg-img"
          />
          <div className="cta-overlay" />

          <div className="cta-content">
            <h2 className="cta-title">{tr("LET'S KEEP YOUR OPERATIONS MOVING", 'لنحافظ على استمرارية عملياتكم')}</h2>
            <p className="cta-sub">
              {tr('Get in touch with our technical team for expert support on wellhead and Xmas tree services.', 'تواصلوا مع فريقنا الفني للحصول على دعم متخصص لخدمات رؤوس الآبار وشجرة الميلاد.')}
            </p>
            <Link href="/contact" className="cta-white-btn">
              {tr('REQUEST TECHNICAL SUPPORT', 'اطلب الدعم الفني')} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
