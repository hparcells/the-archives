'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import SectionHeader from './SectionHeader';
import ProjectTechStackList from './ProjectTechStackList';

import { Project, PROJECT_TYPE_LABELS } from '@/types/project';

interface ProjectModalProps {
  item: Project | null;
  onClose: () => void;
}

function ProjectModal({ item, onClose }: ProjectModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className='fixed inset-0 bg-black/60 flex items-center justify-center z-40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className='relative bg-stone-950 border border-stone-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto mx-4 rounded-md'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className='absolute top-4 right-4 text-stone-600 hover:text-stone-400 transition-colors duration-200 cursor-pointer'
              onClick={onClose}
            >
              <X size={16} />
            </button>
            <section className='border-b border-stone-800 px-6 pt-6 pb-4 flex flex-col'>
              <p className='font-(family-name:--font-b612-mono) text-2xs text-yellow-500'>
                {PROJECT_TYPE_LABELS[item.type]} {'//'} {item.date.substring(0, 4)}
              </p>
              <p className='font-semibold text-lg'>{item.name}</p>
              <p className='text-sm'>{item.tagline}</p>
            </section>
            <div className='px-6 pt-4 pb-6 stack-4'>
              <section className='stack-2'>
                <SectionHeader title='About' />
                {item.description}
              </section>
              <section className='stack-2'>
                <SectionHeader title='Tech Stack' />
                <ProjectTechStackList technologies={item.technologies} />
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default ProjectModal;
