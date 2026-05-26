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
      <section>
        <h1 className='mb-4'>{title}</h1>

        {description && (
          <div className='mb-12 stack-4'>
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
        )}
      </section>
      <div className='stack-12'>{children}</div>
    </>
  );
}

export default PageLayout;
