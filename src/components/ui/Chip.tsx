import { Chip as ChipType } from '@/types/types';

const chipStyles: Record<ChipType, { label: string; className: string }> = {
  new: {
    label: 'New',
    className:
      'bg-yellow-500/15 text-yellow-500 border-yellow-500/30 group-hover:bg-yellow-500/30 group-hover:border-yellow-500/60'
  },
  'under-construction': {
    label: 'Under Construction',
    className:
      'bg-gray-500/15 text-gray-500 border-gray-500/30 group-hover:bg-gray-500/30 group-hover:border-gray-500/60'
  }
};

function Chip({ type }: { type: ChipType }) {
  const { label, className } = chipStyles[type];

  return (
    <span
      className={`font-(family-name:--font-b612-mono) text-xs px-2 py-0.5 rounded-sm border transition-all duration-200 ${className}`}
    >
      {label}
    </span>
  );
}

export default Chip;
