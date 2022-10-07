import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  navigateMenu: {
    display: 'flex',
    alignItems: 'center',
  },
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
