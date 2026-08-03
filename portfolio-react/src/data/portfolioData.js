// All images live as real files in src/assets/images and are imported here,
// instead of being embedded as giant base64 strings like the old script.js.

import profile from '../assets/images/profile.jpg';

import web1 from '../assets/images/web1.jpg';
import web2 from '../assets/images/web2.jpg';
import web3 from '../assets/images/web3.jpg';
import web4 from '../assets/images/web4.jpg';
import web5 from '../assets/images/web5.jpg';
import web6 from '../assets/images/web6.jpg';

import posterCar from '../assets/images/poster_car.jpg';
import posterDoctor from '../assets/images/poster_doctor.jpg';

import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';

import certTata from '../assets/images/cert_tata.jpg';
import certAspire from '../assets/images/cert_aspire.jpg';
import certElevvo from '../assets/images/cert_elevvo.jpg';
import certCanva from '../assets/images/cert_canva.jpg';
import certAiesec from '../assets/images/cert_aiesec.jpg';
import certChinese from '../assets/images/cert_chinese.jpg';
import certPolice from '../assets/images/cert_police.jpg';

export const profileImg = profile;

// Figma project preview strip (inside the dark "H&M's Delight — Figma Design" card)
export const figmaPreview = [
  { src: web1, title: "H&M's Delight — Homepage" },
  { src: web2, title: "H&M's Delight — About & Team" },
  { src: web4, title: "H&M's Delight — Location" },
  { src: web6, title: "H&M's Delight — Contact" },
];

// Live website screenshots grid
export const websiteScreenshots = [
  { src: web1, title: 'Homepage' },
  { src: web2, title: 'About & Team' },
  { src: web3, title: 'Private Dining' },
  { src: web4, title: 'Location' },
  { src: web5, title: 'Menu' },
  { src: web6, title: 'Contact' },
];

// Poster / graphic design grid
export const posters = [
  { src: posterCar, title: 'BMW Night Rider Poster' },
  { src: posterDoctor, title: 'Spine Clinic Poster' },
];

// Leadership content grid (AUCIS social media)
export const leadershipContent = [
  { src: pro1, title: 'Leadership Content — Part 1' },
  { src: pro2, title: 'Leadership Content — Part 2' },
  { src: pro3, title: 'Leadership Content — Part 3' },
];

// Certificates grid
export const certificates = [
  { img: certTata, title: 'GenAI Data Analytics Simulation', org: 'Tata Group · Forage · Aug 2025' },
  { img: certAspire, title: '2025 Aspire Leaders Program', org: 'Aspire Institute · Dec 2025' },
  { img: certElevvo, title: 'Frontend Development Internship', org: 'Elevvo Pathways · Nov 2025' },
  { img: certCanva, title: 'Canva 4 Weeks Program', org: 'Fluxxion x Canva · Oct 2025' },
  { img: certAiesec, title: 'Youth Speak Forum — AIESEC', org: 'AIESEC in Islamabad · 2025' },
  { img: certChinese, title: 'Chinese Language Course', org: 'University of Central Punjab · Summer Jam 2025' },
  { img: certPolice, title: 'Volunteers in Police Internship', org: 'Punjab Police · VIP Batch No. 21' },
];

// Skills & tools band — `dot` matches the old .sa / .st / .ss dot-color classes
export const skills = [
  { name: 'HTML & CSS', dot: 'sa' },
  { name: 'JavaScript', dot: 'sa' },
  { name: 'React.js', dot: 'sa' },
  { name: 'Responsive Design', dot: 'sa' },
  { name: 'UI/UX Design', dot: 'sa' },
  { name: 'Figma', dot: 'st' },
  { name: 'Adobe Illustrator', dot: 'st' },
  { name: 'Canva Pro', dot: 'st' },
  { name: 'Graphic Design', dot: 'st' },
  { name: 'C++', dot: 'ss' },
  { name: 'Java', dot: 'ss' },
  { name: 'C#', dot: 'ss' },
  { name: 'Blazor', dot: 'ss' },
  { name: 'Flutter', dot: 'sa' },
  { name: 'SQL', dot: 'ss' },
  { name: 'MongoDB', dot: 'ss' },
  { name: 'Linux', dot: 'ss' },
  { name: 'GitHub', dot: 'ss' },
  { name: 'Verilog', dot: 'ss' },
  { name: 'Microsoft Office', dot: 'st' },
  { name: 'Data Analytics', dot: 'sa' },
];

// Marquee strip items (rendered twice in the DOM originally, for the seamless loop)
export const marqueeItems = [
  'React.js', 'UI/UX Design', 'Figma', 'JavaScript', 'HTML & CSS',
  'MLSA · Women in Tech', 'Flutter', 'C# · Blazor', 'Data Analytics',
  'Air University, Islamabad',
];

// Experience & leadership timeline
export const experience = [
  {
    date: 'Nov 2025',
    tag: 'Internship',
    tagClass: 'tw',
    title: 'Frontend Development Intern',
    org: 'Elevvo Pathways',
    bullets: [
      'Built responsive web interfaces using HTML, CSS, JavaScript, and React.js',
      'Developed multiple real-world projects with a strong focus on UI/UX and responsiveness',
    ],
  },
  {
    date: 'Aug 2025',
    tag: 'Simulation',
    tagClass: 'tw',
    title: 'GenAI Data Analytics Simulation',
    org: 'Tata Group · Forage',
    bullets: [
      'Conducted EDA using GenAI tools to assess data quality and identify risk indicators',
      'Proposed a no-code predictive modeling framework for customer delinquency risk',
      'Designed an AI-driven collections strategy with ethical AI and compliance principles',
    ],
  },
  {
    date: 'Sep 2025 – now',
    tag: 'Leadership',
    tagClass: 'tl',
    title: 'Executive Member — Women in Tech',
    org: 'MLSA · Microsoft Learn Student Ambassador',
    bullets: [
      'Ensuring active participation of women in tech events, seminars, and workshops',
      'Handling marketing and outreach for community events',
    ],
  },
  {
    date: 'Sep 2024 – now',
    tag: 'Leadership',
    tagClass: 'tl',
    title: 'Executive Member',
    org: 'AUCIS · Air University Computing & Innovation Society',
    bullets: [
      'Authored post-event summaries for all society events',
      'Part of both AUCIS Management and Developers teams',
    ],
  },
  {
    date: 'Sep–Dec 2023',
    tag: 'Tutoring',
    tagClass: 'tw',
    title: 'Physical Science Subject Tutor',
    org: 'Innovators Academy',
    bullets: [
      'Customized lessons in Computer Science, Programming, and Mathematics',
      'Tracked student progress and provided tailored feedback',
    ],
  },
  {
    date: 'Nov 2025 – now',
    tag: 'Ambassador',
    tagClass: 'tv',
    title: 'MATCHVET Ambassador',
    org: 'Air University',
    bullets: [
      'National program ensuring food, health, and wellness of animals — pets and strays',
    ],
  },
  {
    date: 'Sep 2025 – now',
    tag: 'Volunteer',
    tagClass: 'tv',
    title: 'Executive Member',
    org: 'Shaoor Society · Community Service',
    bullets: [
      'Organized community service drives for people in need',
      'Managed events, seminars, and workshops',
    ],
  },
];
