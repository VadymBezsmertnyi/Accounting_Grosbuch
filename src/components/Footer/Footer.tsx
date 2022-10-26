import React, { useLayoutEffect, useState } from 'react';
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
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 900
  );

  useLayoutEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWidthWindow(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  });

  return (
    <Box id="contact" sx={classes.footer(widthWindow)}>
      {widthWindow > 555 && (
        <Box sx={classes.otherFooter(widthWindow)}>
          <LogoIcon />
          <Typography component={'h3'} sx={classes.mainTextFooter(widthWindow)}>
            {MAIN_TEXT}
          </Typography>
          <SocialButtons type="footer" />
          <Typography sx={classes.otherTextFooter(widthWindow)}>
            {OTHER_TEXT}
          </Typography>
        </Box>
      )}
      {widthWindow > 355 && <NavigateMenu type="footer" />}
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
