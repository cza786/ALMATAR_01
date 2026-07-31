import Link from 'next/link';
import NextPageBanner from '@/components/NextPageBanner';

export const metadata = {
  title: 'About Us | ALMATAR Integrated Oilfield & Projects Management',
  description: 'Learn about ALMATAR Petroleum Services vision, mission, and operational profile in Syria.'
};

export default function AboutPage() {
  return (
    <>
      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Static Header Banner */}
        <div className="static-page-banner">
          <img src="/images/banner_about_corporate.png" alt="Almatar Corporate About" />
          <div className="static-banner-overlay">
            <span className="section-eyebrow" style={{ color: 'var(--accent-cyan)' }}>COMPANY PROFILE</span>
            <h1 className="static-banner-title">ABOUT ALMATAR PETROLEUM SERVICES</h1>
          </div>
        </div>

        {/* PDF Vision & Mission Section */}
        <div className="about-hero-card position-relative">
          <div className="about-split-grid">
            <div className="vision-mission-wrap">
              <div className="vm-box">
                <h3 className="vm-title">🎯 OUR VISION</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  &ldquo;A range of specialized services and solutions to the oil and gas industry within SYR OPCO with technical collaboration with internationally reputed organization in the industry.&rdquo;
                </p>
              </div>

              <div className="vm-box mission">
                <h3 className="vm-title">🚀 OUR MISSION</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  Is to establish healthy market competition with no compromise on the quality of services we deliver. To achieve our goal we use the state of the art technology equipment and a highly qualified and experienced service team. Our success is measured by the solutions we offer and customer satisfaction.
                </p>
              </div>
            </div>

            <div>
              <div className="circle-img-container">
                <img src="/images/about_field_operations.png" alt="Almatar Field Operations" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-hero-card position-relative" style={{ backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1rem' }}>OPERATIONAL SYRIA PROFILE</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
            ALMATAR as a provider of oil and gas supplies and services in Syria supporting onshore oil operations in the region. Our vision is to build on our unparalleled reputation within the SYR and to expand further.
          </p>
        </div>

      </div>

      {/* Next Page Navigation Banner */}
      <NextPageBanner
        title="Our Services"
        subtitle="Learn more"
        link="/well-services"
        bgImage="/images/banner_well_services_hero.png"
      />
    </>
  );
}
