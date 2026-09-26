'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import CmsRoute from '@/components/CmsRoute';

const imageBase = '/images/policies-photo/services/almatar_coiled_tubing_photos/';

const copy = {
  en: {
    eyebrow: 'WELL SERVICES',
    title: <>COILED TUBING<br />&amp; NITROGEN PUMPING</>,
    description: 'Efficient well intervention solutions for clean-up, stimulation, unloading and production recovery.',
    button: 'REQUEST TECHNICAL SUPPORT',
    introEyebrow: 'FIELD-READY CAPABILITY',
    introTitle: 'Reliable coiled tubing solutions',
    introDescription: 'ALMATAR combines experienced field teams, dependable equipment and disciplined execution to support safer, faster and more productive well operations.',
    capabilities: [
      ['Well clean-up', 'Remove debris and restore wellbore performance with controlled intervention programs.'],
      ['Nitrogen pumping', 'Support unloading, fluid recovery and well start-up with precise nitrogen services.'],
      ['Stimulation support', 'Deliver fit-for-purpose pumping and placement support for improved well productivity.'],
    ],
  },
  ar: {
    eyebrow: 'خدمات الآبار',
    title: <>الأنابيب الملتفة<br />وضخ النيتروجين</>,
    description: 'حلول فعالة للتنظيف والتنشيط وتفريغ الآبار واستعادة الإنتاج.',
    button: 'اطلب الدعم الفني',
    introEyebrow: 'قدرات جاهزة للميدان',
    introTitle: 'حلول موثوقة للأنابيب الملتفة',
    introDescription: 'نجمع بين فرق ميدانية خبيرة ومعدات موثوقة وتنفيذ منضبط لدعم عمليات آبار أكثر أماناً وسرعة وإنتاجية.',
    capabilities: [
      ['تنظيف الآبار', 'إزالة الرواسب واستعادة أداء البئر من خلال برامج تدخل مضبوطة.'],
      ['ضخ النيتروجين', 'دعم تفريغ الآبار واستعادة السوائل وبدء التشغيل بخدمات نيتروجين دقيقة.'],
      ['دعم التنشيط', 'تقديم حلول ضخ ووضع مصممة لتحسين إنتاجية الآبار.'],
    ],
  },
};

function CoiledTubingLegacy() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;

  return (
    <main className="ct-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="ct-hero">
        <img src={`${imageBase}01_clean_hero_coiled_tubing.webp`} alt={lang === 'ar' ? 'الأنابيب الملتفة وضخ النيتروجين' : 'Coiled tubing and nitrogen pumping'} />
        <div className="ct-hero-overlay">
          <div className="ct-hero-copy">
            <span>{text.eyebrow}</span>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
            <Link href="/contact" className="ct-hero-button">{text.button}<b>→</b></Link>
          </div>
        </div>
      </section>

      <section className="ct-intro">
        <div>
          <span className="ct-eyebrow">{text.introEyebrow}</span>
          <h2>{text.introTitle}</h2>
          <p>{text.introDescription}</p>
        </div>
        <img src={`${imageBase}02_nitrogen_lifting.webp`} alt="Coiled tubing field operation" />
      </section>

      <section className="ct-capabilities">
        <span className="ct-eyebrow">{lang === 'ar' ? 'ما نقدمه' : 'WHAT WE DELIVER'}</span>
        <h2>{lang === 'ar' ? 'دعم متكامل لعمليات الآبار' : 'Practical support for well operations'}</h2>
        <div className="ct-capability-grid">
          {text.capabilities.map(([title, description]) => (
            <article key={title}>
              <span>✦</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function CoiledTubingPage() {
  return <CmsRoute serviceKey="coiled-tubing" fallback={<CoiledTubingLegacy />} />;
}
