'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CodeXml, ExternalLink, GitPullRequest, AlertCircle, PencilLine } from 'lucide-react';

import SectionHeader from './SectionHeader';
import ProjectTechStackList from './ProjectTechStackList';
import Button from './ui/Button';
import Carousel from './ui/Carousel';

import { Project, PROJECT_STATUS_LABELS, PROJECT_TYPE_LABELS } from '@/types/project';

function ProjectModalLinks({ links }: { links: Project['links'] }) {
  if (Object.keys(links).length === 0) return null;
  return (
    <section className='stack-2'>
      <SectionHeader title='Links' />
      <div className='flex gap-2'>
        {links.github && (
          <Button
            icon={CodeXml}
            href={links.github}
            target='_blank'
          >
            GitHub
          </Button>
        )}
        {links.issue && (
          <Button
            icon={AlertCircle}
            href={links.issue}
            target='_blank'
          >
            Issue
          </Button>
        )}
        {links.pullRequest && (
          <Button
            icon={GitPullRequest}
            href={links.pullRequest}
            target='_blank'
          >
            Pull Request
          </Button>
        )}
        {links.live && (
          <Button
            icon={ExternalLink}
            variant='outline'
            href={links.live}
            target='_blank'
          >
            Live Site
          </Button>
        )}
        {links.blog && (
          <Button
            icon={PencilLine}
            variant='outline'
            href={links.blog}
            target='_blank'
          >
            Blog Post
          </Button>
        )}
      </div>
    </section>
  );
}

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
            <section className='sticky top-0 z-1 bg-stone-950 border-b border-stone-800 px-6 pt-6 pb-4 flex flex-col'>
              <p className='font-(family-name:--font-b612-mono) text-2xs text-yellow-500'>
                {PROJECT_TYPE_LABELS[item.type]} {'//'} {item.date.substring(0, 4)}
              </p>
              <p className='font-semibold text-lg text-stone-200'>{item.name}</p>
              <p className='text-sm'>{item.tagline}</p>
            </section>
            <div className='px-6 pt-4 pb-6 stack-6'>
              {item.images.length > 0 && (
                <section>
                  <Carousel images={item.images} />
                </section>
              )}
              <section className='stack-2'>
                <SectionHeader title='Details' />
                <div className='grid grid-cols-2 gap-4'>
                  {item.startDate && item.date !== item.startDate && (
                    <div>
                      <p className='font-(family-name:--font-b612-mono) text-xs text-stone-600'>
                        Start Date
                      </p>
                      <p className='text-sm'>{item.startDate}</p>
                    </div>
                  )}
                  <div>
                    <p className='font-(family-name:--font-b612-mono) text-xs text-stone-600'>
                      Date
                    </p>
                    <p className='text-sm'>{item.date}</p>
                  </div>
                  <div>
                    <p className='font-(family-name:--font-b612-mono) text-xs text-stone-600'>
                      Status
                    </p>
                    <p className='text-sm'>{PROJECT_STATUS_LABELS[item.status]}</p>
                  </div>
                </div>
              </section>
              <section className='stack-2'>
                <SectionHeader title='About' />
                {item.description}
              </section>
              {item.technologies.length > 0 && (
                <section className='stack-2'>
                  <SectionHeader title='Tech Stack' />
                  <ProjectTechStackList technologies={item.technologies} />
                </section>
              )}
              <ProjectModalLinks links={item.links} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default ProjectModal;
