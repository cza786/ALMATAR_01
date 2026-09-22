'use client';

import Link from 'next/link';
import NextPageBanner from './NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

const root = '/images/policies-photo/services/almatar_stimulation_all_photos/';

const copy = {
  en: {
    eyebrow: 'WELL INTERVENTION SERVICES',
    title: <>Stimulation that<br /><i>restores performance.</i></>,
    lead: 'Engineered treatments that reconnect the reservoir, remove formation damage and help wells produce at their full potential.',
    contact: 'Speak with our team',
    capabilities: 'Explore capabilities',
    stats: [['06', 'Treatment capabilities'], ['05', 'Controlled stages'], ['QHSE', 'Built into every job']],
    overviewEyebrow: 'INTEGRATED WELL PERFORMANCE',
    overviewTitle: 'The right treatment, for the right reservoir.',
    overview: 'ALMATAR designs and executes fit-for-purpose stimulation programmes that improve reservoir connectivity and support dependable production. We bring the engineering, equipment and disciplined field execution together in one accountable team.',
    overviewPoints: ['Treatment design matched to well conditions', 'Experienced crews and high-pressure equipment', 'Real-time control from setup through flowback'],
    servicesEyebrow: 'WHAT WE DELIVER',
    servicesTitle: 'Purpose-built stimulation services',
    servicesLead: 'Practical solutions for restoring flow, improving injectivity and unlocking well productivity.',
    services: [
      ['Matrix acidizing', 'Targeted removal of near-wellbore damage to restore formation permeability and improve flow.'],
      ['Hydraulic fracturing support', 'Integrated equipment, fluids and field personnel for controlled fracture treatments.'],
      ['Nitrogen-assisted stimulation', 'Nitrogen pumping that supports effective clean-up, unloading and fluid recovery.'],
      ['High-pressure pumping', 'Reliable pressure-control systems for a wide range of stimulation treatments.'],
      ['Chemical treatment', 'Fit-for-purpose acids, solvents and additives selected around the well objective.'],
      ['Flowback & clean-up', 'Controlled recovery and wellbore clean-up to support a stable return to production.'],
    ],
    processEyebrow: 'A DISCIPLINED DELIVERY MODEL',
    processTitle: 'From programme to performance',
    process: [
      ['Plan', 'Review reservoir and well data, then define the treatment programme.'],
      ['Prepare', 'Mobilize equipment, verify barriers and complete site readiness checks.'],
      ['Execute', 'Pump the designed treatment with continuous monitoring and control.'],
      ['Recover', 'Manage controlled flowback and clean the wellbore efficiently.'],
      ['Review', 'Assess results and provide recommendations for next-step performance.'],
    ],
    reservoirEyebrow: 'ENGINEERING WITH CONTEXT',
    reservoirTitle: 'From surface equipment to reservoir response.',
    reservoir: 'Every treatment is built around reservoir behaviour, well condition and the production objective. Our teams combine technical planning with field judgement to place fluids precisely, manage pressure responsibly and make confident real-time decisions.',
    reservoirPoints: ['Reservoir and well-data review', 'Treatment parameters tailored to the objective', 'Performance review after every job'],
    safetyEyebrow: 'QHSE AT EVERY STAGE',
    safetyTitle: 'Control the pressure. Protect the people. Respect the environment.',
    safety: 'Safe stimulation begins long before equipment reaches location. We plan barriers, manage fluids responsibly and ensure every crew member understands the work scope and the controls in place.',
    safetyCards: [['Pressure control', 'Robust barrier management and continuous operational monitoring.'], ['Environmental care', 'Responsible fluid handling, containment and waste management.'], ['Competent people', 'Trained crews with a strong, practical safety culture.']],
    qhse: 'Our QHSE commitment',
    nextTitle: 'Ready to improve well performance?',
    nextSubtitle: 'Contact ALMATAR',
  },
  ar: {
    eyebrow: 'خدمات التدخل في الآبار',
    title: <>تنشيط يعيد<br /><i>الأداء إلى البئر.</i></>,
    lead: 'معالجات هندسية تعيد ربط المكمن، وتزيل ضرر التكوين، وتساعد الآبار على الإنتاج بكامل إمكاناتها.',
    contact: 'تواصل مع فريقنا',
    capabilities: 'استكشف قدراتنا',
    stats: [['06', 'قدرات معالجة متخصصة'], ['05', 'مراحل تنفيذ مضبوطة'], ['QHSE', 'السلامة في كل مهمة']],
    overviewEyebrow: 'أداء متكامل للآبار',
    overviewTitle: 'المعالجة المناسبة للمكمن المناسب.',
    overview: 'تصمم شركة المطر وتنفذ برامج تنشيط مخصصة تحسن اتصال المكمن وتدعم إنتاجاً موثوقاً. نجمع الهندسة والمعدات والتنفيذ الميداني المنضبط ضمن فريق واحد مسؤول.',
    overviewPoints: ['تصميم معالجة متوافق مع ظروف البئر', 'فرق خبيرة ومعدات ضخ عالية الضغط', 'تحكم لحظي من التجهيز حتى استعادة التدفق'],
    servicesEyebrow: 'ما نقدمه',
    servicesTitle: 'خدمات تنشيط مصممة للغرض',
    servicesLead: 'حلول عملية لاستعادة التدفق وتحسين قابلية الحقن وتعزيز إنتاجية البئر.',
    services: [
      ['التحميض المصفوفي', 'إزالة موجهة للضرر قرب تجويف البئر لاستعادة نفاذية التكوين وتحسين التدفق.'],
      ['دعم التكسير الهيدروليكي', 'معدات وسوائل وكوادر ميدانية متكاملة لمعالجات تكسير مضبوطة.'],
      ['التنشيط بالنيتروجين', 'ضخ نيتروجين يدعم التنظيف الفعّال وتفريغ البئر واستعادة السوائل.'],
      ['الضخ عالي الضغط', 'أنظمة موثوقة للتحكم بالضغط لمجموعة واسعة من معالجات التنشيط.'],
      ['المعالجة الكيميائية', 'أحماض ومذيبات وإضافات مناسبة للغرض يتم اختيارها وفق هدف البئر.'],
      ['استعادة التدفق والتنظيف', 'استعادة تدفق مضبوطة وتنظيف لتجويف البئر من أجل عودة مستقرة للإنتاج.'],
    ],
    processEyebrow: 'نموذج تنفيذ منضبط',
    processTitle: 'من البرنامج إلى الأداء',
    process: [
      ['التخطيط', 'مراجعة بيانات المكمن والبئر ثم إعداد برنامج المعالجة.'],
      ['التجهيز', 'حشد المعدات والتحقق من الحواجز واستكمال فحوص الجاهزية.'],
      ['التنفيذ', 'ضخ المعالجة المصممة مع المراقبة والتحكم المستمرين.'],
      ['الاستعادة', 'إدارة استعادة تدفق مضبوطة وتنظيف تجويف البئر بكفاءة.'],
      ['المراجعة', 'تقييم النتائج وتقديم توصيات لتحسين الأداء في الخطوة التالية.'],
    ],
    reservoirEyebrow: 'هندسة ضمن سياق المكمن',
    reservoirTitle: 'من معدات السطح إلى استجابة المكمن.',
    reservoir: 'تُبنى كل معالجة حول سلوك المكمن وحالة البئر وهدف الإنتاج. تجمع فرقنا بين التخطيط الفني والحكم الميداني لوضع السوائل بدقة وإدارة الضغط بمسؤولية واتخاذ قرارات لحظية واثقة.',
    reservoirPoints: ['مراجعة بيانات المكمن والبئر', 'معايير معالجة مصممة وفق الهدف', 'مراجعة الأداء بعد كل مهمة'],
    safetyEyebrow: 'الجودة والصحة والسلامة والبيئة في كل مرحلة',
    safetyTitle: 'التحكم بالضغط. حماية الأفراد. احترام البيئة.',
    safety: 'تبدأ عمليات التنشيط الآمنة قبل وصول المعدات إلى الموقع بوقت طويل. نخطط للحواجز وندير السوائل بمسؤولية ونتأكد من فهم كل فرد لنطاق العمل والضوابط المعتمدة.',
    safetyCards: [['التحكم بالضغط', 'إدارة قوية للحواجز ومراقبة تشغيلية مستمرة.'], ['العناية بالبيئة', 'مناولة مسؤولة للسوائل والاحتواء وإدارة النفايات.'], ['كفاءات مؤهلة', 'فرق مدربة تتمتع بثقافة سلامة عملية وراسخة.']],
    qhse: 'التزامنا بالجودة والصحة والسلامة والبيئة',
    nextTitle: 'هل أنت مستعد لتحسين أداء بئرك؟',
    nextSubtitle: 'تواصل مع شركة المطر',
  },
};

function Icon({ name }) {
  const icons = {
    flow: <><path d="M4 7h10a3 3 0 1 1 0 6H8a3 3 0 1 0 0 6h12" /><path d="m16 4 3 3-3 3M16 16l3 3-3 3" /></>,
    fracture: <><path d="M12 3v6l3-2 2 4-3 1 2 4-4 5-2-5-4 2 2-5-3-2 4-4 2 2Z" /></>,
    pressure: <><circle cx="12" cy="13" r="7" /><path d="M12 13 16 9M8 4h8M12 6V4" /></>,
    chemistry: <><path d="M9 3v6l-4 7a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 16l-4-7V3M7.5 14h9" /></>,
    cleanup: <><path d="M5 16.5 10 11l3 3 6-7" /><path d="M15 7h4v4M4 20h16" /></>,
    shield: <><path d="M12 3 20 6v5.5c0 4.7-3.3 8.2-8 9.8-4.7-1.6-8-5.1-8-9.8V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-4.9" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden="true">{icons[name]}</svg>;
}

const serviceIcons = ['chemistry', 'fracture', 'flow', 'pressure', 'chemistry', 'cleanup'];

export default function LocalizedStimulationPage() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;
  const isArabic = lang === 'ar';

  return (
    <main className="stf-page" dir={isArabic ? 'rtl' : 'ltr'}>
      <section className="stf-hero">
        <img src={`${root}01_hero_stimulation_fracturing.webp`} alt={isArabic ? 'عمليات تنشيط وتكسير الآبار' : 'Stimulation and fracturing operations'} />
        <div className="stf-hero-shade" />
        <div className="stf-shell stf-hero-content">
          <div className="stf-hero-copy">
            <span className="stf-eyebrow">{text.eyebrow}</span>
            <h1>{text.title}</h1>
            <p>{text.lead}</p>
            <div className="stf-hero-actions">
              <Link href="/contact" className="stf-primary-button">{text.contact}<span>→</span></Link>
              <a href="#capabilities" className="stf-text-link">{text.capabilities}<span>↓</span></a>
            </div>
          </div>
          <div className="stf-hero-stats">
            {text.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="stf-overview stf-shell">
        <div className="stf-overview-copy">
          <span className="stf-eyebrow">{text.overviewEyebrow}</span>
          <h2>{text.overviewTitle}</h2>
          <p>{text.overview}</p>
          <ul>{text.overviewPoints.map((point) => <li key={point}><Icon name="shield" />{point}</li>)}</ul>
        </div>
        <div className="stf-overview-image"><img src={`${root}02_reservoir_cross_section.webp`} alt={isArabic ? 'مقطع توضيحي للمكمن' : 'Reservoir cross-section'} /></div>
      </section>

      <section className="stf-services" id="capabilities">
        <div className="stf-shell">
          <header className="stf-section-heading"><span className="stf-eyebrow">{text.servicesEyebrow}</span><h2>{text.servicesTitle}</h2><p>{text.servicesLead}</p></header>
          <div className="stf-service-grid">
            {text.services.map(([title, description], index) => <article key={title}><span className="stf-card-index">0{index + 1}</span><div className="stf-icon"><Icon name={serviceIcons[index]} /></div><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="stf-process">
        <div className="stf-shell">
          <header className="stf-section-heading"><span className="stf-eyebrow">{text.processEyebrow}</span><h2>{text.processTitle}</h2></header>
          <div className="stf-process-grid">
            {text.process.map(([title, description], index) => <article key={title}><strong>{String(index + 1).padStart(2, '0')}</strong><span className="stf-process-dot" /><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="stf-reservoir stf-shell">
        <div className="stf-reservoir-image"><img src={`${root}03_field_proven_capabilities.webp`} alt={isArabic ? 'معدات وعمليات ميدانية' : 'Field stimulation equipment'} /></div>
        <div className="stf-reservoir-copy"><span className="stf-eyebrow">{text.reservoirEyebrow}</span><h2>{text.reservoirTitle}</h2><p>{text.reservoir}</p><div>{text.reservoirPoints.map((point, index) => <span key={point}><b>0{index + 1}</b>{point}</span>)}</div></div>
      </section>

      <section className="stf-safety">
        <img src={`${root}04_footer_oilfield_background.webp`} alt="" />
        <div className="stf-safety-shade" />
        <div className="stf-shell stf-safety-content">
          <div><span className="stf-eyebrow">{text.safetyEyebrow}</span><h2>{text.safetyTitle}</h2><p>{text.safety}</p><Link href="/qhse" className="stf-light-button">{text.qhse}<span>→</span></Link></div>
          <div className="stf-safety-grid">{text.safetyCards.map(([title, description]) => <article key={title}><Icon name="shield" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <NextPageBanner title={text.nextTitle} subtitle={text.nextSubtitle} link="/contact" bgImage={`${root}04_footer_oilfield_background.webp`} />
    </main>
  );
}
