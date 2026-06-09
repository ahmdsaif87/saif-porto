export const languages: Record<'en', { name: string; flag: string }> = {
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'en';

export type LanguageCode = keyof typeof languages;

export const ui = {
  en: {
    projectsContent: {
      dyaCollection: {
        title: 'Dya Collection',
        description:
          'A modern and responsive e-commerce web application designed for fashion enthusiasts.',
        imageAltText: 'Homepage of Dya Collection e-commerce website',
        categoryText: 'E-commerce Web',
        dateText: 'JUNE 2025 - JULY 2025',
        detailedDescription:
          'Dya Collection is a sophisticated e-commerce application designed to provide a premium shopping experience for fashion enthusiasts. It features a clean, high-performance interface that prioritizes user engagement and streamlined navigation.',
        keyFeatures: {
          productCatalog: {
            title: 'Product Catalog',
            description: 'Dynamic product listing with categorization and detailed item views.',
          },
          shoppingCart: {
            title: 'Interactive Cart',
            description: 'Real-time cart management allowing users to add, remove, and adjust quantities.',
          },
          checkoutSystem: {
            title: 'Secure Checkout',
            description: 'Streamlined checkout process ensuring a smooth path to purchase.',
          },
        },
        technologiesUsed: {
          react: { name: 'React', description: 'JavaScript library for building user interfaces.' },
          nextjs: { name: 'Next.js', description: 'React framework for server-side rendering and static site generation.' },
          tailwindcss: { name: 'TailwindCSS', description: 'Utility-first CSS framework for rapid UI development.' },
          nodejs: { name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 engine for server-side logic.' },
        },
        outcome:
          'Dya Collection successfully provides a scalable and efficient e-commerce solution, offering users a seamless journey from product discovery to secure checkout.',
        galleryImages: {},
      },
      alysa: {
        title: 'Alysa - IELTS Preparation Platform',
        description:
          'A comprehensive mobile learning platform designed to help students prepare for the IELTS exam with AI-driven feedback.',
        imageAltText: 'Screenshot of Alysa mobile app showing IELTS practice tests',
        categoryText: 'Mobile Learning Platform',
        dateText: 'NOVEMBER 2025 - JANUARY 2026',
        detailedDescription:
          'Alysa is a sophisticated mobile learning application designed to revolutionize IELTS preparation. It provides a unified platform for students to practice all four exam modules with real-time feedback and structured study plans.',
        keyFeatures: {
          practiceTests: {
            title: 'Full Practice Tests',
            description:
              'Complete simulations of the IELTS exam for Listening, Reading, Writing, and Speaking.',
          },
          aiFeedback: {
            title: 'AI-Driven Feedback',
            description:
              'Instant, detailed evaluations and scoring for writing and speaking tasks using advanced AI models.',
          },
          personalizedPath: {
            title: 'Personalized Learning',
            description:
              'Dynamic study plans that adapt to the user\'s performance and focus on weak areas.',
          },
        },
        technologiesUsed: {
          flutter: { name: 'Flutter', description: 'UI toolkit for building natively compiled applications for mobile from a single codebase.' },
          flask: { name: 'Flask', description: 'Lightweight WSGI web application framework in Python for backend services.' },
          python: { name: 'Python', description: 'Programming language used for AI model integration and backend logic.' },
          dart: { name: 'Dart', description: 'Client-optimized language for fast apps on any platform.' },
        },
        outcome:
          'Alysa delivers a scalable and efficient solution for IELTS students, simplifying the complex process of preparation and enhancing the learning experience through immediate AI feedback.',
        galleryImages: {},
      },
      punkMerch: {
        title: 'Punk Merch',
        description:
          'A stylized e-commerce platform for punk-themed merchandise built with Laravel.',
        imageAltText: 'Homepage of Punk Merch e-commerce website',
        categoryText: 'E-commerce Web',
        dateText: 'JUNE 2025 - JULY 2025',
        detailedDescription:
          'Punk Merch is a unique e-commerce application designed to cater to the punk subculture. It provides a specialized platform for merchandise sales, featuring robust backend management and a visually striking frontend.',
        keyFeatures: {
          merchInventory: {
            title: 'Inventory Management',
            description: 'Powerful backend tools to manage and display a unique collection of merchandise.',
          },
          userAuthentication: {
            title: 'Secure Accounts',
            description: 'Integrated user authentication system for secure shopping and order tracking.',
          },
          orderManagement: {
            title: 'Order Processing',
            description: 'Efficient workflow for handling customer purchases and maintaining order history.',
          },
        },
        technologiesUsed: {
          laravel: { name: 'Laravel', description: 'PHP framework with expressive, elegant syntax for backend operations.' },
          php: { name: 'PHP', description: 'General-purpose scripting language especially suited to web development.' },
          mysql: { name: 'MySQL', description: 'Open-source relational database management system.' },
          tailwindcss: { name: 'TailwindCSS', description: 'Modern CSS framework for rapid and custom styling.' },
        },
        outcome:
          'Punk Merch delivers a specialized e-commerce solution that simplifies interactions between the store and its niche audience, providing a unique and efficient shopping experience.',
        galleryImages: {},
      },
      rembugan: {
        title: 'Rembugan',
        description:
          'A campus-scale mobile platform for finding collaboration partners, showcasing portfolios, and managing projects with built-in workspaces.',
        imageAltText: 'Rembugan mobile app interface',
        categoryText: 'Mobile Application',
        dateText: 'MARCH 2026 - PRESENT',
        detailedDescription:
          'Rembugan is a comprehensive mobile platform designed for students to connect and collaborate on campus-level competitions and projects. It features partner matching, portfolio showcases, social connections, and integrated workspaces for seamless communication and task management once a team is formed. Built as a full-stack monorepo with a Flutter frontend, FastAPI backend, and a Next.js admin dashboard.',
        keyFeatures: {
          partnerMatching: {
            title: 'Partner Matchmaking',
            description: 'Find and connect with potential collaborators for competitions and projects within your campus.',
          },
          showcasePortfolio: {
            title: 'Showcase Portfolio',
            description: 'Upload and display your work, projects, and achievements to build your personal portfolio.',
          },
          workspaceCollaboration: {
            title: 'Workspace & Collaboration',
            description: 'Dedicated workspaces for teams with communication tools and task management to streamline project workflows.',
          },
        },
        technologiesUsed: {
          flutter: { name: 'Flutter', description: 'Cross-platform UI toolkit for building the mobile application.' },
          fastapi: { name: 'FastAPI', description: 'Modern Python web framework for building the backend API.' },
          python: { name: 'Python', description: 'Programming language used for backend services and AI integration.' },
          dart: { name: 'Dart', description: 'Client-optimized language for fast mobile app development.' },
          nextjs: { name: 'Next.js', description: 'React framework for building the admin dashboard.' },
          postgresql: { name: 'PostgreSQL', description: 'Relational database for storing application data.' },
          firebase: { name: 'Firebase', description: 'Authentication and backend services integration.' },
        },
        outcome:
          'Rembugan provides a unified ecosystem for students to discover collaborators, showcase their work, and manage team projects efficiently within a campus environment.',
        galleryImages: {},
      },
      parkingSimulator: {
        title: 'In The End: Parking Simulator',
        description:
          'A 3D parking simulation game that tests players\' precision in parking a vehicle within designated areas. Inspired by Dr. Driving (2013).',
        imageAltText: 'Screenshot of In The End: Parking Simulator gameplay',
        categoryText: 'Game',
        dateText: 'MAY 2026',
        detailedDescription:
          'In The End: Parking Simulator is a 3D parking simulation game that challenges players to precisely control a vehicle and park in designated zones. Built with Unity, the game features realistic physics using WheelCollider, two distinct levels (static and dynamic parking), AI traffic systems, minimap navigation, and environmental details including traffic lights, street lights, and dynamic obstacles.',
        keyFeatures: {
          vehiclePhysics: {
            title: 'Vehicle Physics',
            description: 'Realistic driving experience using Unity WheelCollider with full vehicle controls including acceleration, braking, and turn signals.',
          },
          twoLevels: {
            title: '2 Game Levels',
            description: 'Level 1: Static Parking against fixed obstacles. Level 2: Dynamic Parking with moving AI traffic as an additional challenge.',
          },
          aiTraffic: {
            title: 'AI Traffic System',
            description: 'Bot cars that move along predefined waypoints, creating dynamic traffic scenarios in Level 2.',
          },
        },
        technologiesUsed: {
          unity: { name: 'Unity', description: 'Game engine used for 3D rendering, physics, and game logic.' },
          csharp: { name: 'C#', description: 'Primary scripting language for game mechanics and behavior.' },
          urp: { name: 'Universal Render Pipeline', description: 'High-performance render pipeline for optimized 3D graphics.' },
          cinemachine: { name: 'Cinemachine', description: 'Camera system for smooth and dynamic camera movements.' },
        },
        outcome:
          'In The End: Parking Simulator successfully delivers an engaging 3D parking simulation experience with two distinct difficulty levels, realistic vehicle physics, and a polished visual presentation.',
        galleryImages: {},
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
      mobileDevelopment: {
        title: 'Mobile Development',
        description: 'Building cross-platform mobile applications.',
      },
      database: {
        title: 'Databases',
        description: 'Managing and optimizing relational and non-relational databases.',
      },
    },
    site: {
      title: 'Ahmad Saif',
    },
    nav: {
      home: 'Home',
      contact: 'Contact',
      projects: 'Projects',
      resume: 'Resume',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Ahmad Saif - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of Ahmad Saif, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm Ahmad Saif",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'Tech Enthusiast',
      heroIntroduction: 'I am a full-stack developer based in Tegal, Indonesia.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Ahmad Saif or a development concept',
      featuredProjectsTitle: 'Latest Projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
      aboutMeTitle: 'About Me',
      aboutMeDescription:
        'I am a passionate Full-Stack developer based in Tegal, Indonesia, with a strong focus on building modern and performant web applications. I love solving complex problems and constantly learning new technologies to stay at the forefront of the industry.',
      experienceTitle: 'Experience',
      experiences: [
        {
          title: 'Freelance',
          company: 'Self-employed',
          date: '2025 - Present',
          description:
            'Mobile & Web Development',
        },
      ],
      educationTitle: 'Education',
      educations: [
        {
          degree: 'Bachelor of Informatics Engineering',
          school: 'Universitas Harkat Negeri',
          date: '2023 - Present',
          description:
            'Focused on software engineering and mobile application development.',
        },
      ],
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'Overview',
      keyFeaturesTitle: 'Key features include:',
      technologiesUsedTitle: 'Technologies Used',
      outcomeTitle: 'Outcome',
      galleryTitle: 'Gallery',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Ahmad Saif's Portfolio",
      metaDescription: "Discover all of Ahmad Saif's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  return function t<K extends keyof UISchema[typeof defaultLanguage][F]>(
    key: K
  ): UISchema[typeof defaultLanguage][F][K] {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in (featureTranslations as any)) {
      return (featureTranslations as any)[key];
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][key];
  };
}
