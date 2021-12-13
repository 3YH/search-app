import { Box, Container, Grid } from '@mui/material';
import { ArtistItem } from 'lib/types/ArtistItem';
import { SearchResult } from 'lib/types/SearchResult';
import { TrackItem } from 'lib/types/TrackItem';
import ResultTrackCard from './track-card/TrackCard';

interface IProps {
  result?: SearchResult;
}

export default function Results(props: IProps) {
  const { result } = props;
  return (
    <Container
      sx={{
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ marginBottom: 6 }}>
        {result && result.tracks && result.tracks?.items.length > 0
          ? result.tracks?.items.map((item: TrackItem, idx) => (
              <Grid item xs={4}>
                <ResultTrackCard trackItem={item} />
              </Grid>
            ))
          : null}
      </Grid>

      <Grid container spacing={1}>
        {result && result.artists && result.artists.items.length > 0
          ? result.artists.items.map((item: ArtistItem, idx) => (
              <Grid item xs={2}>
                <li key={idx} className="item">
                  <span className="item-id">{item.name}</span>
                </li>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
}
