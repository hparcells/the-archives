'use client';

import { LucideIcon } from 'lucide-react';

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
}

function CarouselButton({ icon: Icon, className, ...props }: CarouselButtonProps) {
  return (
    <button
      className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm border border-stone-700 bg-mist-950 text-stone-400 transition-colors duration-200 hover:border-stone-600 hover:text-stone-200 ${className ?? ''}`.trim()}
      {...props}
    >
      <Icon size={14} />
    </button>
  );
}

export default CarouselButton;
