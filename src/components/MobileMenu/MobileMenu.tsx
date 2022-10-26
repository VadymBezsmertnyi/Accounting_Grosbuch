import React, { useLayoutEffect, useState } from 'react';
import { Box, Button, ClickAwayListener, Popper } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { NavigateMenu, SocialButtons, Contacts } from '../';

import { classes } from './MobileMenu.styles';

const MobileMenu = () => {
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 900
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useLayoutEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box sx={classes.mobileMenu}>
      <Button
        aria-describedby={'simple-popper'}
        type="button"
        onClick={handleClick}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </Button>
      <Popper id={'simple-popper'} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Box sx={classes.popperMobileMenu(widthWindow)}>
            <NavigateMenu type="mobile" />
            {widthWindow < 690 && <SocialButtons />}
            {widthWindow < 590 && <Contacts />}
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default MobileMenu;
