'use client';

import { useEffect, useState } from 'react';
import NextPageBanner from '@/components/NextPageBanner';
import { useLanguage } from '@/context/LanguageContext';

const policyContent = {
  en: {
    eyebrow: 'QHSE COMMITMENT',
    title: 'Incident Reporting & Crisis Management',
    shortTitle: 'Report early. Protect people first.',
    policy: 'Policy No. 9',
    codeLabel: 'Reference code',
    intro: 'ALMATAR is committed to ensuring a rapid, organized and effective response to every emergency, incident, equipment failure or security event. Human life is the absolute priority in every crisis. Equipment and property, regardless of their value, always come second to the safety of our employees, subcontractors and everyone present at our worksites.',
    timelineTitle: 'Immediate reporting and response',
    timeline: [
      ['Within 1 hour', 'Report every workplace incident to the Rig Manager, including minor injuries, near misses, equipment failures and security incidents.'],
      ['Immediately', 'The Rig Manager informs the Operations Manager, who escalates the matter to the General Manager where required.'],
      ['In serious events', 'For serious injury, fire, collision or security threat, first move people away from danger and provide first aid or emergency medical support. Company vehicles and equipment are moved to a safe location only after people are secure.'],
      ['Within 24 hours', 'Document every incident using the incident report form, clearly stating what happened, who was affected and the actions taken.'],
    ],
    investigationTitle: 'Learning and prevention',
    investigation: 'The Rig Manager investigates significant incidents to establish the root cause. Investigations focus on correcting the process and implementing preventive measures—not solely on individual punishment—unless gross negligence or deliberate misconduct is identified.',
    notice: 'Failure to comply with this policy, including not reporting an incident or providing false information, may result in disciplinary action.',
    signatureCompany: 'ALMATAR Company for Petroleum Services',
    signatureRole: 'Chairman of the Board & Executive Director',
    signatureName: 'Suleiman Matar Youssef',
    dateLabel: 'Date',
    document: 'View the official policy document',
    documentHint: 'PDF · Incident reporting and crisis management',
    openPdf: 'Open PDF in a new tab',
    nextTitle: 'Talk to our QHSE team',
    nextSubtitle: 'Get in touch',
  },
  ar: {
    eyebrow: 'التزام الجودة والصحة والسلامة والبيئة',
    title: 'سياسة الإبلاغ عن الحوادث وإدارة الأزمات',
    shortTitle: 'بلّغ مبكراً. سلامة الأفراد أولاً.',
    policy: 'السياسة رقم (9)',
    codeLabel: 'الرمز المرجعي',
    intro: 'تلتزم شركة المطر بضمان استجابة سريعة ومنظمة وفعالة لأي حالة طوارئ أو حادث أو فشل في المعدات أو حادث أمني. تعد سلامة الحياة البشرية الأولوية المطلقة في أي وضع أزمة. وتأتي المعدات والممتلكات، رغم قيمتها، في المرتبة الثانية بعد سلامة موظفينا ومقاولينا من الباطن وأي أفراد موجودين في مواقع عملنا.',
    timelineTitle: 'الإبلاغ والاستجابة الفورية',
    timeline: [
      ['خلال ساعة واحدة', 'يجب الإبلاغ عن أي حادث في مكان العمل إلى مدير الحفارة، حتى لو كان إصابة بسيطة أو شبه حادث أو فشل في المعدات أو حادثاً أمنياً.'],
      ['فوراً', 'يقوم مدير الحفارة بإبلاغ مدير العمليات، الذي يصعّد الأمر إلى المدير العام عند الحاجة.'],
      ['في الحوادث الجسيمة', 'في حالات الإصابة الخطيرة أو الحريق أو الاصطدام أو التهديد الأمني، يجب أولاً إبعاد الأفراد عن منطقة الخطر وتقديم الإسعافات الأولية أو المساعدة الطبية الطارئة. ولا تُنقل مركبات الشركة ومعداتها إلى مواقع آمنة إلا بعد تأمين الأفراد.'],
      ['خلال 24 ساعة', 'يجب توثيق جميع الحوادث باستخدام نموذج تقرير الحوادث، مع توضيح ما حدث ومن تأثر والإجراءات التي تم اتخاذها.'],
    ],
    investigationTitle: 'التعلّم والوقاية',
    investigation: 'يتولى مدير الحفارة التحقيق في الحوادث الكبيرة لتحديد السبب الجذري. ويركز التحقيق على إصلاح العملية وتنفيذ تدابير وقائية، وليس فقط على معاقبة الفرد، ما لم يتم تحديد إهمال جسيم أو سوء سلوك متعمد.',
    notice: 'قد يعرّض أي انتهاك لهذه السياسة، بما في ذلك عدم الإبلاغ عن حادث أو تقديم معلومات كاذبة، الموظف لإجراءات تأديبية.',
    signatureCompany: 'شركة المطر لخدمات حقول النفط',
    signatureRole: 'رئيس مجلس الإدارة والمدير التنفيذي',
    signatureName: 'سليمان مطر يوسف',
    dateLabel: 'التاريخ',
    document: 'عرض وثيقة السياسة الرسمية',
    documentHint: 'PDF · الإبلاغ عن الحوادث وإدارة الأزمات',
    openPdf: 'فتح ملف PDF في علامة تبويب جديدة',
    nextTitle: 'تواصل مع فريق الجودة والصحة والسلامة والبيئة',
    nextSubtitle: 'تواصل معنا',
  },
};

function PolicyIcon({ type }) {
  const paths = {
    shield: <><path d="M12 3 20 6v5.5c0 4.7-3.3 8.2-8 9.8-4.7-1.6-8-5.1-8-9.8V6l8-3Z" /><path d="m8.7 12 2.1 2.1 4.7-4.8" /></>,
    report: <><path d="M7 3.5h7l3 3V20.5H7z" /><path d="M14 3.5v3h3M9.5 11h5M9.5 14h5M9.5 17h3" /></>,
    alert: <><path d="M12 3.5 21 20.5H3L12 3.5Z" /><path d="M12 9v5M12 17.5v.1" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">{paths[type]}</svg>;
}

export default function QhsePage() {
  const { lang } = useLanguage();
  const content = policyContent[lang] || policyContent.en;
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  useEffect(() => {
    if (!isDocumentOpen) return undefined;

    const onKeyDown = (event) => event.key === 'Escape' && setIsDocumentOpen(false);
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('policies-modal-open');

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('policies-modal-open');
    };
  }, [isDocumentOpen]);

  return (
    <main className="qhse-policy-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="qhse-policy-hero">
        <img src="/images/qhse_safety.webp?v=2" alt={lang === 'ar' ? 'التزام شركة المطر بالسلامة' : 'ALMATAR safety commitment'} />
        <div className="qhse-policy-hero-overlay">
          <div>
            <span className="qhse-policy-eyebrow">{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p>{content.shortTitle}</p>
          </div>
          <div className="qhse-policy-hero-mark"><PolicyIcon type="shield" /></div>
        </div>
      </section>

      <section className="qhse-policy-wrap">
        <header className="qhse-policy-heading">
          <div>
            <span>{content.policy}</span>
            <h2>{content.title}</h2>
          </div>
          <dl>
            <div><dt>{content.codeLabel}</dt><dd>AM-QHSE-L003</dd></div>
            <div><dt>{content.dateLabel}</dt><dd>2026-08-18</dd></div>
          </dl>
        </header>

        <div className="qhse-policy-intro">
          <div className="qhse-policy-icon"><PolicyIcon type="shield" /></div>
          <p>{content.intro}</p>
        </div>

        <section className="qhse-policy-section">
          <div className="qhse-section-heading">
            <div className="qhse-policy-icon"><PolicyIcon type="alert" /></div>
            <div><span>01</span><h2>{content.timelineTitle}</h2></div>
          </div>
          <div className="qhse-reporting-grid">
            {content.timeline.map(([time, description], index) => (
              <article key={time} className="qhse-reporting-card">
                <span className="qhse-reporting-number">0{index + 1}</span>
                <strong>{time}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qhse-policy-section qhse-investigation-section">
          <div className="qhse-section-heading">
            <div className="qhse-policy-icon"><PolicyIcon type="report" /></div>
            <div><span>02</span><h2>{content.investigationTitle}</h2></div>
          </div>
          <p>{content.investigation}</p>
        </section>

        <aside className="qhse-policy-notice">
          <PolicyIcon type="alert" />
          <p>{content.notice}</p>
        </aside>

        <footer className="qhse-policy-footer">
          <div className="qhse-signature">
            <span>{content.signatureCompany}</span>
            <strong>{content.signatureRole}</strong>
            <b>{content.signatureName}</b>
          </div>
          <button type="button" className="qhse-document-link" onClick={() => setIsDocumentOpen(true)}>
            <PolicyIcon type="report" />
            <span><strong>{content.document}</strong><small>{content.documentHint}</small></span>
            <em>→</em>
          </button>
        </footer>
      </section>

      {isDocumentOpen && (
        <div className="policies-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setIsDocumentOpen(false)}>
          <section className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="qhse-pdf-modal-title">
            <div className="policies-modal-heading">
              <h2 id="qhse-pdf-modal-title">{content.title}</h2>
              <button type="button" className="policies-modal-close" onClick={() => setIsDocumentOpen(false)} aria-label="Close policy document">×</button>
            </div>
            <div className="policies-pdf-frame">
              <iframe
                src="/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf#toolbar=0&navpanes=0"
                title={content.title}
              />
            </div>
            <a className="policies-open-pdf" href="/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf" target="_blank" rel="noreferrer">
              {content.openPdf} <span>→</span>
            </a>
          </section>
        </div>
      )}

      <NextPageBanner
        title={content.nextTitle}
        subtitle={content.nextSubtitle}
        link="/contact"
        bgImage="/images/qhse_inspection_team.webp"
      />
    </main>
  );
}
