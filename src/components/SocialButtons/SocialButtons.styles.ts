import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  socialButtonsContainer: (type: 'header' | 'footer') => ({
    display: 'flex',
    alignItems: 'center',
    //padding: type === 'header' ? '0 60px' : 0,
  }),
  linkSocial: {
    display: 'flex',
    margin: '0 5px',
  },
  logoSocial: {
    width: '26px',
    color: theme.palette.common.white,
    transition: 'color 0.5s linear',
    '&:hover': {
      color: theme.palette.custom?.main.borderDesertSand,
      transition: 'color 0.5s linear',
    },
  },
};
