/**
 * Central content source.
 * Content combines owner-provided background with repository-verified implementation.
 * Optional assets and credentials are omitted when unavailable.
 */

export const PROFILE = {
  name: 'Niloy Pramanik',
  role: 'Software Engineering & AI Enthusiast',
  heroLines: ['SOFTWARE', 'ENGINEER'],
  tagline:
    'Final-year CSE student specializing in Data Science. Aspiring AI Engineer with a passion for problem-solving and continuous learning.',
  bio: [
    'I am a final-year Computer Science and Engineering student at United International University, majoring in Data Science, with interests in software engineering, applied AI and solving practical problems through technology.',
    'My academic journey has shaped my approach to learning and personal development. Although I struggled during the early stages of university, consistent effort and a change in my learning approach helped me significantly improve my academic performance, earn consecutive scholarships and achieve a 4.00 trimester GPA.',
    'Whenever I commit to a responsibility or project, I dedicate my time and effort to understanding the problem, learning what is necessary and completing the work. I enjoy applying the analytical and problem-solving approaches developed throughout my studies to practical engineering challenges.',
  ],
  location: 'Dhaka, Bangladesh',
  email: 'niloypramanik126@gmail.com',
  phone: '+880 1796 894 640',
  phoneHref: 'tel:+8801796894640',
  cvUrl: '/Niloy_Pramanik_CV.pdf',
  heroImage: '/images/portfolio_demo.jpg',
  website: 'https://www.niloypramanik.me/',
};

export const SITE_TITLE = 'Niloy Pramanik | Software Engineering & Applied AI';
export const SITE_DESCRIPTION = 'Final-year Computer Science and Engineering student specializing in Data Science, with interests in software engineering, applied AI, reinforcement learning and engineering research.';

export const CAREER_INTERESTS = [
  'Software Engineering', 'AI Engineering', 'Applied Machine Learning',
  'Reinforcement Learning', 'Research and Development',
];

export const EXPERIENCE = { company: 'FlyRank AI', position: 'Backend Engineer Intern', arrangement: 'Remote', status: 'Ongoing' };

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/niloy-pramanik-01a638233/' },
  { label: 'GitHub', href: 'https://github.com/Niloy-Pramanik' },
  { label: 'Email', href: 'mailto:niloypramanik126@gmail.com' },
  { label: 'Phone', href: 'tel:+8801796894640' },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  liveUrl?: string;
  image?: string;
  imageCaption?: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  implementation: string[];
  contributions?: string[];
  considerations?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'merit-rp',
    title: 'MERIT-RP',
    subtitle: 'Energy-Efficient and Secure Wireless Sensor Network Routing',
    category: 'Research · Reinforcement Learning · Network Engineering',
    description: 'Research-oriented WSN routing with adaptive network control and Q-learning-based relay planning.',
    tech: ['C++', 'Reinforcement Learning', 'Q-learning', 'Wireless Sensor Networks'],
    link: 'https://github.com/Knocktern/Merit_RP-codes',
    image: '/merit-rp-source.png',
    imageCaption: 'Authentic source-code screenshot: relay planning in merit_core.hpp on GitHub.',
    overview: 'A research-oriented routing protocol addressing energy efficiency, security and routing reliability in dynamic wireless sensor networks through adaptive network control and reinforcement learning.',
    problem: 'Sensor nodes have limited energy, while changing links and untrusted relays make reliable routing difficult. Relay selection must consider several competing objectives.',
    solution: 'Combine adaptive clustering and network control with sink-side tabular Q-learning to plan constrained relay paths using energy, trust, link stability and transmission cost.',
    features: ['Sink-side relay planning', 'Energy- and trust-aware relay selection', 'Adaptive clustering and network control', 'Routing-hop and relay-load constraints'],
    implementation: [
      'The default configuration divides the network into 25 spatial cells and three residual-energy buckets, producing 75 discrete states.',
      'Seven actions represent six forwarding heuristics—progress, energy, trust, link stability, transmission cost and a balanced heuristic—plus direct transmission to the sink.',
      'The multi-objective reward accounts for transmission cost, residual energy, trust and link stability, with potential-based reward shaping.',
      'Decaying epsilon-greedy exploration is used with 400 training episodes per planning round.',
      'The routing planner uses a six-hop planning constraint and a relay-load limit of three planned flows per relay.',
    ],
    contributions: ['Design and implementation contributions to Q-learning-based relay planning, state-action formulation, reward engineering, learning configuration and constrained routing decisions.'],
    considerations: ['A central engineering challenge is balancing energy cost against trustworthy, stable relay choices within a compact state space.', 'These are implementation details, not claims of experimentally established performance improvements.'],
  },
  {
    id: '02',
    slug: 'goti',
    title: 'Goti',
    subtitle: 'Collaborative Project Management Platform',
    category: 'Software Engineering · Backend Architecture',
    description: 'Structured workspaces for organizations, teams, projects, issues, milestones and time tracking.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JDBC', 'React', 'TypeScript', 'Vite', 'Flyway'],
    link: 'https://github.com/Niloy-Pramanik/Goti---',
    image: '/goti-source.png',
    imageCaption: 'Authentic source-code screenshot: the JdbcTemplate-based ProjectRepository on GitHub.',
    overview: 'A collaborative project management platform designed to organize teams, projects, tasks and development workflows through structured workspaces.',
    problem: 'Teams need a consistent way to connect workspace membership, project delivery and task progress without losing authorization context.',
    solution: 'Model organizations, teams and projects as a hierarchy, with role-aware REST endpoints and a responsive React application.',
    features: ['Organizations → teams → projects', 'Task and issue management', 'Milestones, progress logs and time tracking', 'JWT authentication and context-specific role-based authorization', 'Invitations and an activity inbox'],
    implementation: ['A Java Spring Boot backend exposes stateless REST APIs to a separate React and TypeScript frontend built with Vite.', 'PostgreSQL stores relational workspace and delivery data. Repositories use explicit SQL through JdbcTemplate rather than JPA/Hibernate.', 'Flyway migrations version the schema; Spring Security handles JWT authentication, with organization and team membership governing access.'],
    considerations: ['Preserving organization and team context across permissions and relational queries is a key architectural concern.', 'The repository identifies production-hardening work such as token revocation, password reset and pagination as remaining work.'],
  },
  {
    id: '03',
    slug: 'coconut-station',
    title: 'Coconut Station',
    subtitle: 'Commercial Web Platform',
    category: 'Commercial Web Application · Software Development',
    description: 'A bilingual product platform with a responsive catalog and customer-facing shopping workflows.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Zustand', 'Zod', 'Vercel'],
    link: 'https://github.com/Niloy-Pramanik/Coconut_Station',
    liveUrl: 'https://www.coconutstation.com/',
    image: '/coconut-station.png',
    imageCaption: 'Screenshot of the live Coconut Station homepage, captured during this refinement.',
    overview: 'A bilingual commercial web platform designed to present products and support customer-facing shopping workflows.',
    problem: 'Customers need clear product information and a consistent shopping experience across languages and screen sizes.',
    solution: 'Provide English and Bengali content, responsive product browsing and cart/checkout workflows within a Next.js App Router application.',
    features: ['English and Bengali language support', 'Responsive product catalog and product details', 'Shopping cart and checkout workflows', 'Outlet discovery and customer inquiries', 'SEO metadata and Vercel deployment'],
    implementation: ['Next.js App Router and TypeScript organize the application, with locale-aware content and reusable UI components.', 'PostgreSQL and Drizzle ORM model orders, order items and related customer-facing records.', 'Zustand manages client state; Zod validates form and workflow inputs. Page metadata supports search and social sharing.'],
    considerations: ['The implementation connects localized product presentation, persistent cart state and relational order data.'],
  },
  {
    id: '04',
    slug: 'hireme',
    title: 'HireMe',
    subtitle: 'Recruitment and Online Assessment Platform',
    category: 'Collaborative Software Engineering',
    description: 'A team-built recruitment platform combining video interviews, online assessments and multi-role workflows.',
    tech: ['Flask', 'MySQL', 'SQLAlchemy', 'Jinja2', 'HTMX', 'Alpine.js', 'Tailwind CSS'],
    link: 'https://github.com/Niloy-Pramanik/HireMe',
    image: '/hireme.png',
    imageCaption: 'Existing HireMe project preview.',
    overview: 'A team project combining remote video interviews and online examinations with candidate, employer and interviewer workflows.',
    problem: 'Remote hiring requires coordinated applications, interviews and assessments across several user roles.',
    solution: 'Bring those workflows into a server-rendered Flask application backed by a relational database and dynamic frontend interactions.',
    features: ['Candidate, employer and interviewer workflows', 'Video interviewing and interview rooms', 'Online examinations and candidate assessment', 'Job applications and interview scheduling'],
    implementation: ['Flask renders Jinja2 templates; HTMX supports partial-page interactions and Alpine.js handles lightweight client-side behavior.', 'MySQL and SQLAlchemy model users, jobs, interviews, examinations, questions and candidate attempts.', 'Flask-SocketIO supports real-time interview-room communication; Tailwind CSS styles the interface.'],
    contributions: ['Frontend development.', 'User interface design and implementation.', 'Database-related development.'],
    considerations: ['This was a collaborative project. The features above describe the overall platform; my confirmed work is limited to the contributions listed here.'],
  },
  {
    id: '05',
    slug: 'sidechat',
    title: 'SideChat',
    subtitle: 'Contextual AI Browser Extension',
    category: 'Browser Extension · AI Integration · Software Architecture',
    description: 'A browser extension for Claude & ChatGPT that enables contextual floating side conversations using your existing session—no API key required.',
    tech: ['TypeScript', 'Preact', 'Signals', 'Manifest V3', 'Vite'],
    link: 'https://github.com/Niloy-Pramanik/SIdeChat',
    image: '/sidechat_new_hero.png',
    imageCaption: 'Existing SideChat project preview.',
    overview: 'A browser extension enabling contextual floating conversations with ChatGPT and Claude using existing authenticated browser sessions.',
    problem: 'Asking a follow-up about a small part of a long AI response can interrupt the main conversation and lose its reading context.',
    solution: 'Capture selected text into floating side conversations, with platform-specific adapters keeping browser integration separate from the shared interface.',
    features: ['Contextual floating conversations', 'ChatGPT and Claude adapters', 'Multiple conversations and local persistence', 'Copy and insert-back interactions', 'Interface isolation from the host page'],
    implementation: ['Manifest V3 content scripts mount a Preact interface in a Shadow DOM root; a background service worker handles extension-level events.', 'An adapter factory selects the platform implementation behind a shared adapter interface.', 'Preact Signals manage reactive state and the browser Storage API persists conversations.', 'Vite bundles the TypeScript extension. Conversations integrate with existing authenticated browser sessions rather than a separate Node.js backend.'],
    considerations: ['Host-page changes and session behavior are integration constraints; platform adapters localize that logic.', 'Shadow DOM isolates styling, while shared state and persistence keep the workspace independent of host-page rendering.'],
  },
  {
    id: '06',
    slug: 'potholegrade-bd',
    title: 'PotholeGrade-BD',
    subtitle: 'Intelligent Road Damage Analysis',
    category: 'Computer Vision · Applied AI · Digital Image Processing',
    description: 'A road-damage detection proof of concept with OpenCV analysis and preliminary, simulated repair estimates.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'NumPy'],
    link: 'https://github.com/Niloy-Pramanik/PotholeGrade-BD',
    image: '/pothole.png',
    imageCaption: 'Existing PotholeGrade-BD project preview; displayed estimates are proof-of-concept outputs.',
    overview: 'A computer vision proof of concept designed to identify road damage and support preliminary repair assessment and prioritization.',
    problem: 'Visual road-damage reports need a repeatable way to identify damaged regions and explore repair prioritization.',
    solution: 'Combine YOLOv8 transfer learning for detection with a lightweight OpenCV pipeline for region-of-interest analysis and approximate repair estimates.',
    features: ['YOLOv8 road-damage detection', 'Bounding-box region-of-interest extraction', 'Grayscale intensity analysis', 'Simulated depth and repair-material estimates', 'Threshold-based repair prioritization'],
    implementation: ['The training code uses YOLOv8 transfer learning, with the README documenting an RDD2020 detection proof of concept.', 'The implemented demo extracts bounding boxes and passes regions to the OpenCV processing function.', 'The DIP function converts each region to grayscale and uses intensity standard deviation to produce an approximate, simulated depth value.', 'An assumed pixel scale and material density convert the region and depth estimate into a repair-material estimate; thresholds assign a priority level.'],
    considerations: ['Depth, area and repair-material outputs depend on assumptions and are not validated physical measurements.', 'Polygon segmentation, calibrated depth estimation and custom Bangladesh road data are proposed next steps, not completed PoC capabilities.', 'The separate segmentation-oriented script refers to interfaces absent from the current DIP module. The demo also needs coordinate rescaling when analyzing original images after resized detection.'],
  },
  {
    id: '07',
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Professional and Research Showcase',
    category: 'Web Development · Personal Branding',
    description: 'A responsive showcase of academic background, engineering projects, research, achievements and professional interests.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/Niloy-Pramanik/My-Brand-New-Portfolio',
    liveUrl: 'https://www.niloypramanik.me/',
    image: '/portfolio-refined.png',
    imageCaption: 'Screenshot of the refined portfolio running locally, before deployment.',
    overview: 'A responsive personal website showcasing my academic qualifications, engineering projects, research contributions, achievements and professional interests.',
    problem: 'A portfolio needs to communicate both a concise professional introduction and accurate technical context for individual projects.',
    solution: 'Use concise overview pages and dedicated project details, extending the existing component-based site and visual language.',
    features: ['Seven dedicated project detail pages', 'Home-only sticky profile card', 'Dedicated skills, education, research, certificates and contact pages', 'Responsive navigation and existing animation system', 'Page-level metadata and Formspree contact functionality'],
    implementation: ['Next.js App Router provides shared layouts, static project routes and page-level metadata.', 'Centralized TypeScript content powers reusable project, education, skills and achievement components.', 'Tailwind CSS preserves the established dark theme; Framer Motion and the existing mobile transition component provide motion.', 'The contact form sends messages through the existing Formspree integration.'],
    considerations: ['The refinement preserves the original architecture and design while separating concise overviews from detailed project documentation.'],
  },
];

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  certificateImage?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '01',
    title: 'SWE Lab 1st Runner-Up',
    badge: '1st Runner-Up',
    description:
      '1st Runner-Up, Software Engineering Lab, CSE Project Show, United International University.',
    image: '/SWE_1st_RunnerUP.PNG',
    certificateImage: '/1st%20runner%20up_certificate.JPG',
  },
  {
    id: '02',
    title: 'FYDP-1 2nd Runner-Up',
    badge: '2nd Runner-Up',
    description:
      '2nd Runner-Up, Final Year Design Project I, United International University.',
    image: '/FYDP-1.PNG',
    certificateImage: '/2nd%20runner%20up_certificate.JPG',
  },
  {
    id: '03',
    title: 'Sign-Language Multiplayer Game',
    badge: "Judges’ Choice Award",
    description:
      'Judges’ Choice Award in a 12-hour hackathon for a sign-language-based multiplayer game.',
    image: '/Hackathon.jpg',
  },
];

export const ACADEMIC_ACHIEVEMENTS = [
  'Consecutive academic scholarships.',
  'Achievement of a 4.00 trimester GPA.',
  'Significant academic improvement through consistent learning and dedication.',
];

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'SWE Lab 1st Runner-Up',
    issuer: 'United International University',
    date: 'CSE Project Show',
    image: '/1st%20runner%20up_certificate.JPG',
    credentialUrl: '/1st%20runner%20up_certificate.JPG',
  },
  {
    id: 2,
    title: 'FYDP-1 2nd Runner-Up',
    issuer: 'United International University',
    date: 'Final Year Design Project',
    image: '/2nd%20runner%20up_certificate.JPG',
    credentialUrl: '/2nd%20runner%20up_certificate.JPG',
  },
  {
    id: 3,
    title: 'Python Coder',
    issuer: 'Kaggle',
    date: 'November 2025',
  },
  {
    id: 4,
    title: 'AI-Powered Communication',
    issuer: 'Grameenphone Academy',
    date: 'May 2026',
  },
  {
    id: 5,
    title: 'Art of Communication',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/certificate-art-of-communication_page-0001.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/010a0166ade8',
  },
  {
    id: 6,
    title: 'Corporate Presentation Skills',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/certificate-corporate-presentation-skill.jpgskills_page-0001.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/9fd5e013e1bd',
  },
  {
    id: 7,
    title: 'Sharpen Your Interview Skills',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/Sharpen-your-communication-skill.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/60c0799e7430',
  },
  {
    id: 8,
    title: 'LinkedIn 101',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
    image: '/Linkedin-101.jpg',
    credentialUrl: 'https://www.grameenphone.academy/cert/065514ccd568',
  },
  {
    id: 9,
    title: 'Smart CV',
    issuer: 'Grameenphone Academy',
    date: 'March 2026',
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
  description?: string;
  items: ToolItem[];
}

export const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const TOOLS: ToolGroup[] = [
  { 
    category: 'Core Programming',
    items: [
      { name: 'Python', description: 'Applied AI and problem-solving' },
      { name: 'C++', description: 'Algorithms and research implementation' },
      { name: 'C', description: 'Programming foundations' },
    ]
  },
  { 
    category: 'Backend',
    items: [
      { name: 'Java', description: 'Application programming' },
      { name: 'Spring Boot', description: 'Java backend applications' },
      { name: 'Flask', description: 'Python web applications' },
      { name: 'Node.js', description: 'JavaScript runtime' },
    ]
  },
  {
    category: 'Databases and APIs',
    items: [
      { name: 'SQL', description: 'Relational queries' },
      { name: 'MySQL', description: 'Relational DB' },
      { name: 'PostgreSQL', description: 'Relational application data' },
      { name: 'SQLite', description: 'Embedded DB' },
      { name: 'Relational Database Design', description: 'Schemas and relationships' },
      { name: 'REST API concepts', description: 'Resources, methods and HTTP' },
    ]
  },
  { 
    category: 'Computer Science Fundamentals',
    description: 'Academic knowledge developed through coursework and projects.',
    items: [
      { name: 'Data Structures and Algorithms', description: 'Problem-solving and algorithm analysis' },
      { name: 'Object-Oriented Programming', description: 'Modularity and object modeling' },
      { name: 'Database Management Systems', description: 'Relational data and queries' },
      { name: 'Operating Systems', description: 'Processes, memory and concurrency' },
      { name: 'Software Engineering', description: 'Requirements, design and development' },
      { name: 'Computer Networks', description: 'Protocols and communication' },
      { name: 'Computer Security', description: 'Security principles and threat awareness' },
    ]
  },
  { 
    category: 'Artificial Intelligence and Machine Learning',
    items: [
      { name: 'Reinforcement Learning', description: 'Learning-based decision-making' },
      { name: 'Q-learning', description: 'Tabular relay-planning research' },
      { name: 'Machine Learning', description: 'Model development and evaluation' },
      { name: 'Computer Vision', description: 'Image-based detection and analysis' },
      { name: 'Digital Image Processing', description: 'Image enhancement and features' },
      { name: 'OpenCV', description: 'Practical image processing' },
      { name: 'Scikit-learn', description: 'Classical machine learning' },
    ]
  },
  { 
    category: 'Emerging Technologies — Familiarity',
    items: [{ name: 'Retrieval-Augmented Generation (RAG)', description: 'Familiarity with retrieval-grounded AI concepts' }],
  },
  {
    category: 'Technologies (Familiar)',
    description: 'Practical project exposure rather than primary expertise.',
    items: [
      { name: 'JavaScript', description: 'Web interactivity' },
      { name: 'TypeScript', description: 'Typed JavaScript' },
      { name: 'React', description: 'UI components' },
      { name: 'Next.js', description: 'React application framework' },
      { name: 'Preact', description: 'Lightweight interfaces' },
      { name: 'HTMX', description: 'Server-driven interactions' },
      { name: 'Alpine.js', description: 'Client-side interactivity' },
      { name: 'Tailwind CSS', description: 'Utility-first styling' },
    ]
  },
  { 
    category: 'Development Tools',
    items: [
      { name: 'VS Code', description: 'Code Editor' },
      { name: 'PyCharm', description: 'Python IDE' },
      { name: 'GitHub', description: 'Version Control' },
      { name: 'Jira', description: 'Project Management' },
      { name: 'Vercel', description: 'Web deployment' },
    ]
  },
];

export const FOCUS_AREAS = [
  { title: 'Reinforcement Learning', description: 'Tabular Q-learning for adaptive, sink-side relay planning.' },
  { title: 'Wireless Sensor Networks', description: 'Routing decisions under limited energy and changing network conditions.' },
  { title: 'Intelligent Routing', description: 'State abstraction and heuristic actions for relay selection.' },
  { title: 'Energy Efficiency', description: 'Residual-energy awareness and transmission cost in routing rewards.' },
  { title: 'Network Security', description: 'Trust-aware relay selection within the routing system.' },
  { title: 'Multi-objective Optimization', description: 'Balancing energy, trust, link stability and transmission cost.' },
];

export const STATS = [
  { value: PROJECTS.length, suffix: '', label: 'Projects Showcased' },
  { value: CERTIFICATES.length, suffix: '', label: 'Certifications' },
  { value: ACHIEVEMENTS.length, suffix: '', label: 'Project Awards' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/skill' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Research', href: '/research' },
  { label: 'Certificates and Achievements', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoprwe';

export const RESEARCH = {
  title: 'Design and Development of an AI/ML-Driven Energy-Efficient Secured Routing Protocol for WSN Applications',
  intro: 'MERIT-RP explores reinforcement learning, energy-aware routing and security in dynamic wireless sensor networks.',
  project: 'MERIT-RP · Final Year Design Project',
  contribution: 'My primary research contribution focuses on designing and implementing the reinforcement learning component for sink-side relay planning using tabular Q-learning. The approach incorporates state abstraction, heuristic routing actions, multi-objective reward formulation and routing constraints to support adaptive relay selection.',
  highlights: ['75 discrete states', 'Seven routing actions', '400 training episodes per round', 'Multi-objective reward function', 'Residual energy awareness', 'Trust-aware relay selection', 'Link stability consideration', 'Transmission cost consideration', 'Potential-based reward shaping', 'Six-hop planning constraint', 'Three planned flows per relay'],
  submission: {
    conference: '2027 7th International Conference on Electrical Engineering and Information & Communication Technology',
    id: '2217',
    status: 'Submitted — acceptance not confirmed.',
  },
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
  degree: 'Bachelor of Science in Computer Science and Engineering',
  major: 'Data Science',
  location: 'Dhaka, Bangladesh',
  status: 'Final-year student',
  logo: '/UIU_Logo.svg',
  graduationEstimate: 'Expected graduation: February 2027',
  journey: 'My studies combine a Data Science specialization with core computer science coursework. Consistent learning and a more deliberate approach to study have helped me grow academically and approach practical problems with greater confidence.',
  courses: [
    {
      code: 'CSE 4889',
      title: 'Machine Learning',
      icon: 'ml',
      description: 'Supervised and unsupervised learning, model development and evaluation.',
    },
    {
      code: 'CSE 4883',
      title: 'Digital Image Processing',
      icon: 'dip',
      description: 'Image enhancement, segmentation, feature extraction and image analysis.',
    },
    {
      code: 'CSE 4891',
      title: 'Data Mining (Ongoing)',
      icon: 'dm',
      description: 'Pattern discovery, classification, clustering and knowledge extraction.',
    },
  ],
  fundamentals: [
    { category: 'Programming and Problem-Solving', icon: 'code', subjects: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Advanced Object-Oriented Programming', 'Discrete Mathematics'] },
    { category: 'Systems and Security', icon: 'system', subjects: ['Operating Systems', 'Computer Networks', 'Computer Security', 'Computer Architecture'] },
    { category: 'Software, Data and AI', icon: 'data', subjects: ['Database Management Systems', 'Software Engineering', 'System Analysis and Design', 'Artificial Intelligence', 'Web Programming'] },
  ],
};
