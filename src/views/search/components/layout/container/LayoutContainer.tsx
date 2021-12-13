import { Container } from '@mui/material';

interface IProps {
  children: any;
}

export default function LayoutContainer(props: IProps) {
  const { children } = props;
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  );
}
