import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  LogoIcon,
  NavigateMenu,
  SocialButtons,
  MobileMenu,
  Contacts,
  InfoHeader,
} from '../';

import { classes } from './Header.styles';

const Header = () => {
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 900
  );

  useLayoutEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Box sx={classes.header}>
      <Box sx={classes.headerContainer}>
        <LogoIcon />
        <Box sx={classes.headerRight(widthWindow)}>
          {widthWindow < 1010 ? <MobileMenu /> : <NavigateMenu />}
          {widthWindow > 690 && <SocialButtons />}
          {widthWindow > 590 && <Contacts />}
        </Box>
      </Box>
      <Box sx={classes.line} />
      <InfoHeader />
    </Box>
  );
};

export default Header;
