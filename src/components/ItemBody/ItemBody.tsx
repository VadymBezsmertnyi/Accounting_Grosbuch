import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';

import { TDefaultDate } from '../../types/body';

import { classes } from './ItemBody.styles';

interface IItemBodyProps {
  options: TDefaultDate;
  lastElement: boolean;
}

const ItemBody = ({ options, lastElement }: IItemBodyProps) => {
  return (
    <Box sx={classes.itemList(lastElement, options.imgMain, options.type)}>
      {options.type === 'other' && (
        <Box sx={classes.otherItem}>
          {options.listDate?.map((option, i) => {
            const position = (i + 1) % 2 === 0 ? 'right' : 'left';
            return (
              <Fragment key={`element_body_${options.type}_${option.id}`}>
                <Box sx={classes.rightOtherItem(position)}>
                  {position === 'right' && <Box sx={classes.lineOtherItem} />}
                  <Box
                    component={'img'}
                    src={option.imgLogo}
                    sx={classes.imgOtherItem(position)}
                  />
                  {position === 'left' && <Box sx={classes.lineOtherItem} />}
                </Box>
                <Box sx={classes.containerTextOtherItem(position)}>
                  <Typography sx={classes.textOtherItem}>
                    {option.text}
                  </Typography>
                </Box>
              </Fragment>
            );
          })}
        </Box>
      )}
      {options.type === 'list' && <Typography>LIST BODY</Typography>}
    </Box>
  );
};

export default ItemBody;
