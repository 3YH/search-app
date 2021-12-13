import { ArtistItem } from './ArtistItem';

export type Artists = {
  href: string;
  items: ArtistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};
