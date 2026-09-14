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
  report: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h4m-4 4h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="17" cy="17" r="3" fill="white" stroke="currentColor" strokeWidth="1.5"/><path d="m16 17 1 1 2-2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></>,
  siren: <><path d="M7 13V9a5 5 0 0 1 10 0v4M5 14h14v3H5z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M12 3V1M4 6 2 5m16 1 2-1M3 21h18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  response: <><circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="6" cy="13" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="18" cy="13" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M7 21c.3-3.5 2-5.2 5-5.2s4.7 1.7 5 5.2M2.5 21c.2-2.7 1.2-4.2 3.5-4.2S9.3 18.3 9.5 21m5 0c.2-2.7 1.2-4.2 3.5-4.2s3.3 1.5 3.5 4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  documentation: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="m15 18 3-3 2 2-3 3-2 .5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></>,
  gavel: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  file: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
};

function Icon({ name }) { return <span className="vehicle-policy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{icons[name]}</svg></span>; }

const rows = [
  ['01', 'report', 'Policy Statement', 'AL-MATAR Company is committed to ensuring a fast, organized, and effective response to any emergency, accident, equipment failure, or security incident. The safety of human life is the absolute priority in any crisis situation. Equipment and property, while valuable, are secondary to the well-being of our employees, subcontractors, and any individuals present at our work sites.'],
  ['02', 'siren', 'Reporting Requirements', 'Any workplace accident, even a minor cut or spill, equipment failure, or security incident must be reported to the Rig Manager within one hour of occurrence. The Rig Manager will then immediately notify the Operations Manager, who will escalate to the General Manager as required.'],
  ['03', 'response', 'Response and Emergency Actions', 'In the event of a serious injury, fire, collision, or security threat, the primary action is to evacuate all personnel from the danger area and provide first aid or emergency medical assistance. Company vehicles and equipment must be moved to safe locations only after personnel are secured.'],
  ['04', 'documentation', 'Incident Documentation', 'All incidents must be documented in writing using the Incident Report Form within 24 hours. The report must state clearly: (1) what happened, (2) what caused the incident, and (3) what actions are being taken to prevent recurrence. The Operations Manager will investigate major incidents to determine the root cause. The focus of the investigation is on fixing the process and implementing preventive measures, not solely on punishing the individual, unless gross negligence or willful misconduct is identified.'],
  ['05', 'gavel', 'Disciplinary Action', 'Any violation of this policy, including failure to report an incident or providing false information, may subject the employee to disciplinary action.'],
];

const related = [
  ['06', 'Employee Security and Site Safety Policy', '/images/policies-photo/Employee-security-hero.png', '/policies/employee-security'],
  ['03', 'Employment Affairs and Workplace Conduct Policy', '/images/qhse_inspection_team.png', '#'],
  ['04', 'Confidentiality and Data Protection Policy', '/images/qhse_safety.png', '#'],
  ['08', 'Procurement and Supply Chain Policy', '/images/service_heavy_logistics.png', '#'],
];

export default function IncidentReportingPolicyPage() {
  useScrollReveal();
  return <main className="vehicle-policy-page incident-policy-page">
    <section className="vehicle-policy-hero"><img src="/images/policies-photo/incident-reporting-&-crisis-management.png" alt="AL-MATAR incident reporting and crisis management operations" /><div className="incident-policy-hero-overlay"><div className="incident-warning">!</div><div className="incident-policy-steps"><div><Icon name="report" /><strong>PREPARE</strong></div><div><Icon name="response" /><strong>RESPOND</strong></div><div><Icon name="shield" /><strong>RECOVER</strong></div></div></div></section>
    <div className="vehicle-policy-main">
      <div className="vehicle-policy-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;Incident Reporting and Crisis Management Policy</div>
      <div className="vehicle-policy-title-row"><div><span>POLICY NO. (9)</span><h2>Incident Reporting and<br className="desktop-only" /> Crisis Management Policy</h2></div><div className="vehicle-policy-motto"><Icon name="shield" /><span>Safety Today<br />A More Secure Tomorrow</span></div></div>
      <div className="vehicle-policy-rows">{rows.map(([number, icon, title, text], index) => <section className="vehicle-policy-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><strong>{number}</strong><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></section>)}</div>
      <div className="vehicle-policy-meta policy-reveal" data-scroll-reveal><div className="vehicle-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div><div className="vehicle-meta-info"><Icon name="file" /><dl><div><dt>Document No.</dt><dd>AM-QHSE-L003</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>QHSE Manager</dd></div></dl></div></div>
      <div className="vehicle-policy-buttons"><a className="vehicle-primary-button" href="/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a><a className="vehicle-secondary-button" href="/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf" download="incident-reporting-and-crisis-management-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a></div>
      <RelatedPoliciesCarousel currentPath="/policies/incident-reporting-and-crisis-management" />
    </div>
  </main>;
}
