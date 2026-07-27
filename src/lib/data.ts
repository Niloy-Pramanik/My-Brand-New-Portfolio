/**
 * Central content source.
 * Every value here is pulled from the real portfolio (repo + assets).
 * Nothing in this file is invented — if a field isn't available, it's omitted
 * rather than filled with placeholder text.
 */

export const PROFILE = {
  name: 'Niloy Pramanik',
  role: 'FULL-STACK DEVELOPER',
  tagline:
    'Full-Stack Developer & Aspiring AI Engineer building modern web applications and exploring AI-driven solutions.',
  bio: [
    'Full-stack developer & AI researcher passionate about building elegant solutions that solve real problems. I craft intuitive web experiences with Python, Next.js, React, and modern tooling, while exploring the frontiers of AI security and system design.',
    "Driven by curiosity and the belief that great products come from continuous learning. I thrive on tackling challenging problems, collaborating with brilliant minds, and pushing the boundaries of what's possible on the web.",
  ],
  location: 'Dhaka, Bangladesh',
  email: 'niloypramanik126@gmail.com',
  phone: '+880 1796 894 640',
  phoneHref: 'tel:+8801796894640',
  cvUrl: '/CV_Niloy_Pramanik.pdf',
  heroImage: '/images/portfolio_demo.jpg',
};

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/niloy-pramanik-01a638233/' },
  { label: 'GitHub', href: 'https://github.com/Niloy-Pramanik' },
  { label: 'Email', href: 'mailto:niloypramanik126@gmail.com' },
  { label: 'Phone', href: 'tel:+8801796894640' },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  linkExternal: boolean;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'HireMe',
    description: 'A comprehensive job matching platform designed to connect talented developers with career opportunities using real-time skill matching and notifications.',
    tech: ['Flask', 'HTMX', 'Tailwind CSS', 'Alpine.js'],
    link: 'https://github.com/Niloy-Pramanik/HireMe',
    linkExternal: true,
    image: '/hireme.png',
  },
  {
    id: '02',
    title: 'SIdeChat',
    description: 'A browser extension for Claude & ChatGPT that enables contextual floating side conversations using your existing session—no API key required.',
    tech: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS'],
    link: 'https://github.com/Niloy-Pramanik/SIdeChat',
    linkExternal: true,
    image: '/sidechat_new_hero.png',
  },
  {
    id: '03',
    title: 'PotholeGrade-BD',
    description: 'A localized computer vision system that detects potholes via polygonal segmentation and calculates depth using photometric shadow analysis.',
    tech: ['Python', 'Computer Vision', 'OpenCV'],
    link: 'https://github.com/Niloy-Pramanik/PotholeGrade-BD',
    linkExternal: true,
    image: '/pothole.png',
  },
  {
    id: '04',
    title: 'My-Portfolio-Website',
    description: 'My personal portfolio website designed to showcase my skills, projects, and research areas with a modern tech stack and dynamic animations.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    link: 'https://github.com/Niloy-Pramanik/My-Portfolio-Website',
    linkExternal: true,
    image: '/portfolio.png',
  },
];

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '01',
    title: 'SWE 1st Runner-Up',
    badge: '1st Runner-Up',
    description:
      'Excellence in software engineering and innovative problem-solving at the CSE Project Show, United International University.',
    image: '/SWE_1st_RunnerUP.PNG',
  },
  {
    id: '02',
    title: 'FYDP-1 2nd Runner-Up',
    badge: '2nd Runner-Up',
    description:
      'Outstanding achievement in the Final Year Design Project competition for innovative engineering.',
    image: '/FYDP-1.PNG',
  },
  {
    id: '03',
    title: 'Hackathon Winner',
    badge: 'Judges Choice',
    description:
      'First place winner in a 48-hour hackathon competition for innovative solution development.',
    image: '/Hackathon.jpg',
  },
];

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'SWE 1st Runner-Up',
    issuer: 'United International University',
    date: 'CSE Project Show',
    image: '/1st%20runner%20up_certificate.JPG',
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'FYDP-1 2nd Runner-Up',
    issuer: 'United International University',
    date: 'Final Year Design Project',
    image: '/2nd%20runner%20up_certificate.JPG',
    credentialUrl: '#',
  },
  {
    id: 3,
    title: 'Art Of Communication',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/certificate-art-of-communication_page-0001.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/010a0166ade8',
  },
  {
    id: 4,
    title: 'Corporate Presentation Skills',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/certificate-corporate-presentation-skill.jpgskills_page-0001.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/9fd5e013e1bd',
  },
  {
    id: 5,
    title: 'Sharpen your Communication Skills',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/Sharpen-your-communication-skill.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/60c0799e7430',
  },
  {
    id: 6,
    title: 'LinkedIn 101',
    issuer: 'Grameenphone Academy',
    date: 'March 2024',
    image: '/Linkedin-101.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/065514ccd568',
  },
  {
    id: 7,
    title: 'Smart CV Writing',
    issuer: 'Grameenphone Academy',
    date: 'January 2024',
    image: '/certificate-smart-cv.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/6fdaae304223',
  },
];

export interface ToolItem {
  name: string;
  description: string;
}

export interface ToolGroup {
  category: string;
  items: ToolItem[];
}

export const TOOLS: ToolGroup[] = [
  { 
    category: 'Languages', 
    items: [
      { name: 'C', description: 'Systems Programming' },
      { name: 'C++', description: 'Performance & OOP' },
      { name: 'Python', description: 'AI/ML & Backend' },
      { name: 'JavaScript', description: 'Web Interactivity' },
      { name: 'TypeScript', description: 'Type-safe JS' },
    ]
  },
  { 
    category: 'Frontend', 
    items: [
      { name: 'React', description: 'UI Components' },
      { name: 'Next.js', description: 'Full-stack React' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS' },
      { name: 'HTMX', description: 'Server-driven UI' },
      { name: 'Alpine.js', description: 'Lightweight Reactivity' },
    ]
  },
  { 
    category: 'Backend', 
    items: [
      { name: 'Flask', description: 'Python Micro-framework' },
      { name: 'Django', description: 'Python Web Framework' },
    ]
  },
  { 
    category: 'Databases', 
    items: [
      { name: 'MySQL', description: 'Relational DB' },
      { name: 'SQLite', description: 'Embedded DB' },
    ]
  },
  { 
    category: 'AI / ML', 
    items: [
      { name: 'Scikit-Learn', description: 'Classical ML' },
      { name: 'TensorFlow', description: 'Deep Learning' },
    ]
  },
  { 
    category: 'Tools & Platforms', 
    items: [
      { name: 'VS Code', description: 'Code Editor' },
      { name: 'PyCharm', description: 'Python IDE' },
      { name: 'GitHub', description: 'Version Control' },
      { name: 'Jira', description: 'Project Management' },
      { name: 'n8n', description: 'Workflow Automation' },
      { name: 'Cursor', description: 'AI Code Editor' },
      { name: 'Docker', description: 'Containerization' },
    ]
  },
];

export const FOCUS_AREAS = [
  'Machine Learning',
  'Computer Vision',
  'AI Security',
  'Agentic AI',
  'RAG Systems',
  'Wireless Sensor Networks',
];

export const STATS = [
  { value: PROJECTS.length, suffix: '+', label: 'Projects Completed' },
  { value: CERTIFICATES.length, suffix: '+', label: 'Certificates Earned' },
  { value: ACHIEVEMENTS.length, suffix: '+', label: 'Awards Won' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Skill', href: '/skill' },
  { label: 'Project', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Education', href: '/#education' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/#contact' },
];

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoprwe';

export const RESEARCH = {
  intro: 'Final Year Design Project: A comprehensive research focus combining Wireless Sensor Networks, Reinforcement Learning, and Security for modern IoT systems.',
  project: 'Final Year Design Project',
  areas: [
    {
      id: '01',
      title: 'Wireless Sensor Networks (WSN)',
      description: 'Exploring energy-efficient routing protocols, topology control, and data aggregation in distributed sensor nodes.'
    },
    {
      id: '02',
      title: 'Reinforcement Learning',
      description: 'Applying adaptive algorithms to optimize network performance and resource allocation in dynamic environments.'
    },
    {
      id: '03',
      title: 'Security',
      description: 'Developing robust mechanisms to protect data integrity and prevent unauthorized access in decentralized networks.'
    }
  ]
};

export const EDUCATION = {
  university: 'United International University (UIU)',
  degree: 'B.Sc. in Computer Science and Engineering',
  logo: '/UIU_Logo.svg',
  graduationEstimate: 'Expected Graduation: Late 2026',
  journey: "Four years at UIU have been a journey of growth, pressure, and purpose. Between long nights, deadlines, and the constant push to learn something new, I've been fortunate to have mentors who guided me and an environment that challenged me to become better. As I approach the end of this chapter, I'm deeply grateful to God for strength through it all, to my parents for their unconditional support, and to my teachers for their patience and guidance along the way.",
  courses: [
    { code: 'CSE 4889', title: 'Machine Learning', credits: null },
    { code: 'CSE 4883', title: 'Digital Image Processing', credits: 3.0 },
    { code: 'CSE 4891', title: 'Data Mining', credits: 3.0 },
  ],
};
