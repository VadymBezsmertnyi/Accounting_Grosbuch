import React, { useState } from 'react';
import { Box, Input, Typography } from '@mui/material';

import { classes } from './Header.styles';

const Header = () => {
  const [value, setValue] = useState({ number1: 0, number2: 2 });
  console.log(value);

  const result = (number1: number, number2: number) => number1 * number2;

  return (
    <Box sx={classes.headerContainer}>
      <Typography sx={{ height: '30px' }}>{result(value.number1, value.number2)}</Typography>
      <input
        type="num"
        onChange={(e: any) =>
          setValue((state) => ({ ...state, number1: e.target.value }))
        }
      />
      <input
        type="num"
        onChange={(e: any) =>
          setValue((state) => ({ ...state, number2: e.target.value }))
        }
      />
    </Box>
  );
};

export default Header;
