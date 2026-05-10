import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const className =
  'font-(family-name:--font-dm-mono) text-stone-700 hover:text-stone-500 transition-colors duration-200 mb-8 sm:mb-16 tracking-wider block flex items-center gap-1 text-xs';

function BackLink({ label, to }: { label: string; to: string }) {
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a
        href={to}
        className={className}
      >
        <ArrowLeft size={12} /> {label}
      </a>
    );
  }

  return (
    <Link
      href={to}
      className={className}
    >
      <ArrowLeft size={12} /> {label}
    </Link>
  );
}

export default BackLink;
