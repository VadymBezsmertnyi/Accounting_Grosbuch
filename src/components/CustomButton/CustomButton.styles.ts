import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  containerLink: (hover: boolean, type: 'header' | 'other') => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '251px',
    height: '66px',
    margin: type === 'header' ? '70px 0 166px' : '',
    borderRadius: '5% / 50%',
    fontSize: '20px',
    color: hover
      ? theme.palette.common.white
      : theme.palette.custom?.main.backgroundRaisinBlack,
    background: theme.palette.custom?.main.borderColor,
    textDecoration: 'auto',
  }),
};
