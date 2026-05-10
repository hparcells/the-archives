import Link from 'next/link';

const rootClassName = 'py-3 border-b border-stone-900';

function HomeSectionItem({ title, to, number }: { title: string; to: string; number: string }) {
  const isExternal = /^https?:\/\//.test(to);

  const content = (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <span className='font-(family-name:--font-dm-mono) text-xs text-stone-700'>{number}</span>
          <span className='text-stone-300'>{title}</span>
        </div>
        →
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={to}
        target='_blank'
        className={rootClassName}
      >
        {content}
      </a>
    );
  }
  return (
    <Link
      href={to}
      className={rootClassName}
    >
      {content}
    </Link>
  );
}

export default HomeSectionItem;
