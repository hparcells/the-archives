import { ArrowLeft } from 'lucide-react';
import SmartLink from './SmartLink';

function BackLink({ label, to }: { label: string; to: string }) {
  return (
    <SmartLink
      href={to}
      className='font-(family-name:--font-b612-mono) text-stone-600 hover:text-stone-400 transition-colors duration-200 mb-8 sm:mb-16 tracking-wider flex items-center gap-1 text-xs'
    >
      <ArrowLeft size={12} /> {label}
    </SmartLink>
  );
}

export default BackLink;
