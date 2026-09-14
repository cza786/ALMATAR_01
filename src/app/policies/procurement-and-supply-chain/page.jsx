'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useReveal() {
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
  link: <><path d="m9 15 6-6m-8.5 9.5-2 2a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0m5-5 2-2a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  report: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h4m-4 4h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="17" cy="17" r="3" fill="white" stroke="currentColor" strokeWidth="1.5"/><path d="m16 17 1 1 2-2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></>,
  people: <><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="5.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="18.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M5 20c.3-3.5 2.4-5.3 7-5.3s6.7 1.8 7 5.3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m15 15 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  gavel: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  file: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
};
function Icon({ name }) { return <span className="procurement-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{icons[name]}</svg></span>; }

const requirements = [
  ['01', 'report', 'Competitive Quotations', 'For all purchases exceeding $3,000 USD (or the equivalent in Syrian Pounds), the procurement team must obtain at least three competitive quotes from different suppliers. The selection of suppliers must be based on objective criteria, including price, quality, delivery time, and reliability.'],
  ['02', 'people', 'Conflict of Interest', 'No employee may approve a purchase order for their own use or for a supplier with whom they have a personal or financial relationship without declaring that relationship to the General Manager.'],
  ['03', 'search', 'Inspection of Incoming Materials', 'All incoming materials — including spare parts, chemicals, cement, casing pipes, and safety equipment — must be inspected upon arrival to ensure they match the order specifications and are not damaged or defective. Any discrepancies must be reported to the procurement department immediately.'],
  ['04', 'shield', 'Prohibited Practices', 'The company strictly prohibits accepting commissions, kickbacks, or any form of personal benefit from suppliers in exchange for awarding contracts or placing orders. Employees who engage in such practices will face immediate termination and potential legal action.'],
  ['05', 'gavel', 'Disciplinary Action', 'Any violation of this policy may subject the employee to disciplinary action.'],
];

const related = [
  ['07', 'Vehicle and Equipment Usage', '/images/policies-photo/vehicle-&-equipement.png', '/policies/vehicle-and-equipment'],
  ['09', 'Incident Reporting and Crisis Management', '/images/policies-photo/incident-reporting-&-crisis-management.png', '/policies/incident-reporting-and-crisis-management'],
  ['04', 'Confidentiality and Data Protection', '/images/policies-photo/confidentiality-and-data-protection-page.png', '/policies/confidentiality-and-data-protection'],
];

export default function ProcurementPolicyPage() {
  useReveal();
  return <main className="procurement-policy-page">
    <section className="procurement-hero"><img src="/images/policies-photo/procurement-and-supply.png" alt="AL-MATAR procurement and supply chain operations" /></section>
    <div className="procurement-main"><div className="procurement-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;Procurement and Supply Chain Policy</div><div className="procurement-title-row"><div><span>POLICY NO. (8)</span><h1>Procurement and Supply<br className="desktop-only" /> Chain Policy</h1></div><div className="procurement-motto"><Icon name="link" /><span>Transparent Supply Chain<br />Stronger Operations</span></div></div>
      <section className="procurement-intro"><h2>1. Policy Statement</h2><span /><p>AL-MATAR Company is committed to maintaining transparency, fairness, and cost-effectiveness in all its procurement activities. The company relies on a wide range of suppliers for industrial chemicals, spare parts, lubricants, safety equipment, construction materials, and catering services. Ensuring that we obtain quality goods and services at competitive prices is essential to our ability to deliver value to our clients and maintain our profit margins.</p></section>
      <section className="procurement-requirements"><h2>2. Policy Requirements</h2><span />{requirements.map(([number, icon, title, text], index) => <article className="procurement-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><strong>{number}</strong><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</section>
      <section className="procurement-responsibility"><h2>3. Responsibility</h2><span /><p>The responsibility for implementing this policy rests with all AL-MATAR Company employees. Senior management is responsible for providing the necessary resources and periodically reviewing system performance to ensure its effectiveness and continuous improvement.</p></section>
      <div className="procurement-meta policy-reveal" data-scroll-reveal><div className="procurement-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div><div className="procurement-meta-info"><Icon name="file" /><dl><div><dt>Document No.</dt><dd>AM-PROC-L001</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>Procurement Manager</dd></div></dl></div></div>
      <div className="procurement-buttons"><a href="#related-policies">◉ &nbsp; View Policy Document <span>→</span></a><a href="#related-policies">⇩ &nbsp; Download (PDF) <span>→</span></a></div><RelatedPoliciesCarousel currentPath="/policies/procurement-and-supply-chain" />
    </div><section className="procurement-next-banner"><div><small>COMMITTED TO ETHICAL AND SUSTAINABLE OPERATIONS</small><h2>Building a Safer, Stronger<br />and More Responsible Tomorrow</h2></div><a href="/contact">Contact Us&nbsp; →</a></section>
  </main>;
}
