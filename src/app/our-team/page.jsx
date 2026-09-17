'use client';

import Link from 'next/link';

const boardMembers = [
  ['Suleiman Matar Youssef', 'Chairman of the Board'],
  ['Mohammed Amin Suleiman', 'Vice Chairman of the Board'],
  ['Mohammed Nouri Mohammed Tamer', 'Independent Board Member'],
];

const managementMembers = [
  ['Nazdar Mohammed Amin Suleiman', 'Chief Executive Officer (CEO)'],
  ['Hassan Ibrahim', 'Head of Operations'],
  ['Muhannad Mohammed Al-Ali', 'Technical Manager'],
];

function MemberCard({ name, role }) {
  return (
    <article className="team-member-card">
      <div className="team-avatar" aria-hidden="true"><span /></div>
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}

function TeamGroup({ title, note, members }) {
  return (
    <section className="team-group">
      <div className="team-group-toggle">
        <strong>{title}</strong>
        <span>{note}</span>
        <i aria-hidden="true">⌃</i>
      </div>
      <div className="team-members">{members.map(([name, role]) => <MemberCard key={name} name={name} role={role} />)}</div>
    </section>
  );
}

export default function OurTeamPage() {
  return (
    <div className="our-team-page">
      <section className="team-hero">
        <img src="/images/careers_engineers_hero.webp" alt="AL-MATAR field engineers" />
        <div className="team-hero-overlay">
          <div className="team-hero-copy">
            <span className="team-eyebrow"><i /> ABOUT US</span>
            <h1>Our Team</h1>
            <h2>People Behind Our Progress</h2>
            <p>At AL-MATAR, our strength comes from our people. Our leadership team brings experience, expertise, and a shared commitment to deliver safe, reliable, and sustainable energy solutions.</p>
          </div>
          <span className="team-hero-side">PEOPLE<br />EXPERTISE<br />INTEGRITY<br />A STRONGER<br />TOMORROW</span>
        </div>
      </section>

      <div className="team-breadcrumb"><Link href="/">Home</Link><b>›</b><Link href="/about">About Us</Link><b>›</b><span>Our Team</span></div>

      <main className="team-content">
        <div className="team-heading">
          <span className="team-eyebrow"><i /> OUR TEAM</span>
          <h2>Leadership for a Stronger Tomorrow</h2>
          <p>Our dedicated leadership and team members drive our success through their experience, professionalism, and commitment to excellence.</p>
        </div>
        <TeamGroup title="Board of Directors" note="Leading with vision and integrity." members={boardMembers} />
        <TeamGroup title="Management Team" note="Driving operations with expertise." members={managementMembers} />
      </main>

      <section className="team-cta">
        <div><span className="team-eyebrow"><i /> JOIN OUR JOURNEY</span><h2>A Stronger Tomorrow Together</h2><p>Be part of a team that values people, innovation, and sustainable growth.</p><Link href="/careers">Explore Careers <b>→</b></Link></div>
      </section>
    </div>
  );
}
