import SectionHeader from './SectionHeader';

function HomeSection({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section>
      <SectionHeader title={title} />
      <div className='flex flex-col'>{children}</div>
    </section>
  );
}

export default HomeSection;
