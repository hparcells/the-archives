function HomeSection({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section>
      <p className='font-(family-name:--font-b612-mono) border-b border-stone-800 pb-2.5 text-stone-600 text-xs'>
        {title}
      </p>
      <div className='flex flex-col section-items'>{children}</div>
    </section>
  );
}

export default HomeSection;
