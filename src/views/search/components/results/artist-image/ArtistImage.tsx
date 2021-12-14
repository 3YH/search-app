import { Box, CardContent, Typography } from '@mui/material';
import { ArtistItem } from 'lib/types/ArtistItem';
import { ArtistImage } from './ArtistImage.styles';

interface IProps {
  artistItem: ArtistItem;
}

export default function ResultArtistImage(props: IProps) {
  const { artistItem } = props;

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      {artistItem.images.length > 0 ? (
        <ArtistImage background={artistItem.images[0].url} />
      ) : null}
    </Box>
  );
}
