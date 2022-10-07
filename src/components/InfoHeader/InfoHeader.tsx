import React, { useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import {
  OTHER_TITLE_INFO_HEADER_FIRST,
  OTHER_TITLE_INFO_HEADER_SECOND,
  TITLE_INFO_HEADER,
} from '../../constants/header';

import { classes } from './InfoHeader.styles';

const InfoHeader = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box sx={classes.infoContainer}>
      <Box sx={classes.mainText}>
        <Typography variant="h2" sx={classes.title}>
          {TITLE_INFO_HEADER}
        </Typography>
        <Box sx={classes.containerOtherTitle}>
          <Box sx={classes.otherTitleLine} />
          <Typography variant="h1" sx={classes.otherTitle}>
            {OTHER_TITLE_INFO_HEADER_FIRST}
          </Typography>
        </Box>
        <Typography variant="h1" sx={classes.otherTitle}>
          {OTHER_TITLE_INFO_HEADER_SECOND}
        </Typography>
        <Link
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{
            ...classes.containerLink,
            ...(hover ? classes.containerLinkHover : classes.containerLink),
          }}
          to={'#contact'}
        >
          Залишити заявку
        </Link>
      </Box>
      <Box sx={classes.containers}></Box>
    </Box>
  );
};

export default InfoHeader;
