import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImg: {
    width: '90px',
    height: '70px',
    background: theme.palette.custom?.main.borderColor,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
  titleImg: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
    background: theme.palette.custom?.main.borderColor,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
};
