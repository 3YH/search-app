import { Box, CardContent, Typography } from '@mui/material';
import { TrackItem } from 'lib/types/TrackItem';
import { TrackCard } from './TrackCard.styles';

interface IProps {
  trackItem: TrackItem;
}

export default function ResultTrackCard(props: IProps) {
  const { trackItem } = props;

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <TrackCard>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trackItem.name}
          </Typography>
        </CardContent>
      </TrackCard>
    </Box>
  );
}
