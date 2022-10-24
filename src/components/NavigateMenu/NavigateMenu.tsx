import React from 'react';
import { Link } from 'gatsby';
import { Box, Button } from '@mui/material';

import { LIST_NAVIGATE_MENU } from '../../constants/header';

import { classes } from './NavigateMenu.styles';

interface INavigateMenuProps {
  type?: 'header' | 'footer';
}

const NavigateMenu = ({ type = 'header' }: INavigateMenuProps) => {
  return (
    <Box sx={classes.navigateMenu(type)}>
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
