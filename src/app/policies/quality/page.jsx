'use client';

import { useEffect } from 'react';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const icons = {
  file: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v5h4M9 12h6m-6 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
  gear: <><path d="m12 3 1.1 2 2.2.5 1.8-1 1.5 1.5-1 1.8.5 2.2 2 1.1v2l-2 1.1-.5 2.2 1 1.8-1.5 1.5-1.8-1-2.2.5-1.1 2h-2l-1.1-2-2.2-.5-1.8 1-1.5-1.5 1-1.8-.5-2.2-2-1.1v-2l2-1.1.5-2.2-1-1.8L6.7 4.5l1.8 1 2.2-.5L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7"/></>,
  people: <><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="5.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="18.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M5 20c.3-3.5 2.4-5.3 7-5.3s6.7 1.8 7 5.3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  person: <><circle cx="12" cy="6.5" r="2.5" fill="currentColor"/><path d="M8 21v-5l-2 1v-4l3-2h6l3 2v4l-2-1v5M9 10l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></>,
  bars: <><path d="M5 20v-5h3v5H5Zm5 0V9h3v11h-3Zm5 0V4h3v16h-3Z" fill="currentColor"/></>,
  handshake: <><path d="m3 10 3-3 4 1 2-2 4 1 5 5-3 3-3-2-3 3-3-2-2 2-4-4 3-2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m10 8 3 3m-1 4 2-2m-5 0 2-2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  target: <><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="m16 8 5-5m-4 0h4v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
};
function Icon({ name }) { return <span className="confidentiality-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{icons[name]}</svg></span>; }

const commitments = [
  ['Meeting Client Requirements', 'Understanding client needs and exceeding their expectations by delivering services and products that conform to agreed specifications, including API, ASTM, and ISO standards.'],
  ['Standards Compliance', 'Implementing the requirements of international standards Quality Management System and relevant sector standards across all our operations.'],
  ['Continuous Improvement', 'Regularly reviewing and improving our processes and performance through the use of Key Performance Indicators (KPIs), internal audits, and management reviews.'],
  ['Employee Engagement', 'Training and qualifying all employees to ensure their competence and empower them to contribute to achieving quality objectives.'],
  ['Process Approach', 'Managing all activities as interconnected processes, identifying risks and opportunities, and taking appropriate actions.'],
  ['Evidence-Based Decision Making', 'Using data and analysis to support decisions and improve performance.'],
  ['Supplier Relationship Management', 'Working with suppliers and subcontractors who adhere to similar quality standards.'],
];
const focus = [['people', 'Meeting Client\nRequirements'], ['shield', 'Standards\nCompliance'], ['bars', 'Continuous\nImprovement'], ['person', 'Employee\nEngagement'], ['gear', 'Process\nApproach'], ['bars', 'Evidence-Based\nDecisions'], ['handshake', 'Supplier\nRelationship\nManagement']];

export default function QualityPolicyPage() {
  useReveal();
  return <main className="confidentiality-page quality-policy-page"><section className="confidentiality-hero"><img src="/images/policies-photo/Quality-policy-hero.png" alt="AL-MATAR quality standards and continuous improvement" /><div className="confidentiality-hero-overlay"><div className="confidentiality-hero-breadcrumb">Home&nbsp; / &nbsp;Policies&nbsp; / &nbsp;Quality Policy</div><h1>Quality Policy</h1><p>Delivering reliable standards, continuous improvement<br className="desktop-only" /> and operational excellence.</p><span className="confidentiality-rule" /><strong>PEOPLE&nbsp;&nbsp; | &nbsp;&nbsp;STANDARDS&nbsp;&nbsp; | &nbsp;&nbsp;SUSTAINABLE PROGRESS</strong><div className="confidentiality-hero-message">QUALITY<br />STANDARDS<br />IMPROVEMENT<br />A STRONGER<br />TOMORROW</div></div></section>
    <div className="quality-layout"><section className="quality-document"><article className="quality-overview"><Icon name="file" /><div><h2>Quality Policy</h2><p>AL-MATAR Company recognizes that delivering high-quality services in drilling, well maintenance, civil works, and electrical installations is the foundation of our continued success and client trust. We are committed to implementing an effective Quality Management System that ensures we consistently meet client requirements and comply with international standards and local regulations.</p></div></article><article className="quality-commitments"><Icon name="gear" /><div><h2>AL-MATAR Company is committed to:</h2>{commitments.map(([title, text], index) => <div className="quality-commitment-row" key={title}><b>{index + 1}</b><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></article><article className="quality-responsibility"><Icon name="people" /><div><h2>Our Responsibility</h2><p>The responsibility for implementing this policy rests with all AL-MATAR Company employees. Senior management is responsible for providing the necessary resources and periodically reviewing system performance to ensure its effectiveness and continuous improvement.</p></div></article><div className="quality-signature"><Icon name="file" /><div><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer, AL-MATAR Company</span></div></div></section><aside className="confidentiality-sidebar"><section className="confidentiality-info"><h2><Icon name="file" /> Policy Information</h2><dl><div><dt>Policy No.:</dt><dd>11</dd></div><div><dt>Document Code:</dt><dd>AM-QHSE-L004</dd></div><div><dt>Issued on:</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated:</dt><dd>August 18, 2026</dd></div><div><dt>Location:</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact:</dt><dd>QHSE Manager</dd></div></dl><a href="#focus-areas" className="confidentiality-view">◉ &nbsp; View Policy Document <span>→</span></a><a href="#focus-areas" className="confidentiality-download">⇩ &nbsp; Download PDF</a></section><section className="confidentiality-commitment"><h2><Icon name="shield" /> Our Commitment</h2><p>Quality Today.<br />Excellence Tomorrow.</p><div>We are committed to delivering high-quality services, building lasting client trust, and creating long-term value through continuous improvement and operational excellence.</div><span className="confidentiality-rule" /><img src="/images/policies-photo/Quality-policy-page.png" alt="AL-MATAR quality operations" /></section></aside></div>
    <section className="confidentiality-focus quality-focus" id="focus-areas"><div className="confidentiality-focus-heading"><span /><h2><Icon name="target" /> Key Quality Focus Areas</h2><span /></div><div className="confidentiality-focus-grid">{focus.map(([icon, title]) => <article key={title}><Icon name={icon} /><h3>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3></article>)}</div></section>
    <RelatedPoliciesCarousel currentPath="/policies/quality" />
  </main>;
}
