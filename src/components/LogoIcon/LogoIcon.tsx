import React from 'react';
import { Box, Typography } from '@mui/material';

import { LogoTitleIcon } from '../../images';
import { NAME_COMPANY } from '../../constants/header';

import { classes } from './LogoIcon.styles';

const LogoIcon = () => {
  return (
    <Box title={`Logo company`} sx={classes.logoContainer}>
      <LogoTitleIcon {...classes.logoImg} />
      <Typography variant="h2" sx={classes.titleImg}>
        {NAME_COMPANY}
      </Typography>
    </Box>
  );
};

export default LogoIcon;
