import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Button } from '@mui/material';

import { LIST_NAVIGATE_MENU } from '../../constants/header';

import { classes } from './NavigateMenu.styles';
import { KeyObject } from 'crypto';

interface INavigateMenuProps {
  type?: 'header' | 'footer' | 'mobile';
}

const NavigateMenu = ({ type = 'header' }: INavigateMenuProps) => {
  const [hover, setHover] = useState<{ [key: number]: boolean }>({});

  return (
    <Box sx={classes.navigateMenu(type)}>
      {LIST_NAVIGATE_MENU.map((menu) => (
        <Link
          onMouseEnter={() => {
            setHover({ [menu.id]: true });
          }}
          onMouseLeave={() => {
            setHover({ [menu.id]: false });
          }}
          key={`element_menu_${menu.id}`}
          style={classes.menuButton(hover[menu.id])}
          to={menu.href}
        >
          {menu.title}
        </Link>
      ))}
    </Box>
  );
};

export default NavigateMenu;
