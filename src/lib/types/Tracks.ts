import { TrackItem } from './TrackItem';

export type Tracks = {
  href: string;
  items: TrackItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};
