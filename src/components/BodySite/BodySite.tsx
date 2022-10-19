import React from 'react';
import { Box } from '@mui/material';

import { BODY_DEFAULT_DATE } from '../../constants/body';
import ItemBody from '../ItemBody';

import { classes } from './BodySite.styles';

const BodySite = () => {
  return (
    <Box sx={classes.bodyContainer}>
      {BODY_DEFAULT_DATE.map((date, i) => {
        const lastElement = BODY_DEFAULT_DATE.length === i + 1;
        return (
          <ItemBody
            key={`element_body_${date.type}_${date.id}`}
            options={date}
            lastElement={lastElement}
          />
        );
      })}
    </Box>
  );
};

export default BodySite;
