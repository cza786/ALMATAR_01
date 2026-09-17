import NextPageBanner from './NextPageBanner';

const base = '/images/policies-photo/services/drilling_workover/';
const caps = [
  ['card-directional-drilling.webp', 'WELL PLACEMENT', 'Directional Drilling'],
  ['card-casing-running.webp', 'WELL CONSTRUCTION', 'Casing Running'],
  ['card-cementing-support.webp', 'WELL INTEGRITY', 'Cementing Support'],
  ['card-workover-operations.webp', 'FIELD OPERATIONS', 'Workover Operations'],
  ['card-rig-support.webp', 'DRILLING SERVICES', 'Rig Support Services'],
  ['card-wellbore-optimization.webp', 'PERFORMANCE', 'Wellbore Optimization'],
];

export default function DrillingWorkoverPage() {
  return (
    <div className="total-field-page drilling-page">
      <section className="tf-hero"><img src={`${base}01_drilling_workover_hero.webp`} alt="Drilling and workover services" /><div className="tf-hero-copy"><span>RELIABLE OPERATIONS. LONG-TERM VALUE.</span><h1>DRILLING AND<br />WORKOVER SERVICES</h1><p>Safe, efficient and technically advanced drilling and workover solutions to unlock the full potential of your assets.</p><a href="#drilling-capabilities">REQUEST TECHNICAL SUPPORT　→</a></div><span className="tf-hero-side">PEOPLE<br />TECHNOLOGY<br />PERFORMANCE</span></section>
      <section className="tf-strip">{['WELL INTERVENTION SERVICES', 'COILED TUBING & NITROGEN PUMPING', 'STIMULATION & FRACTURING', 'ZONAL ISOLATION & CEMENTING', 'WELLHEAD & XMAS TREE SERVICES', 'SLICKLINE SERVICES', 'WELL TESTING & FLARING', 'DRILLING AND WORKOVER SERVICES', 'TOTAL FIELD CONSTRUCTION & MANPOWER LOGISTICS'].map((x, i) => <span className={i === 7 ? 'active' : ''} key={x}>♧<b>{x}</b></span>)}</section>
      <section className="tf-section tf-intro"><div><small>ENGINEERING EXCELLENCE</small><h2>Integrated Drilling &amp;<br />Workover Solutions</h2><p>AL-MATAR delivers safe, efficient and cost-effective drilling and workover operations using proven techniques, experienced crews and modern equipment. Our solutions are designed to meet complex well objectives while ensuring well integrity, reservoir productivity and long-term value.</p></div><div className="tf-intro-image"><img src={`${base}02_integrated_drilling_rig.webp`} alt="Integrated drilling rig" /></div></section>
      <section id="drilling-capabilities" className="tf-section"><small>OUR CAPABILITIES</small><h2>Comprehensive Drilling &amp; Workover Capabilities</h2><div className="tf-capabilities">{caps.map(([img, kicker, title]) => <article key={title}><img src={`${base}${img}`} alt={title} loading="lazy" /><div className="drilling-capability-overlay"><small>{kicker}</small><h3>{title}</h3><span className="drilling-capability-arrow" aria-hidden="true">→</span></div></article>)}</div></section>
      <section className="tf-section tf-intro"><div><small>WELL CONSTRUCTION</small><h2>From Surface to Target</h2><p>We plan and execute drilling programs to achieve optimal wellbore placement, ensuring reservoir access, well integrity and long-term productivity.</p><p>✓ Optimized well design<br />✓ Accurate trajectory control<br />✓ Real-time monitoring<br />✓ Safe and efficient operations</p></div><div className="tf-intro-image"><img src={`${base}04_well_construction_cross_section.webp`} alt="Well construction cross section" /></div></section>
      <section className="tf-section tf-process"><small>OUR PROCESS</small><h2>From Spud to Completion</h2><div>{['PLANNING & DESIGN', 'SPUD & DRILLING', 'CASING & CEMENTING', 'WORKOVER / COMPLETION', 'TESTING & HANDOVER', 'LONG-TERM SUPPORT'].map((x, i) => <article key={x}><b>{i + 1}</b><strong>{x}</strong></article>)}</div></section>
      <section className="tf-people"><article><img src={`${base}03_field_operations_team.webp`} alt="Experienced drilling team" /><div><small>FIELD OPERATIONS</small><h2>People on the Ground.<br />Performance in the Field.</h2><p>Our experienced crews and modern equipment deliver safe and efficient drilling and workover operations in challenging environments.</p></div></article><article><img src={`${base}07_hse_worker_rig.webp`} alt="HSE and quality operations" /><div><small>HSE &amp; QUALITY</small><h2>Safety. Quality. Always.</h2><p>We are committed to conducting our drilling and workover operations with the highest standards of Health, Safety, Environment and Quality.</p></div></article></section>
      <section className="tf-stats"><b>100+<small>WELLS DRILLED &amp; WORKED OVER</small></b><b>EXPERIENCED<small>CREWS AND OPERATORS</small></b><b>ZERO LTIs<small>OUR COMMITMENT TO SAFE OPERATIONS</small></b><b>HIGH QUALITY<small>RELIABLE WELL DELIVERY</small></b></section>
      <NextPageBanner title="LET'S DRIVE YOUR NEXT PROJECT FORWARD" subtitle="Get in touch with our technical team to discuss your drilling and workover requirements." link="/contact" bgImage={`${base}08_footer_cta_workers.webp`} />
    </div>
  );
}
