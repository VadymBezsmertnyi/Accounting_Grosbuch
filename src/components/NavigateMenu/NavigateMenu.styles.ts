import { createAppTheme } from '../../theme/theme';
const theme = createAppTheme();

export const classes = {
  navigateMenu: (type: 'header' | 'footer' | 'mobile') => ({
    height: type === 'footer' ? '100%' : 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: type !== 'header' ? 'column' : '',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  }),
  menuButton: (hover?: boolean) => ({
    color: hover
      ? theme.palette.custom?.main.borderDesertSand
      : theme.palette.common.white,
    textDecoration: 'auto',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    lineHeight: '27px',
    padding: '0 15px',
    transition: 'color 0.5s linear',
  }),
};
