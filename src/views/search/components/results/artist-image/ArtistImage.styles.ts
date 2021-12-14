import { Card } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {
  background?: string;
}

const ArtistImage = styled(Card)((props: IProps) => ({
  display: 'flex',
  alignSelf: 'center',
  background: `url(${props.background}) no-repeat center center`,
  backgroundSize: 'cover',
  borderRadius: 50,
  width: 50,
  height: 50,
}));

export { ArtistImage };
