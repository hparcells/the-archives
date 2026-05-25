'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ProjectSectionItem from '@/components/ProjectSectionItem';
import SectionHeader from '@/components/SectionHeader';

import { Project } from '@/types/project';

const SHOW_MORE_INCREMENT = 10;

interface ProjectSectionProps {
  title: string;
  filter: string;
  filterValue: string;
  items: Project[];
  initialLimit: number;
}

function ProjectSection({ title, filter, filterValue, items, initialLimit }: ProjectSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  if (filter !== 'all' && filter !== filterValue) {
    return null;
  }

  const sorted = items.sort((a, b) => {
    const dateAToUse = a.startDate || a.date;
    const dateBToUse = b.startDate || b.date;
    return new Date(dateBToUse).getTime() - new Date(dateAToUse).getTime();
  });

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  return (
    <section>
      <SectionHeader title={title} />
      <AnimatePresence initial={false}>
        {visible.map((item) => (
          <motion.div
            key={item.name}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ProjectSectionItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
      {items.length === 0 && <p className='mt-2'>No data found.</p>}
      {hasMore && (
        <div
          className='py-2 border-b border-stone-900 text-center cursor-pointer hover:bg-stone-900/30 transition-colors duration-200'
          onClick={() => {
            setVisibleCount((previousVisibleCount) => {
              return previousVisibleCount + SHOW_MORE_INCREMENT;
            });
          }}
        >
          <p className='text-sm text-stone-600'>+{sorted.length - visibleCount} more</p>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
