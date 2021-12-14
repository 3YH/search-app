import { Box, Typography } from '@mui/material';
import { ArtistItem } from 'lib/types/ArtistItem';
import { ArtistImage, Placeholder } from './ArtistImage.styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface IProps {
  artistItem: ArtistItem;
}

export default function ResultArtistImage(props: IProps) {
  const { artistItem } = props;

  return (
    <Box
      sx={{
        m: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {artistItem ? (
        <>
          {artistItem.images.length > 0 ? (
            <ArtistImage background={artistItem.images[0].url} />
          ) : (
            <Placeholder>
              <PersonOutlineOutlinedIcon />
            </Placeholder>
          )}
          <Typography>{artistItem.name}</Typography>
        </>
      ) : null}
    </Box>
  );
}
