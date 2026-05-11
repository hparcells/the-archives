import { ArrowRight } from 'lucide-react';
import SmartLink from './SmartLink';

function HomeSectionItem({ title, to, number }: { title: string; to: string; number: string }) {
  return (
    <SmartLink href={to}>
      <div className='flex items-center justify-between group py-3 border-b border-stone-900'>
        <div className='flex items-center gap-4'>
          <span className='font-(family-name:--font-dm-mono) text-xs text-stone-600 group-hover:text-yellow-500 transition-colors duration-200'>
            {number}
          </span>
          <span className='text-stone-100 group-hover:text-yellow-500 transition-colors duration-200'>
            {title}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <ArrowRight
            size={12}
            className='text-stone-400 group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-200'
          />
        </div>
      </div>
    </SmartLink>
  );
}

export default HomeSectionItem;
