'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const copy = {
  en: {
    about: 'ABOUT US',
    title: 'Our Team',
    subtitle: 'People Behind Our Progress',
    intro: 'At AL-MATAR, our strength comes from our people. Our leadership team brings experience, expertise, and a shared commitment to deliver safe, reliable, and sustainable energy solutions.',
    side: <>PEOPLE<br />EXPERTISE<br />INTEGRITY<br />A STRONGER<br />TOMORROW</>,
    home: 'Home', aboutUs: 'About Us', team: 'OUR TEAM',
    leadership: 'Leadership for a Stronger Tomorrow',
    leadershipIntro: 'Our dedicated leadership and team members drive our success through their experience, professionalism, and commitment to excellence.',
    board: 'Board of Directors', boardNote: 'Leading with vision and integrity.',
    management: 'Management Team', managementNote: 'Driving operations with expertise.',
    journey: 'JOIN OUR JOURNEY', cta: 'A Stronger Tomorrow Together',
    ctaText: 'Be part of a team that values people, innovation, and sustainable growth.', careers: 'Explore Careers',
  },
  ar: {
    about: 'من نحن', title: 'فريقنا', subtitle: 'الأشخاص وراء نجاحنا',
    intro: 'في المطر، تكمن قوتنا في أفرادنا. يجمع فريق القيادة لدينا الخبرة والكفاءة والالتزام المشترك بتقديم حلول طاقة آمنة وموثوقة ومستدامة.',
    side: <>الأفراد<br />الخبرة<br />النزاهة<br />غدٌ أقوى<br />معًا</>,
    home: 'الرئيسية', aboutUs: 'من نحن', team: 'فريقنا',
    leadership: 'قيادة نحو غدٍ أقوى',
    leadershipIntro: 'يقود فريق القيادة وأعضاء الفريق لدينا نجاحنا بخبرتهم واحترافيتهم والتزامهم بالتميز.',
    board: 'مجلس الإدارة', boardNote: 'قيادة برؤية ونزاهة.',
    management: 'فريق الإدارة', managementNote: 'قيادة العمليات بخبرة.',
    journey: 'انضم إلى رحلتنا', cta: 'غدٌ أقوى معًا',
    ctaText: 'كن جزءًا من فريق يقدّر الأفراد والابتكار والنمو المستدام.', careers: 'استكشف الوظائف',
  },
};

// Team members list with full bilingual support for name and role
const boardMembers = [
  {
    id: 'suleiman-matar',
    nameEn: 'Suleiman Matar Youssef',
    nameAr: 'سليمان مطر يوسف',
    roleEn: 'Chairman of the Board',
    roleAr: 'رئيس مجلس الإدارة',
    photo: null,
  },
  {
    id: 'mohammed-amin',
    nameEn: 'Mohammed Amin Suleiman',
    nameAr: 'محمد أمين سليمان',
    roleEn: 'Vice Chairman of the Board',
    roleAr: 'نائب رئيس مجلس الإدارة',
    photo: null,
  },
  {
    id: 'mohammed-nouri',
    nameEn: 'Mohammed Nouri Mohammed Tamer',
    nameAr: 'محمد نوري محمد تامر',
    roleEn: 'Independent Board Member',
    roleAr: 'عضو مستقل في مجلس الإدارة',
    photo: null,
  },
];

const managementMembers = [
  {
    id: 'nazdar-mohammed',
    nameEn: 'Nazdar Mohammed Amin Suleiman',
    nameAr: 'نازدار محمد أمين سليمان',
    roleEn: 'Chief Executive Officer (CEO)',
    roleAr: 'الرئيس التنفيذي',
    photo: null,
  },
  {
    id: 'hassan-ibrahim',
    nameEn: 'Hassan Ibrahim',
    nameAr: 'حسن إبراهيم',
    roleEn: 'Head of Operations',
    roleAr: 'رئيس العمليات',
    photo: null,
  },
  {
    id: 'muhannad-alali',
    nameEn: 'Muhannad Mohammed Al-Ali',
    nameAr: 'مهند محمد العلي',
    roleEn: 'Technical Manager',
    roleAr: 'المدير الفني',
    photo: null,
  },
];

function MemberCard({ name, role, photo }) {
  return (
    <article className="team-member-card">
      <div className="team-avatar">
        {photo ? (
          <img src={photo} alt={name} className="team-avatar-img" />
        ) : (
          <div className="team-avatar-placeholder" aria-hidden="true">
            <span />
          </div>
        )}
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}

function TeamGroup({ title, note, members, lang }) {
  return (
    <section className="team-group">
      <div className="team-group-toggle">
        <strong>{title}</strong>
        <span>{note}</span>
        <i aria-hidden="true">⌃</i>
      </div>
      <div className="team-members">
        {members.map((m) => (
          <MemberCard
            key={m.id || m.nameEn}
            name={lang === 'ar' ? m.nameAr : m.nameEn}
            role={lang === 'ar' ? m.roleAr : m.roleEn}
            photo={m.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default function OurTeamPage() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.en;

  return (
    <div className="our-team-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="team-hero">
        <img src="/images/careers_engineers_hero.webp" alt="AL-MATAR field engineers" />
        <div className="team-hero-overlay">
          <div className="team-hero-copy">
            <span className="team-eyebrow"><i /> {text.about}</span>
            <h1>{text.title}</h1>
            <h2>{text.subtitle}</h2>
            <p>{text.intro}</p>
          </div>
          <span className="team-hero-side">{text.side}</span>
        </div>
      </section>

      <div className="team-breadcrumb">
        <Link href="/">{text.home}</Link>
        <b>›</b>
        <Link href="/about">{text.aboutUs}</Link>
        <b>›</b>
        <span>{text.title}</span>
      </div>

      <main className="team-content">
        <div className="team-heading">
          <span className="team-eyebrow"><i /> {text.team}</span>
          <h2>{text.leadership}</h2>
          <p>{text.leadershipIntro}</p>
        </div>
        <TeamGroup title={text.board} note={text.boardNote} members={boardMembers} lang={lang} />
        <TeamGroup title={text.management} note={text.managementNote} members={managementMembers} lang={lang} />
      </main>

      <section className="team-cta">
        <div>
          <span className="team-eyebrow"><i /> {text.journey}</span>
          <h2>{text.cta}</h2>
          <p>{text.ctaText}</p>
          <Link href="/careers">{text.careers} <b>→</b></Link>
        </div>
      </section>
    </div>
  );
}
