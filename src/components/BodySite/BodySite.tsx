import React from 'react';
import { Box } from '@mui/material';

import { BODY_DEFAULT_DATE } from '../../constants/body';
import { ItemBody, Feedback } from '../';

import { classes } from './BodySite.styles';

const BodySite = () => {
  return (
    <Box sx={classes.bodyContainer}>
      {BODY_DEFAULT_DATE.map((date, i) => (
        <ItemBody key={`element_body_${date.type}_${date.id}`} options={date} />
      ))}
      <Feedback />
    </Box>
  );
};

export default BodySite;
