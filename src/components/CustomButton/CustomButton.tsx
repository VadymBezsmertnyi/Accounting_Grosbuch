import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button } from '@mui/material';

import { classes } from './CustomButton.styles';

interface ICustomButtonProps {
  type: 'header' | 'other' | 'submit';
  disabled?: boolean;
}

const CustomButton = ({ type, disabled = false }: ICustomButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      {type == 'submit' ? (
        <Button
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          sx={classes.containerLink(hover, type, disabled)}
          type="submit"
        >
          Залишити заявку
        </Button>
      ) : (
        <Link
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={classes.containerLink(hover, type, disabled)}
          to={'#feedback'}
        >
          Залишити заявку
        </Link>
      )}
    </>
  );
};

export default CustomButton;
