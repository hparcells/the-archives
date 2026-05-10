import clsx from 'clsx';
import Link from 'next/link';

const className =
  'font-(family-name:--font-dm-mono) text-stone-700 hover:text-stone-500 transition-colors duration-200 mb-8 sm:mb-16 tracking-wider block';

function BackLink({ label, to }: { label: string; to: string }) {
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a
        href={to}
        target='_blank'
        className={clsx(className, 'flex items-center gap-1 text-xs')}
      >
        ← {label}
      </a>
    );
  }

  return (
    <Link
      href={to}
      className={className}
    >
      ← {label}
    </Link>
  );
}

export default BackLink;
