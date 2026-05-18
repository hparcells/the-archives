import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Projects' };

function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default ProjectsLayout;
