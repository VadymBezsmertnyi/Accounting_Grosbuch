import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  navigateMenu: (type: 'header' | 'footer') => ({
    height: type === 'footer' ? '100%' : 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: type === 'footer' ? 'column' : '',
    justifyContent: 'space-evenly',
  }),
  menuButton: {
    color: theme.palette.common.white,
    textDecoration: 'auto',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    //fontWeight: 700,
    //fontSize: '20px',
    lineHeight: '27px',
    padding: '0 15px',
  },
};
