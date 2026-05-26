import SectionHeader from './SectionHeader';

function HomeSection({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section>
      <SectionHeader leftText={title} />
      <div className='stack'>{children}</div>
    </section>
  );
}

export default HomeSection;
