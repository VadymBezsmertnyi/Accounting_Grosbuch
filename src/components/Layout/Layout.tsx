import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Header, Footer } from '../';
import { logoIcon } from '../../images';

import { createAppTheme } from '../../theme/theme';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const theme = createAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box component={'img'} src={logoIcon} sx={{ display: 'none' }} />
        <Box component={'header'}>
          <Header />
        </Box>
        <Box component={'main'}>{children}</Box>
        <Box component={'footer'}>
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Layout;
