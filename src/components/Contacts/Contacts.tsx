import React, { useState } from 'react';
import { Box } from '@mui/material';

import { classes } from './Contacts.styles';
import { LIST_CONTACTS } from '../../constants/header';
import { Link } from 'gatsby';
import {
  LocationOn as LocationOnIcon,
  Call as CallIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

interface IContactsProps {
  type?: 'header' | 'footer';
}

const Contacts = ({ type = 'header' }: IContactsProps) => {
  const [hover, setHover] = useState<{ [key: string]: boolean }>({});
  const addIcon = (typeContact: 'location' | 'phone' | 'email') => {
    switch (typeContact) {
      case 'location':
        return <LocationOnIcon style={classes.iconLink} />;
      case 'phone':
        return <CallIcon style={classes.iconLink} />;
      case 'email':
        return <EmailIcon style={classes.iconLink} />;
      default:
        break;
    }
  };
  return (
    <Box sx={classes.contacts}>
      {LIST_CONTACTS.map((contact, i) => {
        return (
          contact.typeShow === type && (
            <Link
              onMouseMove={() => setHover({ [contact.href]: true })}
              onMouseLeave={() => setHover({ [contact.href]: false })}
              key={`link_${i}`}
              target="_blank"
              to={contact.href}
              style={classes.link(hover[contact.href])}
            >
              {addIcon(contact.icon)}
              {contact.title}
            </Link>
          )
        );
      })}
    </Box>
  );
};

export default Contacts;
