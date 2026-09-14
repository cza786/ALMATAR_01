'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const iconPaths = {
  gear: <><path d="m12 3 1.1 2 2.2.5 1.8-1 1.5 1.5-1 1.8.5 2.2 2 1.1v2l-2 1.1-.5 2.2 1 1.8-1.5 1.5-1.8-1-2.2.5-1.1 2h-2l-1.1-2-2.2-.5-1.8 1-1.5-1.5 1-1.8-.5-2.2-2-1.1v-2l2-1.1.5-2.2-1-1.8L6.7 4.5l1.8 1 2.2-.5L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7"/> </>,
  wheel: <><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M4.5 10.5h15M12 10.5V20M8 10.5l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  clipboard: <><rect x="6" y="5" width="12" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M9 5V3h6v2M9 10h6m-6 3h6m-6 3h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  tools: <><path d="m4 5 6 6m-2-8a4 4 0 0 0 1 5L5 12l-2 2 7 7 2-2-4-4 4-4a4 4 0 0 0 5-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="m14 14 6 6m-1-11-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  truck: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><circle cx="7" cy="18" r="2" fill="white" stroke="currentColor" strokeWidth="1.7"/><circle cx="18" cy="18" r="2" fill="white" stroke="currentColor" strokeWidth="1.7"/></>,
  file: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
};

function Icon({ name, className = '' }) {
  return <span className={`vehicle-policy-icon ${className}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{iconPaths[name]}</svg></span>;
}

const rows = [
  ['01', 'gear', 'Policy Statement', 'AL-MATAR Company’s fleet of vehicles, drilling rigs, cranes, loaders, and generators represents a significant capital investment. The proper use, maintenance, and protection of these assets are essential to the company’s operational efficiency and financial stability. All employees authorized to operate company vehicles or heavy equipment are responsible for ensuring these assets are used solely for legitimate business purposes and are maintained in good working condition.'],
  ['02', 'wheel', 'Authorized Use', 'Company vehicles and heavy equipment are strictly for business purposes only. Personal errands, such as shopping or picking up family members, are prohibited unless explicitly authorized in writing by the Rig Manager. Unauthorized use of company equipment for private work or personal gain is strictly forbidden and may result in immediate termination.'],
  ['03', 'clipboard', 'Daily Checks and Logbooks', 'Every vehicle, rig, and heavy machine must maintain a daily logbook. The driver or operator must record kilometers or hours run, fuel consumed, and any issues or damage noted. Operators are responsible for conducting a daily walk-around inspection—checking oil, water, tires, lights, and hydraulic systems—before starting the engine.'],
  ['04', 'tools', 'Reporting Issues', 'Any mechanical issues must be reported immediately to the site mechanic. All accidents, scratches, dents, or equipment breakdowns must be reported to the supervisor within one hour. Concealing damage is considered a serious violation of company policy and will result in disciplinary action.'],
  ['05', 'shield', 'Responsibility', 'All employees operating company vehicles or equipment are responsible for following this policy, maintaining assets in good condition, and reporting issues promptly. Any violation of this policy may subject the employee to disciplinary action.'],
];

const related = [
  ['06', 'Employee Security and Site Safety Policy', '/images/policies-photo/Employee-security-hero.png', '/policies/employee-security'],
  ['03', 'Employment Affairs and Workplace Conduct Policy', '/images/policies-photo/Sunset-Employee-oil.png', '#'],
  ['09', 'Incident Reporting and Crisis Management Policy', '/images/policies-photo/Conflict-of-interest-policy.png', '#'],
  ['10', 'Substance Abuse Policy', '/images/qhse_safety.png', '#'],
];

export default function VehicleAndEquipmentPolicyPage() {
  useScrollReveal();
  return <main className="vehicle-policy-page">
    <section className="vehicle-policy-hero">
      <img src="/images/policies-photo/vehicle-&-equipement.png" alt="AL-MATAR vehicles and heavy equipment at an oilfield" />
      <div className="vehicle-policy-hero-copy"><h1>Our Assets<br />Keep Operations Moving</h1><span /><p>Used Responsibly. Maintained Reliably. Built for a Safer Tomorrow.</p></div>
    </section>
    <div className="vehicle-policy-main">
      <div className="vehicle-policy-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;<strong>Vehicle and Equipment Usage Policy</strong></div>
      <div className="vehicle-policy-title-row"><div><span>POLICY NO. (7)</span><h2>Vehicle and Equipment<br className="desktop-only" /> Usage Policy</h2></div><div className="vehicle-policy-motto"><Icon name="truck" /><span>Safe Assets<br />Efficient Operations</span></div></div>
      <div className="vehicle-policy-rows">{rows.map(([number, icon, title, text], index) => <section className="vehicle-policy-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><strong>{number}</strong><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></section>)}</div>
      <div className="vehicle-policy-meta policy-reveal" data-scroll-reveal><div className="vehicle-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div><div className="vehicle-meta-info"><Icon name="file" /><dl><div><dt>Document No.</dt><dd>AM-OPS-L001</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>Operations Manager</dd></div></dl></div></div>
      <div className="vehicle-policy-buttons"><a className="vehicle-primary-button" href="/images/policies-photo/pdfs/vehicle-and%20equipment-usage-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a><a className="vehicle-secondary-button" href="/images/policies-photo/pdfs/vehicle-and%20equipment-usage-policy.pdf" download="vehicle-and-equipment-usage-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a></div>
      <RelatedPoliciesCarousel currentPath="/policies/vehicle-and-equipment" />
    </div>
  </main>;
}
