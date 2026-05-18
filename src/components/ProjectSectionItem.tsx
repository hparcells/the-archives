'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false });
import ProjectTechStackList from './ProjectTechStackList';

import { Project } from '@/types/project';
import { sendGAEvent } from '@next/third-parties/google';

function ProjectSectionItem({ item }: { item: Project }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const dateToUse = item.startDate || item.date;

  function handleItemClick() {
    setModalOpen(true);
    sendGAEvent('event', 'project_view', {
      project_name: item.name
    });
  }

  return (
    <>
      <ProjectModal
        item={modalOpen ? item : null}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div
        className='py-2 group border-b border-stone-900 transition-colors duration-200 cursor-pointer'
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={handleItemClick}
      >
        <div className='flex items-center gap-4'>
          <p className='font-(family-name:--font-b612-mono) text-xs text-stone-600 group-hover:text-yellow-500 transition-colors duration-200'>
            {dateToUse.substring(0, 4)}
          </p>
          <div className='flex flex-col grow min-w-0'>
            <p className='group-hover:text-yellow-500 transition-colors duration-200 truncate group-hover:whitespace-normal'>
              {item.name}
            </p>
            <AnimatePresence initial={false}>
              {(hovered || modalOpen) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                  className='flex flex-col gap-2'
                >
                  <p className='text-sm'>{item.tagline}</p>
                  {item.technologies.length > 0 && (
                    <ProjectTechStackList
                      technologies={item.technologies}
                      maxLength={4}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ArrowRight
            size={12}
            className='shrink-0 text-stone-400 group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-200'
          />
        </div>
      </div>
    </>
  );
}

export default ProjectSectionItem;
