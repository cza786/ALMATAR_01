import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/">
              <img src="/images/almatar_emblem_transparent.png" alt="ALMATAR Logo Emblem" style={{ height: '40px', marginBottom: '0.8rem' }} />
            </Link>
            <p>Integrated Oilfield & Projects Management supporting onshore oil operations in Syria within SYR OPCO with technical collaboration with internationally reputed organizations.</p>
          </div>

          <div>
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/well-services">Services</Link></li>
              <li><Link href="/drilling-fluids">Drilling</Link></li>
              <li><Link href="/construction">Construction</Link></li>
              <li><Link href="/qhse">QHSE</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Core Capabilities</h4>
            <ul className="footer-links">
              <li><Link href="/well-services">Coiled Tubing & Nitrogen</Link></li>
              <li><Link href="/well-services">High Pressure Stimulation</Link></li>
              <li><Link href="/well-services">Wellhead Maintenance (7-Point)</Link></li>
              <li><Link href="/well-services">500 BBL FRAC Tanks</Link></li>
              <li><Link href="/drilling-fluids">Drilling Fluid Chemistry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-links">
              <li><span style={{ color: '#d1d5db' }}>📍 Syria – Damascus / Qamishli</span></li>
              <li><a href="tel:0096352426915" style={{ color: '#d1d5db' }}>📞 Tel: 00963 52 426 915</a></li>
              <li><a href="tel:00963939822415" style={{ color: '#d1d5db' }}>📱 Mob: 00963 93 982 2415</a></li>
              <li><a href="tel:00963931407723" style={{ color: '#d1d5db' }}>📱 Mob: 00963 93 140 7723</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} ALMATAR Integrated Oilfield & Projects Management. All Rights Reserved.
          </div>
          <div>
            Damascus / Qamishli, Syria
          </div>
        </div>
      </div>
    </footer>
  );
}
