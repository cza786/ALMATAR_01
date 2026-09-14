'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const policies = [
  { number: '02', title: 'Anti-Bribery and Gifts Policy', image: '/images/policies-photo/anti-bribery-hero.png', href: '/policies/anti-bribery' },
  { number: '03', title: 'Employment Affairs and Workplace Conduct Policy', image: '/images/policies-photo/Employment-affairs-workplace-conduct-page.png', href: '/policies/employment-affairs-workplace-conduct' },
  { number: '04', title: 'Confidentiality and Data Protection Policy', image: '/images/policies-photo/confidentiality-and-data-protection-page.png', href: '/policies/confidentiality-and-data-protection' },
  { number: '05', title: 'Conflict of Interest Policy', image: '/images/policies-photo/Conflict-of-interest-policy.png', href: '/policies/conflict-of-interest' },
  { number: '06', title: 'Employee Security and Site Safety Policy', image: '/images/policies-photo/Employee-security-hero.png', href: '/policies/employee-security' },
  { number: '07', title: 'Vehicle and Equipment Usage Policy', image: '/images/policies-photo/vehicle-&-equipement.png', href: '/policies/vehicle-and-equipment' },
  { number: '08', title: 'Procurement and Supply Chain Policy', image: '/images/policies-photo/procurement-and-supply.png', href: '/policies/procurement-and-supply-chain' },
  { number: '09', title: 'Incident Reporting and Crisis Management Policy', image: '/images/policies-photo/incident-reporting-&-crisis-management.png', href: '/policies/incident-reporting-and-crisis-management' },
  { number: '10', title: 'Substance Abuse Policy', image: '/images/policies-photo/substance-and-abuse-policy.png', href: '/policies/substance-and-abuse-policy' },
  { number: '11', title: 'Quality Policy', image: '/images/policies-photo/Quality-policy-page.png', href: '/policies/quality' },
];

const policyPdfs = {
  '/policies/anti-bribery': '/images/policies-photo/pdfs/anti-bribery-and-gifts-policy.pdf',
  '/policies/confidentiality-and-data-protection': '/images/policies-photo/pdfs/Confidentiality-and-data-protection-policy.pdf',
  '/policies/conflict-of-interest': '/images/policies-photo/pdfs/conflict-of-interest-policy.pdf',
  '/policies/employee-security': '/images/policies-photo/pdfs/employee-security-and-site-safety-policy.pdf',
  '/policies/employment-affairs-workplace-conduct': '/images/policies-photo/pdfs/employment-affairs-and-workplace-conduct-policy.pdf',
  '/policies/incident-reporting-and-crisis-management': '/images/policies-photo/pdfs/incident-reporting-and-crisis-management-policy.pdf',
  '/policies/procurement-and-supply-chain': '/images/policies-photo/pdfs/procurement-and-supply-chain-policy.pdf',
  '/policies/quality': '/images/policies-photo/pdfs/quality-policy.pdf',
  '/policies/substance-and-abuse-policy': '/images/policies-photo/pdfs/substance-abuse-policy.pdf',
  '/policies/vehicle-and-equipment': '/images/policies-photo/pdfs/vehicle-and%20equipment-usage-policy.pdf',
};

function Arrow({ direction }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === 'left' ? 'm15 5-7 7 7 7' : 'm9 5 7 7-7 7'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function RelatedPoliciesCarousel({ currentPath }) {
  const trackRef = useRef(null);
  const visiblePolicies = policies.filter((policy) => policy.href !== currentPath);

  useEffect(() => {
    const pdf = policyPdfs[currentPath];
    if (!pdf) return;

    const viewButton = document.querySelector('.policy-primary-button, .vehicle-primary-button, .confidentiality-view, .procurement-buttons a:first-child');
    const downloadButton = document.querySelector('.policy-secondary-button, .vehicle-secondary-button, .confidentiality-download, .procurement-buttons a:last-child');

    if (viewButton) {
      viewButton.href = pdf;
      viewButton.target = '_blank';
      viewButton.rel = 'noreferrer';
    }
    if (downloadButton) {
      downloadButton.href = pdf;
      downloadButton.download = pdf.split('/').pop();
    }
  }, [currentPath]);

  const move = (direction) => {
    trackRef.current?.scrollBy({ left: direction * (trackRef.current.clientWidth * 0.82), behavior: 'smooth' });
  };

  return <section className="related-policies-carousel" aria-labelledby="related-policies-title">
    <div className="related-policies-carousel-heading">
      <h2 id="related-policies-title">Related Policies</h2>
      <div className="related-policies-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous related policies"><Arrow direction="left" /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next related policies"><Arrow direction="right" /></button>
      </div>
    </div>
    <div className="related-policies-carousel-track" ref={trackRef} tabIndex="0" aria-label="Related policies carousel">
      {visiblePolicies.map((policy) => <Link className="related-policies-carousel-card" href={policy.href} key={policy.href}>
        <img src={policy.image} alt="" />
        <div className="related-policies-carousel-card-copy"><strong>{policy.number}</strong><h3>{policy.title}</h3><span aria-hidden="true">›</span></div>
      </Link>)}
    </div>
  </section>;
}
