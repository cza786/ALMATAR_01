'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const root = '/images/policies-photo/services/almatar_zonal_isolation_photos/';
const services = [
  ['♙','WELL INTERVENTION','SERVICES'],['◎','COILED TUBING &','NITROGEN PUMPING'],['⌂','STIMULATION &','FRACTURING'],['▤','ZONAL ISOLATION &','CEMENTING'],['⚯','WELLHEAD & XMAS','TREE SERVICES'],
  ['♧','SLICKLINE SERVICES',''],['⚙','WELL TESTING & FLARING',''],['△','DRILLING AND WORKOVER','SERVICES'],['⌂','TOTAL FIELD','CONSTRUCTION & MANPOWER LOGISTICS']
];
const capabilities = [
  ['▣','PRIMARY CEMENTING','Engineered primary cementing for surface, intermediate and production casings.'],['⚒','REMEDIAL / SQUEEZE CEMENTING','Restore zonal isolation and address unwanted fluid migration.'],['♙','PLUG & ABANDONMENT SUPPORT','Cementing solutions for well suspension and abandonment operations.'],['△','ZONAL ISOLATION SOLUTIONS','Custom solutions for complex wellbore conditions and challenging formations.'],['♢','CASING INTEGRITY SUPPORT','Maintain long-term well integrity and prevent annular flow.'],['▤','CEMENT EVALUATION','Post-job evaluation and integrity assessment using industry-standard tools and analysis.']
];
const workflow = [
  ['01','Engineering & Design','Well analysis, material selection and job design.'],
  ['02','Preparation','Equipment, materials and site readiness.'],
  ['03','Execution','Safe and efficient cementing operations.'],
  ['04','Evaluation','Data review and cement integrity assessment.'],
  ['05','Verification','Confirm zonal isolation and long-term integrity.']
];

function Icon({children}) { return <span className="zonal-icon" aria-hidden="true">{children}</span>; }

export default function ZonalIsolationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflow.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAnimating(false);
  };

  return (
    <div className="zonal-page">
      <section className="zonal-hero">
        <div className="zonal-hero-copy">
          <p className="zonal-kicker">OUR SERVICES</p>
          <h1>ZONAL ISOLATION &amp;<br/>CEMENTING</h1>
          <p>Reliable wellbore isolation for safer, more productive<br className="zonal-desktop"/> and longer-lasting wells.</p>
          <Link href="/contact" className="zonal-orange-btn">Request Technical Support <span>→</span></Link>
          <small>Home&nbsp; › &nbsp;Our Services&nbsp; › &nbsp;Zonal Isolation &amp; Cementing</small>
        </div>
        <img src={`${root}01_hero_cementing_operation.webp`} alt="Zonal isolation and cementing operation"/>
      </section>

      <section className="zonal-integrity">
        <div className="zonal-integrity-copy">
          <span className="zonal-rule"/>
          <h2>ENSURING LASTING<br/>WELLBORE INTEGRITY</h2>
          <p>Our zonal isolation and cementing services provide a critical barrier between formations, protecting your assets, the environment and your production. We deliver engineered cementing solutions for exploration, development and well intervention operations, tailored to challenging well conditions and complex geometries.</p>
          <div className="zonal-trio">
            <div><Icon>♢</Icon><span>Reliable<br/>Zonal Isolation</span></div>
            <div><Icon>⚙</Icon><span>Engineered<br/>Solutions</span></div>
            <div><Icon>♧</Icon><span>Experienced<br/>Field Teams</span></div>
          </div>
        </div>
        <div className="zonal-diagram">
          <img src={`${root}02_wellbore_cementing_diagram.webp`} alt="Wellbore cementing diagram"/>
        </div>
        <div className="zonal-integrity-side">
          <h2>ISOLATING TODAY<br/>FOR A SAFER TOMORROW</h2>
          <p>Proper cementing ensures zonal isolation, prevents fluid migration and maintains long-term well integrity throughout the life of the well.</p>
          <div className="zonal-legend">
            <span>■ Casing</span><span>▧ Cement</span><span>■ Formation</span><b>■ Isolated Zone</b><em>■ Hydrocarbon Bearing Zone</em>
          </div>
        </div>
      </section>

      <section className="zonal-section zonal-capabilities">
        <div className="zonal-heading-row">
          <h2><span className="zonal-rule"/>OUR CEMENTING CAPABILITIES</h2>
          <span>TAILORED SOLUTIONS FOR EVERY WELL&nbsp; →</span>
        </div>
        <div className="zonal-capability-grid">
          {capabilities.map(([i,t,p])=>(
            <article key={t}><Icon>{i}</Icon><h3>{t}</h3><p>{p}</p></article>
          ))}
        </div>
      </section>

      <section className="zonal-workflow">
        <div className="zonal-heading-row">
          <h2><span className="zonal-rule"/>BARRIER INTEGRITY WORKFLOW</h2>
          <span>FROM PLANNING TO VERIFICATION&nbsp; →</span>
        </div>
        <div className="zonal-workflow-grid">
          {workflow.map(([n,t,p],i)=>{
            const isActive = activeStep === i;
            const isCompleted = activeStep > i;
            return (
              <div 
                className={`zonal-workflow-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`} 
                key={n}
                onClick={() => handleStepClick(i)}
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                <div className="zonal-workflow-circle">
                  <Icon>{['▧','♙','△','▣','✓'][i]}</Icon>
                </div>
                {i < 4 && <span className={`zonal-workflow-arrow ${isCompleted || isActive ? 'active-arrow' : ''}`}>⟶</span>}
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            );
          })}
        </div>
        {(() => {
          const [number, title, description] = workflow[activeStep];
          const icons = ['▧', '♙', '△', '▣', '✓'];
          return (
            <div className="zonal-workflow-mobile-card" key={activeStep}>
              <div className="zonal-workflow-circle"><Icon>{icons[activeStep]}</Icon></div>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })()}
        <div className="zonal-workflow-controls">
          {workflow.map((_, i) => (
            <button
              key={i}
              className={`zonal-workflow-dot ${activeStep === i ? 'active' : ''}`}
              onClick={() => handleStepClick(i)}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="zonal-section zonal-field">
        <div>
          <h2><span className="zonal-rule"/>FIELD PROVEN SOLUTIONS</h2>
          <p>Our experienced teams and modern cementing equipment deliver reliable results in conventional and challenging well environments.</p>
          <ul>
            <li>High-performance cementing units</li>
            <li>Tailored cement systems for HP/HT conditions</li>
            <li>Experienced field engineers and operators</li>
            <li>Strict quality control and safety procedures</li>
          </ul>
        </div>
      </section>

      <section className="zonal-section zonal-hse">
        <div>
          <h2><span className="zonal-rule"/>HSE &amp; QUALITY</h2>
          <p className="zonal-kicker">SAFETY AND RESPONSIBILITY IN EVERY OPERATION</p>
        </div>
        <div className="zonal-hse-grid">
          <div><Icon>♙</Icon><h3>Safe Execution</h3><p>We follow strict operational procedures to ensure the safety of our people and the environment.</p></div>
          <div><Icon>♧</Icon><h3>Environmental Protection</h3><p>Preventing cross-flow and protecting natural resources is at the core of our operations.</p></div>
          <div><Icon>⚙</Icon><h3>Quality Materials</h3><p>We use qualified cement systems and follow industry best practices.</p></div>
        </div>
        <div className="zonal-worker">
          <img src={`${root}05_hse_field_worker.webp`} alt="ALMATAR field worker"/>
        </div>
      </section>

    </div>
  );
}
