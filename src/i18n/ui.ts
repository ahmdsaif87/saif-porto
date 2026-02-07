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
        dateText: 'December 2024',
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
        dateText: 'January 2025',
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
        dateText: 'November 2024',
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
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
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
          title: 'Full Stack Developer',
          company: 'Orangaringe',
          date: '2025 - Present',
          description:
            'Developing Alysa (Mobile Learning Platform for IELTS Preparation) for capstone project, focusing on flask and flutter.',
        },
      ],
      educationTitle: 'Education',
      educations: [
        {
          degree: 'Bachelor of Computer Engineering',
          school: 'Universitas Harkat Negeri',
          date: '2023 - Present',
          description:
            'Focused on software engineering, data structures, and algorithms.',
        },
      ],
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
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
