import Link from 'next/link';

export const metadata = {
  title: 'Careers | ALMATAR Petroleum Services',
  description: 'Explore career opportunities with ALMATAR Petroleum Services.',
};

export default function CareersPage() {
  return (
    <main className="careers-page">
      <section className="careers-page-hero">
        <img src="/images/careers_engineers_hero.webp" alt="AL-MATAR field engineers" />
        <div className="careers-page-hero-overlay">
          <span className="team-eyebrow"><i /> JOIN OUR JOURNEY</span>
          <h1>A Stronger Tomorrow Together</h1>
          <p>Be part of a team that values people, innovation, and sustainable growth.</p>
        </div>
      </section>
      <section className="careers-page-content">
        <span className="team-eyebrow"><i /> CAREERS AT AL-MATAR</span>
        <h2>Build your future with us</h2>
        <p>We are always looking for committed professionals who want to make a meaningful contribution to safe, reliable and sustainable field operations.</p>
        <Link href="/contact" className="careers-page-button">Send your application <span>→</span></Link>
      </section>
    </main>
  );
}
