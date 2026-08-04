import Link from 'next/link';
import NextPageBanner from '@/components/NextPageBanner';

export const metadata = {
  title: 'Careers | Join Our Team at ALMATAR Petroleum Services',
  description: 'Build your future with AlMatar Petroleum Services. Explore professional growth, employee benefits, and life at AlMatar.'
};

export default function CareersPage() {
  const whyWorkItems = [
    {
      title: 'Professional Growth',
      desc: 'Clear advancement pathways, mentorship from senior oilfield experts, and structured skill progression.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Modern Equipment',
      desc: 'Access to state-of-the-art downhole technology, coiled tubing units, and advanced fluid testing labs.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: 'International Projects',
      desc: 'Technical collaboration with internationally reputed energy organizations and SYR OPCO partners.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: 'Safe Working Environment',
      desc: 'Zero-compromise QHSE protocols safeguarding our field engineers and camp operating facilities.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Training Programs',
      desc: 'Continuous technical certification, state-of-the-art simulator training, and safety competency development.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      title: 'Competitive Benefits',
      desc: 'Market-leading financial compensation, performance bonuses, health coverage, and field allowances.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  const culturePoints = [
    { name: 'Teamwork', icon: '🤝', desc: 'Collaborative field environment & supportive team leadership' },
    { name: 'Innovation', icon: '💡', desc: 'Adopting next-generation oilfield chemistry and smart tools' },
    { name: 'Safety', icon: '🛡️', desc: 'Prioritizing health, environment & rigorous risk mitigation' },
    { name: 'Engineering Excellence', icon: '⚡', desc: 'Delivering precision operational results without compromise' },
    { name: 'Career Development', icon: '📈', desc: 'Empowering every team member to reach their leadership potential' }
  ];

  const benefits = [
    {
      title: 'Medical Insurance',
      desc: 'Comprehensive healthcare coverage for employees and dependent family members.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      )
    },
    {
      title: 'Professional Training',
      desc: 'Fully funded technical certifications & specialized well intervention workshops.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      title: 'Career Growth',
      desc: 'Fast-track promotion opportunities based on technical competence and leadership.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Transportation',
      desc: 'Dedicated field logistics, site transport, and travel allowances.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      title: 'Performance Bonuses',
      desc: 'Quarterly and annual financial incentives celebrating project milestones.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
          <line x1="12" y1="6" x2="12" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Safe Work Environment',
      desc: 'World-class protective equipment and rigorous safety compliance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'International Exposure',
      desc: 'Working alongside global petroleum consultants and multinational field teams.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* ===================== HERO BANNER ===================== */}
      <section className="car-hero">
        <div className="car-hero-bg">
          <img src="/images/careers_engineers_hero.png" alt="ALMATAR Petroleum Engineers on industrial site" />
          <div className="car-hero-overlay" />
        </div>
        <div className="car-hero-content container">
          <span className="car-hero-eyebrow">CAREERS AT ALMATAR</span>
          <h1 className="car-hero-title">Join Our Team</h1>
          <div className="car-hero-accent" />
          <p className="car-hero-desc">
            Build your future with AlMatar Petroleum Services — a company where
            engineering excellence, safety, and career development go hand in hand.
          </p>
          <Link href="/contact" className="car-hero-btn">
            View Open Positions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== WHY WORK WITH US ===================== */}
      <section className="car-why-section">
        <div className="container">
          <div className="car-section-header">
            <span className="section-eyebrow">WHY CHOOSE US</span>
            <h2 className="section-title">Why Work With Us</h2>
            <p className="car-section-lead">
              At AlMatar, we invest in our people with the same dedication we bring to every oilfield operation.
            </p>
          </div>
          <div className="car-why-grid">
            {whyWorkItems.map((item, idx) => (
              <div key={idx} className="car-why-card">
                <div className="car-why-icon">{item.icon}</div>
                <h3 className="car-why-title">{item.title}</h3>
                <p className="car-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LIFE AT ALMATAR (DARK FULL-WIDTH) ===================== */}
      <section className="car-life-section">
        <div className="container">
          <div className="car-life-grid">
            <div className="car-life-img">
              <img src="/images/qhse_inspection_team.png" alt="Life at AlMatar – Engineers collaborating onsite" />
              <div className="car-life-img-caption">Engineers & Technical Specialists Collaborating Onsite</div>
            </div>
            <div className="car-life-content">
              <span className="car-life-eyebrow">OUR CULTURE</span>
              <h2 className="car-life-title">Life at AlMatar</h2>
              <p className="car-life-lead">
                At AlMatar Petroleum Services, our people are our greatest strength. We foster an inclusive,
                dynamic, and safety-focused work environment where engineering passion meets operational mastery.
              </p>
              <div className="car-culture-list">
                {culturePoints.map((pt, idx) => (
                  <div key={idx} className="car-culture-item">
                    <div className="car-culture-icon">{pt.icon}</div>
                    <div>
                      <div className="car-culture-name">{pt.name}</div>
                      <div className="car-culture-sub">{pt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EMPLOYEE BENEFITS ===================== */}
      <section className="car-benefits-section">
        <div className="container">
          <div className="car-section-header">
            <span className="section-eyebrow">YOUR REWARDS &amp; PERKS</span>
            <h2 className="section-title">Employee Benefits</h2>
          </div>
          <div className="car-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="car-benefit-card">
                <div className="car-benefit-icon">{benefit.icon}</div>
                <h3 className="car-benefit-title">{benefit.title}</h3>
                <p className="car-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEXT PAGE BANNER ===================== */}
      <NextPageBanner
        title="Contact Us"
        subtitle="Learn more"
        link="/contact"
        bgImage="/images/service_site_camp.png"
      />
    </>
  );
}
