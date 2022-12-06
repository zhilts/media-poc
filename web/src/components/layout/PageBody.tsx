import { Box, Container } from '@mui/material';

interface IPageBodyProps {
  children: JSX.Element;
}

export const PageBody = ({ children }: IPageBodyProps) =>
  <main>
    <Box
      sx={ {
        pt: 5,
        pb: 5,
      } }
    >
      <Container maxWidth="lg">
        { children }
      </Container>
    </Box>
  </main>;
