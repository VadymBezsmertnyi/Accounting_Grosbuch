import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Button } from '@mui/material';

import { classes } from './CustomButton.styles';

interface ICustomButtonProps {
  type: 'header' | 'other' | 'submit';
  disabled?: boolean;
}

const CustomButton = ({ type, disabled = false }: ICustomButtonProps) => {
  const isBrowser = typeof window !== 'undefined';
  const [hover, setHover] = useState(false);
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 900
  );

  useLayoutEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWidthWindow(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else return () => false;
  });

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
          sx={classes.containerLink(hover, type, disabled, widthWindow)}
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
          style={classes.containerLink(hover, type, disabled, widthWindow)}
          to={'#feedback'}
        >
          Залишити заявку
        </Link>
      )}
    </>
  );
};

export default CustomButton;
