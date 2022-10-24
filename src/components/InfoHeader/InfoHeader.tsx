import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Typography } from '@mui/material';
import {
  HowToReg as HowToRegIcon,
  VerifiedUser as VerifiedUserIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
} from '@mui/icons-material';

import CustomButton from '../CustomButton';
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
        <Typography variant="h1" sx={classes.title}>
          {TITLE_INFO_HEADER}
        </Typography>
        <Box sx={classes.containerOtherTitle}>
          <Box sx={classes.otherTitleLine} />
          <Typography variant="h2" sx={classes.otherTitle}>
            {OTHER_TITLE_INFO_HEADER_FIRST}
          </Typography>
        </Box>
        <Typography variant="h2" sx={classes.otherTitle}>
          {OTHER_TITLE_INFO_HEADER_SECOND}
        </Typography>
        <CustomButton type={'header'} />
      </Box>
      <Box sx={classes.otherHeader}>
        <Box
          sx={{
            ...classes.containerOtherHeader,
            ...classes.containerOne,
            left: '2px',
          }}
        >
          <HowToRegIcon sx={{ width: '38px', height: '38px' }} />
          <Typography>Індивідуальний підхід</Typography>
        </Box>
        <Box sx={{ ...classes.containerOtherHeader, ...classes.containerTwo }}>
          <VerifiedUserIcon sx={{ width: '38px', height: '38px' }} />
          <Typography>Конфіденційність інформації </Typography>
        </Box>
        <Box
          sx={{
            ...classes.containerOtherHeader,
            ...classes.containerOne,
            right: '2px',
          }}
        >
          <LibraryAddCheckIcon sx={{ width: '38px', height: '38px' }} />
          <Typography>Якість обслуговування</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoHeader;
