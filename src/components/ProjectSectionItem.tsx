'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Chip from './ui/Chip';

import { Project } from '@/types/project';

function ProjectSectionItem({ item }: { item: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='py-2 group border-b border-stone-900 transition-colors duration-200 cursor-pointer'
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className='flex items-center gap-4'>
        <p className='font-(family-name:--font-b612-mono) text-xs text-stone-600 group-hover:text-yellow-500 transition-colors duration-200'>
          {item.date.substring(0, 4)}
        </p>
        <div className='flex flex-col grow min-w-0'>
          <p className='group-hover:text-yellow-500 transition-colors duration-200 truncate group-hover:whitespace-normal'>
            {item.name}
          </p>
          <AnimatePresence initial={false}>
            {hovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
                className='flex flex-col gap-2'
              >
                <p className='text-sm'>{item.tagline}</p>
                <div className='flex flex-wrap gap-2'>
                  {item.technologies.slice(0, 4).map((tech) => {
                    return (
                      <Chip
                        key={tech}
                        label={tech}
                      />
                    );
                  })}
                  {item.technologies.length > 4 && (
                    <Chip label={`+${item.technologies.length - 4} more`} />
                  )}
                </div>
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
  );
}

export default ProjectSectionItem;
