import { createAppTheme } from '../../theme/theme';
import { headerImg } from '../../images';

const theme = createAppTheme();

export const classes = {
  itemList: (lastElement: boolean, imgElement: string) => ({
    background: `url(${imgElement}) center center/cover no-repeat`,
    margin: '200px 0 0 0',
    width: '100%',
    height: '500px',
    clipPath: `polygon(0 0, 50% 15%, 100% 0, 100% ${
      lastElement ? '100%' : '85%'
    }, 50% 100%, 0 ${lastElement ? '100%' : '85%'})`,
  }),
};
