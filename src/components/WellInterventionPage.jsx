'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ServiceIntroCard from './ServiceIntroCard';

const base = '/images/policies-photo/services/drilling_workover/';

const content = {
  en: {
    heroBreadcrumb: 'HOME / WELL SERVICES / WELL INTERVENTION SERVICES',
    heroTitle: <>WELL INTERVENTION<br />SERVICES</>,
    heroDesc: <>A safer, more efficient and sustainable approach to well care.<br />Backed by decades of experience and a relentless drive for better, ALMATAR delivers well intervention services that maximise uptime and unlock value.</>,
    heroButton: 'EXPLORE OUR WELL SERVICES',
    heroSide: <>EXPERTISE<br />INNOVATION<br />RESULTS</>,
    introEyebrow: 'EXCELLENCE & DEDICATION',
    introTitle: 'Integrated Well Intervention Solutions',
    introDesc: 'ALMATAR delivers field-proven intervention services, advanced equipment and experienced technical teams to maximize well productivity safely and sustainably.',
    introButton: 'READ COMPANY VISION & MISSION',
    lifecycleTitle: <>THE INTERVENTION<br />LIFECYCLE</>,
    lifecycleDesc: <>A disciplined, end-to-end approach to maximise<br />well value at stages of the asset life.</>,
    lifecycle: [
      ['DIAGNOSIS', <>Identify well issues through data,<br />analysis and downhole intelligence.</>],
      ['PLANNING', <>Develop fit-for-purpose solutions<br />with clear objectives.</>],
      ['EXECUTION', <>Deploy experienced teams and<br />advanced technology safely.</>],
      ['ONGOING PERFORMANCE', <>Apply insights to extend well life<br />and enhance future performance.</>],
    ],
    capabilitiesTitle: 'OUR WELL INTERVENTION CAPABILITIES',
    capabilitiesLead: <>Comprehensive services. Proven technology. Measurable results.<br />We provide end-to-end well solutions, including:</>,
    capabilities: [
      ['PRODUCTION\nOPTIMISATION', 'Remove bottlenecks and enhance flow and productivity in existing wells.'],
      ['REMEDIAL\nCEMENTING', 'Restore well integrity and zonal isolation with advanced materials and techniques.'],
      ['SCALE MANAGEMENT', 'Prevent and remove scale build-up to maintain optimal well performance and flow assurance.'],
      ['PRESSURE CONTROL', 'Safeguard operations with proven well control methods and real-time monitoring.'],
      ['WELL INTEGRITY', 'Maintain structural reliability and extend asset life cycles cost-effectively.'],
      ['PLUG AND\nABANDONMENT', 'Deliver safe, compliant and environmentally responsible end-of-life well solutions.'],
    ],
    performanceTitle: <>KEEPING YOUR WELLS<br />PERFORMING</>,
    performance: [
      'Our well intervention services are designed to safely and effectively solve complex downhole challenges, maximize uptime and drive value.',
      'With a focus on safety, innovation and operational excellence, we combine advanced technology, industry expertise and a results-driven mindset to keep your wells performing – today and tomorrow.',
    ],
    performancePoints: ['Experienced and safety-minded teams', 'Advanced technology and real-time monitoring', 'Solutions for the full well lifecycle', 'A commitment to operational excellence'],
    learnMore: 'LEARN MORE ABOUT OUR APPROACH',
    stats: [['200+', 'WELLS INTERVENED\nGLOBALLY'], ['98%', 'OPERATIONAL\nUPTIME RATE'], ['15+', 'YEARS AVERAGE\nTEAM EXPERIENCE'], ['ONSHORE', 'AND OFFSHORE\nOPERATIONS']],
    sustainabilityTitle: <>SAFETY. PEOPLE.<br />A SUSTAINABLE TOMORROW.</>,
    sustainability: <>At Almatar, we believe in delivering energy solutions responsibly – for our people, our partners and the communities where we operate.<br />Our well intervention services are designed to create lasting value while protecting people and the environment.</>,
    sustainabilityButton: 'OUR SUSTAINABILITY',
    ctaTitle: <>LET’S KEEP<br />YOUR WELLS PERFORMING</>,
    ctaDesc: <>Get in touch with our specialists to discuss your<br />well intervention requirements.</>,
    ctaButton: 'CONTACT OUR EXPERTS',
    imageAlt: 'Well intervention rig operating in an oilfield',
  },
  ar: {
    heroBreadcrumb: 'الرئيسية / خدمات الآبار / خدمات تدخل الآبار',
    heroTitle: <>خدمات تدخل<br />الآبار</>,
    heroDesc: <>نهج أكثر أماناً وكفاءة واستدامة للعناية بالآبار.<br />بفضل عقود من الخبرة والسعي المستمر نحو الأفضل، تقدم شركة المطر خدمات تدخل الآبار التي تعزز وقت التشغيل وتحقق قيمة أكبر.</>,
    heroButton: 'استكشف خدمات الآبار',
    heroSide: <>خبرة<br />ابتكار<br />نتائج</>,
    introEyebrow: 'تميز والتزام',
    introTitle: 'حلول متكاملة لتدخل الآبار',
    introDesc: 'تقدم شركة المطر خدمات تدخل مثبتة ميدانياً، ومعدات متطورة، وفرقاً فنية ذات خبرة لتعزيز إنتاجية الآبار بأمان واستدامة.',
    introButton: 'اقرأ رؤيتنا ورسالتنا',
    lifecycleTitle: <>دورة حياة<br />تدخل الآبار</>,
    lifecycleDesc: <>نهج منضبط ومتكامل لتعظيم<br />قيمة البئر في جميع مراحل عمر الأصل.</>,
    lifecycle: [
      ['التشخيص', <>تحديد مشكلات البئر من خلال البيانات<br />والتحليل والمعلومات الجوفية.</>],
      ['التخطيط', <>تطوير حلول مناسبة للغرض<br />بأهداف واضحة.</>],
      ['التنفيذ', <>توظيف فرق ذات خبرة وتقنيات<br />متقدمة بأمان.</>],
      ['الأداء المستمر', <>تطبيق الرؤى لإطالة عمر البئر<br />وتعزيز الأداء المستقبلي.</>],
    ],
    capabilitiesTitle: 'قدراتنا في مجال تدخل الآبار',
    capabilitiesLead: <>خدمات شاملة. تقنيات مثبتة. نتائج قابلة للقياس.<br />نقدم حلولاً متكاملة للآبار، تشمل:</>,
    capabilities: [
      ['تحسين\nالإنتاج', 'إزالة الاختناقات وتعزيز التدفق والإنتاجية في الآبار القائمة.'],
      ['الإسمنت\nالعلاجي', 'استعادة سلامة البئر والعزل الطبقي باستخدام مواد وتقنيات متقدمة.'],
      ['إدارة الترسبات', 'منع وإزالة تراكم الترسبات للحفاظ على أداء البئر وضمان التدفق الأمثل.'],
      ['التحكم بالضغط', 'حماية العمليات باستخدام أساليب مثبتة للتحكم بالآبار ومراقبة آنية.'],
      ['سلامة البئر', 'الحفاظ على الموثوقية الهيكلية وإطالة عمر الأصول بكفاءة من حيث التكلفة.'],
      ['السد والتخلي\nعن الآبار', 'تقديم حلول آمنة ومتوافقة ومسؤولة بيئياً لنهاية عمر البئر.'],
    ],
    performanceTitle: <>نحافظ على آباركم<br />بأفضل أداء</>,
    performance: [
      'صُممت خدمات تدخل الآبار لدينا لحل التحديات الجوفية المعقدة بأمان وفعالية، وتعظيم وقت التشغيل وتحقيق قيمة أكبر.',
      'مع التركيز على السلامة والابتكار والتميز التشغيلي، نجمع بين التقنيات المتقدمة والخبرة العملية والعقلية القائمة على النتائج للحفاظ على أداء آباركم اليوم وغداً.',
    ],
    performancePoints: ['فرق ذات خبرة ووعي عالٍ بالسلامة', 'تقنيات متقدمة ومراقبة آنية', 'حلول متكاملة لدورة حياة البئر', 'التزام بالتميز التشغيلي'],
    learnMore: 'تعرّف على نهجنا',
    stats: [['200+', 'بئر تم التدخل فيه\nحول العالم'], ['98%', 'معدل\nالجاهزية التشغيلية'], ['15+', 'متوسط سنوات\nخبرة الفريق'], ['برية', 'عمليات برية\nوبحرية']],
    sustainabilityTitle: <>السلامة. الناس.<br />غدٌ مستدام.</>,
    sustainability: <>نؤمن في شركة المطر بتقديم حلول الطاقة بمسؤولية تجاه موظفينا وشركائنا والمجتمعات التي نعمل فيها.<br />صُممت خدمات تدخل الآبار لدينا لخلق قيمة مستدامة مع حماية الناس والبيئة.</>,
    sustainabilityButton: 'استدامتنا',
    ctaTitle: <>لنحافظ معاً<br />على أداء آباركم</>,
    ctaDesc: <>تواصلوا مع خبرائنا لمناقشة<br />احتياجاتكم في مجال تدخل الآبار.</>,
    ctaButton: 'تواصل مع خبرائنا',
    imageAlt: 'منصة تدخل آبار تعمل في حقل نفطي',
  },
};

function Rule() { return <span className="wi-rule" />; }

export default function WellInterventionPage() {
  const { lang } = useLanguage();
  const copy = content[lang] || content.en;

  return <div className="well-intervention-page">
    <section className="wi-hero">
      <img src={`${base}well-intervention-hero-clear.webp`} alt={copy.imageAlt} />
      <div className="wi-hero-overlay">
        <span className="wi-hero-breadcrumb">{copy.heroBreadcrumb}</span>
        <h1>{copy.heroTitle}</h1>
        <p>{copy.heroDesc}</p>
        <Link href="/well-services" className="wi-hero-btn">{copy.heroButton} <b>→</b></Link>
        <span className="wi-hero-side">{copy.heroSide}</span>
      </div>
    </section>

    <ServiceIntroCard eyebrow={copy.introEyebrow} title={copy.introTitle} description={copy.introDesc} buttonLabel={copy.introButton} image={`${base}intervention-lifecycle-clear.webp`} imageAlt={copy.imageAlt} />

    <section className="wi-lifecycle">
      <div className="wi-lifecycle-copy"><h2>{copy.lifecycleTitle}</h2><Rule /><p>{copy.lifecycleDesc}</p>
        <ol>{copy.lifecycle.map(([title, description], index) => <li key={title}><b>0{index + 1}</b><strong>{title}</strong><span>{description}</span></li>)}</ol>
      </div><img className="wi-lifecycle-image" src={`${base}intervention-lifecycle-clear.webp`} alt={copy.imageAlt} />
    </section>

    <section className="wi-capabilities"><div className="wi-heading"><div><h2>{copy.capabilitiesTitle}</h2><Rule /></div><p>{copy.capabilitiesLead}</p></div><div className="wi-cap-grid">{copy.capabilities.map(([title, text]) => <article key={title}><i>◈</i><h3>{title.split('\n').map((line, index) => <span key={index}>{line}</span>)}</h3><p>{text}</p></article>)}</div></section>

    <section className="wi-performance"><img src={`${base}field-operations-clear.webp`} alt={copy.imageAlt} /><div><h2>{copy.performanceTitle}</h2><Rule />{copy.performance.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul>{copy.performancePoints.map((point) => <li key={point}>{point}</li>)}</ul><Link href="/about" className="wi-outline-btn">{copy.learnMore}　→</Link></div></section>

    <section className="wi-stats">{copy.stats.map(([value, label]) => <div key={value}><b>✦<strong>{value}</strong></b><span>{label}</span></div>)}</section>

    <section className="wi-sustainability"><img src={`${base}sustainability-background-clear.webp`} alt={copy.imageAlt} /><div><h2>{copy.sustainabilityTitle}</h2><p>{copy.sustainability}</p><Link href="/about" className="wi-outline-btn">{copy.sustainabilityButton}　→</Link></div></section>

    <section className="wi-cta"><h2>{copy.ctaTitle}</h2><p>{copy.ctaDesc}</p><Link href="/contact">{copy.ctaButton}　→</Link></section>
  </div>;
}
