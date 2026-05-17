'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'outline';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-yellow-500 text-stone-950 hover:bg-yellow-400 hover:bg-yellow-500/80 hover:text-stone-950/80',
  outline: 'text-stone-400 border border-stone-600 hover:text-stone-200 hover:border-stone-400'
};

const baseStyles =
  'flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer';

interface ButtonBase {
  children: string;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
}

type AsButton = ButtonBase &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBase> & { href?: never };
type AsLink = ButtonBase & { href: string; target?: string; rel?: string };

type ButtonProps = AsButton | AsLink;

function Button({ children, variant = 'primary', icon: Icon, className, ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className ?? ''}`.trim();

  const content = (
    <>
      {Icon && <Icon size={14} />}
      {children}
    </>
  );

  if (props.href) {
    const { href, ...rest } = props as AsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  const { ...rest } = props;
  return (
    <button
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}

export default Button;
