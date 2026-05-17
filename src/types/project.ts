import { ReactNode } from 'react';

export type ProjectStatus =
  | 'active'
  | 'in-progress'
  | 'archived'
  | 'planned'
  | 'on-hold'
  | 'cancelled';

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
}

export interface Project {
  date: string;
  name: string;
  images: string[];
  tagline: string;
  description: ReactNode;
  status: ProjectStatus;
  type: ProjectType;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
}
