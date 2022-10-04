import React from 'react';
import { Box } from '@mui/material';
import LogoIcon from '../LogoIcon';

import { classes } from './Header.styles';

const Header = () => {
  return (
    <Box sx={classes.headerContainer}>
      <LogoIcon />
    </Box>
  );
};

export default Header;
