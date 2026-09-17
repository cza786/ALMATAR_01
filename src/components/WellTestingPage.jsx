'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const base = '/images/policies-photo/services/almatar_well_testing_clean_photos/';

const services = [
  ['♧', 'WELL INTERVENTION', 'SERVICES'], ['⌁', 'COILED TUBING &', 'NITROGEN PUMPING'],
  ['♜', 'STIMULATION &', 'FRACTURING'], ['▤', 'ZONAL ISOLATION &', 'CEMENTING'],
  ['⚯', 'WELLHEAD & XMAS', 'TREE SERVICES'], ['◉', 'SLICKLINE', 'SERVICES'],
  ['♙', 'WELL TESTING & FLARING', ''], ['△', 'DRILLING AND', 'WORKOVER SERVICES'],
  ['⌗', 'TOTAL FIELD', 'CONSTRUCTION & MANPOWER LOGISTICS'],
];

const capabilities = [
  ['◉', 'Surface Well Testing', 'Accurate measurement of flow, pressure and temperature during well testing operations.'],
  ['▣', 'Pressure & Temperature', 'High-quality gauges and acquisition systems for reliable well data.'],
  ['♙', 'Real-Time Monitoring', 'Continuous monitoring and reporting for faster, better decisions.'],
  ['⌁', 'Well Testing & Flaring', 'Controlled separation and environmentally responsible flaring solutions.'],
  ['◌', 'Data Acquisition', 'Clear, actionable information delivered by experienced field teams.'],
  ['♨', 'Production Evaluation', 'Understand well performance and optimize production potential.'],
];

const gallery = ['04_gallery_surface_testing.webp', '05_gallery_two_workers.webp', '06_gallery_pressure_gauges.webp', '07_gallery_wide_facility.webp'];

const wtProcessSteps = [
  { num: 1, icon: '▣', title: 'Planning & Engineering', desc: 'Well analysis, tool selection and job planning.' },
  { num: 2, icon: '▱', title: 'Mobilization', desc: 'Equipment and experienced crew deployment.' },
  { num: 3, icon: '△', title: 'Execution', desc: 'Safe and efficient testing operations.' },
  { num: 4, icon: '⌁', title: 'Data & Analysis', desc: 'Accurate data acquisition and interpretation.' },
  { num: 5, icon: '▤', title: 'Reporting', desc: 'Detailed job report and recommendations.' },
];

function Eyebrow({ children }) { return <div className="wt-eyebrow"><i />{children}</div>; }

export default function WellTestingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isStepPaused, setIsStepPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isStepPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % wtProcessSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isStepPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      setActiveStep((prev) => (prev + 1) % wtProcessSteps.length);
      setIsStepPaused(true);
    } else if (diff < -40) {
      setActiveStep((prev) => (prev - 1 + wtProcessSteps.length) % wtProcessSteps.length);
      setIsStepPaused(true);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return <div className="well-testing-page">
    <section className="wt-hero">
      <img src={`${base}01_hero_well_testing_scene.webp`} alt="ALMATAR well testing operation" />
      <div className="wt-hero-overlay" />
      <div className="wt-hero-copy"><Eyebrow>OUR SERVICES</Eyebrow><h1>WELL TESTING<br />&amp; FLARING</h1><p>Reliable well testing solutions for accurate measurement, production evaluation and safe, controlled field operations.</p><Link href="/contact" className="wt-button">Request Technical Support <b>→</b></Link></div>
      <div className="wt-hero-side">PEOPLE<br />EXPERIENCE<br />SOLUTIONS<br />LASTING VALUE</div>
    </section>

    <section className="wt-overview wt-contained">
      <div className="wt-depth"><img src={`${base}02_realtime_monitoring_worker.webp`} alt="Field monitoring" /><div className="wt-depth-label">REAL-TIME<br />VISIBILITY</div></div>
      <div className="wt-overview-copy"><Eyebrow>TECHNICAL OVERVIEW</Eyebrow><h2>MEASURING PERFORMANCE<br />AT THE WELL</h2><p>Our well testing services provide accurate, real-time data on well performance, pressure and flow. From surface testing packages to production evaluation, we help operators make informed decisions and maximize asset value.</p><div className="wt-points"><span>♧ <b>Reliable Operations</b></span><span>♧ <b>Experienced Field Teams</b></span><span>♧ <b>Accurate Well Data</b></span><span>♧ <b>Cost-Effective Solutions</b></span></div></div>
      <div className="wt-toolstring"><small>TYPICAL TESTING PACKAGE</small><div className="wt-stack"><span /><span /><span /><span /><span /></div>{['Surface Equipment', 'Choke Manifold', 'Separator', 'Flow & Data Lines', 'Test Header'].map(x => <b key={x}>{x}</b>)}</div>
    </section>

    <section id="capabilities" className="wt-section wt-contained"><Eyebrow>OUR WELL TESTING CAPABILITIES</Eyebrow><h2>A COMPLETE RANGE OF<br />TESTING SOLUTIONS</h2><p className="wt-lead">Safe, precise and dependable well testing services designed around your operational requirements.</p><div className="wt-cap-grid">{capabilities.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="wt-performance"><div className="wt-contained wt-performance-inner"><div><Eyebrow>PRECISION AT THE WELL</Eyebrow><h2>MAXIMIZING WELL PERFORMANCE</h2><p>Well testing provides critical data for informed decisions, helping improve production, reduce uncertainty and extend the life of your wells.</p><ul><li>Accurate and reliable well data</li><li>Supports production optimization</li><li>Minimizes operational time and cost</li><li>Applicable to a wide range of well types</li></ul></div><img src={`${base}03_gallery_flare_stack.webp`} alt="Well testing flare stack" /></div></section>

    <section className="wt-process wt-contained">
      <Eyebrow>OUR OPERATION PROCESS</Eyebrow>
      <h2>FROM PLANNING TO RESULTS</h2>
      <div className="wt-process-line wt-process-line-desktop">
        {wtProcessSteps.map((step, i) => (
          <article key={step.title} className={activeStep === i ? 'active' : ''} onClick={() => { setActiveStep(i); setIsStepPaused(true); }}>
            <b>{step.num}</b>
            <span>{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>

      <div className="slickline-stepper-mobile" onMouseEnter={() => setIsStepPaused(true)} onMouseLeave={() => setIsStepPaused(false)}>
        <div className="stepper-mobile-card" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div key={activeStep} className="stepper-mobile-content">
            <div className="step-icon-wrap" style={{ fontSize: '24px', color: '#d9531e' }}>
              {wtProcessSteps[activeStep].icon}
            </div>
            <h4 className="step-title">{wtProcessSteps[activeStep].title}</h4>
            <p className="step-desc">{wtProcessSteps[activeStep].desc}</p>
          </div>
        </div>
        <div className="stepper-mobile-numbers-wrap">
          <div className="stepper-mobile-connecting-line" />
          {wtProcessSteps.map((step, i) => (
            <button key={step.num} type="button" className={`step-num-btn ${activeStep === i ? 'active' : ''}`} onClick={() => { setActiveStep(i); setIsStepPaused(true); }} aria-label={`Step ${step.num}: ${step.title}`}>
              {step.num}
            </button>
          ))}
        </div>
      </div>
    </section>

    <section className="wt-gallery wt-contained"><Eyebrow>FIELD OPERATIONS</Eyebrow><h2>IN ACTION</h2><p>Delivering reliable well testing services across onshore fields in Syria and the region.</p><div>{gallery.map(x => <img key={x} src={`${base}${x}`} alt="ALMATAR field operation" />)}</div></section>

    <section className="wt-benefits"><div className="wt-contained"><Eyebrow>KEY BENEFITS</Eyebrow><h2>A SMARTER APPROACH<br />TO WELL TESTING</h2><div className="wt-benefit-grid">{[['♧', 'Reliable Data', 'Accurate information for confident decisions.'], ['◷', 'Fast Deployment', 'Quick mobilization of field equipment.'], ['◎', 'Precise Intervention', 'Accurate control and repeatable results.'], ['⚙', 'Reduced Downtime', 'Keep your wells back on production faster.']].map(([i, t, p]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="wt-hse"><div className="wt-contained"><div><Eyebrow>HSE &amp; WELL CONTROL</Eyebrow><h2>SAFETY DRIVES<br />EVERY OPERATION</h2><p>We are committed to the highest standards of HSE, ensuring safe operations for our people, our clients and the environment.</p></div><div className="wt-hse-cards">{[['♙', 'Trained & Certified Personnel'], ['♢', 'Well Control Focus'], ['♧', 'Protecting People and Environment']].map(([i, t]) => <article key={t}><span>{i}</span><b>{t}</b><p>Experienced teams following strict safety procedures.</p></article>)}</div></div></section>
    <section className="wt-cta"><div className="wt-contained"><div><Eyebrow>LET’S WORK TOGETHER</Eyebrow><h2>NEED WELL TESTING<br />SUPPORT FOR YOUR WELLS?</h2></div><div><p>Get in touch with our technical team to discuss your requirements and find the right solution for your operation.</p><Link href="/contact" className="wt-button">Request Technical Support <b>→</b></Link></div><img src={`${base}08_cta_worker_mountain_scene.webp`} alt="Well testing field team" /></div></section>
  </div>;
}
