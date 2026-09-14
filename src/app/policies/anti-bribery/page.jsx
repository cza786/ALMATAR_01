'use client';

import { useEffect } from 'react';
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
  document: <><path d="M6 3h8l4 4v14H6V3Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 3v5h4M9 12h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  noBribe: <><rect x="6" y="7" width="12" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M9 7V5h6v2M4 4l16 16" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/><path d="M9 12h3m-3 3h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>,
  gift: <><rect x="4" y="10" width="16" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M3 10h18M12 10v10M5 7h14v3H5zM12 7c-3 0-5-1-5-3 0-1.5 2.2-1.7 3.5-.7L12 7Zm0 0c3 0 5-1 5-3 0-1.5-2.2-1.7-3.5-.7L12 7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
  hand: <><path d="M8 11V6a1.5 1.5 0 0 1 3 0v4-6a1.5 1.5 0 0 1 3 0v6-4a1.5 1.5 0 0 1 3 0v6-2a1.5 1.5 0 0 1 3 0v3c0 5-3.2 7-7.5 7S5 17.5 5 13v-2a1.5 1.5 0 0 1 3 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
  people: <><circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M3.5 19c.4-3 2.2-4.7 5.5-4.7s5.1 1.7 5.5 4.7M14 15c2.8-.4 5.2.8 6 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
  hammer: <><path d="m5 8 3-3 8 8-3 3-8-8Zm6-3 2-2 7 7-2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m5 20 9-9M3 21h7" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/></>,
  scales: <><path d="M12 4v15M7 20h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/></>,
};

function Icon({ name }) {
  return <span className="policy-icon anti-policy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34" fill="none">{icons[name]}</svg></span>;
}

const rows = [
  ['01', 'document', 'Policy Statement', 'AL-MATAR Company conducts its business on the basis of fair competition and complete integrity in all contracts it enters into with oil companies, international and local humanitarian organizations, and government entities in Syria. The foundation of this competition is the quality of services provided, the technical competence of the crews, and adherence to agreed timelines, not resorting to illegal means or making improper payments to obtain commercial advantages.'],
  ['02', 'noBribe', 'Prohibition of Bribery', 'AL-MATAR Company, along with all its employees, including subcontractors and agents, refrains from offering, paying, or authorizing the payment of any monetary sum or anything of value (including gold or expensive watches) to any government official, oil company representative, or humanitarian organization procurement officer, with the intent to influence their decision, obtain confidential tender information, or bypass established legal procedures. The company also strictly prohibits soliciting or accepting any commissions or bribes from suppliers or contractors seeking to do business with the company.'],
  ['03', 'gift', 'Permissible Gifts', 'The company makes an exception for symbolic gifts of modest value presented within the context of professional hospitality, such as offering sweets, beverages, or simple promotional items not exceeding $50 USD in value.'],
  ['04', 'hand', 'Prohibited Benefits', 'Accepting any cash gifts, personal loans, travel invitations, or any other financial benefits from a party that deals or seeks to deal with AL-MATAR Company is strictly forbidden. If any employee receives an inappropriate offer of this nature, they must politely decline and immediately inform the General Manager.'],
  ['05', 'people', 'Protection for Reporting', 'Senior management is committed to protecting any employee who reports violations in good faith, and no retaliatory action will be taken against them.'],
  ['06', 'hammer', 'Disciplinary and Legal Action', 'Any violation of this policy exposes the employee to legal accountability under applicable Syrian laws, in addition to internal disciplinary action which may result in final termination.'],
];

const related = [
  ['05', 'Conflict of Interest Policy', '/images/policies-photo/Employee-security-hero.png'],
  ['04', 'Confidentiality and Data Protection Policy', '/images/service_site_camp.png'],
  ['07', 'Vehicle and Equipment Usage Policy', '/images/qhse_inspection_team.png'],
  ['10', 'Substance Abuse Policy', '/images/qhse_safety.png'],
];

export default function AntiBriberyPage() {
  useScrollReveal();
  return <div className="anti-policy-page">
    <div className="anti-policy-hero">
      <img src="/images/policies-photo/anti-bribery-hero.png" alt="Integrity builds trust at AL-MATAR" />
      <div className="anti-policy-hero-overlay">
        <div className="anti-policy-hero-copy"><h1>Integrity<br />Builds Trust</h1><p>Together for a Cleaner, Fairer Tomorrow</p><span className="policy-gold-rule" /></div>
        <div className="anti-policy-message">NO BRIBERY<br />NO CORRUPTION<br />FAIR COMPETITION<br />SUSTAINABLE SUCCESS</div>
      </div>
    </div>
    <main className="anti-policy-main">
      <div className="anti-policy-breadcrumb">Home&nbsp; › &nbsp;Policies&nbsp; › &nbsp;Anti-Bribery and Gifts Policy</div>
      <div className="anti-policy-title-row"><div><span className="anti-policy-number">POLICY NO. (2)</span><h1>Anti-Bribery and Gifts Policy</h1></div><div className="anti-policy-ethics"><Icon name="scales" /><span>Ethics and Integrity<br />In Everything We Do</span></div></div>
      <div className="anti-policy-rows">{rows.map(([number, icon, title, text], index) => <section className="anti-policy-row policy-reveal" data-scroll-reveal key={title} style={{ '--reveal-delay': `${index * 70}ms` }}><span className="anti-policy-index">{number}</span><Icon name={icon} /><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="anti-policy-meta policy-reveal" data-scroll-reveal>
        <div className="anti-signature"><strong>Suliman Mattar Yousef</strong><span>Chairman of the Board and CEO<br />AL-MATAR Company</span><img className="ceo-signature-image" src="/images/policies-photo/signs-of-ceo.png" alt="Signature of Suliman Mattar Yousef" /></div>
        <div className="anti-meta-info"><Icon name="document" /><dl><div><dt>Document No.</dt><dd>AM-LEGAL-L001</dd></div><div><dt>Issued on</dt><dd>January 1, 2025</dd></div><div><dt>Last Updated</dt><dd>August 18, 2026</dd></div><div><dt>Location</dt><dd>Qamishli, Syria</dd></div><div><dt>Contact</dt><dd>General Manager</dd></div></dl></div>
      </div>
      <div className="anti-policy-buttons"><a className="policy-primary-button" href="/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf" target="_blank" rel="noreferrer">◉ &nbsp; View Policy Document <span>→</span></a><a className="policy-secondary-button" href="/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf" download="anti-bribery-and-gifts-policy.pdf">⇩ &nbsp; Download (PDF) <span>→</span></a></div>
      <RelatedPoliciesCarousel currentPath="/policies/anti-bribery" />
    </main>
  </div>;
}
