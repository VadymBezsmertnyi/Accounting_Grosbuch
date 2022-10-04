import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImg: {
    width: '83px',
    color: theme.palette.custom?.main.borderColor,
  },
  titleImg: {
    fontFamily: 'Nunito',
    color: theme.palette.custom?.main.borderColor,
  },
};
