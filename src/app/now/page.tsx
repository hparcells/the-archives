import PageLayout from '@/components/PageLayout';

function Now() {
  return (
    <PageLayout
      title='Now'
      description={
        <>
          <p>What am I doing in life right now?</p>
          <p>
            See also:{' '}
            <a
              href='https://nownownow.com/about'
              target='_blank'
            >
              <em>What is a &quot;now page&quot;?</em>
            </a>
          </p>
        </>
      }
    >
      <></>
    </PageLayout>
  );
}

export default Now;
