// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import alysa from '@/assets/alysa.jpeg';
import dyaCollection from '@/assets/dya-collection.png';
import punkMerch from '@/assets/punk-merch.png';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'dyaCollection', // Unique identifier for translations
    slug: 'dya-collection', // Used in the URL
    imageUrl: dyaCollection, // Use imported ImageMetadata
    codeUrl: 'https://github.com/ahmdsaif87/dya-collection',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Ecommerce'],
    category: 'E-commerce Web',
    date: '2024-12-01',
    keyFeatures: [
      { id: 'productCatalog' },
      { id: 'shoppingCart' },
      { id: 'checkoutSystem' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nextjs', name: 'Next.js' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
      { id: 'nodejs', name: 'Node.js' },
    ],
  },
  {
    id: 'alysa',
    slug: 'alysa',
    imageUrl: alysa, // Use a placeholder for now
    codeUrl: 'https://github.com/orangearinge/alysa-mobile',
    tags: ['Flutter', 'Flask', 'Python', 'Dart', 'Education', 'IELTS'],
    category: 'Mobile Learning Platform',
    date: '2025-01-15',
    keyFeatures: [
      { id: 'practiceTests' },
      { id: 'aiFeedback' },
      { id: 'personalizedPath' },
    ],
    technologiesUsed: [
      { id: 'flutter', name: 'Flutter' },
      { id: 'flask', name: 'Flask' },
      { id: 'python', name: 'Python' },
      { id: 'dart', name: 'Dart' },
    ],
  },
  {
    id: 'punkMerch',
    slug: 'punk-merch',
    imageUrl: punkMerch,
    codeUrl: 'https://github.com/fadilsflow/campus-web-programing-2',
    tags: ['Laravel', 'PHP', 'MySQL', 'Ecommerce', 'TailwindCSS'],
    category: 'E-commerce Web',
    date: '2024-11-20',
    keyFeatures: [
      { id: 'merchInventory' },
      { id: 'userAuthentication' },
      { id: 'orderManagement' },
    ],
    technologiesUsed: [
      { id: 'laravel', name: 'Laravel' },
      { id: 'php', name: 'PHP' },
      { id: 'mysql', name: 'MySQL' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  const technologiesUsed = project.technologiesUsed?.map((tech) => {
    const typedTech = i18nData?.technologiesUsed as Record<
      string,
      { name: string; description: string } | undefined
    >;
    const techTranslations = typedTech?.[tech.id] ?? {
      name: tech.name,
      description: '',
    };
    return {
      ...tech,
      name: techTranslations.name,
      description: techTranslations.description,
    };
  });

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    technologiesUsed,
    challenges: (i18nData as any)?.challenges ?? '',
    learnings: (i18nData as any)?.learnings ?? '',
    outcome: (i18nData as any)?.outcome ?? '',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
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
    iconName: 'Smartphone',
    technologies: [{ id: 'flutter', name: 'Flutter' }],
  },
  {
    id: 'database',
    iconName: 'Database',
    technologies: [
      { id: 'mysql', name: 'MySQL' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsiveDesign', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
