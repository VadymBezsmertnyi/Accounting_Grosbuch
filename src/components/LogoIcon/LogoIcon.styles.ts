import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImg: {
    width: '67px',
    height: '52px',
  },
  titleImg: {
    width: '160px',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
    background: theme.palette.custom?.main.borderColor,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};
