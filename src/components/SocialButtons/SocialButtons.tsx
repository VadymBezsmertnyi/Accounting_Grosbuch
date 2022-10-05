import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@mui/material';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { classes } from './SocialButtons.styles';

const SocialButtons = () => {
  return (
    <Box sx={classes.socialButtonsContainer}>
      <Link style={classes.linkSocial} to="https://www.facebook.com/">
        <FacebookIcon sx={classes.logoSocial} />
      </Link>
      <Link style={classes.linkSocial} to="https://www.linkedin.com/">
        <LinkedInIcon sx={classes.logoSocial} />
      </Link>
    </Box>
  );
};

export default SocialButtons;
