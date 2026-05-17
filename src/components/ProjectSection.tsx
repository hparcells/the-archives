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
      {items.map((item) => (
        <ProjectSectionItem
          item={item}
          key={item.name}
        />
      ))}
    </section>
  );
}

export default ProjectSection;
