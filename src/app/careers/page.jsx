'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CAREERS_PAGE_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';
import { getSanityContent } from '@/sanity/lib/fetchData';

const fallbackContent = {
  en: {
    heroEyebrow: 'JOIN OUR JOURNEY',
    heroTitle: 'A Stronger Tomorrow Together',
    heroDesc: 'Be part of a team that values people, innovation, and sustainable growth.',
    contentEyebrow: 'CAREERS AT AL-MATAR',
    contentTitle: 'Build your future with us',
    contentDesc: 'We are always looking for committed professionals who want to make a meaningful contribution to safe, reliable and sustainable field operations.',
    application: 'Send your application',
    imageAlt: 'AL-MATAR field engineers',
  },
  ar: {
    heroEyebrow: 'انضم إلى رحلتنا',
    heroTitle: 'معاً نحو غدٍ أقوى',
    heroDesc: 'كن جزءاً من فريق يقدّر الناس والابتكار والنمو المستدام.',
    contentEyebrow: 'الوظائف في شركة المطر',
    contentTitle: 'ابنِ مستقبلك معنا',
    contentDesc: 'نبحث دائماً عن كفاءات ملتزمة ترغب في تقديم مساهمة حقيقية في عمليات ميدانية آمنة وموثوقة ومستدامة.',
    application: 'أرسل طلبك',
    imageAlt: 'مهندسو شركة المطر في الحقل',
  },
};

const hasArabicText = (value) => /[\u0600-\u06FF]/.test(value || '');

function getLocalizedContent({ lang, arabicValue, englishValue, fallback }) {
  if (lang === 'ar') {
    // Avoid showing an English value accidentally entered in an Arabic CMS field.
    return hasArabicText(arabicValue) ? arabicValue : fallback;
  }

  return englishValue || fallback;
}

export default function CareersPage() {
  const { lang } = useLanguage();
  const [sanityData, setSanityData] = useState(null);
  const copy = fallbackContent[lang] || fallbackContent.en;

  useEffect(() => {
    let isMounted = true;

    async function loadCareersContent() {
      try {
        const data = await getSanityContent('careers', CAREERS_PAGE_QUERY);
        if (isMounted && data) setSanityData(data);
      } catch (error) {
        console.warn('Using default careers page content:', error);
      }
    }

    loadCareersContent();
    return () => {
      isMounted = false;
    };
  }, []);

  const bannerImage = sanityData?.bannerImage
    ? getImageUrl(sanityData.bannerImage, '/images/careers_engineers_hero.webp')
    : '/images/careers_engineers_hero.webp';
  const heroEyebrow = getLocalizedContent({
    lang,
    arabicValue: sanityData?.eyebrowAr,
    englishValue: sanityData?.eyebrowEn,
    fallback: copy.heroEyebrow,
  });
  const heroTitle = getLocalizedContent({
    lang,
    arabicValue: sanityData?.pageTitleAr,
    englishValue: sanityData?.pageTitleEn,
    fallback: copy.heroTitle,
  });
  const heroDesc = getLocalizedContent({
    lang,
    arabicValue: sanityData?.pageDescAr,
    englishValue: sanityData?.pageDescEn,
    fallback: copy.heroDesc,
  });

  return (
    <main className="careers-page" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="careers-page-hero">
        <img src={bannerImage} alt={copy.imageAlt} />
        <div className="careers-page-hero-overlay">
          <span className="team-eyebrow"><i /> {heroEyebrow}</span>
          <h1>{heroTitle}</h1>
          <p>{heroDesc}</p>
        </div>
      </section>
      <section className="careers-page-content">
        <span className="team-eyebrow"><i /> {copy.contentEyebrow}</span>
        <h2>{copy.contentTitle}</h2>
        <p>{copy.contentDesc}</p>
        <Link href="/contact" className="careers-page-button">
          {copy.application} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
