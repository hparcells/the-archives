import BackLink from '@/components/BackLink';

function PageLayout({
  title,
  description,
  children,
  isHome = false
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  isHome?: boolean;
}) {
  return (
    <>
      <BackLink
        label={isHome ? 'hunterparcells.com' : 'archives'}
        to={isHome ? 'https://hunterparcells.com' : '/'}
      />
      <div className='flex flex-col gap-12'>
        <section className='flex flex-col gap-2'>
          <h1 className='font-(family-name:--font-major-mono-display) text-3xl text-stone-300'>
            {title}
          </h1>
          <p className='font-light'>{description}</p>
        </section>
        {children}
      </div>
    </>
  );
}

export default PageLayout;
