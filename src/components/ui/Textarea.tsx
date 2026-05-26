import * as React from 'react';

import { cn } from '@/util/shadcn';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'field-sizing-content min-h-16 w-full rounded-sm border border-stone-800 bg-transparent px-3 py-1.5 text-sm text-stone-200 font-light outline-none transition-colors duration-200 placeholder:text-stone-600 hover:border-stone-600 focus-visible:border-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-500/20 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
