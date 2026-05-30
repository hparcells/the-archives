'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Alert from '@/components/ui/Alert';
import Checkbox from '@/components/ui/Checkbox';
import PageLayout from '@/components/PageLayout';
import ProjectSection from '@/components/ProjectSection';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/InputGroup';

import { Project } from '@/types/project';

import { PROJECTS } from '@/data/projects';

function Projects() {
  const [search, setSearch] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [showHidden, setShowHidden] = useState<boolean>(false);

  const filteredProjects = PROJECTS.filter(({ name, tagline, date, startDate, technologies }) => {
    const query = search.trim().toLowerCase();

    return (
      name.toLowerCase().includes(query) ||
      tagline.toLowerCase().includes(query) ||
      date.toLowerCase().includes(query) ||
      startDate.toLowerCase().includes(query) ||
      technologies.some((t) => t.toLowerCase().includes(query))
    );
  });
  const visibleProjects = filteredProjects.filter((project) => {
    return showHidden || !project.defaultHidden;
  });

  function hiddenCount(filter: (p: Project) => boolean) {
    if (showHidden) {
      return 0;
    }
    return filteredProjects.filter((p) => filter(p) && p.defaultHidden).length;
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
        <InputGroup>
          <InputGroupInput
            placeholder='Search projects...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <InputGroupAddon align='inline-start'>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
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

      <section>
        <AnimatePresence initial={false}>
          {sections.map(({ title, groupValue, filter }) => {
            const sectionProjects = filteredProjects.filter(filter);
            const visibleSectionProjects = visibleProjects.filter(filter);

            if (search.trim() === '' || sectionProjects.length > 0) {
              return (
                <motion.section
                  key={title}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <ProjectSection
                    title={title}
                    selectedGroup={selectedGroup}
                    groupValue={groupValue}
                    projects={visibleSectionProjects}
                    initialLimit={5}
                    hiddenCount={hiddenCount(filter)}
                    showHidden={() => {
                      setShowHidden(true);
                    }}
                  />
                </motion.section>
              );
            }
            return null;
          })}
        </AnimatePresence>
        {filteredProjects.length === 0 && <p>No data found.</p>}
      </section>
    </PageLayout>
  );
}

export default Projects;
