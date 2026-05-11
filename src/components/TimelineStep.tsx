function TimelineStep({
  date,
  title,
  children,
  isFirst,
  isLast
}: {
  date: string;
  title: string;
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className='relative pl-4 pb-6 ml-16'>
      {!isFirst && <span className='absolute left-0 top-0 h-3.5 border-l-2 border-stone-600' />}
      {!isLast && <span className='absolute left-0 top-5.5 bottom-0 border-l-2 border-stone-600' />}
      <span className='absolute w-4 h-4 rounded-full border-2 border-stone-600 bg-mist-950 -left-1.75 top-1.5' />

      <p className='absolute right-full pr-4 top-2 leading-none text-sm font-(family-name:--font-b612-mono) text-stone-600'>
        {date}
      </p>
      <div className=''>
        <p className='text-lg text-stone-200 font-semibold'>{title}</p>
        {children}
      </div>
    </div>
  );
}

export default TimelineStep;
