import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  containerLink: (
    hover: boolean,
    type: 'header' | 'other' | 'submit',
    disabled: boolean
  ) => ({
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
      : disabled
      ? theme.palette.custom?.main.colorDisabled
      : theme.palette.custom?.main.backgroundRaisinBlack,
    background: disabled
      ? theme.palette.custom?.main.backgroundDisabled
      : theme.palette.custom?.main.borderColor,
    textDecoration: 'auto',
  }),
};
