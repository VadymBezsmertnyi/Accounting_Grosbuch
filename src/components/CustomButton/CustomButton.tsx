import React, { useState } from 'react';
import { Link } from 'gatsby';
import { classes } from './CustomButton.styles';

interface ICustomButtonProps {
  type: 'header' | 'other';
}

const CustomButton = ({ type }: ICustomButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={classes.containerLink(hover, type)}
      to={'#feedback'}
    >
      Залишити заявку
    </Link>
  );
};

export default CustomButton;
