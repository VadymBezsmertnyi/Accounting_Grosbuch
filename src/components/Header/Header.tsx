import React from 'react';
import { Box } from '@mui/material';
import { LogoIcon, NavigateMenu, SocialButtons, Contacts } from '../';

import { classes } from './Header.styles';

const Header = () => {
  return (
    <Box sx={classes.header}>
      <Box sx={classes.headerContainer}>
        <LogoIcon />
        <Box sx={classes.headerRight}>
          <NavigateMenu />
          <SocialButtons />
          <Contacts />
        </Box>
      </Box>
      <Box sx={classes.line} />
    </Box>
  );
};

export default Header;
