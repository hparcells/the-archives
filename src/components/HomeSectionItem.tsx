import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function HomeSectionItem({ title, to, number }: { title: string; to: string; number: string }) {
  const isExternal = /^https?:\/\//.test(to);

  const content = (
    <>
      <div className='flex items-center justify-between group py-3 border-b border-stone-900'>
        <div className='flex items-center gap-4'>
          <span className='font-(family-name:--font-dm-mono) text-xs text-stone-700 group-hover:text-yellow-500 transition-colors duration-200'>
            {number}
          </span>
          <span className='text-stone-300 group-hover:text-yellow-500 transition-colors duration-200'>
            {title}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <ArrowRight
            size={12}
            className='text-stone-500 group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-200'
          />
        </div>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={to}
        target='_blank'
      >
        {content}
      </a>
    );
  }
  return <Link href={to}>{content}</Link>;
}

export default HomeSectionItem;
