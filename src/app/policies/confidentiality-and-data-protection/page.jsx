'use client';

import { useEffect } from 'react';
import Link from 'next/link';
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
  people: <><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="5.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="18.5" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M5 20c.3-3.5 2.4-5.3 7-5.3s6.7 1.8 7 5.3M2 19c.2-2.4 1.3-3.7 3.5-3.7M22 19c-.2-2.4-1.3-3.7-3.5-3.7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  laptop: <><rect x="5" y="4" width="14" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M3 19h18M8 19l1-2h6l1 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  gavel: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  target: <><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="m16 8 5-5m-4 0h4v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
  database: <><ellipse cx="12" cy="5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5m-14 7v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" fill="none" stroke="currentColor" strokeWidth="1.8"/></>,
  chat: <><path d="M4 5h16v11H9l-5 4V5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></>,
};

function Icon({ name, className = '' }) { return <span className={`confidentiality-icon ${className}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">{icons[name]}</svg></span>; }

const sections = [
  ['file', 'Policy Overview', 'Information is the foundation upon which our business rests. Protecting confidential information, whether belonging to AL-MATAR Company, our oilfield clients, or the humanitarian organizations that entrust us with their data, is of paramount importance for maintaining our reputation and ensuring the continuity of our business. This information can take many forms—physical documents, electronic files, and intellectual knowledge (such as drilling logs, well depths, and technical procedures)—and can relate to any part of AL-MATAR’s operations.'],
  ['people', 'Examples of Confidential Information', 'Common examples of confidential information include well drilling data, client project specifications, camp layouts, beneficiary lists for humanitarian projects, financial records, employee personal data, supplier pricing, and ongoing operational plans. Although the technical knowledge we develop is often proprietary to AL-MATAR, we are also frequently entrusted with highly sensitive information belonging to others, including our clients and partners.'],
  ['shield', 'Protection Requirements', 'It is essential to maintain the confidentiality of all such information to ensure the continued success of AL-MATAR’s business. All business, financial, and technical discussions, as well as notes, evidence, papers, and other forms of confidential information—whether printed or electronic—must be protected. AL-MATAR employees are required not to disclose confidential information to any unauthorized person, whether intentionally or accidentally. Accidental disclosure can have the same damaging effect as intentional disclosure.'],
  ['laptop', 'Preventing Accidental Disclosure', 'Employees must exercise caution to avoid accidental disclosure, whether through careless conversations or improper handling of documents, data, and software. Photographs of client sites, camp interiors, or equipment configurations must not be taken with personal mobile phones for posting on social media. If images are required for work purposes, company-approved devices must be used, and the images must be deleted after handover. If any employee handles lists of workers or camp residents, they must not share their personal identification numbers, phone numbers, or addresses with outsiders.'],
  ['gavel', 'Disciplinary Action', 'Any violation of this policy may subject the employee to disciplinary action, up to and including termination of employment.'],
];

const focusAreas = [['file', 'Confidential\nDocuments'], ['database', 'Client Project\nData'], ['people', 'Personal Data\nProtection'], ['laptop', 'Approved\nDevice Usage'], ['people', 'No Unauthorized\nSharing'], ['chat', 'Secure\nCommunications']];

export default function ConfidentialityPolicyPage() {
  useReveal();
  return <main className="confidentiality-page">
    <section className="confidentiality-hero"><img src="/images/policies-photo/confidentiality-and-data-protection-hero.png" alt="Confidentiality and data protection at AL-MATAR" /><div className="confidentiality-hero-overlay"><div className="confidentiality-hero-breadcrumb">Home&nbsp; / &nbsp;Policies&nbsp; / &nbsp;Confidentiality and Data Protection Policy</div><h1>Confidentiality and<br />Data Protection Policy</h1><p>Protecting sensitive company, client, and operational<br className="desktop-only" /> information across every project.</p><span className="confidentiality-rule" /><strong>PEOPLE&nbsp;&nbsp; | &nbsp;&nbsp;SAFETY&nbsp;&nbsp; | &nbsp;&nbsp;INTEGRITY&nbsp;&nbsp; | &nbsp;&nbsp;A STRONGER TOMORROW</strong><div className="confidentiality-hero-message">CONFIDENTIAL<br />INFORMATION<br />SECURE DATA<br />STRONGER TRUST</div></div></section>
    <div className="confidentiality-layout">
      <section className="confidentiality-document"><div className="confidentiality-sections">{sections.map(([icon, title, text], index) => <article className="confidentiality-section policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><Icon name={icon} /><div><h2>{title}</h2><p>{text}</p></div></article>)}<div className="confidentiality-signature"><div><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and Chief Executive Officer, AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div></div></div></section>
      <aside className="confidentiality-sidebar"><section className="confidentiality-info"><h2><Icon name="file" /> Policy Information</h2><dl><div><dt>Policy No.:</dt><dd>4</dd></div><div><dt>Document Code:</dt><dd>AM-LEGAL-L002</dd></div><div><dt>Issued on:</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated:</dt><dd>August 18, 2026</dd></div><div><dt>Location:</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact:</dt><dd>General Manager</dd></div></dl><a href="#focus-areas" className="confidentiality-view">◉ &nbsp; View Policy Document <span>→</span></a><a href="#focus-areas" className="confidentiality-download">⇩ &nbsp; Download PDF</a></section><section className="confidentiality-commitment"><h2><Icon name="shield" /> Our Commitment</h2><p>Trust. Integrity.<br />A More Secure Tomorrow.</p><div>We are committed to protecting confidential information and respecting the data entrusted to us by our clients, partners, and humanitarian organizations. Through responsible information management, we build stronger relationships and support sustainable operations.</div><img src="/images/policies-photo/confidentiality-and-data-protection-page.png" alt="Secure information management at AL-MATAR" /></section></aside>
    </div>
    <section className="confidentiality-focus" id="focus-areas"><div className="confidentiality-focus-heading"><span /><h2><Icon name="target" /> Key Confidentiality Focus Areas</h2><span /></div><div className="confidentiality-focus-grid">{focusAreas.map(([icon, title]) => <article key={title}><Icon name={icon} /> <h3>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3></article>)}</div></section>
    <RelatedPoliciesCarousel currentPath="/policies/confidentiality-and-data-protection" />
  </main>;
}
