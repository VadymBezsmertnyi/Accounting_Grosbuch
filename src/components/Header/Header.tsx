import React from 'react';
import { Box, Typography } from '@mui/material';

import { classes } from './Header.styles';

const Header = () => {
  return (
    <Box sx={classes.headerContainer}>
      <Typography>TEST HEADER</Typography>
    </Box>
  );
};

export default Header;
