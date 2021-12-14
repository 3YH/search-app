import { styled } from '@mui/system';

interface IProps {
  background?: string;
}

const ArtistImage = styled('div')((props: IProps) => ({
  display: 'flex',
  alignSelf: 'center',
  background: `url(${props.background}) no-repeat center center`,
  backgroundSize: 'cover',
  borderRadius: 50,
  width: 50,
  height: 50,
}));

const Placeholder = styled('div')((props: IProps) => ({
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  backgroundColor: 'grey',
  borderRadius: 50,
  width: 50,
  height: 50,
}));

export { ArtistImage, Placeholder };
