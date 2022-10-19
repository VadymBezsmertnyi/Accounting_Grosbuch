import React from 'react';
import { Link } from 'gatsby';
import { Box, Button } from '@mui/material';

import { LIST_NAVIGATE_MENU } from '../../constants/header';

import { classes } from './NavigateMenu.styles';

const NavigateMenu = () => {
  return (
    <Box sx={classes.navigateMenu}>
      {LIST_NAVIGATE_MENU.map((menu) => (
        <Link
          key={`element_menu_${menu.id}`}
          style={classes.menuButton}
          to={menu.href}
        >
          {menu.title}
        </Link>
      ))}
    </Box>
  );
};

export default NavigateMenu;
