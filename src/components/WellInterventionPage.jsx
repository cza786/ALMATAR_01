import Link from 'next/link';
import ServiceIntroCard from './ServiceIntroCard';

const base = '/images/policies-photo/services/drilling_workover/';

const capabilities = [
  ['◈', 'PRODUCTION\nOPTIMISATION', 'Remove bottlenecks and enhance flow and productivity in existing wells.'],
  ['⚒', 'REMEDIAL\nCEMENTING', 'Restore well integrity and zonal isolation with advanced materials and techniques.'],
  ['⇩', 'SCALE MANAGEMENT', 'Prevent and remove scale build-up to maintain optimal well performance and flow assurance.'],
  ['♧', 'PRESSURE CONTROL', 'Safeguard operations with proven well control methods and real-time monitoring.'],
  ['♢', 'WELL INTEGRITY', 'Maintain structural reliability and extend asset life cycles cost-effectively.'],
  ['▤', 'PLUG AND\nABANDONMENT', 'Deliver safe, compliant and environmentally responsible end-of-life well solutions.'],
];

function Rule() { return <span className="wi-rule" />; }

export default function WellInterventionPage() {
  return <div className="well-intervention-page">
    <section className="wi-hero">
      <img src={`${base}well-intervention-hero-clear.webp`} alt="Well intervention rig operating in an oilfield" />
      <div className="wi-hero-overlay">
        <span className="wi-hero-breadcrumb">HOME / WELL SERVICES / WELL INTERVENTION SERVICES</span>
        <h1>WELL INTERVENTION<br />SERVICES</h1>
        <p>A safer, more efficient and sustainable approach to well care.<br />Backed by decades of experience and a relentless drive for better, ALMATAR delivers well intervention services that maximise uptime and unlock value.</p>
        <Link href="/well-services" className="wi-hero-btn">EXPLORE OUR WELL SERVICES <b>→</b></Link>
        <span className="wi-hero-side">EXPERTISE<br />INNOVATION<br />RESULTS</span>
      </div>
    </section>

    <ServiceIntroCard
      eyebrow="EXCELLENCE &amp; DEDICATION"
      title="Integrated Well Intervention Solutions"
      description="ALMATAR delivers field-proven intervention services, advanced equipment and experienced technical teams to maximize well productivity safely and sustainably."
      image={`${base}intervention-lifecycle-clear.webp`}
      imageAlt="Well intervention lifecycle"
    />

    <section className="wi-lifecycle">
      <div className="wi-lifecycle-copy"><h2>THE INTERVENTION<br />LIFECYCLE</h2><Rule /><p>A disciplined, end-to-end approach to maximise<br />well value at stages of the asset life.</p>
        <ol><li><b>01</b><strong>DIAGNOSIS</strong><span>Identify well issues through data,<br />analysis and downhole intelligence.</span></li><li><b>02</b><strong>PLANNING</strong><span>Develop fit-for-purpose solutions<br />with clear objectives.</span></li><li><b>03</b><strong>EXECUTION</strong><span>Deploy experienced teams and<br />advanced technology safely.</span></li><li><b>04</b><strong>ONGOING PERFORMANCE</strong><span>Apply insights to extend well life<br />and enhance future performance.</span></li></ol>
      </div><img className="wi-lifecycle-image" src={`${base}intervention-lifecycle-clear.webp`} alt="Intervention lifecycle technical diagram" />
    </section>

    <section className="wi-capabilities"><div className="wi-heading"><div><h2>OUR WELL INTERVENTION CAPABILITIES</h2><Rule /></div><p>Comprehensive services. Proven technology. Measurable results.<br />We provide end-to-end well solutions, including:</p></div><div className="wi-cap-grid">{capabilities.map(([icon,title,text])=><article key={title}><i>{icon}</i><h3>{title.split('\n').map((x,i)=><span key={i}>{x}</span>)}</h3><p>{text}</p></article>)}</div></section>

    <section className="wi-performance"><img src={`${base}field-operations-clear.webp`} alt="Field operations team working at a well intervention rig" /><div><h2>KEEPING YOUR WELLS<br />PERFORMING</h2><Rule /><p>Our well intervention services are designed to safely and effectively solve complex downhole challenges, maximize uptime and drive value.</p><p>With a focus on safety, innovation and operational excellence, we combine advanced technology, industry expertise and a results-driven mindset to keep your wells performing – today and tomorrow.</p><ul><li>Experienced and safety-minded teams</li><li>Advanced technology and real-time monitoring</li><li>Solutions for the full well lifecycle</li><li>A commitment to operational excellence</li></ul><Link href="/about" className="wi-outline-btn">LEARN MORE ABOUT OUR APPROACH　→</Link></div></section>

    <section className="wi-stats"><div><b>♜<strong>200+</strong></b><span>WELLS INTERVENED<br />GLOBALLY</span></div><div><b>⚙<strong>98%</strong></b><span>OPERATIONAL<br />UPTIME RATE</span></div><div><b>♧<strong>15+</strong></b><span>YEARS AVERAGE<br />TEAM EXPERIENCE</span></div><div><b>⌖<strong>ONSHORE</strong></b><span>AND OFFSHORE<br />OPERATIONS</span></div></section>

    <section className="wi-sustainability"><img src={`${base}sustainability-background-clear.webp`} alt="Sustainable field operations" /><div><h2>SAFETY. PEOPLE.<br />A SUSTAINABLE TOMORROW.</h2><p>At Almatar, we believe in delivering energy solutions responsibly – for our people, our partners and the communities where we operate.<br />Our well intervention services are designed to create lasting value while protecting people and the environment.</p><Link href="/about" className="wi-outline-btn">OUR SUSTAINABILITY　→</Link></div></section>

    <section className="wi-cta"><h2>LET’S KEEP<br />YOUR WELLS PERFORMING</h2><p>Get in touch with our specialists to discuss your<br />well intervention requirements.</p><Link href="/contact">CONTACT OUR EXPERTS　→</Link></section>
  </div>;
}
