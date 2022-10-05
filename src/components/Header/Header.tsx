import React from 'react';
import { Box } from '@mui/material';
import { LogoIcon, NavigateMenu } from '../';

import { classes } from './Header.styles';

const Header = () => {
  return (
    <Box sx={classes.headerContainer}>
      <LogoIcon />
      <Box sx={classes.headerRight}>
        <NavigateMenu />
      </Box>
    </Box>
  );
};

export default Header;
