'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const policies = [
  { id: 'qhse', title: 'Quality, Health, Safety & Environment (QHSE)', pdf: '/images/policies-photo/pdfs/health-safety-and-environment.pdf' },
  { id: 'anti-bribery', title: 'Anti-Bribery and Gifts', pdf: '/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf' },
  { id: 'employment', title: 'Employment Affairs and Workplace Conduct', pdf: '/images/policies-photo/pdfs/employment-affairs-and-workplace-conduct-policy.pdf' },
  { id: 'confidentiality', title: 'Confidentiality and Data Protection', pdf: '/images/policies-photo/pdfs/Confidentiality-and-data-protection-policy.pdf' },
  { id: 'conflict', title: 'Conflict of Interest', pdf: '/images/policies-photo/pdfs/conflict-of-interest-policy.pdf' },
  { id: 'employee-security', title: 'Employee Security and Site Safety', pdf: '/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf' },
  { id: 'vehicle', title: 'Vehicle and Equipment Usage', pdf: '/images/policies-photo/pdfs/vehicle-and equipment-usage-policy.pdf' },
  { id: 'procurement', title: 'Procurement and Supply Chain', pdf: '/images/policies-photo/pdfs/procurement-and-supply-chain-policy.pdf' },
  { id: 'incident', title: 'Incident Reporting and Crisis Management', pdf: '/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf' },
  { id: 'substance-abuse', title: 'Substance Abuse', pdf: '/images/policies-photo/pdfs/substance-abuse-policy.pdf' },
  { id: 'quality', title: 'Quality Policy', pdf: '/images/policies-photo/pdfs/quality-policy.pdf' },
];

function DocumentIcon() {
  return <svg className="policies-document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 2.8h8l4 4V21H6z" /><path d="M14 2.8v4h4M9 12h6M9 15.5h6M9 8.5h2" /></svg>;
}

function PoliciesContent() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const requested = policies.find((policy) => policy.id === searchParams.get('policy'));
    setSelected(requested || null);
  }, [searchParams]);

  const openPolicy = (policy) => setSelected(policy);
  const closePolicy = () => setSelected(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && closePolicy();
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('policies-modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('policies-modal-open');
    };
  }, [selected]);

  return (
    <div className="policies-page">
      <section className="policies-hero">
        <img src="/images/hero_drilling_rig.webp" alt="Oilfield drilling operations" />
        <div className="policies-hero-overlay">
          <div className="policies-hero-copy">
            <h1>Policies</h1>
            <span className="policies-gold-rule" />
            <p>Our policies guide our people, protect our assets<br className="policies-desktop-only" /> and support our commitment to responsible operations.</p>
          </div>
          <div className="policies-hero-message">ENERGY<br />FOR A BETTER<br />TOMORROW<span /></div>
        </div>
      </section>

      <main className="policies-list-wrap">
        <div className="policies-list-grid">
          {policies.map((policy, index) => (
            <button type="button" className="policy-list-item" key={policy.id} onClick={() => openPolicy(policy)}>
              <span className="policy-list-number">{index + 1}</span>
              <DocumentIcon />
              <span className="policy-list-title">{policy.title}</span>
            </button>
          ))}
        </div>
      </main>

      {selected && (
        <div className="policies-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closePolicy()}>
          <section className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
            <div className="policies-modal-heading">
              <h2 id="policy-modal-title">{selected.title}</h2>
              <button type="button" className="policies-modal-close" onClick={closePolicy} aria-label="Close policy document">×</button>
            </div>
            <div className="policies-pdf-frame">
              <iframe src={`${selected.pdf}#toolbar=0&navpanes=0`} title={selected.title} />
            </div>
            <a className="policies-open-pdf" href={selected.pdf} target="_blank" rel="noreferrer">Open PDF in a new tab <span>→</span></a>
          </section>
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  return <Suspense fallback={null}><PoliciesContent /></Suspense>;
}
