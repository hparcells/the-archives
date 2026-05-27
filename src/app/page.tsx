import HomeSection from '@/components/HomeSection';
import HomeSectionItem from '@/components/HomeSectionItem';
import PageLayout from '@/components/PageLayout';
import { Chip } from '@/types/types';

interface SectionItem {
  title: string;
  to?: string;
  chip?: Chip;
}
interface Section {
  title: string;
  items: SectionItem[];
}

const sections: Section[] = [
  {
    title: 'Content',
    items: [
      { title: 'Projects', to: '/projects' },
      { title: 'Spreadsheets', to: '/spreadsheets' },
      { title: 'Blog', to: 'https://blog.hunterparcells.com/' }
    ]
  },
  {
    title: 'About',
    items: [
      { title: 'Now', to: '/now' },
      { title: 'Developer Background', to: '/background' },
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
          title={section.title}
          key={section.title}
        >
          {section.items.map((item) => (
            <HomeSectionItem
              title={item.title}
              to={item.to}
              number={String(counter++).padStart(2, '0')}
              chip={item.chip}
              key={item.title}
            />
          ))}
        </HomeSection>
      ))}
    </PageLayout>
  );
}

export default Home;
