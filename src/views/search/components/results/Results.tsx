import { Container, Grid } from '@mui/material';
import { ArtistItem } from 'lib/types/ArtistItem';
import { SearchResult } from 'lib/types/SearchResult';
import { TrackItem } from 'lib/types/TrackItem';
import ResultArtistImage from './artist-image/ArtistImage';
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
      {result && (
        <div>
          <Grid container spacing={2} sx={{ marginBottom: 6 }}>
            {result.tracks && result.tracks?.items.length > 0 ? (
              result.tracks?.items.map((item: TrackItem, idx: number) => (
                <Grid key={idx} item xs={4}>
                  <ResultTrackCard trackItem={item} />
                </Grid>
              ))
            ) : (
              <p>No tracks found.</p>
            )}
          </Grid>

          <Grid container spacing={1}>
            {result.artists && result.artists.items.length > 0 ? (
              result.artists.items.map((item: ArtistItem, idx: number) => (
                <Grid key={idx} item xs={2}>
                  <ResultArtistImage artistItem={item} />
                </Grid>
              ))
            ) : (
              <p>No artists found.</p>
            )}
          </Grid>
        </div>
      )}
    </Container>
  );
}
