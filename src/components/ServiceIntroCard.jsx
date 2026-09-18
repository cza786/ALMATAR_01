import Link from 'next/link';

export default function ServiceIntroCard({ eyebrow, title, description, image, imageAlt, href = '/about', buttonLabel = 'READ COMPANY VISION & MISSION' }) {
  return (
    <section className="service-intro-wrap" aria-labelledby="service-intro-title">
      <div className="service-intro-card">
        <div className="service-intro-copy">
          <span className="service-intro-eyebrow">{eyebrow}</span>
          <h2 id="service-intro-title">{title}</h2>
          <p>{description}</p>
          <Link href={href} className="service-intro-button">
            <span>{buttonLabel}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="service-intro-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
