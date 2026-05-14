import { ArrowRight } from 'lucide-react';

import Chip from '@/components/Chip';
import SmartLink from '@/components/SmartLink';

import { Chip as ChipType } from '@/types/types';

function HomeSectionItem({
  title,
  to,
  number,
  chip
}: {
  title: string;
  to?: string;
  number: string;
  chip?: ChipType;
}) {
  const isDisabled = chip === 'under-construction';

  const content = (
    <div
      className={`flex items-center justify-between py-3 border-b border-stone-900 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'group'}`}
    >
      <div className='flex items-center gap-4 min-w-0'>
        <span className='font-(family-name:--font-b612-mono) text-xs text-stone-600 group-hover:text-yellow-500 transition-colors duration-200'>
          {number}
        </span>
        <span className='text-stone-100 group-hover:text-yellow-500 transition-colors duration-200 truncate'>
          {title}
        </span>
      </div>
      <div className='flex items-center gap-4 shrink-0'>
        {chip && <Chip type={chip} />}
        {to && !isDisabled && (
          <ArrowRight
            size={12}
            className='text-stone-400 group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-200'
          />
        )}
      </div>
    </div>
  );

  return to && !isDisabled ? <SmartLink href={to}>{content}</SmartLink> : content;
}

export default HomeSectionItem;
