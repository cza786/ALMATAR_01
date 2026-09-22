'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ServiceIntroCard from './ServiceIntroCard';

const root = '/images/policies-photo/services/almatar_zonal_isolation_photos/';

const content = {
  en: {
    hero: { kicker: 'OUR SERVICES', title: <>ZONAL ISOLATION &amp;<br />CEMENTING</>, description: 'Reliable wellbore isolation for safer, more productive and longer-lasting wells.', cta: 'Request Technical Support', breadcrumb: 'Home › Our Services › Zonal Isolation & Cementing' },
    intro: { eyebrow: 'ENGINEERING & INTEGRITY', title: 'Integrated Zonal Isolation Solutions', description: 'ALMATAR delivers engineered cementing and wellbore isolation services that protect production, assets and the environment throughout the life of the well.', imageAlt: 'Wellbore cementing diagram', button: 'Learn More About ALMATAR' },
    integrity: { title: <>ENSURING LASTING<br />WELLBORE INTEGRITY</>, description: 'Our zonal isolation and cementing services provide a critical barrier between formations, protecting your assets, the environment and your production. We deliver engineered cementing solutions for exploration, development and well intervention operations, tailored to challenging well conditions and complex geometries.', benefits: ['Reliable Zonal Isolation', 'Engineered Solutions', 'Experienced Field Teams'], sideTitle: <>ISOLATING TODAY<br />FOR A SAFER TOMORROW</>, sideDescription: 'Proper cementing ensures zonal isolation, prevents fluid migration and maintains long-term well integrity throughout the life of the well.', legend: ['Casing', 'Cement', 'Formation', 'Isolated Zone', 'Hydrocarbon Bearing Zone'] },
    capabilitiesHeading: 'OUR CEMENTING CAPABILITIES', capabilitiesTag: 'TAILORED SOLUTIONS FOR EVERY WELL',
    capabilities: [
      { icon: '◈', title: 'PRIMARY CEMENTING', description: 'Engineered primary cementing for surface, intermediate and production casings.' },
      { icon: '◉', title: 'REMEDIAL / SQUEEZE CEMENTING', description: 'Restore zonal isolation and address unwanted fluid migration.' },
      { icon: '◒', title: 'PLUG & ABANDONMENT SUPPORT', description: 'Cementing solutions for well suspension and abandonment operations.' },
      { icon: '◐', title: 'ZONAL ISOLATION SOLUTIONS', description: 'Custom solutions for complex wellbore conditions and challenging formations.' },
      { icon: '◇', title: 'CASING INTEGRITY SUPPORT', description: 'Maintain long-term well integrity and prevent annular flow.' },
      { icon: '▣', title: 'CEMENT EVALUATION', description: 'Post-job evaluation and integrity assessment using industry-standard tools and analysis.' },
    ],
    workflowHeading: 'BARRIER INTEGRITY WORKFLOW', workflowTag: 'FROM PLANNING TO VERIFICATION',
    workflow: [
      { number: '01', title: 'Engineering & Design', description: 'Well analysis, material selection and job design.' },
      { number: '02', title: 'Preparation', description: 'Equipment, materials and site readiness.' },
      { number: '03', title: 'Execution', description: 'Safe and efficient cementing operations.' },
      { number: '04', title: 'Evaluation', description: 'Data review and cement integrity assessment.' },
      { number: '05', title: 'Verification', description: 'Confirm zonal isolation and long-term integrity.' },
    ],
    field: { title: 'FIELD PROVEN SOLUTIONS', description: 'Our experienced teams and modern cementing equipment deliver reliable results in conventional and challenging well environments.', items: ['High-performance cementing units', 'Tailored cement systems for HP/HT conditions', 'Experienced field engineers and operators', 'Strict quality control and safety procedures'] },
    hse: { title: 'HSE & QUALITY', kicker: 'SAFETY AND RESPONSIBILITY IN EVERY OPERATION', cards: [{ title: 'Safe Execution', description: 'We follow strict operational procedures to ensure the safety of our people and the environment.' }, { title: 'Environmental Protection', description: 'Preventing cross-flow and protecting natural resources is at the core of our operations.' }, { title: 'Quality Materials', description: 'We use qualified cement systems and follow industry best practices.' }] },
  },
  ar: {
    hero: { kicker: 'خدماتنا', title: <>العزل الطبقي<br />والإسمنت</>, description: 'عزل موثوق للبئر لعمليات أكثر أماناً وإنتاجيةً وعمرٍ تشغيلي أطول.', cta: 'اطلب دعماً فنياً', breadcrumb: 'الرئيسية › خدماتنا › العزل الطبقي والإسمنت' },
    intro: { eyebrow: 'الهندسة والسلامة التشغيلية', title: 'حلول متكاملة للعزل الطبقي', description: 'تقدم شركة المطر خدمات هندسية للإسمنت وعزل الآبار لحماية الإنتاج والأصول والبيئة طوال دورة حياة البئر.', imageAlt: 'مخطط إسمنت البئر', button: 'تعرّف على شركة المطر' },
    integrity: { title: <>ضمان سلامة مستدامة<br />لجسم البئر</>, description: 'توفر خدماتنا للعزل الطبقي والإسمنت حاجزاً أساسياً بين الطبقات، وتحمي أصولكم والبيئة والإنتاج. نقدم حلول إسمنت هندسية للاستكشاف والتطوير والتدخل في الآبار، ومصممة لظروف الآبار الصعبة والهياكل المعقدة.', benefits: ['عزل طبقي موثوق', 'حلول هندسية', 'فرق ميدانية خبيرة'], sideTitle: <>نعزل اليوم<br />لغدٍ أكثر أماناً</>, sideDescription: 'يضمن الإسمنت الصحيح العزل الطبقي، ويمنع انتقال السوائل، ويحافظ على سلامة البئر على المدى الطويل طوال عمره التشغيلي.', legend: ['أنبوب التغليف', 'الإسمنت', 'التكوين الجيولوجي', 'منطقة معزولة', 'منطقة حاملة للهيدروكربونات'] },
    capabilitiesHeading: 'قدراتنا في عمليات الإسمنت', capabilitiesTag: 'حلول مخصصة لكل بئر',
    capabilities: [
      { icon: '◈', title: 'الإسمنت الأولي', description: 'إسمنت أولي هندسي لأنابيب التغليف السطحية والوسيطة والإنتاجية.' },
      { icon: '◉', title: 'الإسمنت العلاجي والضغطي', description: 'استعادة العزل الطبقي ومعالجة انتقال السوائل غير المرغوب فيه.' },
      { icon: '◒', title: 'دعم سدّ وهجر الآبار', description: 'حلول إسمنت لتعليق الآبار وعمليات الهجر الآمن.' },
      { icon: '◐', title: 'حلول العزل الطبقي', description: 'حلول مخصصة لظروف جسم البئر المعقدة والتكوينات الصعبة.' },
      { icon: '◇', title: 'دعم سلامة أنابيب التغليف', description: 'الحفاظ على سلامة البئر على المدى الطويل ومنع الجريان الحلقي.' },
      { icon: '▣', title: 'تقييم الإسمنت', description: 'تقييم ما بعد العملية وسلامة البئر باستخدام أدوات وتحليلات قياسية.' },
    ],
    workflowHeading: 'منهجية سلامة الحواجز', workflowTag: 'من التخطيط إلى التحقق',
    workflow: [
      { number: '01', title: 'الهندسة والتصميم', description: 'تحليل البئر واختيار المواد وتصميم العملية.' },
      { number: '02', title: 'التحضير', description: 'تجهيز المعدات والمواد والموقع.' },
      { number: '03', title: 'التنفيذ', description: 'عمليات إسمنت آمنة وفعّالة.' },
      { number: '04', title: 'التقييم', description: 'مراجعة البيانات وتقييم سلامة الإسمنت.' },
      { number: '05', title: 'التحقق', description: 'تأكيد العزل الطبقي والسلامة طويلة الأمد.' },
    ],
    field: { title: 'حلول مثبتة ميدانياً', description: 'تقدم فرقنا الخبيرة ومعدات الإسمنت الحديثة نتائج موثوقة في بيئات الآبار التقليدية والصعبة.', items: ['وحدات إسمنت عالية الأداء', 'أنظمة إسمنت مخصصة لظروف الضغط والحرارة المرتفعين', 'مهندسون ومشغّلون ميدانيون ذوو خبرة', 'إجراءات صارمة للجودة والسلامة'] },
    hse: { title: 'الصحة والسلامة والبيئة والجودة', kicker: 'السلامة والمسؤولية في كل عملية', cards: [{ title: 'تنفيذ آمن', description: 'نتبع إجراءات تشغيل صارمة لضمان سلامة موظفينا والبيئة.' }, { title: 'حماية البيئة', description: 'منع الجريان المتقاطع وحماية الموارد الطبيعية في صميم عملياتنا.' }, { title: 'مواد عالية الجودة', description: 'نستخدم أنظمة إسمنت مؤهلة ونتبع أفضل ممارسات الصناعة.' }] },
  },
};

function Icon({ children }) { return <span className="zonal-icon" aria-hidden="true">{children}</span>; }

export default function ZonalIsolationPage() {
  const { lang } = useLanguage();
  const text = content[lang] || content.en;
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const workflowIcons = ['◈', '◉', '◐', '▣', '✓'];

  useEffect(() => {
    if (!isAnimating) return undefined;
    const interval = setInterval(() => setActiveStep((step) => (step + 1) % text.workflow.length), 2800);
    return () => clearInterval(interval);
  }, [isAnimating, text.workflow.length]);

  const selectStep = (index) => { setActiveStep(index); setIsAnimating(false); };
  const activeWorkflowStep = text.workflow[activeStep];

  return (
    <main className="zonal-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="zonal-hero">
        <img src={`${root}01_hero_cementing_operation.webp`} alt={lang === 'ar' ? 'عملية العزل الطبقي والإسمنت' : 'Zonal isolation and cementing operation'} />
        <div className="zonal-hero-copy">
          <p className="zonal-kicker">{text.hero.kicker}</p><h1>{text.hero.title}</h1><p>{text.hero.description}</p>
          <Link href="/contact" className="zonal-orange-btn"><span>{text.hero.cta}</span><span aria-hidden="true">→</span></Link><small>{text.hero.breadcrumb}</small>
        </div>
      </section>

      <ServiceIntroCard eyebrow={text.intro.eyebrow} title={text.intro.title} description={text.intro.description} image={`${root}02_wellbore_cementing_diagram.webp`} imageAlt={text.intro.imageAlt} href="/about" buttonLabel={text.intro.button} />

      <section className="zonal-integrity">
        <div className="zonal-integrity-copy"><span className="zonal-rule" /><h2>{text.integrity.title}</h2><p>{text.integrity.description}</p><div className="zonal-trio">{text.integrity.benefits.map((benefit, index) => <div key={benefit}><Icon>{['◇', '◉', '◈'][index]}</Icon><span>{benefit}</span></div>)}</div></div>
        <div className="zonal-diagram"><img src={`${root}02_wellbore_cementing_diagram.webp`} alt={text.intro.imageAlt} /></div>
        <div className="zonal-integrity-side"><h2>{text.integrity.sideTitle}</h2><p>{text.integrity.sideDescription}</p><div className="zonal-legend">{text.integrity.legend.map((item, index) => <span key={item} className={index > 2 ? 'zonal-legend-highlight' : ''}>■ {item}</span>)}</div></div>
      </section>

      <section className="zonal-section zonal-capabilities"><div className="zonal-heading-row"><h2><span className="zonal-rule" />{text.capabilitiesHeading}</h2><span>{text.capabilitiesTag} →</span></div><div className="zonal-capability-grid">{text.capabilities.map((capability) => <article key={capability.title}><Icon>{capability.icon}</Icon><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div></section>

      <section className="zonal-workflow"><div className="zonal-heading-row"><h2><span className="zonal-rule" />{text.workflowHeading}</h2><span>{text.workflowTag} →</span></div><div className="zonal-workflow-grid">{text.workflow.map((step, index) => { const isActive = activeStep === index; const isCompleted = activeStep > index; return <button type="button" className={`zonal-workflow-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`} key={step.number} onClick={() => selectStep(index)}><span className="zonal-workflow-circle"><Icon>{workflowIcons[index]}</Icon></span>{index < text.workflow.length - 1 && <span className={`zonal-workflow-arrow ${isCompleted || isActive ? 'active-arrow' : ''}`} aria-hidden="true">→</span>}<strong>{step.number}</strong><h3>{step.title}</h3><p>{step.description}</p></button>; })}</div><div className="zonal-workflow-mobile-card" key={activeWorkflowStep.number}><div className="zonal-workflow-circle"><Icon>{workflowIcons[activeStep]}</Icon></div><strong>{activeWorkflowStep.number}</strong><h3>{activeWorkflowStep.title}</h3><p>{activeWorkflowStep.description}</p></div><div className="zonal-workflow-controls">{text.workflow.map((step, index) => <button key={step.number} type="button" className={`zonal-workflow-dot ${activeStep === index ? 'active' : ''}`} onClick={() => selectStep(index)} aria-label={`${lang === 'ar' ? 'الانتقال إلى الخطوة' : 'Go to step'} ${index + 1}`} />)}</div></section>

      <section className="zonal-section zonal-field"><div><h2><span className="zonal-rule" />{text.field.title}</h2><p>{text.field.description}</p><ul>{text.field.items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="zonal-section zonal-hse"><div><h2><span className="zonal-rule" />{text.hse.title}</h2><p className="zonal-kicker">{text.hse.kicker}</p></div><div className="zonal-hse-grid">{text.hse.cards.map((card, index) => <div key={card.title}><Icon>{['◉', '◇', '◈'][index]}</Icon><h3>{card.title}</h3><p>{card.description}</p></div>)}</div><div className="zonal-worker"><img src={`${root}05_hse_field_worker.webp`} alt={lang === 'ar' ? 'عامل ميداني في شركة المطر' : 'ALMATAR field worker'} /></div></section>
    </main>
  );
}
