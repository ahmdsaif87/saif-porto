import alysa from '@/assets/alysa.webp';
import dyaCollection from '@/assets/dya-collection.webp';
import punkMerch from '@/assets/punk-merch.webp';
import rembugan from '@/assets/rembugan.webp';
import parkingSimulator from '@/assets/parkingSimulator.webp';
import typeRacer from '@/assets/type-racer.webp';
import moneyTracker from '@/assets/money-tracker.webp';
import type {
  Project,
  Skill,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const rawProjects: Array<Project> = [
  {
    id: 'dyaCollection',
    slug: 'dya-collection',
    title: 'Dya Collection',
    description:
      'A modern and responsive e-commerce web application designed for fashion enthusiasts.',
    detailedDescription:
      'Dya Collection is a sophisticated e-commerce application designed to provide a premium shopping experience for fashion enthusiasts. It features a clean, high-performance interface that prioritizes user engagement and streamlined navigation.',
    imageUrl: dyaCollection,
    imageAltText: 'Homepage of Dya Collection e-commerce website',
    projectUrl: 'https://dya-collection.vercel.app/',
    codeUrl: 'https://github.com/ahmdsaif87/dya-collection',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Ecommerce'],
    category: 'E-commerce Web',
    categoryText: 'E-commerce Web',
    date: '2024-12-01',
    dateText: 'JUNE 2025 - JULY 2025',
    outcome:
      'Dya Collection successfully provides a scalable and efficient e-commerce solution, offering users a seamless journey from product discovery to secure checkout.',
    keyFeatures: [
      {
        id: 'productCatalog',
        title: 'Product Catalog',
        description:
          'Dynamic product listing with categorization and detailed item views.',
      },
      {
        id: 'shoppingCart',
        title: 'Interactive Cart',
        description:
          'Real-time cart management allowing users to add, remove, and adjust quantities.',
      },
      {
        id: 'checkoutSystem',
        title: 'Secure Checkout',
        description:
          'Streamlined checkout process ensuring a smooth path to purchase.',
      },
    ],
    technologiesUsed: [
      {
        id: 'react',
        name: 'React',
        description: 'JavaScript library for building user interfaces.',
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        description:
          'React framework for server-side rendering and static site generation.',
      },
      {
        id: 'tailwindcss',
        name: 'TailwindCSS',
        description: 'Utility-first CSS framework for rapid UI development.',
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        description:
          "JavaScript runtime built on Chrome's V8 engine for server-side logic.",
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: ['Backend Developer'],
      },
      {
        githubUsername: 'fadilsflow',
        name: 'Wahyu Akhmad Fadillah',
        roles: ['Fullstack Developer'],
      },
      {
        githubUsername: 'ddfrnnd',
        name: 'Dede Fernanda',
        roles: ['Frontend Developer'],
      },
      {
        githubUsername: 'alifiashasa',
        name: 'Alifia Shasa',
        roles: ['UI/UX Designer'],
      },
    ],
  },
  {
    id: 'alysa',
    slug: 'alysa',
    title: 'Alysa - IELTS Preparation Platform',
    description:
      'A comprehensive mobile learning platform designed to help students prepare for the IELTS exam with AI-driven feedback.',
    detailedDescription:
      'Alysa is a sophisticated mobile learning application designed to revolutionize IELTS preparation. It provides a unified platform for students to practice all four exam modules with real-time feedback and structured study plans.',
    imageUrl: alysa,
    imageAltText: 'Screenshot of Alysa mobile app showing IELTS practice tests',
    codeUrl: 'https://github.com/orangearinge/alysa-mobile',
    tags: ['Flutter', 'Flask', 'Python', 'Dart', 'Education', 'IELTS'],
    category: 'Mobile Learning Platform',
    categoryText: 'Mobile Learning Platform',
    date: '2025-01-15',
    dateText: 'NOVEMBER 2025 - JANUARY 2026',
    outcome:
      'Alysa delivers a scalable and efficient solution for IELTS students, simplifying the complex process of preparation and enhancing the learning experience through immediate AI feedback.',
    keyFeatures: [
      {
        id: 'practiceTests',
        title: 'Full Practice Tests',
        description:
          'Complete simulations of the IELTS exam for Listening, Reading, Writing, and Speaking.',
      },
      {
        id: 'aiFeedback',
        title: 'AI-Driven Feedback',
        description:
          'Instant, detailed evaluations and scoring for writing and speaking tasks using advanced AI models.',
      },
      {
        id: 'personalizedPath',
        title: 'Personalized Learning',
        description:
          "Dynamic study plans that adapt to the user's performance and focus on weak areas.",
      },
    ],
    technologiesUsed: [
      {
        id: 'flutter',
        name: 'Flutter',
        description:
          'UI toolkit for building natively compiled applications for mobile from a single codebase.',
      },
      {
        id: 'flask',
        name: 'Flask',
        description:
          'Lightweight WSGI web application framework in Python for backend services.',
      },
      {
        id: 'python',
        name: 'Python',
        description:
          'Programming language used for AI model integration and backend logic.',
      },
      {
        id: 'dart',
        name: 'Dart',
        description: 'Client-optimized language for fast apps on any platform.',
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: ['Backend Developer'],
      },
      {
        githubUsername: 'fadilsflow',
        name: 'Wahyu Akhmad Fadillah',
        roles: ['Fullstack Developer'],
      },
      {
        githubUsername: 'ddfrnnd',
        name: 'Dede Fernanda',
        roles: ['Frontend Developer'],
      },
      {
        githubUsername: 'alifiashasa',
        name: 'Alifia Shasa',
        roles: ['UI/UX Designer'],
      },
    ],
  },
  {
    id: 'punkMerch',
    slug: 'punk-merch',
    title: 'Punk Merch',
    description:
      'A stylized e-commerce platform for punk-themed merchandise built with Laravel.',
    detailedDescription:
      'Punk Merch is a unique e-commerce application designed to cater to the punk subculture. It provides a specialized platform for merchandise sales, featuring robust backend management and a visually striking frontend.',
    imageUrl: punkMerch,
    imageAltText: 'Homepage of Punk Merch e-commerce website',
    projectUrl: 'https://punkmerch.biz.id/',
    codeUrl: 'https://github.com/fadilsflow/campus-web-programing-2',
    tags: ['Laravel', 'PHP', 'MySQL', 'Ecommerce', 'TailwindCSS'],
    category: 'E-commerce Web',
    categoryText: 'E-commerce Web',
    date: '2024-11-20',
    dateText: 'JUNE 2025 - JULY 2025',
    outcome:
      'Punk Merch delivers a specialized e-commerce solution that simplifies interactions between the store and its niche audience, providing a unique and efficient shopping experience.',
    keyFeatures: [
      {
        id: 'merchInventory',
        title: 'Inventory Management',
        description:
          'Powerful backend tools to manage and display a unique collection of merchandise.',
      },
      {
        id: 'userAuthentication',
        title: 'Secure Accounts',
        description:
          'Integrated user authentication system for secure shopping and order tracking.',
      },
      {
        id: 'orderManagement',
        title: 'Order Processing',
        description:
          'Efficient workflow for handling customer purchases and maintaining order history.',
      },
    ],
    technologiesUsed: [
      {
        id: 'laravel',
        name: 'Laravel',
        description:
          'PHP framework with expressive, elegant syntax for backend operations.',
      },
      {
        id: 'php',
        name: 'PHP',
        description:
          'General-purpose scripting language especially suited to web development.',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        description: 'Open-source relational database management system.',
      },
      {
        id: 'tailwindcss',
        name: 'TailwindCSS',
        description: 'Modern CSS framework for rapid and custom styling.',
      },
    ],
    collaborators: [
      { githubUsername: 'ahmdsaif87', name: 'Ahmad Saifi', roles: ['DevOps'] },
      {
        githubUsername: 'fadilsflow',
        name: 'Wahyu Akhmad Fadillah',
        roles: ['Backend Developer'],
      },
      {
        githubUsername: 'alifiashasa',
        name: 'Alifia Shasa',
        roles: ['Frontend Developer', 'UI/UX Designer'],
      },
      {
        githubUsername: 'ddfrnnd',
        name: 'Dede Fernanda',
        roles: ['Frontend Developer', 'UI/UX Designer'],
      },
    ],
  },
  {
    id: 'rembugan',
    slug: 'rembugan',
    title: 'Rembugan',
    description:
      'A campus-scale mobile platform for finding collaboration partners, showcasing portfolios, and managing projects with built-in workspaces.',
    detailedDescription:
      'Rembugan is a comprehensive mobile platform designed for students to connect and collaborate on campus-level competitions and projects. It features partner matching, portfolio showcases, social connections, and integrated workspaces for seamless communication and task management once a team is formed. Built as a full-stack monorepo with a Flutter frontend, FastAPI backend, and a Next.js admin dashboard.',
    imageUrl: rembugan,
    imageAltText: 'Rembugan mobile app interface',
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.hn.rembugan&pcampaignid=web_share',
    codeUrl: 'https://github.com/ahmdsaif87/Rembugan',
    tags: [
      'Flutter',
      'FastAPI',
      'Python',
      'Next.js',
      'Dart',
      'PostgreSQL',
      'Firebase',
    ],
    category: 'Mobile Application',
    categoryText: 'Mobile Application',
    date: '2025-04-01',
    dateText: 'MARCH 2026 - JULY 2026',
    outcome:
      'Rembugan provides a unified ecosystem for students to discover collaborators, showcase their work, and manage team projects efficiently within a campus environment.',
    keyFeatures: [
      {
        id: 'partnerMatching',
        title: 'Partner Matchmaking',
        description:
          'Find and connect with potential collaborators for competitions and projects within your campus.',
      },
      {
        id: 'showcasePortfolio',
        title: 'Showcase Portfolio',
        description:
          'Upload and display your work, projects, and achievements to build your personal portfolio.',
      },
      {
        id: 'workspaceCollaboration',
        title: 'Workspace & Collaboration',
        description:
          'Dedicated workspaces for teams with communication tools and task management to streamline project workflows.',
      },
    ],
    technologiesUsed: [
      {
        id: 'flutter',
        name: 'Flutter',
        description:
          'Cross-platform UI toolkit for building the mobile application.',
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        description:
          'Modern Python web framework for building the backend API.',
      },
      {
        id: 'python',
        name: 'Python',
        description:
          'Programming language used for backend services and AI integration.',
      },
      {
        id: 'dart',
        name: 'Dart',
        description:
          'Client-optimized language for fast mobile app development.',
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        description: 'React framework for building the admin dashboard.',
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        description: 'Relational database for storing application data.',
      },
      {
        id: 'firebase',
        name: 'Firebase',
        description: 'Authentication and backend services integration.',
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: ['Backend Developer', 'DevOps'],
      },
      {
        githubUsername: 'ddfrnnd',
        name: 'Dede Fernanda',
        roles: ['Frontend Developer', 'UI/UX Designer'],
      },
    ],
  },
  {
    id: 'parkingSimulator',
    slug: 'parking-simulator',
    title: 'In The End: Parking Simulator',
    description:
      "A 3D parking simulation game that tests players' precision in parking a vehicle within designated areas. Inspired by Dr. Driving (2013).",
    detailedDescription:
      'In The End: Parking Simulator is a 3D parking simulation game that challenges players to precisely control a vehicle and park in designated zones. Built with Unity, the game features realistic physics using WheelCollider, two distinct levels (static and dynamic parking), AI traffic systems, minimap navigation, and environmental details including traffic lights, street lights, and dynamic obstacles.',
    imageUrl: parkingSimulator,
    imageAltText: 'Screenshot of In The End: Parking Simulator gameplay',
    projectUrl:
      'https://drive.google.com/file/d/1kwY7C8Bp0IHoxB4h3IBZ7v7SsnPRypPW/view?usp=sharing',
    codeUrl: 'https://github.com/ahmdsaif87/ParkingSimulator.git',
    tags: ['Unity', 'C#', 'Game Development', '3D'],
    category: 'Game',
    categoryText: 'Game',
    date: '2026-05-17',
    dateText: 'MAY 2026 - JULY 2026',
    outcome:
      'In The End: Parking Simulator successfully delivers an engaging 3D parking simulation experience with two distinct difficulty levels, realistic vehicle physics, and a polished visual presentation.',
    keyFeatures: [
      {
        id: 'vehiclePhysics',
        title: 'Vehicle Physics',
        description:
          'Realistic driving experience using Unity WheelCollider with full vehicle controls including acceleration, braking, and turn signals.',
      },
      {
        id: 'twoLevels',
        title: '2 Game Levels',
        description:
          'Level 1: Static Parking against fixed obstacles. Level 2: Dynamic Parking with moving AI traffic as an additional challenge.',
      },
      {
        id: 'aiTraffic',
        title: 'AI Traffic System',
        description:
          'Bot cars that move along predefined waypoints, creating dynamic traffic scenarios in Level 2.',
      },
    ],
    technologiesUsed: [
      {
        id: 'unity',
        name: 'Unity',
        description:
          'Game engine used for 3D rendering, physics, and game logic.',
      },
      {
        id: 'csharp',
        name: 'C#',
        description:
          'Primary scripting language for game mechanics and behavior.',
      },
      {
        id: 'urp',
        name: 'Universal Render Pipeline',
        description:
          'High-performance render pipeline for optimized 3D graphics.',
      },
      {
        id: 'cinemachine',
        name: 'Cinemachine',
        description: 'Camera system for smooth and dynamic camera movements.',
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: [
          'Game Designer',
          'Artist',
          'Programmer',
          'Sound Engineer',
          'Producer',
        ],
      },
    ],
  },
  {
    id: 'typeRacerBlitz',
    slug: 'type-racer-blitz',
    title: 'TypeRacer Blitz',
    description:
      'A futuristic and minimalist speed typing test web app with Real-time Multiplayer, car racing visuals, and Monkeytype-standard metrics.',
    detailedDescription:
      'TypeRacer Blitz is a futuristic and minimalist speed typing test and racing web application. It features real-time multiplayer capability powered by PeerJS WebRTC P2P and WebSocket fallback, interactive Google Antigravity-inspired particle background canvas, car race visualization with custom SVG animations, mobile virtual keyboard optimization, and comprehensive statistics adhering strictly to Monkeytype.com calculation formulas (Net WPM, Raw WPM, Accuracy, and Consistency).',
    imageUrl: typeRacer,
    imageAltText: 'Screenshot of TypeRacer Blitz speed typing application',
    projectUrl: 'https://type-racer-pearl.vercel.app/',
    codeUrl: 'https://github.com/ahmdsaif87/type-racer',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'WebRTC',
      'PeerJS',
      'WebSocket',
    ],
    category: 'Web Application',
    categoryText: 'Web Application',
    date: '2026-09-10',
    dateText: '10 SEPTEMBER 2026',
    outcome:
      'TypeRacer Blitz delivers a seamless and highly responsive typing race experience across desktop and mobile devices, combining competitive multiplayer gameplay with precision typing analytics.',
    keyFeatures: [
      {
        id: 'realtimeMultiplayer',
        title: 'Real-Time P2P & WebSocket Multiplayer',
        description:
          'Play together instantly via room codes using PeerJS WebRTC DataChannels and a Node WebSocket relay server without sign-up.',
      },
      {
        id: 'monkeytypeMetrics',
        title: 'Monkeytype-Standard Metrics',
        description:
          'Precise real-time calculations for Net WPM, Raw WPM, Accuracy, and per-second WPM Consistency standard deviation curves.',
      },
      {
        id: 'antigravityParticles',
        title: 'Antigravity Particle Canvas',
        description:
          'Interactive 2D Canvas particle background inspired by Google Antigravity that reacts dynamically to cursor movement.',
      },
      {
        id: 'raceTrackCustomization',
        title: 'Race Track & Car Customization',
        description:
          'Visual racing lanes with 6 customizable car colors, engine heat exhaust SVG animations, and organized lane assignments.',
      },
      {
        id: 'hostAuthoritySystem',
        title: 'Host Authority Control',
        description:
          'Room hosts control language selection (Indonesian/English/Custom text), word count duration, race start, and rematch options.',
      },
    ],
    technologiesUsed: [
      {
        id: 'react',
        name: 'React 19',
        description:
          'Modern UI library for building interactive component trees.',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        description: 'Strongly typed programming language built on JavaScript.',
      },
      {
        id: 'vite',
        name: 'Vite',
        description: 'Next-generation frontend build tool providing fast HMR.',
      },
      {
        id: 'tailwindcss',
        name: 'TailwindCSS',
        description: 'Utility-first CSS framework for rapid UI styling.',
      },
      {
        id: 'webrtc',
        name: 'WebRTC / PeerJS',
        description:
          'Peer-to-peer data channels for ultra-low latency multiplayer state sync.',
      },
      {
        id: 'websocket',
        name: 'WebSocket',
        description:
          'Reliable fallback relay server for room creation and peer discovery.',
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: ['Fullstack Developer', 'UI/UX Designer'],
      },
    ],
  },
  {
    id: 'moneyTracker',
    slug: 'money-tracker',
    title: 'Money Tracker',
    description:
      'A personal finance tracking application built with Flutter, featuring an AI assistant for financial analysis.',
    detailedDescription:
      'Money Tracker is a comprehensive mobile personal finance application built with Flutter. It allows users to manage multiple accounts, track income and expenses, organize transactions by categories, and receive personalized financial insights through an integrated Gemini AI assistant.',
    imageUrl: moneyTracker,
    imageAltText: 'Screenshot of Money Tracker mobile application',
    projectUrl: 'https://github.com/ahmdsaif87/self-money-tracker/releases',
    codeUrl: 'https://github.com/ahmdsaif87/self-money-tracker.git',
    tags: ['Flutter', 'Dart', 'SQLite', 'Gemini AI'],
    category: 'Mobile Application',
    categoryText: 'Mobile Application',
    date: '2026-09-18',
    dateText: '18 SEPTEMBER - 21 SEPTEMBER 2026',
    outcome:
      'Money Tracker provides an intuitive and private solution for managing personal finances, enhanced by AI-driven insights without relying on cloud storage for personal data.',
    keyFeatures: [
      {
        id: 'dashboard',
        title: 'Financial Dashboard',
        description:
          'Overview of total balance, monthly income/expenses, and recent transactions.',
      },
      {
        id: 'transactions',
        title: 'Transaction Management',
        description:
          'Add, edit, or delete transactions with support for expenses, income, and transfers between accounts.',
      },
      {
        id: 'aiAssistant',
        title: 'AI Financial Assistant',
        description:
          'Integrated Gemini AI that provides financial analysis, budgeting recommendations, and can categorize transactions directly from chat.',
      },
    ],
    technologiesUsed: [
      {
        id: 'flutter',
        name: 'Flutter',
        description:
          'Cross-platform UI toolkit for building the mobile application.',
      },
      {
        id: 'dart',
        name: 'Dart',
        description:
          'Client-optimized language for fast mobile app development.',
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        description:
          'Local relational database for storing financial data on the device.',
      },
    ],
    collaborators: [
      {
        githubUsername: 'ahmdsaif87',
        name: 'Ahmad Saifi',
        roles: ['Mobile Developer'],
      },
    ],
  },
];

export const projectsList: Array<Project> = [...rawProjects]
  .map((p) => ({
    ...p,
    keyFeaturesTranslated: p.keyFeatures,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const skillsList: Array<Skill> = [
  {
    id: 'frontendDevelopment',
    title: 'Frontend Development',
    description: 'Building interactive and high-performance user interfaces.',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'backendDevelopment',
    title: 'Backend Development',
    description: 'Constructing robust server logic and APIs.',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'laravel', name: 'Laravel' },
      { id: 'flask', name: 'Flask' },
      { id: 'python', name: 'Python' },
      { id: 'restapi', name: 'REST APIs' },
    ],
  },
  {
    id: 'mobileDevelopment',
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications.',
    iconName: 'Smartphone',
    technologies: [{ id: 'flutter', name: 'Flutter' }],
  },
  {
    id: 'database',
    title: 'Databases',
    description:
      'Managing and optimizing relational and non-relational databases.',
    iconName: 'Database',
    technologies: [
      { id: 'mysql', name: 'MySQL' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
  },
  {
    id: 'uiUxDesign',
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetic user experiences.',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsiveDesign', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    title: 'DevOps',
    description: 'Automating development and deployment processes.',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
    ],
  },
];

// Helper functions for backward compatibility
export function getTranslatedProjects(
  _lang?: string
): Array<TranslatedProject> {
  return projectsList;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsList.find((project) => project.slug === slug);
}

export function getTranslatedProjectBySlug(
  slug: string,
  _lang?: string
): TranslatedProject | undefined {
  return getProjectBySlug(slug);
}

export function getTranslatedSkills(_lang?: string): Array<TranslatedSkill> {
  return skillsList;
}
