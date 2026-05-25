'use client';

import { LucideIcon } from 'lucide-react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  iconSize?: number;
}

function IconButton({ icon: Icon, iconSize = 14, className, ...props }: IconButtonProps) {
  return (
    <button
      className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm border border-stone-700 bg-mist-950 text-stone-400 transition-colors duration-200 hover:border-stone-600 hover:text-stone-200 ${className ?? ''}`.trim()}
      {...props}
    >
      <Icon size={iconSize} />
    </button>
  );
}

export default IconButton;
