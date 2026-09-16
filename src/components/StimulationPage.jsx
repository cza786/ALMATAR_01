import Link from 'next/link';

const root = '/images/policies-photo/services/almatar_stimulation_all_photos/';

const services = [
  ['♙', 'WELL INTERVENTION', 'SERVICES'], ['◎', 'COILED TUBING &', 'NITROGEN PUMPING'],
  ['⌂', 'STIMULATION &', 'FRACTURING'], ['▤', 'ZONAL ISOLATION &', 'CEMENTING'],
  ['⚯', 'WELLHEAD & XMAS', 'TREE SERVICES'], ['♧', 'SLICKLINE SERVICES', ''],
  ['⚙', 'WELL TESTING & FLARING', ''], ['△', 'DRILLING AND WORKOVER', 'SERVICES'],
  ['⌂', 'TOTAL FIELD', 'CONSTRUCTION & MANPOWER LOGISTICS'],
];

const capabilities = [
  ['◌', 'Matrix Acidizing', 'Removal of near-wellbore damage to restore formation permeability and improve flow.'],
  ['✣', 'Hydraulic Fracturing Support', 'Complete support for hydraulic fracturing operations, including equipment, fluids and experienced personnel.'],
  ['N₂', 'Nitrogen-Assisted Stimulation', 'Nitrogen pumping for clean, effective stimulation and wellbore unloading.'],
  ['▣', 'High-Pressure Pumping', 'Reliable high-pressure pumping systems for a wide range of stimulation treatments.'],
  ['△', 'Chemical Treatment', 'Tailored chemical solutions including acids, solvents and additives.'],
  ['⟳', 'Post-Job Cleanup', 'Wellbore cleanup and flowback support to restore optimal well performance.'],
];

const sequence = [
  ['01', 'PLANNING & DESIGN', 'Reservoir evaluation, treatment design and operational planning.'],
  ['02', 'MOBILIZATION & SETUP', 'Equipment mobilization, site preparation and safety checks.'],
  ['03', 'STIMULATION EXECUTION', 'Pumping of designed fluids with real-time monitoring and control.'],
  ['04', 'FLOWBACK & CLEANUP', 'Controlled flowback and wellbore cleanup operations.'],
  ['05', 'PERFORMANCE REVIEW', 'Post-job analysis and recommendations for future performance.'],
];

function Icon({ children }) { return <span className="stim-icon" aria-hidden="true">{children}</span>; }

export default function StimulationPage() {
  return (
    <div className="stimulation-page">
      <div className="stim-art stim-hero"><img src={`${root}01_hero_stimulation_fracturing.jpg`} alt="Stimulation and fracturing operations" /><div className="stim-hero-copy"><span>ENGINEERED STIMULATION</span><h1>STIMULATION &amp; FRACTURING</h1></div></div>

      <section className="stim-section stim-capability-intro">
        <div className="stim-intro-copy">
          <p className="stim-kicker">ENGINEERED STIMULATION</p>
          <h2>Engineered Stimulation<br />for Better Productivity</h2>
          <p>We deliver fit-for-purpose stimulation solutions designed to improve reservoir connectivity, remove formation damage and enhance hydrocarbon recovery. Our experienced teams, advanced equipment and technical workflows ensure efficient and safe execution in a wide range of reservoir conditions.</p>
          <Link href="/contact" className="stim-outline-btn">OUR APPROACH <span>→</span></Link>
        </div>
        <div className="stim-capability-grid">
          {capabilities.map(([icon, title, text]) => <article className="stim-card" key={title}><Icon>{icon}</Icon><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="stim-reservoir">
        <div className="stim-reservoir-art"><img src={`${root}02_reservoir_cross_section.png`} alt="Reservoir stimulation cross section" /></div>
        <div className="stim-reservoir-copy"><h2>From Surface to Reservoir</h2><p className="stim-kicker">A CONTROLLED PROCESS FOR MEASURABLE RESULTS</p><p>Stimulation treatments create new flow paths or clean existing ones, allowing hydrocarbons to move more freely from the reservoir to the wellbore. Our integrated approach ensures precise placement of fluids, effective fracture propagation and controlled execution at every stage.</p><div className="stim-chart"><div className="stim-chart-legend"><span>Treatment Pressure</span><span>Slurry Rate</span><span>Proppant Concentration</span></div><span className="chart-orange" /><span className="chart-navy" /><span className="chart-gray" /><div className="stim-chart-stages"><span>Breakdown</span><span>Fracture Propagation</span><span>Proppant Placement</span><span>Flush</span><span>Flowback</span></div></div></div>
      </section>

      <section className="stim-section stim-sequence"><p className="stim-kicker">A DISCIPLINED APPROACH FROM PLANNING TO FLOWBACK</p><h2>Operation Sequence</h2><div className="stim-sequence-row">{sequence.map(([num, title, text], i) => <div className="stim-step" key={num}><div className="stim-step-line"><span className="stim-step-circle"><Icon>{['▧', '▣', '♙', '♧', '▥'][i]}</Icon></span>{i < 4 && <span className="stim-arrow">→</span>}</div><strong>{num}</strong><h3>{title}</h3><p>{text}</p></div>)}</div></section>


      <section className="stim-section stim-designed"><div><h2>Designed Around the Reservoir</h2><p className="stim-kicker">INTEGRATED ENGINEERING FOR OPTIMAL RESULTS</p><p>Every reservoir is unique. We combine geological understanding, well data and operational experience to design the right stimulation solution for your specific objectives.</p></div><div className="stim-mini-grid">{[['◉','Reservoir Understanding','Integrated geological and petrophysical analysis.'],['⚙','Tailored Treatment Design','Fit-for-purpose fluid systems and operational parameters.'],['◎','Field Execution Excellence','Experienced teams making real-time decisions.']].map(([i,t,p])=><div key={t}><Icon>{i}</Icon><h3>{t}</h3><p>{p}</p></div>)}</div></section>

      <section className="stim-section stim-hse"><div><h2>HSE – Safe Operations, Sustainable Performance</h2><p className="stim-kicker">SAFETY IN EVERY STAGE</p><p>We are committed to protecting our people, the environment and the communities where we operate. Our stimulation operations are planned and executed with a strong focus on risk management, pressure control and environmental protection.</p><Link href="/qhse" className="stim-outline-btn">OUR HSE COMMITMENT <span>→</span></Link></div><div className="stim-mini-grid">{[['♢','Pressure Control','Robust barrier management and real-time monitoring.'],['♧','Environmental Protection','Responsible fluid handling and waste management.'],['♧','People First','Training, competency and a strong safety culture.']].map(([i,t,p])=><div key={t}><Icon>{i}</Icon><h3>{t}</h3><p>{p}</p></div>)}</div></section>

    </div>
  );
}
