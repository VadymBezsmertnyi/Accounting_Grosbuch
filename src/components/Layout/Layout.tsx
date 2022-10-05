import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { createAppTheme } from '../../theme/theme';
import { Header } from '../';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const theme = createAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box component={'header'}>
          <Header />
        </Box>
        <Box component={'main'}>{children}</Box>
        <Box
          component={'footer'}
          sx={{
            margin: '50px 0 0 0',
          }}
        >
          footer
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Layout;
