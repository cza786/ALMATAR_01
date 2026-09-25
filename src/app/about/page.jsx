'use client';

import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

const values = [
  ['Safety First', 'Protecting our people, communities and environment in everything we do.', '♢'],
  ['Quality', 'Delivering work to the highest technical and professional standards.', '✦'],
  ['Integrity', 'Doing what is right, always.', '◇'],
  ['Reliability', 'Being a partner our clients can count on.', '✓'],
  ['Sustainable Impact', 'Contributing to a stronger, more resilient Syria.', '◌'],
];

const arabicValues = [
  ['السلامة أولاً', 'حماية موظفينا ومجتمعاتنا وبيئتنا في كل ما نقوم به.', '♢'],
  ['الجودة', 'تقديم الأعمال وفق أعلى المعايير الفنية والمهنية.', '✦'],
  ['النزاهة', 'القيام بما هو صحيح دائماً.', '◇'],
  ['الموثوقية', 'أن نكون شريكاً يعتمد عليه عملاؤنا.', '✓'],
  ['الأثر المستدام', 'المساهمة في بناء سوريا أقوى وأكثر قدرة على الصمود.', '◌'],
];

function Stat({ number, label }) { return <div className="about-stat"><strong>{number}</strong><span>{label}</span></div>; }

function ClientCard({ image, title, children, icon }) {
  return <article className="about-client-card"><img src={image} alt="" /><div className="about-client-copy"><span className="about-client-icon">{icon}</span><div><h3>{title}</h3>{children}</div><span className="about-client-arrow">→</span></div><div className="about-client-controls"><button className="about-client-prev" type="button" aria-label="Previous card" onClick={() => window.dispatchEvent(new CustomEvent('about-client-change', { detail: -1 }))}>&larr;</button><button className="about-client-next" type="button" aria-label="Next card" onClick={() => window.dispatchEvent(new CustomEvent('about-client-change', { detail: 1 }))}>&rarr;</button></div></article>;
}

export default function AboutPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const nextBanner = isArabic
    ? { title: 'لنبنِ بنية تحتية موثوقة معاً', subtitle: 'شارك AL-MATAR في تقديم حلول ميدانية آمنة وفعالة ومستدامة في جميع أنحاء سوريا.' }
    : { title: "Let's Build Reliable Infrastructure Together", subtitle: 'Partner with AL-MATAR for safe, efficient and sustainable field solutions across Syria.' };
  const [activeClient, setActiveClient] = useState(0);
  const currentValues = isArabic ? arabicValues : values;
  useEffect(() => {
    document.documentElement.style.setProperty('--active-client', activeClient);
    return () => document.documentElement.style.removeProperty('--active-client');
  }, [activeClient]);
  useEffect(() => {
    const changeClient = (event) => setActiveClient((current) => Math.max(0, Math.min(2, current + event.detail)));
    window.addEventListener('about-client-change', changeClient);
    return () => window.removeEventListener('about-client-change', changeClient);
  }, []);
  useEffect(() => {
    const cards = document.querySelectorAll('.about-value-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return <div className="about-page-new">
    <section className="about-new-hero"><img src="/images/banner_about_corporate.webp?v=2" alt={isArabic ? 'عمليات شركة المطر النفطية' : 'AL-MATAR oilfield operations'} /><div className="about-new-hero-overlay"><div><span className="about-new-eyebrow">{isArabic ? 'عن شركة المطر' : 'ABOUT AL-MATAR'}</span><h1>{isArabic ? <>نبني على الخبرة.<br />ونقود بالنزاهة.</> : <>BUILT ON EXPERIENCE.<br />DRIVEN BY INTEGRITY.</>}</h1><p>{isArabic ? 'تقديم حلول ميدانية آمنة وموثوقة ومتكاملة منذ عام 1988.' : 'Delivering safe, reliable and integrated field solutions since 1988.'}</p><div className="about-experience-badge"><b>38+</b><span>{isArabic ? <>عاماً من التميز<br />التشغيلي</> : <>YEARS OF OPERATIONAL<br />EXCELLENCE</>}</span></div></div><span className="about-new-hero-message">{isArabic ? <>الطاقة<br />الناس<br />التقدم<br />سوريا أقوى</> : <>ENERGY<br />PEOPLE<br />PROGRESS<br />A STRONGER SYRIA</>}</span></div></section>

    <section className="about-intro-section about-new-container"><div className="about-intro-copy"><h2>{isArabic ? <>شريك موثوق به في قطاعات<br className="about-desktop-only" /> الطاقة والبنية التحتية في سوريا</> : <>A Trusted Partner in Syria’s<br className="about-desktop-only" /> Energy &amp; Infrastructure Sectors</>}</h2>{isArabic ? <><p>شركة المطر للخدمات النفطية هي مقاول رائد ومتكامل الخدمات في سوريا، متخصصة في عمليات حفر الآبار النفطية وصيانتها، وتطوير آبار المياه، والأعمال الإنشائية المدنية، والتركيبات الكهربائية والميكانيكية.</p><p>تأسست الشركة في عام 1988، ومع أكثر من 38 عاماً من التميز التشغيلي المستمر، بنينا سمعة لا مثيل لها في تقديم حلول عالية الجودة، آمنة، وموثوقة لقطاع الطاقة، والجهات الحكومية، والمنظمات الإنسانية الدولية الرائدة.</p><p>تجمع شركة المطر بين المعدات الحديثة، والقوى العاملة الفنية المؤهلة تأهيلاً عالياً، ونظام إدارة صارم للجودة والسلامة والصحة والبيئة يتوافق مع المعايير المحلية والدولية. بدءاً من حفر الآبار النفطية وخدمات التدخل الآلي المعقدة، وصولاً إلى تأهيل البنى التحتية الحيوية للمياه والصرف الصحي لصالح وكالات الأمم المتحدة، تعد شركة المطر شريكاً موثوقاً به مكرساً للتنمية المستدامة، والتميز التشغيلي، والنزاهة المطلقة.</p></> : <><p>AL-MATAR Company for Petroleum Services is a leading, fully integrated oilfield service contractor in Syria, specializing in oil well drilling and maintenance, water well development, civil construction works, and electrical and mechanical installations.</p><p>Established in 1988, with over 38 years of continuous operational excellence, we have built an unparalleled reputation for delivering high-quality, safe, and reliable solutions to the energy sector, government entities, and leading international humanitarian organizations.</p><p>AL-MATAR combines modern equipment, highly qualified technical personnel, and a rigorous (QHSE) management system that complies with local and international standards. From oil well drilling and complex coiled tubing interventions to the rehabilitation of critical water and sanitation infrastructure for UN agencies, we are a trusted partner dedicated to sustainable development, operational excellence, and absolute integrity.</p></>}</div><div className="about-intro-image"><img src="/images/about_field_operations.webp" alt={isArabic ? 'عمليات شركة المطر الميدانية' : 'AL-MATAR field operations'} /><span><b>{isArabic ? <>تأسست<br /></> : <>ESTABLISHED<br /> </>}<strong>1988</strong></b></span></div></section>

    <section className="about-stats about-new-container"><Stat number="38+" label={isArabic ? 'عاماً من التميز التشغيلي' : 'Years of operational excellence'} /><Stat number={isArabic ? 'متكاملة' : 'Integrated'} label={isArabic ? 'خدمات للنفط والغاز والمياه والبنية التحتية' : 'Services for oil, gas, water and infrastructure'} /><Stat number={isArabic ? 'مؤهلة' : 'Qualified'} label={isArabic ? 'فرق بخبرة محلية ومعايير عالمية' : 'Teams with local expertise and global standards'} /><Stat number="QHSE" label={isArabic ? 'التزام بسلامة واستدامة أكبر' : 'Driven for a safer, more sustainable tomorrow'} /></section>

    <section className="about-vision-mission"><div className="about-new-container about-vm-grid"><article className="about-vm-card vision"><h2>{isArabic ? 'رؤيتنا' : 'Our Vision'}</h2><p>{isArabic ? 'أن نكون المقاول الرائد في خدمات الحفر، وصيانة الآبار، مع توسيع نطاق التعاون الفني مع الشركاء ذوي السمعة الدولية لتقديم خدمات موثوقة، آمنة، وعالية الجودة.' : 'To be the leading contractor in drilling and well maintenance services, expanding our technical collaboration with internationally reputed partners to deliver reliable, safe, and high-quality services.'}</p></article><article className="about-vm-card mission"><h2>{isArabic ? 'رسالتنا' : 'Our Mission'}</h2><p>{isArabic ? 'إرساء منافسة سوقية صحية دون أي تنازل عن جودة الخدمات المقدمة. نحن نستخدم التكنولوجيا الحديثة وفرق عمل مؤهلة لتقديم حلول مخصصة تضمن رضا العملاء، ويقاس نجاحنا بتأثير عملنا وسلامة عملياتنا.' : 'To establish healthy market competition without any compromise on the quality of services delivered. We use modern technology and qualified teams to provide customized solutions that ensure client satisfaction. Our success is measured by the impact of our work and the safety of our operations.'}</p></article></div></section>

    <section className="about-values about-new-container"><div className="about-section-heading"><h2>{isArabic ? 'القيم الأساسية' : 'Our Core Values'}</h2><p>{isArabic ? 'المبادئ التي توجه موظفينا وتشكل قراراتنا وتحدد طريقة عملنا.' : 'The principles that guide our people, shape our decisions, and define how we work.'}</p></div><div className="about-values-grid">{currentValues.map(([title, text, icon]) => <article key={title} className="about-value-card"><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="about-qhse"><div className="about-qhse-image"><img src="/images/qhse_safety.webp?v=2" alt={isArabic ? 'التزام شركة المطر بالجودة والسلامة والصحة والبيئة' : 'AL-MATAR QHSE commitment'} /></div><div className="about-qhse-copy"><span className="about-new-eyebrow">{isArabic ? 'التزامنا بالجودة والسلامة والصحة والبيئة' : 'OUR QHSE COMMITMENT'}</span><h2>{isArabic ? 'السلامة جزء أساسي من كل عملية' : 'Safety Is Built Into Every Operation'}</h2><p>{isArabic ? 'تجمع شركة المطر بين الفرق المؤهلة والمعدات الحديثة ونظام إدارة صارم للجودة والسلامة والصحة والبيئة لحماية الناس والأصول والبيئة وتحقيق نتائج مستدامة.' : 'AL-MATAR combines qualified teams, modern equipment and a rigorous QHSE management system to protect people, assets and the environment and deliver sustainable results.'}</p><div className="about-qhse-points">{(isArabic ? ['✓ عقلية عدم إلحاق الضرر', '♧ موظفون مدربون وأكفاء', '◌ المسؤولية البيئية', '⚙ التحسين المستمر'] : ['✓ Zero Harm Mindset', '♧ Trained & Competent People', '◌ Environmental Responsibility', '⚙ Continuous Improvement']).map((point) => <span key={point}>{point}</span>)}</div></div></section>

    <section className="about-clients about-new-container"><div className="about-section-heading"><span className="about-new-eyebrow">{isArabic ? 'سجل الإنجازات المثبت' : 'PROVEN TRACK RECORD'}</span><h2>{isArabic ? 'موثوقون عبر قطاعات الطاقة والقطاعين الإنساني والعام' : 'Trusted Across Energy, Humanitarian &amp; Public Sectors'}</h2><p>{isArabic ? 'نحن فخورون بكوننا المقاول المفضل للشركات الرائدة في مجال الطاقة والمنظمات الإنسانية العالمية في جميع أنحاء سوريا.' : 'We are proud to be the preferred contractor for leading energy companies and global humanitarian organizations across Syria.'}</p></div><div className="about-client-grid"><ClientCard image="/images/oilfield_operations_clean.webp" title={isArabic ? 'قطاع النفط والغاز' : 'Oil and Gas'} icon="⌁"><p><b>{isArabic ? 'شركة دبلن (Dublin Company):' : 'Dublin Company:'}</b> {isArabic ? 'عمليات حفر القسم الأول (حقل عودة – 4 آبار؛ حقل تشرين – 35 بئراً).' : 'First section drilling operations (Auda Field – 4 wells; Tishreen Field – 35 wells).'}</p><p><b>{isArabic ? 'شركة تاتا (TATA Company):' : 'TATA Company:'}</b> {isArabic ? 'حفر آبار استكشافية (دير الزور).' : 'Exploration well drilling (Deir ez-Zor).'}</p></ClientCard><ClientCard image="/images/service_site_camp.webp" title={isArabic ? 'المنظمات الإنسانية والدولية' : 'Humanitarian and International Organizations'} icon="♧"><p><b>UNICEF, UNHCR, NRC, ICRC, AAH</b> {isArabic ? 'وإنقاذ الطفولة (Save The Children): تأهيل البنى التحتية، والتوريد والتركيب، وأنظمة المياه، والمدارس والمرافق.' : 'and Save The Children — infrastructure rehabilitation, supply and installation, water systems, schools and facilities.'}</p></ClientCard><ClientCard image="/images/about_field_operations.webp" title={isArabic ? 'القطاع الحكومي والعام' : 'Government and Public Sector'} icon="▥"><p><b>{isArabic ? 'مؤسسات المياه:' : 'Water Authorities:'}</b> {isArabic ? 'مشاريع واسعة النطاق لحفر آبار المياه، وتطويرها، وصيانتها في محافظات الحسكة، الرقة، حلب، حماة، ودير الزور.' : 'Large-scale water well drilling, development, and maintenance projects in Hasakah, Raqqa, Aleppo, Hama, and Deir ez-Zor governorates.'}</p></ClientCard></div></section>

    <NextPageBanner title={nextBanner.title} subtitle={nextBanner.subtitle} link="/well-services" bgImage="/images/banner_well_services_hero.webp" />
  </div>;
}
