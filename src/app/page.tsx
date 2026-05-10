import BackLink from '@/components/BackLink';
import HomeSection from '@/components/HomeSection';
import HomeSectionItem from '@/components/HomeSectionItem';

const sections = [
  {
    title: 'Content',
    items: [
      { title: 'Projects', to: '/projects' },
      { title: 'Blog', to: 'https://blog.hunterparcells.com/' },
      { title: 'Spreadsheets', to: '/spreadsheets' }
    ]
  },
  {
    title: 'About',
    items: [
      { title: 'Now', to: '/now' },
      { title: 'More About Me', to: '/me' },
      { title: 'Tools and Workflow', to: '/tools' },
      { title: 'This Website', to: '/website' }
    ]
  },
  {
    title: 'Other',
    items: [
      { title: 'Support / Ko-fi', to: 'https://ko-fi.com/hunterparcells' },
      { title: 'Cool People', to: '/cool' }
    ]
  }
];

function Home() {
  let counter = 1;

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
        {sections.map((section) => (
          <HomeSection
            key={section.title}
            title={section.title}
          >
            {section.items.map((item) => (
              <HomeSectionItem
                key={item.to}
                title={item.title}
                to={item.to}
                number={String(counter++).padStart(2, '0')}
              />
            ))}
          </HomeSection>
        ))}
      </div>
    </>
  );
}

export default Home;
