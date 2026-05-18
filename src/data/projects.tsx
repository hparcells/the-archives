import { Project } from '../types/project';
import { PERSONAL_PROJECTS } from './projects/personal';
import { PROFESSIONAL_PROJECTS } from './projects/professional';
import { OPEN_SOURCE_PROJECTS } from './projects/open-source';
import { ACADEMIC_PROJECTS } from './projects/academic';

export const PROJECTS: Project[] = [
  ...PERSONAL_PROJECTS,
  ...PROFESSIONAL_PROJECTS,
  ...OPEN_SOURCE_PROJECTS,
  ...ACADEMIC_PROJECTS
];
