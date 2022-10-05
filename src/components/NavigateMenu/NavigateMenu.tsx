import React from 'react';
import { Box, Button } from '@mui/material';

import { LIST_NAVIGATE_MENU } from '../../constants/header';

import { classes } from './NavigateMenu.styles';

const NavigateMenu = () => {
  return (
    <Box sx={classes.navigateMenu}>
      {LIST_NAVIGATE_MENU.map((menu) => (
        <Button
          onClick={() => console.log(menu.href)}
          key={`navigate_menu_${menu.id}`}
          sx={classes.menuButton}
        >
          {menu.title}
        </Button>
      ))}
    </Box>
  );
};

export default NavigateMenu;
