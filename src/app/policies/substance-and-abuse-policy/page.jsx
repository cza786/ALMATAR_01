'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const icons = {
  leaf: <><path d="M12 21c0-7 1-12 8-17-1 8-4 13-8 13-4 0-7-3-8-7 5-1 8 1 8 5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M12 21V9m0 6-4-3m4-1 4-3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  prohibited: <><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m6 6 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  medical: <><rect x="4" y="7" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 4v6m-3-3h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m15 15 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  people: <><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M5 20c.5-4 2.8-6 7-6s6.5 2 7 6M3 19c.3-2.5 1.5-4 3.5-4.8M21 19c-.3-2.5-1.5-4-3.5-4.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  gavel: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 18c.2-2.5 1.4-4 3.5-4s3.3 1.5 3.5 4" fill="none" stroke="currentColor" strokeWidth="1.5"/></>,
  file: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
};

function Icon({ name }) { return <span className="vehicle-policy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{icons[name]}</svg></span>; }

const rows = [
  ['01', 'leaf', 'Policy Statement', 'AL-MATAR Company is responsible for maintaining a safe, productive, and healthy work environment free from the negative effects of alcohol, drugs, or intoxicating substances. Employees who are under the influence of alcohol or drugs while on duty pose a threat to their colleagues, to company assets, to the community, and to themselves. The company operates heavy drilling equipment, cranes, loaders, and vehicles, and any impairment can lead to catastrophic accidents.'],
  ['02', 'prohibited', 'Prohibited Activities', 'Any person found to be under the influence of alcohol, drugs, or any intoxicating substance is prohibited from entering AL-MATAR’s facilities, participating in any company work, or operating any company equipment. The unauthorized possession, use, distribution, or sale of alcohol, drugs, or intoxicating substances is strictly prohibited at all work sites, camps, and in company vehicles. This policy applies during working hours, on site, and during any company-sponsored travel or activity.'],
  ['03', 'medical', 'Medical Exceptions', 'Exceptions apply only to prescribed medications, provided they do not impair the person’s ability to perform their duties safely and productively. Employees must inform their supervisor if they are taking medication that may affect their alertness.'],
  ['04', 'search', 'Testing and Inspection', 'The company reserves the right to conduct inspections or testing at appropriate circumstances, including pre-employment, post-accident, and when there is reasonable suspicion. Refusal to submit to testing will be treated as a violation of this policy.'],
  ['05', 'people', 'Employee Assistance', 'AL-MATAR provides employees with access to confidential support through the Employee Assistance Program for those seeking help with substance-related issues. Employees are encouraged to seek assistance voluntarily before any violation is discovered.'],
  ['06', 'gavel', 'Disciplinary Action', 'Any employee found to be in violation of this policy, including possession, use, or being under the influence during working hours, will face immediate disciplinary action, up to and including termination of employment. Any violation of this policy may also subject the employee to disciplinary action.'],
];

const related = [
  ['03', 'Employment Affairs and Workplace Conduct Policy', '/images/qhse_inspection_team.png', '#'],
  ['06', 'Employee Security and Site Safety Policy', '/images/policies-photo/Employee-security-hero.png', '/policies/employee-security'],
  ['09', 'Incident Reporting and Crisis Management Policy', '/images/policies-photo/Conflict-of-interest-policy.png', '#'],
  ['04', 'Confidentiality and Data Protection Policy', '/images/qhse_safety.png', '#'],
];

export default function SubstanceAndAbusePolicyPage() {
  useScrollReveal();
  return <main className="vehicle-policy-page substance-policy-page">
    <section className="vehicle-policy-hero"><img src="/images/policies-photo/substance-and-abuse-policy.png" alt="AL-MATAR safe workforce and substance abuse prevention" /><div className="vehicle-policy-hero-copy"><h1>A Safe Workforce<br />Builds a Stronger Tomorrow</h1><span /></div></section>
    <div className="vehicle-policy-main">
      <div className="vehicle-policy-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;Substance Abuse Policy</div>
      <div className="vehicle-policy-title-row"><div><span>POLICY NO. (10)</span><h2>Substance Abuse Policy</h2></div><div className="vehicle-policy-motto"><Icon name="shield" /><span>Healthy People<br />Safer Operations</span></div></div>
      <div className="vehicle-policy-rows">{rows.map(([number, icon, title, text], index) => <section className="vehicle-policy-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><strong>{number}</strong><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></section>)}</div>
      <div className="vehicle-policy-meta policy-reveal" data-scroll-reveal><div className="vehicle-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div><div className="vehicle-meta-info"><Icon name="file" /><dl><div><dt>Document No.</dt><dd>AM-QHSE-L004</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>QHSE Manager</dd></div></dl></div></div>
      <div className="vehicle-policy-buttons"><a className="vehicle-primary-button" href="/images/policies-photo/pdfs/substance-abuse-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a><a className="vehicle-secondary-button" href="/images/policies-photo/pdfs/substance-abuse-policy.pdf" download="substance-abuse-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a></div>
      <RelatedPoliciesCarousel currentPath="/policies/substance-and-abuse-policy" />
    </div>
  </main>;
}
