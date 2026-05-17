import { Chip as ChipType } from '@/types/types';

type ChipProps =
  | { type: ChipType; label?: never; className?: never }
  | { type?: never; label: string; className?: string };

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

const neutralClassName = 'text-stone-500 border-stone-600';

function Chip({ type, label, className }: ChipProps) {
  const resolvedLabel = type ? chipStyles[type].label : label;
  const resolvedClassName = type ? chipStyles[type].className : (className ?? neutralClassName);

  return (
    <p
      className={`font-(family-name:--font-b612-mono) text-xs px-2 py-0.5 rounded-sm border transition-all duration-200 ${resolvedClassName}`}
    >
      {resolvedLabel}
    </p>
  );
}

export default Chip;
