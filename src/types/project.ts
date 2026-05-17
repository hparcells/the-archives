import { ReactNode } from 'react';

export type ProjectStatus =
  | 'active'
  | 'in-progress'
  | 'archived'
  | 'planned'
  | 'on-hold'
  | 'cancelled';

export type ProjectType = 'personal' | 'professional' | 'open-source' | 'academic';

interface ProjectLinks {
  github?: string;
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
