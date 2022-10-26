import { createAppTheme } from '../../theme/theme';
import { headerImg } from '../../images';

const theme = createAppTheme();

export const classes = {
  contacts: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  link: (hover?: boolean) => ({
    width: '190px',
    display: 'flex',
    alignItems: 'center',
    color: hover
      ? theme.palette.custom?.main.borderDesertSand
      : theme.palette.common.white,
    textDecoration: 'auto',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    lineHeight: '130%',
    transition: 'color 0.5s linear',
  }),
  iconLink: {
    width: '24px',
    marginRight: '5px',
  },
};
