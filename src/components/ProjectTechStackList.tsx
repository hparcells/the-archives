import Chip from './ui/Chip';

function ProjectTechStackList({
  technologies,
  maxLength
}: {
  technologies: string[];
  maxLength?: number;
}) {
  const displayedTechnologies = maxLength ? technologies.slice(0, maxLength) : technologies;

  return (
    <div className='flex flex-wrap gap-2'>
      {displayedTechnologies.map((tech) => {
        return (
          <Chip
            key={tech}
            label={tech}
          />
        );
      })}
      {maxLength && technologies.length > maxLength && (
        <Chip
          label={`+${technologies.length - maxLength} more`}
          className='text-stone-600 border-stone-800'
        />
      )}
    </div>
  );
}

export default ProjectTechStackList;
