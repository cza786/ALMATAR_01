'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ServiceIntroCard from './ServiceIntroCard';
import { useLanguage } from '@/context/LanguageContext';

const base = '/images/policies-photo/services/almatar_well_testing_clean_photos/';

const services = [
  ['♧', 'WELL INTERVENTION', 'SERVICES'], ['⌁', 'COILED TUBING &', 'NITROGEN PUMPING'],
  ['♜', 'STIMULATION &', 'FRACTURING'], ['▤', 'ZONAL ISOLATION &', 'CEMENTING'],
  ['⚯', 'WELLHEAD & XMAS', 'TREE SERVICES'], ['◉', 'SLICKLINE', 'SERVICES'],
  ['♙', 'WELL TESTING & FLARING', ''], ['△', 'DRILLING AND', 'WORKOVER SERVICES'],
  ['⌗', 'TOTAL FIELD', 'CONSTRUCTION & MANPOWER LOGISTICS'],
];

const capabilities = [
  ['◉', 'Surface Well Testing', 'Accurate measurement of flow, pressure and temperature during well testing operations.'],
  ['▣', 'Pressure & Temperature', 'High-quality gauges and acquisition systems for reliable well data.'],
  ['♙', 'Real-Time Monitoring', 'Continuous monitoring and reporting for faster, better decisions.'],
  ['⌁', 'Well Testing & Flaring', 'Controlled separation and environmentally responsible flaring solutions.'],
  ['◌', 'Data Acquisition', 'Clear, actionable information delivered by experienced field teams.'],
  ['♨', 'Production Evaluation', 'Understand well performance and optimize production potential.'],
];

const gallery = ['04_gallery_surface_testing.webp', '05_gallery_two_workers.webp', '06_gallery_pressure_gauges.webp', '07_gallery_wide_facility.webp'];

const wtProcessSteps = [
  { num: 1, icon: '▣', title: 'Planning & Engineering', desc: 'Well analysis, tool selection and job planning.' },
  { num: 2, icon: '▱', title: 'Mobilization', desc: 'Equipment and experienced crew deployment.' },
  { num: 3, icon: '△', title: 'Execution', desc: 'Safe and efficient testing operations.' },
  { num: 4, icon: '⌁', title: 'Data & Analysis', desc: 'Accurate data acquisition and interpretation.' },
  { num: 5, icon: '▤', title: 'Reporting', desc: 'Detailed job report and recommendations.' },
];

function Eyebrow({ children }) { return <div className="wt-eyebrow"><i />{children}</div>; }

export default function WellTestingPage() {
  const { lang } = useLanguage();
  const tr = (english, arabic) => (lang === 'ar' ? arabic : english);
  const pageCapabilities = lang === 'ar' ? [
    ['◉', 'اختبار الآبار السطحي', 'قياس دقيق للتدفق والضغط ودرجة الحرارة خلال عمليات اختبار الآبار.'], ['▣', 'الضغط ودرجة الحرارة', 'مقاييس وأنظمة جمع بيانات عالية الجودة لبيانات آبار موثوقة.'], ['♙', 'المراقبة الفورية', 'مراقبة وإعداد تقارير مستمرة لقرارات أسرع وأفضل.'], ['⌁', 'اختبار الآبار وحرق الغاز', 'حلول فصل متحكم بها وحرق مسؤول بيئياً.'], ['◌', 'جمع البيانات', 'معلومات واضحة وقابلة للتنفيذ تقدمها فرق ميدانية خبيرة.'], ['♨', 'تقييم الإنتاج', 'فهم أداء البئر وتحسين إمكانات الإنتاج.'],
  ] : capabilities;
  const pageProcessSteps = lang === 'ar' ? [
    { num: 1, icon: '▣', title: 'التخطيط والهندسة', desc: 'تحليل البئر واختيار الأدوات والتخطيط للعمل.' }, { num: 2, icon: '▱', title: 'التجهيز والنقل', desc: 'تجهيز المعدات والكوادر الخبيرة.' }, { num: 3, icon: '△', title: 'التنفيذ', desc: 'عمليات اختبار آمنة وفعالة.' }, { num: 4, icon: '⌁', title: 'البيانات والتحليل', desc: 'جمع البيانات بدقة وتحليلها.' }, { num: 5, icon: '▤', title: 'إعداد التقارير', desc: 'تقرير عمل تفصيلي وتوصيات.' },
  ] : wtProcessSteps;
  const [activeStep, setActiveStep] = useState(0);
  const [isStepPaused, setIsStepPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isStepPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pageProcessSteps.length);
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
      setActiveStep((prev) => (prev + 1) % pageProcessSteps.length);
      setIsStepPaused(true);
    } else if (diff < -40) {
      setActiveStep((prev) => (prev - 1 + pageProcessSteps.length) % pageProcessSteps.length);
      setIsStepPaused(true);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return <div className="well-testing-page">
    <section className="wt-hero">
      <img src="/images/service_well_testing.webp" alt={tr('ALMATAR well testing separator and field equipment', 'معدات فصل واختبار آبار المطار الميدانية')} />
      <div className="wt-hero-overlay" />
      <div className="wt-hero-copy"><Eyebrow>{tr('OUR SERVICES', 'خدماتنا')}</Eyebrow><h1>{tr('WELL TESTING', 'اختبار الآبار')}<br />{tr('& FLARING', 'وحرق الغاز')}</h1><p>{tr('Reliable well testing solutions for accurate measurement, production evaluation and safe, controlled field operations.', 'حلول موثوقة لاختبار الآبار من أجل قياس دقيق وتقييم الإنتاج وعمليات ميدانية آمنة ومضبوطة.')}</p><Link href="/contact" className="wt-button">{tr('Request Technical Support', 'اطلب الدعم الفني')} <b>→</b></Link></div>
      <div className="wt-hero-side">{tr('PEOPLE', 'الكوادر')}<br />{tr('EXPERIENCE', 'الخبرة')}<br />{tr('SOLUTIONS', 'الحلول')}<br />{tr('LASTING VALUE', 'قيمة مستدامة')}</div>
    </section>

    <ServiceIntroCard
      eyebrow={tr('MEASUREMENT & CONTROL', 'القياس والتحكم')}
      title={tr('Reliable Well Testing Solutions', 'حلول موثوقة لاختبار الآبار')}
      description={tr('ALMATAR provides accurate measurement, production evaluation and controlled field testing services supported by experienced teams and dependable equipment.', 'توفر المطار خدمات القياس الدقيق وتقييم الإنتاج والاختبارات الحقلية المضبوطة، بدعم من فرق خبيرة ومعدات موثوقة.')}
      image="/images/service_well_testing.webp"
      imageAlt={tr('Well testing field equipment', 'معدات اختبار الآبار الميدانية')}
    />

    <section className="wt-overview wt-contained">
      <div className="wt-depth"><img src={`${base}02_realtime_monitoring_worker.webp`} alt={tr('Field monitoring', 'مراقبة ميدانية')} /><div className="wt-depth-label">{tr('REAL-TIME', 'مراقبة')}<br />{tr('VISIBILITY', 'فورية')}</div></div>
      <div className="wt-overview-copy"><Eyebrow>{tr('TECHNICAL OVERVIEW', 'نظرة فنية')}</Eyebrow><h2>{tr('MEASURING PERFORMANCE', 'قياس الأداء')}<br />{tr('AT THE WELL', 'عند البئر')}</h2><p>{tr('Our well testing services provide accurate, real-time data on well performance, pressure and flow. From surface testing packages to production evaluation, we help operators make informed decisions and maximize asset value.', 'توفر خدمات اختبار الآبار بيانات دقيقة وفورية عن أداء البئر والضغط والتدفق. ومن حزم الاختبار السطحي إلى تقييم الإنتاج، نساعد المشغلين على اتخاذ قرارات مدروسة وتعظيم قيمة الأصول.')}</p><div className="wt-points"><span>♧ <b>{tr('Reliable Operations', 'عمليات موثوقة')}</b></span><span>♧ <b>{tr('Experienced Field Teams', 'فرق ميدانية خبيرة')}</b></span><span>♧ <b>{tr('Accurate Well Data', 'بيانات دقيقة للآبار')}</b></span><span>♧ <b>{tr('Cost-Effective Solutions', 'حلول فعالة من حيث التكلفة')}</b></span></div></div>
      <div className="wt-toolstring"><small>{tr('TYPICAL TESTING PACKAGE', 'حزمة اختبار نموذجية')}</small><div className="wt-stack"><span /><span /><span /><span /><span /></div>{(lang === 'ar' ? ['المعدات السطحية', 'مشعب الخنق', 'الفاصل', 'خطوط التدفق والبيانات', 'رأس الاختبار'] : ['Surface Equipment', 'Choke Manifold', 'Separator', 'Flow & Data Lines', 'Test Header']).map(x => <b key={x}>{x}</b>)}</div>
    </section>

    <section id="capabilities" className="wt-section wt-contained"><Eyebrow>{tr('OUR WELL TESTING CAPABILITIES', 'قدراتنا في اختبار الآبار')}</Eyebrow><h2>{tr('A COMPLETE RANGE OF', 'مجموعة متكاملة من')}<br />{tr('TESTING SOLUTIONS', 'حلول الاختبار')}</h2><p className="wt-lead">{tr('Safe, precise and dependable well testing services designed around your operational requirements.', 'خدمات اختبار آبار آمنة ودقيقة وموثوقة مصممة وفق متطلباتكم التشغيلية.')}</p><div className="wt-cap-grid">{pageCapabilities.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="wt-performance"><div className="wt-contained wt-performance-inner"><div><Eyebrow>{tr('PRECISION AT THE WELL', 'دقة عند البئر')}</Eyebrow><h2>{tr('MAXIMIZING WELL PERFORMANCE', 'تعظيم أداء البئر')}</h2><p>{tr('Well testing provides critical data for informed decisions, helping improve production, reduce uncertainty and extend the life of your wells.', 'يوفر اختبار الآبار بيانات مهمة للقرارات المدروسة، مما يساعد على تحسين الإنتاج وتقليل عدم اليقين وإطالة عمر آباركم.')}</p><ul>{(lang === 'ar' ? ['بيانات دقيقة وموثوقة للآبار', 'يدعم تحسين الإنتاج', 'يقلل وقت وتكلفة التشغيل', 'مناسب لمجموعة واسعة من أنواع الآبار'] : ['Accurate and reliable well data', 'Supports production optimization', 'Minimizes operational time and cost', 'Applicable to a wide range of well types']).map(x => <li key={x}>{x}</li>)}</ul></div><img src={`${base}03_gallery_flare_stack.webp`} alt={tr('Well testing flare stack', 'شعلة اختبار الآبار')} /></div></section>

    <section className="wt-process wt-contained">
      <Eyebrow>{tr('OUR OPERATION PROCESS', 'منهج عملنا')}</Eyebrow>
      <h2>{tr('FROM PLANNING TO RESULTS', 'من التخطيط إلى النتائج')}</h2>
      <div className="wt-process-line wt-process-line-desktop">
        {pageProcessSteps.map((step, i) => (
          <article key={step.title} className={activeStep === i ? 'active' : ''} onClick={() => { setActiveStep(i); setIsStepPaused(true); }}>
            <b>{step.num}</b>
            <span>{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>

      <div className="slickline-stepper-mobile" onMouseEnter={() => setIsStepPaused(true)} onMouseLeave={() => setIsStepPaused(false)}>
        <div className="stepper-mobile-card" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div key={activeStep} className="stepper-mobile-content">
            <div className="step-icon-wrap" style={{ fontSize: '24px', color: '#d9531e' }}>
              {pageProcessSteps[activeStep].icon}
            </div>
            <h4 className="step-title">{pageProcessSteps[activeStep].title}</h4>
            <p className="step-desc">{pageProcessSteps[activeStep].desc}</p>
          </div>
        </div>
        <div className="stepper-mobile-numbers-wrap">
          <div className="stepper-mobile-connecting-line" />
          {pageProcessSteps.map((step, i) => (
            <button key={step.num} type="button" className={`step-num-btn ${activeStep === i ? 'active' : ''}`} onClick={() => { setActiveStep(i); setIsStepPaused(true); }} aria-label={`Step ${step.num}: ${step.title}`}>
              {step.num}
            </button>
          ))}
        </div>
      </div>
    </section>

    <section className="wt-gallery wt-contained"><Eyebrow>{tr('FIELD OPERATIONS', 'العمليات الميدانية')}</Eyebrow><h2>{tr('IN ACTION', 'قيد التنفيذ')}</h2><p>{tr('Delivering reliable well testing services across onshore fields in Syria and the region.', 'نقدم خدمات موثوقة لاختبار الآبار عبر الحقول البرية في سوريا والمنطقة.')}</p><div>{gallery.map(x => <img key={x} src={`${base}${x}`} alt={tr('ALMATAR field operation', 'عملية ميدانية للمطار')} />)}</div></section>

    <section className="wt-benefits"><div className="wt-contained"><Eyebrow>{tr('KEY BENEFITS', 'الفوائد الرئيسية')}</Eyebrow><h2>{tr('A SMARTER APPROACH', 'نهج أذكى')}<br />{tr('TO WELL TESTING', 'لاختبار الآبار')}</h2><div className="wt-benefit-grid">{(lang === 'ar' ? [['♧', 'بيانات موثوقة', 'معلومات دقيقة لاتخاذ قرارات واثقة.'], ['◷', 'تجهيز سريع', 'تجهيز سريع للمعدات الميدانية.'], ['◎', 'تدخل دقيق', 'تحكم دقيق ونتائج قابلة للتكرار.'], ['⚙', 'تقليل وقت التوقف', 'إعادة آباركم إلى الإنتاج بسرعة أكبر.']] : [['♧', 'Reliable Data', 'Accurate information for confident decisions.'], ['◷', 'Fast Deployment', 'Quick mobilization of field equipment.'], ['◎', 'Precise Intervention', 'Accurate control and repeatable results.'], ['⚙', 'Reduced Downtime', 'Keep your wells back on production faster.']]).map(([i, title, description]) => <article key={title}><span>{i}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="wt-hse"><div className="wt-contained"><div><Eyebrow>{tr('HSE & WELL CONTROL', 'الصحة والسلامة والبيئة والتحكم بالآبار')}</Eyebrow><h2>{tr('SAFETY DRIVES', 'السلامة تقود')}<br />{tr('EVERY OPERATION', 'كل عملية')}</h2><p>{tr('We are committed to the highest standards of HSE, ensuring safe operations for our people, our clients and the environment.', 'نلتزم بأعلى معايير الصحة والسلامة والبيئة لضمان عمليات آمنة لكوادرنا وعملائنا والبيئة.')}</p></div><div className="wt-hse-cards">{(lang === 'ar' ? [['♙', 'كوادر مدرّبة ومعتمدة'], ['♢', 'تركيز على التحكم بالآبار'], ['♧', 'حماية الكوادر والبيئة']] : [['♙', 'Trained & Certified Personnel'], ['♢', 'Well Control Focus'], ['♧', 'Protecting People and Environment']]).map(([i, title]) => <article key={title}><span>{i}</span><b>{title}</b><p>{tr('Experienced teams following strict safety procedures.', 'فرق خبيرة تتبع إجراءات سلامة صارمة.')}</p></article>)}</div></div></section>
    <section className="wt-cta"><div className="wt-contained"><div><Eyebrow>{tr('LET’S WORK TOGETHER', 'لنعمل معاً')}</Eyebrow><h2>{tr('NEED WELL TESTING', 'هل تحتاجون إلى دعم')}<br />{tr('SUPPORT FOR YOUR WELLS?', 'اختبار آباركم؟')}</h2></div><div><p>{tr('Get in touch with our technical team to discuss your requirements and find the right solution for your operation.', 'تواصلوا مع فريقنا الفني لمناقشة متطلباتكم وإيجاد الحل المناسب لعملياتكم.')}</p><Link href="/contact" className="wt-button">{tr('Request Technical Support', 'اطلب الدعم الفني')} <b>→</b></Link></div><img src={`${base}08_cta_worker_mountain_scene.webp`} alt={tr('Well testing field team', 'فريق اختبار آبار ميداني')} /></div></section>
  </div>;
}
