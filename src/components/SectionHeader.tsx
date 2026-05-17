function SectionHeader({ title }: { title: string }) {
  return (
    <p className='font-(family-name:--font-b612-mono) border-b border-stone-800 pb-2.5 text-stone-600 text-xs'>
      {title}
    </p>
  );
}

export default SectionHeader;
