'use client';

import { useEffect } from 'react';
import RelatedPoliciesCarousel from '@/components/RelatedPoliciesCarousel';

function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -45px 0px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const iconPaths = {
  shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z" fill="currentColor"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
  people: <><circle cx="9" cy="9" r="3" fill="currentColor"/><circle cx="16.5" cy="10" r="2.5" fill="currentColor"/><path d="M3.5 19c.4-3 2.2-4.7 5.5-4.7s5.1 1.7 5.5 4.7" fill="currentColor"/><path d="M14 15c2.8-.4 5.2.8 6 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  gear: <><path d="m12 3 1.1 1.9 2.2.5 1.8-1 1.5 1.5-1 1.8.5 2.2L20 11v2l-1.9 1.1-.5 2.2 1 1.8-1.5 1.5-1.8-1-2.2.5L12 21l-1.1-1.9-2.2-.5-1.8 1-1.5-1.5 1-1.8-.5-2.2L4 13v-2l1.9-1.1.5-2.2-1-1.8L6.9 4.4l1.8 1 2.2-.5L12 3Z" fill="currentColor"/><circle cx="12" cy="12" r="3" fill="#fff"/></>,
  person: <><circle cx="12" cy="8" r="3.3" fill="currentColor"/><path d="M5.5 20c.5-4.1 2.7-6 6.5-6s6 1.9 6.5 6" fill="currentColor"/></>,
  gavel: <><path d="m5.1 8.3 3.2-3.2 8.8 8.8-3.2 3.2-8.8-8.8Z" fill="currentColor"/><path d="m4.2 7.4 3.2-3.2 2.4 2.4-3.2 3.2-2.4-2.4Zm8.8 8.8 3.2-3.2 2.4 2.4-3.2 3.2-2.4-2.4Z" fill="currentColor"/><path d="m5.2 19.8 8.4-8.4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><path d="M3.5 21h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  search: <><circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="3"/><path d="m15 15 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></>,
  run: <><circle cx="14.5" cy="4.5" r="2.2" fill="currentColor"/><path d="m12 8 3 2 2 3m-5-5-3 4-3 1m6-1 2 5 3 2m-7-8-1 6-3 3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></>,
  siren: <><path d="M7 13V9a5 5 0 0 1 10 0v4M5 14h14v3H5z" fill="currentColor"/><path d="M12 3V1M4 6 2 5m16 1 2-1M3 21h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  pin: <><path d="M12 21s6-6.1 6-11a6 6 0 1 0-12 0c0 4.9 6 11 6 11Z" fill="currentColor"/><circle cx="12" cy="10" r="2" fill="#fff"/></>,
  document: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 3v5h4M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
};

const Icon = ({ name }) => (
  <span className="policy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="25" height="25" fill="none">{iconPaths[name]}</svg></span>
);

const sections = [
  {
    title: 'Employee Security and Site Safety Policy',
    icon: 'shield',
    text: 'AL-MATAR Company conducts its business across various regions in Syria and, including areas that may present security challenges. The company is committed to providing maximum protection for its employees and assets in situations involving criminal or political threats, civil unrest, or other security incidents. The risk of exposure to violence, extortion, threats, kidnapping, or civil unrest exists in many areas where we operate, and our employees may be exposed to or become parties to such incidents.',
  },
  {
    title: 'Essential Support for Employees',
    icon: 'people',
    text: "While we believe that the ultimate responsibility for personal security lies with each individual, AL-MATAR's Employee Security Policy recognizes the need for the company to provide essential support for our employees’ individual efforts, particularly for those facing unfamiliar or high-risk situations.",
  },
  {
    title: 'Key Security Measures',
    icon: 'gear',
    children: (
      <>
        <p>The policy consists of the following steps, detailed in the Employee and Asset Security Standard:</p>
        <ul>
          <li>Broad guidelines for proper security practices for our employees and their families.</li>
          <li>Joint risk assessment with our clients in areas identified as high-risk.</li>
          <li>Definition of risk levels and conduct of security audits by a designated officer when required.</li>
          <li>Preparation of protection and evacuation plans.</li>
          <li>Coordinated response in the event of security-related incidents.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Executive Management Responsibilities',
    icon: 'person',
    children: (
      <>
        <p>Executive management is responsible for implementing AL-MATAR’s Employee Security Policy with support from the QHSE department and Risk Management, in cooperation with our clients and national authorities.</p>
        <p>Before mobilizing to any new site, the Rig Manager must check the local security situation with local leaders or authorities. Employees traveling to remote sites must inform the main office of their route and estimated arrival time, and must call to confirm arrival. If a team does not check in within one hour of the estimated arrival time, the office will initiate a contact protocol.</p>
      </>
    ),
  },
  {
    title: 'Disciplinary Action',
    icon: 'gavel',
    text: 'Any violation of this policy may subject the employee to disciplinary action.',
  },
];

const focusAreas = [
  ['shield', 'Security Guidelines', 'Clear guidance for employees and their families.'],
  ['people', 'Risk Assessment', 'Joint risk assessment with clients in high-risk areas.'],
  ['search', 'Security Audits', 'Defined risk levels and audits by designated officers.'],
  ['run', 'Evacuation Planning', 'Preparation of protection and evacuation plans.'],
  ['siren', 'Incident Response', 'Coordinated response to security-related incidents.'],
  ['pin', 'Travel Check-in', 'Mandatory route notification and arrival confirmation.'],
];

export default function EmployeeSecurityPolicyPage() {
  useScrollReveal();

  return (
    <div className="policy-page">
      <div className="policy-hero">
        <img src="/images/policies-photo/Employee-security-hero.png" alt="AL-MATAR employees discussing site safety" />
        <div className="policy-hero-overlay">
          <div className="policy-breadcrumb">Home&nbsp; / &nbsp;Policies&nbsp; / &nbsp;Employee Security Policy</div>
          <div className="policy-hero-copy">
            <h1>Employee Security<br />and Site Safety Policy</h1>
            <span className="policy-gold-rule" />
            <p>Protecting our people, our assets and<br />our operations in every environment.</p>
          </div>
          <div className="policy-hero-message">PEOPLE<br />SAFETY<br />SECURITY<br />A STRONGER<br />TOMORROW</div>
        </div>
      </div>

      <div className="policy-content-grid">
        <article className="policy-document-card">
          {sections.map((section, index) => (
            <section className="policy-section policy-reveal" data-scroll-reveal key={section.title} style={{ '--reveal-delay': `${index * 80}ms` }}>
              <Icon name={section.icon} />
              <div>
                <h2>{section.title}</h2>
                <span className="policy-short-rule" />
                {section.text && <p>{section.text}</p>}
                {section.children}
              </div>
            </section>
          ))}
          <div className="policy-signature"><strong>Suliman Mattar Yousef</strong><br />Chairman of the Board and Chief Executive Officer, AL-MATAR Company<img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div>
        </article>

        <aside className="policy-sidebar">
          <div className="policy-info-card policy-reveal" data-scroll-reveal>
            <h2><span className="policy-outline-icon"><Icon name="document" /></span> Policy Information</h2>
            <dl>
              <div><dt>Policy No.:</dt><dd>6</dd></div>
              <div><dt>Document Code:</dt><dd>AM-QHSE-L002</dd></div>
              <div><dt>Issued on:</dt><dd>January 1, 2025</dd></div>
              <div><dt>Last Updated:</dt><dd>August 18, 2026</dd></div>
              <div><dt>Location:</dt><dd>Qamishli, Syria</dd></div>
              <div><dt>Contact:</dt><dd>QHSE Manager</dd></div>
            </dl>
            <a className="policy-primary-button" href="/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a>
            <a className="policy-secondary-button" href="/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf" download="employee-security-and-site-safety-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a>
          </div>
          <div className="policy-commitment-card policy-reveal" data-scroll-reveal>
            <div className="policy-commitment-heading"><Icon name="shield" /><h2>Our Commitment</h2></div>
            <p>Safer people.<br />More resilient operations.<br />A stronger tomorrow.</p>
            <span className="policy-gold-rule" />
            <img src="/images/policies-photo/Sunset-Employee-oil.png" alt="Employee securing an oilfield site at sunset" />
            <strong>SECURE PEOPLE<br />STABLE OPERATIONS<br />LASTING VALUE</strong>
          </div>
        </aside>
      </div>

      <section className="policy-focus-card policy-reveal" data-scroll-reveal id="policy-document">
        <h2>Key Security Focus Areas</h2>
        <div className="policy-focus-grid">{focusAreas.map(([icon, title, text], index) => <div className="policy-focus-item policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><Icon name={icon} /><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
      <RelatedPoliciesCarousel currentPath="/policies/employee-security" />
    </div>
  );
}
