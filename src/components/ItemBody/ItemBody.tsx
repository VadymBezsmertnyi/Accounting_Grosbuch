import React from 'react';
import { Box } from '@mui/material';

import { classes } from './ItemBody.styles';
import { TDefaultDate } from '../../types/body';
import clsx from 'clsx';

interface IItemBodyProps {
  options: TDefaultDate;
  lastElement: boolean;
}

const ItemBody = ({ options, lastElement }: IItemBodyProps) => {
  return (
    <Box sx={classes.itemList(lastElement, options.imgMain)}>TEST BODY</Box>
  );
};

export default ItemBody;
