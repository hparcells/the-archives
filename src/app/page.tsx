import BackLink from '@/components/BackLink';
import HomeSection from '@/components/HomeSection';
import HomeSectionItem from '@/components/HomeSectionItem';

function Home() {
  return (
    <>
      <BackLink
        label='hunterparcells.com'
        to='https://hunterparcells.com'
      />
      <div className='flex flex-col gap-12'>
        <section className='flex flex-col gap-2'>
          <h1 className='font-(family-name:--font-major-mono-display) text-3xl text-stone-300'>
            The Archives
          </h1>
          <p className='font-light'>
            Originally one big list of every piece of content I&apos;ve created, now something more.
          </p>
        </section>
        <HomeSection title='Content'>
          <HomeSectionItem
            title='Projects'
            to='/projects'
            number='01'
          />
          <HomeSectionItem
            title='Blog'
            to='https://blog.hunterparcells.com/'
            number='02'
          />
          <HomeSectionItem
            title='Spreadsheets'
            to='/spreadsheets'
            number='03'
          />
        </HomeSection>
        <HomeSection title='About'>
          <HomeSectionItem
            title='Now'
            to='/now'
            number='04'
          />
          <HomeSectionItem
            title='More About Me'
            to='/me'
            number='05'
          />
          <HomeSectionItem
            title='Tools and Workflow'
            to='/tools'
            number='06'
          />
          <HomeSectionItem
            title='This Website'
            to='/website'
            number='07'
          />
        </HomeSection>
        <HomeSection title='Other'>
          <HomeSectionItem
            title='Support / Ko-fi'
            to='https://ko-fi.com/hunterparcells'
            number='08'
          />
          <HomeSectionItem
            title='Cool People'
            to='/cool'
            number='09'
          />
        </HomeSection>
      </div>
    </>
  );
}

export default Home;
