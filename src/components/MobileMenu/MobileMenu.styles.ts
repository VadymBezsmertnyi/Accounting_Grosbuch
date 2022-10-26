import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  mobileMenu: { display: 'flex' },
  popperMobileMenu: (widthWindow: number) => ({
    height: widthWindow < 590 ? '300px' : '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '16px',
    borderRadius: '4px',
    background: theme.palette.custom?.main.backgroundRaisinBlack || '',
    boxShadow: `${theme.palette.custom?.main.backgroundRaisinBlack70} 0px 0px 10px 0px`,
  }),
};
