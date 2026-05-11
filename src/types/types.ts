export type Chip = 'new' | 'under-construction';

export interface TimelineItem {
  date: string;
  title: string;
  content: React.ReactNode;
}
