import { ReactNode } from 'react';

import BackLink from '@/components/BackLink';

function PageLayout({
  title,
  description,
  children,
  isHome = false
}: {
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
  isHome?: boolean;
}) {
  return (
    <>
      <BackLink
        label={isHome ? 'hunterparcells.com' : 'archives'}
        to={isHome ? 'https://hunterparcells.com' : '/'}
      />
      <div className='flex flex-col gap-12'>
        <section className='flex flex-col gap-4'>
          <h1>{title}</h1>
          {description && (typeof description === 'string' ? <p>{description}</p> : description)}
        </section>
        {children}
      </div>
    </>
  );
}

export default PageLayout;
