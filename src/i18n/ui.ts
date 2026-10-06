export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'en';

export type LanguageCode = keyof typeof languages;

export const ui = {
  en: {
    site: {
      title: 'Ahmad Saif',
      description:
        'Portfolio of Ahmad Saif, Full-Stack Developer specializing in Flutter mobile apps, modern React web platforms, and scalable Laravel backends.',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle:
        'Ahmad Saif – Full-Stack Developer (Flutter, React, Laravel) | Tegal, Indonesia',
      pageDescription:
        'Portfolio of Ahmad Saif, Full-Stack Developer in Tegal, Indonesia specializing in Flutter mobile apps, modern React web platforms, and scalable Laravel backends.',
      heroGreeting: "Hi, I'm Ahmad Saif",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'Tech Enthusiast',
      heroIntroduction:
        'I am a full-stack developer based in Tegal, Indonesia.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
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
        'I am Ahmad Saifi Khayatu Ulumuddin (professionally known as Ahmad Saif), a passionate Full-Stack developer based in Tegal, Indonesia, with a strong focus on building modern and performant web applications. I love solving complex problems and constantly learning new technologies to stay at the forefront of the industry.',
      experienceTitle: 'Experience',
      experiences: [
        {
          title: 'Freelance',
          company: 'Self-employed',
          date: '2025 - Present',
          description: 'Mobile & Web Developer',
        },
        {
          title: 'Internship',
          company: 'IDMETAFORA Indonesia Teknologi',
          date: 'July 2026 - November 2026',
          description: 'Software Developer',
        },
      ],
      educationTitle: 'Education',
      educations: [
        {
          degree: 'Computer and Network Engineering',
          school: 'SMK Negeri 2 Adiwerna',
          date: '2021 - 2023',
          description:
            'Focused on computer hardware installation, operating systems, and network infrastructure management.',
        },
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
      pageTitle:
        'Contact Ahmad Saif – Full-Stack Developer for Hire | Tegal, Indonesia',
      pageDescription:
        'Get in touch with Ahmad Saif for freelance full-stack development, Flutter mobile apps, web engineering, or software collaboration inquiries.',
      title: 'Contact Ahmad Saif',
      description:
        "Let's discuss your project, freelance software development opportunities, or technical collaboration.",
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
      title: 'Projects',
      metaTitle:
        'Projects by Ahmad Saif | Flutter, Web & Mobile Developer Portfolio',
      metaDescription:
        'Explore software engineering projects built by Ahmad Saif using Flutter, React, Next.js, and Laravel, including mobile apps and full-stack web platforms.',
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
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.',
      required_field_custom: 'The {fieldName} field is required.',
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
    },
  },
} as const;

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  _lang: LanguageCode | undefined,
  feature: F
) {
  return function t<K extends keyof UISchema[typeof defaultLanguage][F]>(
    key: K
  ): UISchema[typeof defaultLanguage][F][K] {
    return ui[defaultLanguage][feature][key];
  };
}
