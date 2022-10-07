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
  link: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    textDecoration: 'auto',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    //fontWeight: 700,
    //fontSize: '20px',
    lineHeight: '130%',
  },
  iconLink: {
    width: '24px',
  },
};
