'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const policies = [
  { id: 'qhse', title: { en: 'Quality, Health, Safety & Environment (QHSE)', ar: 'الجودة والصحة والسلامة والبيئة (QHSE)' }, pdf: '/images/policies-photo/pdfs/health-safety-and-environment.pdf' },
  { id: 'anti-bribery', title: { en: 'Anti-Bribery and Gifts', ar: 'مكافحة الرشوة والهدايا' }, pdf: '/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf' },
  { id: 'employment', title: { en: 'Employment Affairs and Workplace Conduct', ar: 'شؤون الموظفين وسلوكيات مكان العمل' }, pdf: '/images/policies-photo/pdfs/employment-affairs-and-workplace-conduct-policy.pdf' },
  { id: 'confidentiality', title: { en: 'Confidentiality and Data Protection', ar: 'السرية وحماية البيانات' }, pdf: '/images/policies-photo/pdfs/Confidentiality-and-data-protection-policy.pdf' },
  { id: 'conflict', title: { en: 'Conflict of Interest', ar: 'تعارض المصالح' }, pdf: '/images/policies-photo/pdfs/conflict-of-interest-policy.pdf' },
  { id: 'employee-security', title: { en: 'Employee Security and Site Safety', ar: 'أمن الموظفين وسلامة الموقع' }, pdf: '/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf' },
  { id: 'vehicle', title: { en: 'Vehicle and Equipment Usage', ar: 'استخدام المركبات والمعدات' }, pdf: '/images/policies-photo/pdfs/vehicle-and equipment-usage-policy.pdf' },
  { id: 'procurement', title: { en: 'Procurement and Supply Chain', ar: 'المشتريات وسلسلة التوريد' }, pdf: '/images/policies-photo/pdfs/procurement-and-supply-chain-policy.pdf' },
  { id: 'incident', title: { en: 'Incident Reporting and Crisis Management', ar: 'الإبلاغ عن الحوادث وإدارة الأزمات' }, pdf: '/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf' },
  { id: 'substance-abuse', title: { en: 'Substance Abuse', ar: 'إساءة استخدام المواد' }, pdf: '/images/policies-photo/pdfs/substance-abuse-policy.pdf' },
  { id: 'quality', title: { en: 'Quality Policy', ar: 'سياسة الجودة' }, pdf: '/images/policies-photo/pdfs/quality-policy.pdf' },
];

const pageText = {
  en: {
    title: 'Policies',
    description: 'Our policies guide our people, protect our assets and support our commitment to responsible operations.',
    heroMessage: <>ENERGY<br />FOR A BETTER<br />TOMORROW</>,
    imageAlt: 'Oilfield drilling operations',
    closeLabel: 'Close policy document',
    openPdf: 'Open PDF in a new tab',
  },
  ar: {
    title: 'السياسات',
    description: 'توجّه سياساتنا موظفينا، وتحمي أصولنا، وتدعم التزامنا بالعمليات المسؤولة.',
    heroMessage: <>طاقة<br />لغدٍ أفضل</>,
    imageAlt: 'عمليات حفر حقول النفط',
    closeLabel: 'إغلاق مستند السياسة',
    openPdf: 'فتح ملف PDF في علامة تبويب جديدة',
  },
};

function DocumentIcon() {
  return <svg className="policies-document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 2.8h8l4 4V21H6z" /><path d="M14 2.8v4h4M9 12h6M9 15.5h6M9 8.5h2" /></svg>;
}

function PoliciesContent() {
  const searchParams = useSearchParams();
  const { lang } = useLanguage();
  const [selected, setSelected] = useState(null);
  const text = pageText[lang] || pageText.en;

  useEffect(() => {
    const requested = policies.find((policy) => policy.id === searchParams.get('policy'));
    setSelected(requested || null);
  }, [searchParams]);

  const openPolicy = (policy) => setSelected(policy);
  const closePolicy = () => setSelected(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && closePolicy();
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('policies-modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('policies-modal-open');
    };
  }, [selected]);

  return (
    <div className="policies-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="policies-hero">
        <img src="/images/hero_drilling_rig.webp" alt={text.imageAlt} />
        <div className="policies-hero-overlay">
          <div className="policies-hero-copy">
            <h1>{text.title}</h1>
            <span className="policies-gold-rule" />
            <p>{text.description}</p>
          </div>
          <div className="policies-hero-message">{text.heroMessage}<span /></div>
        </div>
      </section>

      <main className="policies-list-wrap">
        <div className="policies-list-grid">
          {policies.map((policy, index) => (
            <button type="button" className="policy-list-item" key={policy.id} onClick={() => openPolicy(policy)}>
              <span className="policy-list-number">{index + 1}</span>
              <DocumentIcon />
              <span className="policy-list-title">{policy.title[lang] || policy.title.en}</span>
            </button>
          ))}
        </div>
      </main>

      {selected && (
        <div className="policies-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closePolicy()}>
          <section className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
            <div className="policies-modal-heading">
              <h2 id="policy-modal-title">{selected.title[lang] || selected.title.en}</h2>
              <button type="button" className="policies-modal-close" onClick={closePolicy} aria-label="Close policy document">×</button>
            </div>
            <div className="policies-pdf-frame">
              <object data={`${selected.pdf}#toolbar=0&navpanes=0`} type="application/pdf" aria-label={selected.title[lang] || selected.title.en}>
                <iframe src={`${selected.pdf}#toolbar=0&navpanes=0`} title={selected.title[lang] || selected.title.en} />
              </object>
            </div>
            <a className="policies-open-pdf" href={selected.pdf} target="_blank" rel="noreferrer">Open PDF in a new tab <span>→</span></a>
            {lang === 'ar' && (
              <a className="policies-open-pdf" href={selected.pdf} target="_blank" rel="noreferrer">{text.openPdf} <span>→</span></a>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  return <Suspense fallback={null}><PoliciesContent /></Suspense>;
}
