import type { ImageMetadata } from 'astro';

export type KeyFeature = {
  id: string;
  title: string;
  description: string;
};

export type Collaborator = {
  githubUsername: string;
  name: string;
  roles: string[];
};

export type TechnologyDetail = {
  id: string;
  name: string;
  description?: string;
};

export type GalleryImage = {
  id: string;
  src: ImageMetadata;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string;
  imageUrl?: ImageMetadata;
  imageAltText: string;
  projectUrl?: string;
  codeUrl?: string;
  tags: string[];
  category: string;
  categoryText?: string;
  date: string;
  dateText?: string;
  outcome?: string;
  keyFeatures?: KeyFeature[];
  keyFeaturesTranslated?: KeyFeature[];
  technologiesUsed?: TechnologyDetail[];
  galleryImagesTranslated?: GalleryImage[];
  collaborators?: Collaborator[];
};

export type TranslatedProject = Project;

export type Technology = {
  id: string;
  name: string;
};

export type Skill = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  technologies: Technology[];
};

export type TranslatedSkill = Skill;
export type SkillData = Skill;
