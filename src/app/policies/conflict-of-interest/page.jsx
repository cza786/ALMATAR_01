'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const icons = {
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  document: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 3v5h4M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  people: <><circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M3.5 19c.4-3 2.2-4.7 5.5-4.7s5.1 1.7 5.5 4.7M14 15c2.8-.4 5.2.8 6 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  prohibited: <><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m5.6 5.6 12.8 12.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></>,
  external: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 3v5h4m-8 8 7-7m-4 0h4v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="15" r="1" fill="currentColor"/></>,
  gavel: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></>,
  scales: <><path d="M12 4v15M7 20h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/></>,
  handshake: <><path d="m3 10 3-3 4 1 2-2 4 1 5 5-3 3-3-2-3 3-3-2-2 2-4-4 3-2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m10 8 3 3m-1 4 2-2m-5 0 2-2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
};

function Icon({ name, className = '' }) {
  return <span className={`policy-icon anti-policy-icon ${className}`} aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34" fill="none">{icons[name]}</svg></span>;
}

const rows = [
  ['01', 'document', 'Policy Statement', 'All managers, supervisors, and employees of AL-MATAR Company must avoid situations that involve, or appear to involve, a conflict between their personal interests and the interests of the company or its clients. The company specifically prohibits granting any personal loans to managers, supervisors, or any members of their immediate families. Additionally, personal loans to other employees are prohibited unless specifically approved by the General Manager.'],
  ['02', 'people', 'Prioritizing Company Interests', "AL-MATAR employees are required to prioritize the company's business interests above their personal interests. Information relating to actual or potential business of AL-MATAR must not be used for personal gain, to compete with the company—whether directly or indirectly—or in the purchase or sale of property or other interests."],
  ['03', 'prohibited', 'Competitive Activities', 'Employees are prohibited from working for a competitor of AL-MATAR while still employed by the company. Furthermore, employees may not serve as board members, officers, agents, or consultants for companies that compete with AL-MATAR.'],
  ['04', 'external', 'External Business Interests', 'In some instances, employees or members of their immediate families may have interests in other businesses. Relationships between those businesses and AL-MATAR must be avoided unless specifically approved in writing by the General Manager.'],
  ['05', 'lock', 'Use of Company Assets and Information', 'Company property, such as equipment, financial assets, or confidential information, must be used only for legitimate AL-MATAR business purposes.'],
  ['06', 'gavel', 'Disciplinary Action', 'Any violation of this policy may subject the employee to disciplinary action.'],
];

const related = [
  ['06', 'Employee Security and Site Safety Policy', '/images/policies-photo/Employee-security-hero.png'],
  ['04', 'Confidentiality and Data Protection Policy', '/images/policies-photo/Conflict-of-interest-policy.png'],
  ['07', 'Vehicle and Equipment Usage Policy', '/images/policies-photo/Sunset-Employee-oil.png'],
  ['03', 'Employment Affairs and Workplace Conduct Policy', '/images/policies-photo/Employee-security-hero.png'],
];

export default function ConflictOfInterestPage() {
  useScrollReveal();
  return <div className="conflict-policy-page">
    <div className="conflict-policy-hero">
      <img src="/images/policies-photo/Conflict-of-interest-policy.png" alt="Integrity in every decision" />
      <div className="conflict-policy-hero-overlay">
        <div className="conflict-policy-hero-copy"><h1>Integrity in Every Decision</h1><p>Our Values Protect a Stronger Tomorrow</p><span className="policy-gold-rule" /></div>
        <div className="conflict-policy-values"><div><Icon name="shield" className="value-icon" /><strong>ETHICS</strong></div><div><Icon name="people" className="value-icon" /><strong>TRANSPARENCY</strong></div><div><Icon name="handshake" className="value-icon" /><strong>TRUST</strong></div></div>
      </div>
    </div>
    <main className="anti-policy-main conflict-policy-main">
      <div className="anti-policy-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;Conflict of Interest Policy</div>
      <div className="anti-policy-title-row"><div><span className="anti-policy-number">POLICY NO. (5)</span><h1>Conflict of Interest Policy</h1></div><div className="anti-policy-ethics"><Icon name="scales" /><span>Ethical Conduct<br />A Stronger AL-MATAR</span></div></div>
      <div className="anti-policy-rows">{rows.map(([number, icon, title, text], index) => <section className="anti-policy-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><span className="anti-policy-index">{number}</span><Icon name={icon} /><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="anti-policy-meta policy-reveal" data-scroll-reveal>
        <div className="anti-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div>
        <div className="anti-meta-info"><Icon name="document" /><dl><div><dt>Document No.</dt><dd>AM-LEGAL-L003</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>General Manager</dd></div></dl></div>
      </div>
      <div className="anti-policy-buttons"><a className="policy-primary-button" href="/images/policies-photo/pdfs/conflict-of-interest-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a><a className="policy-secondary-button" href="/images/policies-photo/pdfs/conflict-of-interest-policy.pdf" download="conflict-of-interest-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a></div>
      <RelatedPoliciesCarousel currentPath="/policies/conflict-of-interest" />
    </main>
  </div>;
}
