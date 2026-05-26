'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

import Alert from '@/components/ui/Alert';
import Checkbox from '@/components/ui/Checkbox';
import PageLayout from '@/components/PageLayout';
import ProjectSection from '@/components/ProjectSection';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { Input } from '@/components/ui/Input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/InputGroup';

import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types/project';

function Projects() {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [showHidden, setShowHidden] = useState<boolean>(false);

  const visibleProjects = PROJECTS.filter((p) => showHidden || !p.defaultHidden);

  function hiddenCount(filter: (p: Project) => boolean) {
    if (showHidden) {
      return 0;
    }
    return PROJECTS.filter((p) => filter(p) && p.defaultHidden).length;
  }

  const sections = [
    { title: 'Featured', groupValue: 'all', filter: (p: Project) => p.featured },
    {
      title: 'Professional',
      groupValue: 'professional',
      filter: (p: Project) => p.type === 'professional'
    },
    {
      title: 'Personal',
      groupValue: 'personal',
      filter: (p: Project) => p.type === 'personal'
    },
    {
      title: 'Open Source',
      groupValue: 'open-source',
      filter: (p: Project) => p.type === 'open-source'
    },
    {
      title: 'Academic',
      groupValue: 'academic',
      filter: (p: Project) => p.type === 'academic'
    },
    {
      title: 'Freelance',
      groupValue: 'freelance',
      filter: (p: Project) => p.type === 'freelance'
    }
  ];

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
        {/* <InputGroup>
          <InputGroupInput placeholder='Search projects...' />
          <InputGroupAddon align='inline-start'>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup> */}
        <SegmentedControl
          data={[
            { label: 'All', value: 'all' },
            ...sections.slice(1).map(({ title, groupValue }) => {
              return {
                label: title,
                value: groupValue
              };
            })
          ]}
          value={selectedGroup}
          onChange={setSelectedGroup}
        />
        <Checkbox
          label='Show hidden'
          checked={showHidden}
          onChange={setShowHidden}
        />
      </section>

      {sections.map(({ title, groupValue, filter }) => (
        <ProjectSection
          key={title}
          title={title}
          selectedGroup={selectedGroup}
          groupValue={groupValue}
          items={visibleProjects.filter(filter).sort((a, b) => b.date.localeCompare(a.date))}
          initialLimit={5}
          hiddenCount={hiddenCount(filter)}
          showHidden={() => {
            setShowHidden(true);
          }}
        />
      ))}
    </PageLayout>
  );
}

export default Projects;
