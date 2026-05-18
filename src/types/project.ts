import { ReactNode } from 'react';

export type ProjectStatus =
  | 'planned'
  | 'in-progress'
  | 'complete'
  | 'active'
  | 'archived'
  | 'on-hold';

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In Progress',
  complete: 'Complete',
  active: 'Active',
  archived: 'Archived',
  'on-hold': 'On Hold'
};

export type ProjectType = 'personal' | 'professional' | 'open-source' | 'academic';

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  personal: 'Personal',
  professional: 'Professional',
  'open-source': 'Open Source',
  academic: 'Academic'
};

interface ProjectLinks {
  github?: string;
  issue?: string;
  pullRequest?: string;
  live?: string;
  blog?: string;
}

export interface Project {
  type: ProjectType;
  date: string;
  startDate: string;
  name: string;
  tagline: string;
  images: string[];
  status: ProjectStatus;
  description: ReactNode;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
}
