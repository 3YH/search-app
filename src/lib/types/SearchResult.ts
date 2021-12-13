import { Artists } from './Artists';
import { Tracks } from './Tracks';

export type SearchResult = {
  artists?: Artists;
  tracks?: Tracks;
};
