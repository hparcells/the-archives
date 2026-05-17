'use client';

import { useState } from 'react';

import PageLayout from '@/components/PageLayout';
import ProjectSection from '@/components/ProjectSection';
import SegmentedControl from '@/components/ui/SegmentedControl';

import { PROJECTS } from '@/data/projects';

function Projects() {
  const [filter, setFilter] = useState<string>('all');

  return (
    <PageLayout
      title='Projects'
      description='Everything I have ever made... or at least the things I could find on my hard drives.'
    >
      <SegmentedControl
        data={[
          { label: 'All', value: 'all' },
          { label: 'Professional', value: 'professional' },
          { label: 'Personal', value: 'personal' },
          { label: 'Academic', value: 'academic' },
          { label: 'Open Source', value: 'open-source' }
        ]}
        value={filter}
        onChange={setFilter}
      />

      <ProjectSection
        title='Featured'
        filter={filter}
        filterValue='all'
        items={PROJECTS.filter((p) => p.featured).sort((a, b) => b.date.localeCompare(a.date))}
      />
      <ProjectSection
        title='Professional'
        filter={filter}
        filterValue='professional'
        items={PROJECTS.filter((p) => p.type === 'professional').sort((a, b) =>
          b.date.localeCompare(a.date)
        )}
      />
      <ProjectSection
        title='Personal'
        filter={filter}
        filterValue='personal'
        items={PROJECTS.filter((p) => p.type === 'personal').sort((a, b) =>
          b.date.localeCompare(a.date)
        )}
      />
      <ProjectSection
        title='Academic'
        filter={filter}
        filterValue='academic'
        items={PROJECTS.filter((p) => p.type === 'academic').sort((a, b) =>
          b.date.localeCompare(a.date)
        )}
      />
      <ProjectSection
        title='Open Source'
        filter={filter}
        filterValue='open-source'
        items={PROJECTS.filter((p) => p.type === 'open-source').sort((a, b) =>
          b.date.localeCompare(a.date)
        )}
      />
    </PageLayout>
  );
}

export default Projects;
