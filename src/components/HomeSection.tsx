function HomeSection({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section>
      <h2 className='font-(family-name:--font-b612-mono) text-stone-400 border-b border-stone-800 pb-2.5 text-xs font-normal'>
        {title}
      </h2>
      <div className='flex flex-col section-items'>{children}</div>
    </section>
  );
}

export default HomeSection;
