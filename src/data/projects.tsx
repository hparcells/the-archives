import { Project } from '../types/project';

const PERSONAL_PROJECTS: Project[] = [];

const PROFESSIONAL_PROJECTS: Project[] = [];

const OPEN_SOURCE_PROJECTS: Project[] = [];

const ACADEMIC_PROJECTS: Project[] = [];

export const PROJECTS: Project[] = [
  ...PERSONAL_PROJECTS,
  ...PROFESSIONAL_PROJECTS,
  ...OPEN_SOURCE_PROJECTS,
  ...ACADEMIC_PROJECTS
];
