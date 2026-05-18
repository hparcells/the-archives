import { Project } from '../types/project';
import { PERSONAL_PROJECTS } from './projects/personal';
import { PROFESSIONAL_PROJECTS } from './projects/professional';
import { OPEN_SOURCE_PROJECTS } from './projects/open-source';
import { ACADEMIC_PROJECTS } from './projects/academic';
import { FREELANCE_PROJECTS } from './projects/freelance';

export const PROJECTS: Project[] = [
  ...PERSONAL_PROJECTS,
  ...PROFESSIONAL_PROJECTS,
  ...OPEN_SOURCE_PROJECTS,
  ...ACADEMIC_PROJECTS,
  ...FREELANCE_PROJECTS
];
