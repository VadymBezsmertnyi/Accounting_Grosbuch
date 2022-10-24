import React from 'react';
import { Box, Link, Typography } from '@mui/material';

import { SocialButtons, LogoIcon, NavigateMenu, Contacts } from '../';
import {
  DESIGN,
  DEVELOPER,
  MAIN_TEXT,
  OTHER_TEXT,
} from '../../constants/footer';

import { classes } from './Footer.styles';

const Footer = () => {
  return (
    <Box id="contact" sx={classes.footer}>
      <Box sx={classes.otherFooter}>
        <LogoIcon />
        <Typography component={'h3'} sx={classes.mainTextFooter}>
          {MAIN_TEXT}
        </Typography>
        <SocialButtons type="footer" />
        <Typography sx={classes.otherTextFooter}>{OTHER_TEXT}</Typography>
      </Box>
      <NavigateMenu type="footer" />
      <Box sx={classes.contactsFooter}>
        <Contacts type="footer" />
        <Box sx={classes.teamFooter}>
          <Link
            target="_blank"
            href={DEVELOPER.link}
            sx={classes.team}
          >{`Development: ${DEVELOPER.name}`}</Link>
          <Link
            target="_blank"
            href={DESIGN.link}
            sx={classes.team}
          >{`Design: ${DESIGN.name}`}</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
