import React from 'react';
import { Box, Typography } from '@mui/material';

import { classes } from './ItemBody.styles';
import { TDefaultDate } from '../../types/body';

interface IItemBodyProps {
  options: TDefaultDate;
  lastElement: boolean;
}

const ItemBody = ({ options, lastElement }: IItemBodyProps) => {
  return (
    <Box sx={classes.itemList(lastElement, options.imgMain)}>
      <Typography>TEST BODY</Typography>
    </Box>
  );
};

export default ItemBody;
