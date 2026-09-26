'use client';

import Link from 'next/link';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import CmsRoute from '@/components/CmsRoute';

const imageBase = '/images/policies-photo/services/almatar_coiled_tubing_photos/';

const copy = {
  en: {
    eyebrow: 'WELL INTERVENTION SERVICES',
    title: <>COILED TUBING<br />&amp; NITROGEN PUMPING</>,
    description: 'High-pressure coiled tubing and nitrogen pumping solutions for well clean-out, stimulation placement, unloading, and production recovery.',
    button: 'REQUEST TECHNICAL SUPPORT',
    capabilitiesBtn: 'EXPLORE CAPABILITIES',
    stats: [
      ['150+', 'WELL INTERVENTIONS'],
      ['99.2%', 'OPERATIONAL UPTIME'],
      ['10,000 PSI', 'PRESSURE RATING'],
      ['24/7', 'FIELD READINESS'],
    ],
    introEyebrow: 'FIELD-READY CAPABILITY',
    introTitle: 'Reliable Coiled Tubing Solutions',
    introDescription: 'ALMATAR combines experienced field teams, dependable equipment, and disciplined execution to support safer, faster, and more productive well operations.',
    introPoints: [
      'Continuous tubing strings for rapid live-well access without well kill',
      'High-pressure nitrogen lifting to unload heavy fluid columns and initiate production',
      'Fit-for-purpose chemical placement, matrix acidizing, and scale jetting',
    ],
    capabilitiesEyebrow: 'WHAT WE DELIVER',
    capabilitiesTitle: 'Purpose-Built Coiled Tubing Services',
    capabilitiesLead: 'Practical downhole solutions for restoring flow, clearing wellbore obstructions, and maximizing well productivity.',
    capabilities: [
      ['Well Clean-Outs & Debris Washing', 'Remove sand, scale, fill, and downhole debris to restore optimal flow area and production.'],
      ['Nitrogen Lifting & Well Unloading', 'High-efficiency nitrogen pumping to reduce hydrostatic head and bring dead wells back onto production.'],
      ['Acid Stimulation Placement', 'Precise downhole placement of matrix acidizing treatments to remove formation damage.'],
      ['Scale Jetting & Chemical Washing', 'Targeted chemical jetting to dissolve tough mineral scale and paraffin deposits.'],
      ['Plug Milling & Thru-Tubing Intervention', 'Mill out bridge plugs, cement retainers, and downhole restrictions safely.'],
      ['Velocity String & Siphon Line Deployment', 'Hanger and velocity string installations to extend mature gas well production.'],
    ],
    processEyebrow: 'A DISCIPLINED DELIVERY MODEL',
    processTitle: 'From Wellbore Preparation to Production Flow',
    process: [
      ['Plan', 'Review wellbore trajectory, pressure ratings, and fluid chemistry to define the optimal tubing program.'],
      ['Mobilize', 'Rig-up 10,000 PSI pressure-control stack (BOP, stripper packer, lubricator) and pumping unit.'],
      ['Execute', 'Run continuous tubing in-hole with real-time speed, tension, depth, and pressure monitoring.'],
      ['Recover', 'Managed fluid returns, nitrogen lift, and rapid wellbore clean-up.'],
      ['Review', 'Post-job telemetry review and engineering recommendations for optimal well performance.'],
    ],
    safetyEyebrow: 'QHSE AT EVERY STAGE',
    safetyTitle: 'Control the Pressure. Protect the Crew. Respect the Environment.',
    safetyDesc: 'Safe coiled tubing execution begins with rigorous barrier management, certified BOP equipment, and trained personnel who prioritize HSE on every shift.',
    safetyCards: [
      ['Pressure Control & BOP Integrity', 'Multi-ram BOP stacks, dual strippers, and continuous pressure monitoring on every job.'],
      ['Environmental Fluid Containment', 'Closed-loop fluid management, zero-spill containment, and responsible waste handling.'],
      ['Certified & Competent Crews', 'IWCF-certified supervisors and experienced field operators with a strong safety culture.'],
    ],
    ctaEyebrow: "LET'S WORK TOGETHER",
    ctaTitle: 'NEED COILED TUBING SUPPORT FOR YOUR WELLS?',
    ctaDesc: 'Get in touch with our technical team to discuss your requirements and find the right solution for your operation.',
    ctaButton: 'Request Technical Support',
    nextTitle: 'Looking for Stimulation & Fracturing Services?',
    nextSubtitle: 'Explore Stimulation Solutions',
  },
  ar: {
    eyebrow: 'خدمات التدخل في الآبار',
    title: <>الأنابيب الملتفة<br />وضخ النيتروجين</>,
    description: 'حلول أنابيب ملتفة وضخ نيتروجين عالي الضغط لتنظيف الآبار وتوجيه مواد التحفيز وتفريغ الآبار واستعادة الإنتاج.',
    button: 'اطلب الدعم الفني',
    capabilitiesBtn: 'استكشف القدرات',
    stats: [
      ['150+', 'عملية تدخل بالآبار'],
      ['99.2%', 'جاهزية تشغيلية'],
      ['10,000 PSI', 'ضغط التشغيل المعياري'],
      ['24/7', 'جاهزية ميدانية'],
    ],
    introEyebrow: 'قدرات جاهزة للميدان',
    introTitle: 'حلول موثوقة للأنابيب الملتفة',
    introDescription: 'نجمع بين فرق ميدانية خبيرة، ومعدات موثوقة، وتنفيذ منضبط لدعم عمليات آبار أكثر أماناً وسرعة وإنتاجية.',
    introPoints: [
      'سلاسل أنابيب مستمرة للدخول السريع للآبار الحية دون قتل البئر',
      'رفع بالنيتروجين عالي الضغط لتفريغ أعمدة السوائل الثقيلة وبدء الإنتاج',
      'ضخ ووضع دقيق للمواد الكيميائية والتحميض وتنظيف الترسبات',
    ],
    capabilitiesEyebrow: 'ما نقدمه',
    capabilitiesTitle: 'خدمات أنابيب ملتفة مصممة للغرض',
    capabilitiesLead: 'حلول جوفية عملية لاستعادة التدفق، وإزالة العوائق، وتعزيز إنتاجية الآبار.',
    capabilities: [
      ['تنظيف الآبار وغسل الترسبات', 'إزالة الرمال والترسبات والرواسب الجوفية لاستعادة مساحة التدفق والإنتاج الأمثل.'],
      ['الرفع بالنيتروجين وتفريغ الآبار', 'ضخ نيتروجين عالي الكفاءة لتقليل الضغط الهيدروستاتيكي وإعادة الآبار المتوقفة للإنتاج.'],
      ['وضع مواد التحفيز الحمضي', 'توجيه دقيق لمعالجات التحميض الجوفي لإزالة الضرر عن التكوين المكمني.'],
      ['نفاثات إزالة الترسبات والغسيل الكيميائي', 'نفاثات كيميائية موجّهة لإذابة الترسبات المعدنية والشمعية الصلبة.'],
      ['طحن السدادات والتدخل داخل الأنابيب', 'طحن سدادات الجسور ومثبتات الإسمنت والعوائق الجوفية بأمان.'],
      ['تركيب خطوط السرعة وأنابيب السحب', 'تركيب خطوط السرعة لإطالة عمر إنتاج آبار الغاز المتقدمة في العمر.'],
    ],
    processEyebrow: 'نموذج تنفيذ منضبط',
    processTitle: 'من تجهيز تجويف البئر إلى تدفق الإنتاج',
    process: [
      ['التخطيط', 'مراجعة مسار البئر وضغوط التشغيل وكيمياء السوائل لتحديد برنامج الأنابيب الأمثل.'],
      ['التجهيز', 'تركيب مجمع التحكم بالضغط 10,000 PSI (مانع الاندفاع، العازل، والمزلق) ووحدة الضخ.'],
      ['التنفيذ', 'إنزال الأنابيب المستمرة في البئر مع مراقبة آنية للسرعة والشد والعمق والضغط.'],
      ['الاستعادة', 'إدارة رجوع السوائل، والرفع بالنيتروجين، وتنظيف تجويف البئر بسرعة.'],
      ['المراجعة', 'مراجعة البيانات اللحظية وتقديم توصيات هندسية لتحقيق أداء أمثل للبئر.'],
    ],
    safetyEyebrow: 'الصحة والسلامة والبيئة في كل مرحلة',
    safetyTitle: 'التحكم بالضغط. حماية الطاقم. احترام البيئة.',
    safetyDesc: 'يبدأ التنفيذ الآمن للأنابيب الملتفة بإدارة صارمة للحواجز، ومعدات منع اندفاع معتمدة، وطواقم مدرّبة تضع السلامة أولاً.',
    safetyCards: [
      ['التحكم بالضغط وسلامة مانع الاندفاع', 'مجمعات موانع اندفاع متعددة المرامات ومراقبة تشغيلية مستمرة في كل مهمة.'],
      ['احتواء السوائل لحماية البيئة', 'إدارة السوائل في دائرة مغلقة، واحتواء لمنع التسرب، وتصريف مسؤول للنفايات.'],
      ['طواقم معتمدة ومؤهلة', 'مشرفون معتمدون من IWCF ومشغلون ميدانيون ذوو خبرة بثقافة سلامة راسخة.'],
    ],
    ctaEyebrow: 'لنعمل معاً',
    ctaTitle: 'هل تحتاجون إلى دعم الأنابيب الملتفة لآباركم؟',
    ctaDesc: 'تواصلوا مع فريقنا الفني لمناقشة متطلباتكم وإيجاد الحل المناسب لعملياتكم.',
    ctaButton: 'اطلب الدعم الفني',
    nextTitle: 'هل تبحثون عن خدمات التحفيز والتكسير؟',
    nextSubtitle: 'استكشف حلول التحفيز',
  },
};

function CoiledTubingLegacy() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;
  const isArabic = lang === 'ar';

  return (
    <main className="ct-page" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* 1. HERO SECTION */}
      <section className="ct-hero">
        <img
          src={`${imageBase}01_clean_hero_coiled_tubing.webp`}
          alt={isArabic ? 'الأنابيب الملتفة وضخ النيتروجين' : 'Coiled tubing and nitrogen pumping'}
        />
        <div className="ct-hero-overlay">
          <div className="ct-hero-copy">
            <span className="ct-eyebrow">{text.eyebrow}</span>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
            <div className="ct-hero-actions">
              <Link href="/contact" className="ct-hero-button">
                {text.button} <b>→</b>
              </Link>
              <a href="#capabilities" className="ct-secondary-button">
                {text.capabilitiesBtn} <span>↓</span>
              </a>
            </div>
          </div>
          <div className="ct-hero-stats">
            {text.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="ct-intro">
        <div className="ct-intro-copy">
          <span className="ct-eyebrow">{text.introEyebrow}</span>
          <h2>{text.introTitle}</h2>
          <p>{text.introDescription}</p>
          <ul>
            {text.introPoints.map((point) => (
              <li key={point}>
                <span className="ct-bullet-icon">✓</span> {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="ct-intro-image">
          <img src={`${imageBase}02_nitrogen_lifting.webp`} alt="Coiled tubing nitrogen lifting operation" />
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="ct-capabilities" id="capabilities">
        <div className="ct-section-heading">
          <span className="ct-eyebrow">{text.capabilitiesEyebrow}</span>
          <h2>{text.capabilitiesTitle}</h2>
          <p>{text.capabilitiesLead}</p>
        </div>
        <div className="ct-capability-grid">
          {text.capabilities.map(([title, description], index) => (
            <article key={title}>
              <span className="ct-card-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. PROCESS DELIVERY MODEL */}
      <section className="ct-process">
        <div className="ct-section-heading">
          <span className="ct-eyebrow">{text.processEyebrow}</span>
          <h2>{text.processTitle}</h2>
        </div>
        <div className="ct-process-grid">
          {text.process.map(([title, description], index) => (
            <article key={title}>
              <strong>0{index + 1}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. QHSE & WELL CONTROL */}
      <section className="ct-safety">
        <div className="ct-safety-header">
          <span className="ct-eyebrow">{text.safetyEyebrow}</span>
          <h2>{text.safetyTitle}</h2>
          <p>{text.safetyDesc}</p>
        </div>
        <div className="ct-safety-grid">
          {text.safetyCards.map(([title, description]) => (
            <article key={title}>
              <span className="ct-safety-icon">🛡</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. FULL-WIDTH DARK BOTTOM CTA BANNER */}
      <section className="slickline-cta-banner-section">
        <div className="slickline-banner-wrap">
          <img
            src={`${imageBase}01_clean_hero_coiled_tubing.webp`}
            alt={text.ctaTitle}
            className="banner-bg-img"
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <div className="section-label-group light">
              <span className="orange-bar">—</span>
              <span className="section-label">{text.ctaEyebrow}</span>
            </div>
            <h2 className="banner-title">{text.ctaTitle}</h2>
            <p className="banner-sub">{text.ctaDesc}</p>
            <Link href="/contact" className="banner-cta-btn">
              {text.ctaButton} <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NEXT PAGE NAVIGATION BANNER */}
      <NextPageBanner
        title={text.nextTitle}
        subtitle={text.nextSubtitle}
        link="/stimulation-fracturing"
        bgImage="/images/policies-photo/services/almatar_stimulation_all_photos/01_hero_stimulation_fracturing.webp"
      />
    </main>
  );
}

export default function CoiledTubingPage() {
  return <CmsRoute pageKey="coiled-tubing" fallback={<CoiledTubingLegacy />} />;
}
