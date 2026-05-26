import * as React from 'react';

import { cn } from '@/util/shadcn';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'w-full min-w-0 rounded-sm border border-stone-800 bg-transparent px-3 py-1.5 text-sm text-stone-200 font-light outline-none transition-colors duration-200 placeholder:text-stone-600 hover:border-stone-600 focus-visible:border-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-500/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-stone-200',
        className
      )}
      {...props}
    />
  );
}

export { Input };
