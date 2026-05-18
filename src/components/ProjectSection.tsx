import { Project } from '@/types/project';
import ProjectSectionItem from '@/components/ProjectSectionItem';
import SectionHeader from '@/components/SectionHeader';

interface ProjectSectionProps {
  title: string;
  filter: string;
  filterValue: string;
  items: Project[];
}

function ProjectSection({ title, filter, filterValue, items }: ProjectSectionProps) {
  if (filter !== 'all' && filter !== filterValue) {
    return null;
  }

  return (
    <section>
      <SectionHeader title={title} />
      {items
        .sort((a, b) => {
          const dateAToUse = a.startDate || a.date;
          const dateBToUse = b.startDate || b.date;

          return new Date(dateBToUse).getTime() - new Date(dateAToUse).getTime();
        })
        .map((item) => (
          <ProjectSectionItem
            item={item}
            key={item.name}
          />
        ))}
      {items.length === 0 && <p className='mt-2'>No data found.</p>}
    </section>
  );
}

export default ProjectSection;
