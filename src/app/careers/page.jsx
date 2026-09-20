'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

const fallbackContent = {
  en: {
    eyebrow: 'PEOPLE DRIVE PROGRESS',
    heroTitle: 'Join us',
    heroSubtitle: 'Build your future with ALMATAR',
    heroDesc: 'At ALMATAR, you will be part of a dynamic, growing international team delivering meaningful impact across the oilfield services industry.',
    body: 'We foster a diverse and collaborative environment where ideas are valued, challenges are recognized, and every contribution has room to make a difference.',
    apply: 'Apply now',
    journey: 'Explore opportunities',
    imageAlt: 'ALMATAR field engineer at work',
    progress: 'Real people. Real progress.',
    pillars: [
      { title: 'Professional growth', text: 'Develop your skills and move your career forward.' },
      { title: 'Field innovation', text: 'Be part of practical solutions for the energy sector.' },
      { title: 'Collaborative culture', text: 'Work with great people to make a lasting impact.' },
    ],
    cards: [
      { title: 'Why work with us', text: 'Discover the values that make ALMATAR a great place to build your career.' },
      { title: 'Open positions', text: 'Explore current opportunities across our operations.' },
      { title: 'Graduate opportunities', text: 'Kickstart your career with our graduate development path.' },
    ],
  },
  ar: {
    eyebrow: 'الناس يصنعون التقدم',
    heroTitle: 'انضم إلينا',
    heroSubtitle: 'ابنِ مستقبلك مع المطار',
    heroDesc: 'في المطار، ستكون جزءاً من فريق دولي متنامٍ وديناميكي يحقق أثراً حقيقياً في قطاع خدمات حقول النفط.',
    body: 'نوفّر بيئة متنوعة وتعاونية تُقدّر الأفكار، وتعترف بالتحديات، وتمنح كل مساهمة مساحة لإحداث فرق.',
    apply: 'قدّم الآن',
    journey: 'استكشف الفرص',
    imageAlt: 'مهندس ميداني من المطار في العمل',
    progress: 'أشخاص حقيقيون. تقدم حقيقي.',
    pillars: [
      { title: 'نمو مهني', text: 'طوّر مهاراتك وادفع مسيرتك المهنية إلى الأمام.' },
      { title: 'ابتكار ميداني', text: 'كن جزءاً من حلول عملية لقطاع الطاقة.' },
      { title: 'ثقافة تعاونية', text: 'اعمل مع أشخاص رائعين لإحداث أثر دائم.' },
    ],
    cards: [
      { title: 'لماذا العمل معنا', text: 'اكتشف القيم التي تجعل المطار مكاناً رائعاً لبناء مسيرتك.' },
      { title: 'الوظائف الشاغرة', text: 'استكشف الفرص المتاحة حالياً ضمن عملياتنا.' },
      { title: 'فرص الخريجين', text: 'ابدأ مسيرتك مع مسار تطوير الخريجين لدينا.' },
    ],
  },
};

const hasArabicText = (value) => /[\u0600-\u06FF]/.test(value || '');

function getLocalizedContent({ lang, arabicValue, englishValue, fallback }) {
  if (lang === 'ar') return hasArabicText(arabicValue) ? arabicValue : fallback;
  return englishValue || fallback;
}

function CareerIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'growth') return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /><path d="m14 6 3-3 3 3" /></svg>;
  if (name === 'innovation') return <svg {...common}><path d="M9 18h6M10 22h4M8.5 14.5C7 13.3 6 11.4 6 9.2A6 6 0 0 1 18 9.2c0 2.2-1 4.1-2.5 5.3-.7.6-1 1.1-1 1.7h-5c0-.6-.3-1.1-1-1.7Z" /><path d="M12 2v1M4.9 5.1l.7.7M19.1 5.1l-.7.7" /></svg>;
  if (name === 'culture') return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5 6-5s5.6 1.6 6 5M17 11a3 3 0 1 0-1.5-5.6M17 15c2.6.1 4.1 1.7 4.5 5" /></svg>;
  if (name === 'positions') return <svg {...common}><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h5M9 13h6M9 17h6" /></svg>;
  if (name === 'graduate') return <svg {...common}><path d="m2 9 10-5 10 5-10 5zM6 11.2V16c2.7 2.7 9.3 2.7 12 0v-4.8M22 10v6" /></svg>;
  return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M16 11h6" /></svg>;
}

export default function CareersPage() {
  const { lang } = useLanguage();
  const [sanityData, setSanityData] = useState(null);
  const copy = fallbackContent[lang] || fallbackContent.en;

  useEffect(() => {
    let isMounted = true;
    getSanityContent('careers', CAREERS_PAGE_QUERY)
      .then((data) => { if (isMounted && data) setSanityData(data); })
      .catch(() => undefined);
    return () => { isMounted = false; };
  }, []);

  const bannerImage = sanityData?.bannerImage
    ? getImageUrl(sanityData.bannerImage, '/images/careers_engineers_hero.webp')
    : '/images/careers_engineers_hero.webp';
  const heroTitle = getLocalizedContent({ lang, arabicValue: sanityData?.pageTitleAr, englishValue: sanityData?.pageTitleEn, fallback: copy.heroTitle });
  const heroDesc = getLocalizedContent({ lang, arabicValue: sanityData?.pageDescAr, englishValue: sanityData?.pageDescEn, fallback: copy.heroDesc });
  const eyebrow = getLocalizedContent({ lang, arabicValue: sanityData?.eyebrowAr, englishValue: sanityData?.eyebrowEn, fallback: copy.eyebrow });
  const cardIcons = ['people', 'positions', 'graduate'];

  return (
    <main className="careers-page careers-showcase" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="careers-showcase-shell" aria-labelledby="careers-title">
        <div className="careers-showcase-copy">
          <p className="careers-showcase-eyebrow"><span />{eyebrow}</p>
          <h1 id="careers-title">{heroTitle}</h1>
          <h2>{copy.heroSubtitle}</h2>
          <p className="careers-showcase-lead">{heroDesc}</p>
          <p className="careers-showcase-body">{copy.body}</p>

          <div className="careers-pillars" aria-label="Career benefits">
            {copy.pillars.map((pillar, index) => (
              <article className="careers-pillar" key={pillar.title}>
                <span className="careers-pillar-icon"><CareerIcon name={['growth', 'innovation', 'culture'][index]} /></span>
                <div><h3>{pillar.title}</h3><p>{pillar.text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="careers-showcase-visual">
          <img src={bannerImage} alt={copy.imageAlt} />
          <div className="careers-image-stamp">{copy.progress}</div>
          <div className="careers-visual-frame" aria-hidden="true" />
        </div>

        <div className="careers-showcase-actions">
          <Link href="/contact" className="careers-apply-button">{copy.apply}<span aria-hidden="true">→</span></Link>
          <Link href="#career-pathways" className="careers-journey-link">{copy.journey}<span aria-hidden="true">↓</span></Link>
        </div>
      </section>

      <section className="careers-pathways" id="career-pathways" aria-label="Career pathways">
        {copy.cards.map((card, index) => (
          <Link href="/contact" className="careers-pathway-card" key={card.title}>
            <span className="careers-pathway-icon"><CareerIcon name={cardIcons[index]} /></span>
            <span className="careers-pathway-content"><strong>{card.title}</strong><small>{card.text}</small></span>
            <span className="careers-card-arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <p className="careers-footer-line"><span />{lang === 'ar' ? 'معاً نحو غدٍ أقوى' : 'Together towards a stronger tomorrow'}</p>
    </main>
  );
}
