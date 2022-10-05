import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  socialButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 60px',
  },
  linkSocial: {
    display: 'flex',
    margin: '0 5px',
  },
  logoSocial: {
    width: '26px',
    color: theme.palette.common.white,
  },
};
