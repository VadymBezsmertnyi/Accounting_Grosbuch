import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { createAppTheme } from '../../theme/theme';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const theme = createAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          component={'header'}
          style={{
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          header
        </Box>
        <Box component={'main'}>{children}</Box>
        <Box
          component={'footer'}
          style={{
            background: '#00000014',
            margin: '50px 0 0 0',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          footer
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Layout;
