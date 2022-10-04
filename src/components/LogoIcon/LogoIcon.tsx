import React from 'react';
import { Box, Typography } from '@mui/material';

import { logoTitleIcon } from '../../images';
import { NAME_COMPANY } from '../../constants/header';

import { classes } from './LogoIcon.styles';

const LogoIcon = () => {
  return (
    <Box sx={classes.logoContainer}>
      <Box component={'img'} src={logoTitleIcon} sx={classes.logoImg} />
      <Typography sx={classes.titleImg}>{NAME_COMPANY}</Typography>
    </Box>
  );
};

export default LogoIcon;
