import React from 'react';
import { Box } from '@mui/material';

import { classes } from './Contacts.styles';
import { LIST_CONTACTS } from '../../constants/header';
import { Link } from 'gatsby';

interface IContactsProps {
  type?: string;
}

const Contacts = ({ type = 'header' }) => {
  return (
    <Box sx={classes.contacts}>
      {LIST_CONTACTS.map((contact) => {
        return (
          contact.typeShow === type && (
            <Link target="_blank" to={contact.href}>
              {contact.title}
            </Link>
          )
        );
      })}
    </Box>
  );
};

export default Contacts;
