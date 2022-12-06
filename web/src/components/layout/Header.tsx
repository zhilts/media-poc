import { AppBar, Toolbar, Typography } from '@mui/material';

interface IHeaderProps {
  children: JSX.Element;
}
export const Header = ({ children }: IHeaderProps) => {
  return <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        { children }
      </Typography>
    </Toolbar>
  </AppBar>;
};
