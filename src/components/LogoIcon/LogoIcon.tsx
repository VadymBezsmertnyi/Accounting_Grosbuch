import React from 'react';
import { Box, Typography } from '@mui/material';

import { LogoTitleIcon } from '../../images';
import { NAME_COMPANY } from '../../constants/header';

import { classes } from './LogoIcon.styles';

import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

const LogoIcon = () => {
  console.log(theme.palette.custom?.main.borderColor)
  return (
    <Box sx={classes.logoContainer}>
      <LogoTitleIcon {...classes.logoImg} />
      <Typography sx={classes.titleImg}>{NAME_COMPANY}</Typography>
    </Box>
  );
};

export default LogoIcon;
