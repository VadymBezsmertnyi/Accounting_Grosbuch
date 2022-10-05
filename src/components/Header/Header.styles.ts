import { createAppTheme } from '../../theme/theme';
import { headerImg } from '../../images';

const theme = createAppTheme();

export const classes = {
  header: {
    padding: '0 10.94vw',
    background: `url(${headerImg}) center center/cover no-repeat`,
    paddingTop: '9px',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerRight: {
    display: 'flex',
  },
  line: {
    width: '100%',
    height: '1px',
    background: theme.palette.custom?.main.borderColor,
  },
};
