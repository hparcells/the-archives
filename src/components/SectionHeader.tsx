function SectionHeader({ title, className }: { title: string; className?: string }) {
  return (
    <p
      className={`font-(family-name:--font-b612-mono) border-b border-stone-800 pb-2 text-stone-600 text-xs ${className ?? ''}`}
    >
      {title}
    </p>
  );
}

export default SectionHeader;
