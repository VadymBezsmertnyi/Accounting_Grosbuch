import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@mui/material';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { classes } from './SocialButtons.styles';

interface ISocialButtonsProps {
  type?: 'header' | 'footer';
}

const SocialButtons = ({ type = 'header' }: ISocialButtonsProps) => {
  return (
    <Box sx={classes.socialButtonsContainer(type)}>
      <Link
        target={'_blank'}
        title={`Facebook link`}
        style={classes.linkSocial}
        to="https://www.facebook.com/"
      >
        <FacebookIcon sx={classes.logoSocial} />
      </Link>
      <Link
        target={'_blank'}
        title={`Facebook link`}
        style={classes.linkSocial}
        to="https://www.linkedin.com/"
      >
        <LinkedInIcon sx={classes.logoSocial} />
      </Link>
    </Box>
  );
};

export default SocialButtons;
