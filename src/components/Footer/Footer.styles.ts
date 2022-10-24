import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  footer: {
    width: '100%',
    height: '250px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '0 12vw 25px',
  },
  otherFooter: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '400px',
  },
  mainTextFooter: {
    fontFamily: 'Nunito',
    lineHeight: '130%',
  },
  otherTextFooter: {
    fontFamily: 'Nunito',
    color: theme.palette.custom?.main.coolGrey,
  },
  contactsFooter: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  teamFooter: {
    display: 'flex',
    flexDirection: 'column',
  },
  team: {
    fontFamily: 'Nunito',
    color: theme.palette.custom?.main.coolGrey,
    lineHeight: '130%',
    textDecoration: 'none',
    transition: 'color 0.5s linear',
    '&:hover': {
      color: theme.palette.common.white,
      transition: 'color 0.5s linear',
    },
  },
};
