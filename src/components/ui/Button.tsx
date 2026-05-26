import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/util/shadcn';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-1.5 rounded-sm text-sm font-medium whitespace-nowrap outline-none transition-colors duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-3.5',
  {
    variants: {
      variant: {
        primary: 'bg-yellow-500 text-stone-950 hover:bg-yellow-500/80 hover:text-stone-950/80',
        outline:
          'text-stone-400 border border-stone-600 hover:text-stone-200 hover:border-stone-400',
        ghost: 'text-stone-600 hover:text-stone-200 hover:bg-stone-900/30'
      },
      size: {
        default: 'px-3 py-1.5',
        sm: 'px-2.5 py-1 text-xs',
        lg: 'px-4 py-2',
        icon: 'size-8'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
