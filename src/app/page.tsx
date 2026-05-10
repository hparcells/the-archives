import HomeSection from '@/components/HomeSection';
import HomeSectionItem from '@/components/HomeSectionItem';
import PageLayout from '@/components/PageLayout';

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
    <PageLayout
      title='The Archives'
      description="Originally one big list of every piece of content I've created, now something more."
      isHome
    >
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
    </PageLayout>
  );
}

export default Home;
