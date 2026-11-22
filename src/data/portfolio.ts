/** Central portfolio data, grounded in Uday Kumar's supplied resume. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Uday Kumar',
  displayName: 'Uday Kumar',
  firstName: 'UDAY',
  seriesTag: 'ECE · RF & MICROWAVE · AUTONOMOUS SYSTEMS',
  originalLabel: 'A UDAY ORIGINAL',
  role: 'ECE Undergraduate · RF & Microwave Research · IEEE Student Branch President',
  tagline: ['ECE Undergraduate', 'RF & Microwave Research Intern, IIT Delhi', 'IEEE Student Branch President'],
  intro:
    'I am an Electronics and Communication Engineering undergraduate drawn to the point where research meets hands-on engineering. My work spans RF and antenna research, embedded systems, autonomous robotics and IoT, alongside web projects and technical leadership through IEEE.',
  location: 'Delhi NCR, India',
  email: 'uday20652@gmail.com',
  phone: '+91 9891721141',
  links: {
    linkedin: 'https://www.linkedin.com/in/uday-kumar-a4b6a3309/',
    github: 'https://github.com/UDAY8110',
  },
  resumeDocx: '/assets/Uday_Kumar_Resume.docx',
  interests: ['RF & Microwave Engineering', 'Antenna Design', 'Embedded Systems', 'Autonomous Robotics', 'IoT'],
};

export const education = [
  {
    school: 'Manav Rachna International Institute of Research and Studies',
    place: 'Delhi NCR, India',
    degree: 'B.Tech in Electronics & Communication Engineering',
    period: '2024 – 2028',
    score: 'Semester 2: 8.10 · Semester 3: 8.25 · Semester 4: 8.73 SGPA',
  },
];

export const experience = [
  {
    company: 'IIT Delhi',
    role: 'RF & Microwave Antenna Research Intern',
    place: 'New Delhi, India',
    period: 'June – July 2026',
    points: [
      'Designing and simulating high-gain slotted waveguide and microstrip patch antenna arrays for X-band RF applications using CST Studio Suite.',
      'Analyzing S-parameters, gain, return loss and bandwidth under faculty supervision, and contributing to wireless communications research and manuscript development.',
    ],
  },
  {
    company: 'Manav Rachna International Institute of Research and Studies',
    role: 'PCB Design Intern',
    place: 'Faridabad, India',
    period: '1 month',
    points: [
      'Completed PCB development in Altium Designer, including schematic capture, component placement, high-speed routing and design-rule checks.',
      'Prepared production-ready layouts for embedded hardware modules with attention to signal integrity and manufacturability.',
    ],
  },
];

export const leadership = {
  role: 'IEEE Student Branch President',
  detail:
    'Elected to lead the university IEEE chapter, spearheading technical workshops, industry collaborations and a research-first culture across 100+ student members.',
};

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  status: 'Ongoing' | 'Completed';
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  website?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  palette: Palette;
  motif: 'book' | 'helmet' | 'travel' | 'air' | 'calculator';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'pixieplot',
    title: 'PixiePlot — AI-Powered Storytelling',
    status: 'Ongoing',
    genre: 'AI · Storytelling · PWA',
    logline: 'An AI-powered storytelling app for personalized children’s stories and voice narration.',
    stack: ['Flutter', 'AI', 'PWA', 'Authentication'],
    build: [
      'Developing a progressive web app for personalized children’s story generation, with a responsive interface, authentication and a story library.',
      'Integrating AI-generated stories with a voice-storytelling workflow, with attention to accessibility, performance and scalable architecture.',
    ],
    features: ['Personalized story generation', 'User authentication', 'Story library', 'Voice storytelling workflow'],
    metrics: [],
    website: 'https://pixieplot.com/',
    thumbnail: '/pixieplot.png',
    thumbnailAlt: 'PixiePlot homepage showing its navigation and personalized-storytelling hero section',
    palette: { ...violet, accent: '#b98bff' },
    motif: 'book',
  },
  {
    id: 'smart-helmet',
    title: 'Smart Helmet',
    status: 'Ongoing',
    genre: 'IoT · Embedded · Safety',
    logline: 'An accident-detection and alert system built around a Raspberry Pi Pico and connected sensors.',
    stack: ['Raspberry Pi Pico', 'MPU6050', 'GPS', 'GSM'],
    build: [
      'Building an IoT safety system that uses an MPU6050 IMU, GPS and GSM modules for accident detection, location tagging and automated emergency alerts.',
      'The project is the practical basis for the presented smart-helmet review that received the IEEE IECS 2026 Best Paper Award.',
    ],
    features: ['Accident detection', 'GPS-based location tagging', 'Automated emergency alerts', 'Sensor integration'],
    metrics: [],
    palette: { ...crimson, accent: '#ff3d5a' },
    motif: 'helmet',
  },
  {
    id: 'uday-tour-travels',
    title: 'Uday Tour & Travels',
    status: 'Completed',
    genre: 'Web Development · Travel',
    logline: 'A responsive website for tour packages, vehicle rentals and customer inquiries.',
    stack: ['Responsive web design', 'Vercel'],
    build: [
      'Developed and deployed a mobile-friendly website showcasing tour packages and vehicle rental services, with a way for customers to make inquiries.',
      'Established an online presence for a real-world travel business.',
    ],
    features: ['Tour package listings', 'Vehicle rental information', 'Customer inquiries', 'Mobile-friendly layout'],
    metrics: [],
    website: 'https://uday-travels-in.vercel.app/',
    thumbnail: '/udaytravels.png',
    thumbnailAlt: 'Uday Tour & Travels homepage showing its navigation and premium taxi and tour hero section',
    palette: { ...ocean, accent: '#4cc9ff' },
    motif: 'travel',
  },
  {
    id: 'air-quality-monitor',
    title: 'Air Quality Monitoring System',
    status: 'Completed',
    genre: 'IoT · Environmental Monitoring',
    logline: 'A multi-sensor system for continuous air-quality monitoring and threshold-based alerts.',
    stack: ['Multi-sensor gas detection', 'Environmental monitoring', 'Threshold alerts'],
    build: [
      'Built a real-time environmental monitoring platform using multi-sensor gas-detection arrays for continuous air-quality analytics.',
      'Added threshold-based alerts for particulate and gaseous pollutants.',
    ],
    features: ['Continuous monitoring', 'Multi-sensor gas detection', 'Air-quality analytics', 'Threshold-based alerts'],
    metrics: [],
    palette: { ...jade, accent: '#46e3a8' },
    motif: 'air',
  },
  {
    id: 'binary-calculator',
    title: 'Binary Calculator using Arduino',
    status: 'Completed',
    genre: 'Embedded Systems · Hardware',
    logline: 'An Arduino-based hardware implementation of binary arithmetic operations.',
    stack: ['Arduino', 'Embedded hardware', 'I/O interfacing'],
    build: [
      'Implemented binary arithmetic operations on Arduino with custom input/output interfacing and state-machine logic for real-time computation display.',
    ],
    features: ['Binary arithmetic', 'Custom I/O interfacing', 'State-machine logic', 'Real-time computation display'],
    metrics: [],
    palette: { ...amber, accent: '#ffb547' },
    motif: 'calculator',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
};

export const achievements: Achievement[] = [
  {
    id: 'iecs-best-paper',
    title: 'Best Paper Award',
    org: 'IEEE IECS 2026 · VIT Bhopal University',
    detail:
      'Awarded for the presented review “IoT and Sensor Fusion in Smart Helmets: A Review Toward Safer and Sustainable Mobility” at the 1st IEEE International Conference on Intelligent Electronics & Computational Systems.',
    laurel: 'Presented Research',
  },
  {
    id: 'nxp-cup-finalist',
    title: 'NXP Cup India 2026 Regional Finalist',
    org: 'NXP Semiconductors India',
    detail:
      'Placed among the top 100 of 4,600+ teams nationwide. Contributed to a ROS2-based autonomous vehicle with computer vision, sensor fusion, line following and obstacle avoidance.',
    laurel: 'Top 100 · 4,600+ Teams',
  },
];

export type ResearchItem = {
  title: string;
  status: string;
  detail: string;
  kind: 'presented' | 'in-development';
};

export const research: ResearchItem[] = [
  {
    title: 'IoT and Sensor Fusion in Smart Helmets: A Review Toward Safer and Sustainable Mobility',
    status: 'Presented · Best Paper Award',
    detail: '1st IEEE International Conference on Intelligent Electronics & Computational Systems (IECS 2026), VIT Bhopal University.',
    kind: 'presented',
  },
  {
    title: 'Design and Comparative Analysis of 4-Slot and 8-Slot Slotted Waveguide Antenna Arrays in X-Band',
    status: 'Manuscript in development · Not submitted',
    detail: 'Research manuscript under development.',
    kind: 'in-development',
  },
  {
    title: 'Design and Performance Analysis of a Slot-Loaded Microstrip Patch Antenna for Enhanced Bandwidth',
    status: 'Manuscript in development · Not submitted',
    detail: 'Research manuscript under development.',
    kind: 'in-development',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming and web fundamentals',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Python', mono: 'Py' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & Robotics',
    subtitle: 'Embedded platforms and autonomous systems',
    skills: [
      { name: 'Arduino', mono: 'Ar' },
      { name: 'Raspberry Pi Pico', mono: 'RP' },
      { name: 'ROS2', mono: 'R2' },
      { name: 'Sensor interfacing', mono: 'SI' },
      { name: 'Autonomous navigation', mono: 'AN' },
    ],
  },
  {
    id: 'eda',
    title: 'EDA & Simulation',
    subtitle: 'PCB design and RF simulation',
    skills: [
      { name: 'Altium Designer', mono: 'Al' },
      { name: 'Cadence', mono: 'Cd' },
      { name: 'CST Studio Suite', mono: 'CST' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT & Hardware',
    subtitle: 'Prototyping and electronics integration',
    skills: [
      { name: 'IoT prototyping', mono: 'IoT' },
      { name: 'Hardware design', mono: 'HW' },
      { name: 'Sensor fusion', mono: 'SF' },
      { name: 'Electronics integration', mono: 'EI' },
    ],
  },
  {
    id: 'research',
    title: 'Research Areas',
    subtitle: 'RF systems and autonomous engineering',
    skills: [
      { name: 'RF/Microwave Engineering', mono: 'RF' },
      { name: 'Antenna design', mono: 'AD' },
      { name: 'Wireless communication', mono: 'WC' },
      { name: 'Autonomous systems', mono: 'AS' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development and debugging workflow',
    skills: [
      { name: 'Linux', mono: 'Li' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Embedded debugging', mono: 'ED' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  C: ['Technical skills'],
  'C++': ['Technical skills'],
  Python: ['Technical skills'],
  HTML: ['Technical skills'],
  CSS: ['Technical skills'],
  JavaScript: ['Technical skills'],
  Arduino: ['Binary Calculator using Arduino'],
  'Raspberry Pi Pico': ['Smart Helmet'],
  ROS2: ['NXP Cup India 2026 autonomous vehicle'],
  'Sensor interfacing': ['Smart Helmet', 'Air Quality Monitoring System'],
  'Autonomous navigation': ['NXP Cup India 2026 autonomous vehicle'],
  'Altium Designer': ['PCB Design internship'],
  Cadence: ['EDA and simulation skills'],
  'CST Studio Suite': ['IIT Delhi antenna research internship'],
  'IoT prototyping': ['Smart Helmet', 'Air Quality Monitoring System'],
  'Hardware design': ['Binary Calculator using Arduino', 'PCB Design internship'],
  'Sensor fusion': ['Smart Helmet review', 'NXP Cup India 2026'],
  'Electronics integration': ['Embedded and IoT projects'],
  'RF/Microwave Engineering': ['IIT Delhi antenna research internship'],
  'Antenna design': ['X-band antenna research'],
  'Wireless communication': ['RF and microwave research'],
  'Autonomous systems': ['NXP Cup India 2026 autonomous vehicle'],
  Linux: ['Tools'],
  Git: ['Tools'],
  GitHub: ['Tools'],
  'Embedded debugging': ['Tools'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The ECE Foundation',
    period: '2024 – 2028',
    synopsis: 'Studying Electronics & Communication Engineering at Manav Rachna International Institute of Research and Studies.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Undergraduate',
        description: 'B.Tech in Electronics & Communication Engineering at Manav Rachna International Institute of Research and Studies.',
        tags: ['B.Tech', 'ECE'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Academic Arc',
        description: 'Semester SGPA: 8.10 in Semester 2, 8.25 in Semester 3 and 8.73 in Semester 4.',
        tags: ['Semester 2 · 8.10', 'Semester 3 · 8.25', 'Semester 4 · 8.73'],
        runtime: 'Semesters 2 – 4',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Research & Leadership',
    period: '2026',
    synopsis: 'RF and microwave antenna research, PCB design practice, and student leadership through IEEE.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'RF Research at IIT Delhi',
        description: 'Designing and simulating slotted waveguide and microstrip patch antenna arrays for X-band applications using CST Studio Suite.',
        tags: ['RF & Microwave', 'X-band', 'CST Studio Suite'],
        runtime: 'June – July 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'PCB Design',
        description: 'Schematic capture, component placement, high-speed routing and design-rule checks for embedded hardware layouts.',
        tags: ['PCB Design', 'Altium Designer'],
        runtime: '1 month',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'IEEE Student Branch President',
        description: 'Leading technical workshops, industry collaborations and student research initiatives across 100+ student members.',
        tags: ['IEEE', 'Technical Leadership', 'Research'],
        runtime: 'Student Branch',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Projects & Recognition',
    period: '2026',
    synopsis: 'Building across embedded systems, IoT, robotics and web development, alongside conference research and competition work.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Smart Helmet Research',
        description: 'The smart-helmet review was presented at IEEE IECS 2026 and received the Best Paper Award.',
        tags: ['Presented Paper', 'Best Paper Award', 'IEEE IECS 2026'],
        runtime: 'VIT Bhopal University',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'NXP Cup India',
        description: 'Regional Finalist, placing among the top 100 of 4,600+ teams with a ROS2-based autonomous vehicle.',
        tags: ['Regional Finalist', 'ROS2', 'Top 100'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Five Engineering Projects',
        description: 'PixiePlot, Smart Helmet, Uday Tour & Travels, an air-quality monitor and an Arduino binary calculator.',
        tags: ['AI & Web', 'IoT', 'Embedded Systems'],
        runtime: '2 ongoing · 3 completed',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Conference research', title: 'Best Paper Award', detail: 'IEEE IECS 2026 · VIT Bhopal University', palette: amber },
  { label: 'National competition', title: 'NXP Cup India 2026', detail: 'Regional Finalist · Top 100 of 4,600+ teams', palette: ocean },
  { label: 'Research internship', title: 'RF & Microwave', detail: 'Antenna research · IIT Delhi', palette: crimson },
  { label: 'Student leadership', title: 'IEEE President', detail: 'Technical initiatives and student research', palette: jade },
  { label: 'PCB design', title: 'Hardware Layouts', detail: 'PCB Design Intern · Altium Designer', palette: amber },
  { label: 'X-band research', title: 'Antenna Arrays', detail: 'Slotted waveguide and microstrip patch', palette: violet },
  { label: 'IoT safety', title: 'Smart Helmet', detail: 'Accident detection and emergency alerts', palette: crimson },
  { label: 'Storytelling app', title: 'PixiePlot', detail: 'AI-powered · Ongoing', palette: violet },
  { label: 'Environmental IoT', title: 'Air Quality', detail: 'Multi-sensor monitoring · Completed', palette: jade },
  { label: 'Web project', title: 'Tour & Travels', detail: 'Responsive website · Completed', palette: ocean },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['Manav Rachna International Institute of Research and Studies', '2024 – 2028 · Delhi NCR, India'],
    chips: ['S2 8.10', 'S3 8.25', 'S4 8.73'],
  },
  {
    kicker: 'Research',
    title: 'RF & Microwave',
    lines: ['Antenna research internship · IIT Delhi', 'X-band slotted waveguide and microstrip patch arrays', 'CST Studio Suite · June – July 2026'],
  },
  {
    kicker: 'Leadership',
    title: 'IEEE Student Branch President',
    lines: ['Leading technical initiatives, workshops and collaborations', 'Supporting student research activities across 100+ members'],
  },
  {
    kicker: 'Projects',
    title: 'Five Builds',
    lines: ['PixiePlot and Smart Helmet · Ongoing', 'Uday Tour & Travels, Air Quality Monitor and Arduino Binary Calculator · Completed'],
  },
  {
    kicker: 'Recognition',
    title: 'Best Paper Award',
    lines: ['IEEE IECS 2026 · VIT Bhopal University', 'NXP Cup India 2026 Regional Finalist', 'Top 100 among 4,600+ teams'],
  },
  {
    kicker: 'Research in progress',
    title: 'Antenna Manuscripts',
    lines: ['4-slot and 8-slot slotted waveguide antenna arrays in X-band', 'Slot-loaded microstrip patch antenna for enhanced bandwidth', 'Both manuscripts are in development and not yet submitted'],
  },
];

export type ProfileId = 'uday' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'uday',
    name: 'Uday Kumar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Projects, skills & research first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Highlights',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education · experience · leadership', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects · 2 ongoing`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Top Picks', meta: 'Research · awards · projects', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Research & Awards', card: 'Research & Awards', meta: `${achievements.length} Awards · ${research.length} Research items`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: violet },
};
