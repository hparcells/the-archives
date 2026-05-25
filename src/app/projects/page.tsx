'use client';

import { useState } from 'react';

import Alert from '@/components/ui/Alert';
import Checkbox from '@/components/ui/Checkbox';
import PageLayout from '@/components/PageLayout';
import ProjectSection from '@/components/ProjectSection';
import SegmentedControl from '@/components/ui/SegmentedControl';

import { PROJECTS } from '@/data/projects';

function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [showHidden, setShowHidden] = useState<boolean>(false);

  const visibleProjects = PROJECTS.filter((p) => showHidden || !p.defaultHidden);

  return (
    <PageLayout
      title='Projects'
      description={
        <>
          <p>
            Everything I have ever made... or at least the things I could find on my hard drives.
          </p>
          <Alert variant='warning'>
            This page is a <strong>work in progress</strong>. Some projects may be missing or have
            incomplete information.
          </Alert>
        </>
      }
    >
      <section className='stack-4'>
        <SegmentedControl
          data={[
            { label: 'All', value: 'all' },
            { label: 'Professional', value: 'professional' },
            { label: 'Personal', value: 'personal' },
            { label: 'Open Source', value: 'open-source' },
            { label: 'Academic', value: 'academic' },
            { label: 'Freelance', value: 'freelance' }
          ]}
          value={filter}
          onChange={setFilter}
        />
        <Checkbox
          label='Show hidden'
          checked={showHidden}
          onChange={setShowHidden}
        />
      </section>

      <ProjectSection
        title='Featured'
        filter={filter}
        filterValue='all'
        items={visibleProjects
          .filter((p) => p.featured)
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
      <ProjectSection
        title='Professional'
        filter={filter}
        filterValue='professional'
        items={visibleProjects
          .filter((p) => p.type === 'professional')
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
      <ProjectSection
        title='Personal'
        filter={filter}
        filterValue='personal'
        items={visibleProjects
          .filter((p) => p.type === 'personal')
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
      <ProjectSection
        title='Open Source'
        filter={filter}
        filterValue='open-source'
        items={visibleProjects
          .filter((p) => p.type === 'open-source')
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
      <ProjectSection
        title='Academic'
        filter={filter}
        filterValue='academic'
        items={visibleProjects
          .filter((p) => p.type === 'academic')
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
      <ProjectSection
        title='Freelance'
        filter={filter}
        filterValue='freelance'
        items={visibleProjects
          .filter((p) => p.type === 'freelance')
          .sort((a, b) => b.date.localeCompare(a.date))}
        initialLimit={5}
      />
    </PageLayout>
  );
}

export default Projects;
