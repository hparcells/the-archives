import { TimelineItem } from '@/types/types';

import TimelineStep from '@/components/TimelineStep';

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <TimelineStep
          key={i}
          date={item.date}
          title={item.title}
          isFirst={i === 0}
          isLast={i === items.length - 1}
        >
          {item.content}
        </TimelineStep>
      ))}
    </div>
  );
}

export default Timeline;
