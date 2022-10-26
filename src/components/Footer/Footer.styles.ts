import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  footer: (widthWindow: number) => ({
    width: '100%',
    height: '250px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: widthWindow > 1070 ? 'space-between' : 'center',
    padding: widthWindow > 1070 ? '50px 12vw 25px' : '10px',
    fontSize: widthWindow > 1070 ? '1rem' : '12px',
    flexWrap: widthWindow > 1070 ? '' : 'wrap',
  }),
  otherFooter: (widthWindow: number) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: widthWindow > 1070 ? '400px' : '200px',
  }),
  mainTextFooter: (widthWindow: number) => ({
    fontFamily: 'Nunito',
    lineHeight: '130%',
    fontSize: widthWindow > 1070 ? '1rem' : '12px',
  }),
  otherTextFooter: (widthWindow: number) => ({
    fontFamily: 'Nunito',
    color: theme.palette.custom?.main.coolGrey,
    fontSize: widthWindow > 1070 ? '1rem' : '12px',
  }),
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
