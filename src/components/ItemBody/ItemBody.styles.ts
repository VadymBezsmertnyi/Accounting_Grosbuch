import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  itemList: (
    lastElement: boolean,
    imgElement: string,
    type: 'other' | 'list'
  ) => ({
    background: `url(${imgElement}) center center/cover no-repeat`,
    margin: '200px 0 0 0',
    width: '100%',
    height: '500px',
    clipPath:
      type === 'list'
        ? `polygon(0 0, 50% 15%, 100% 0, 100% ${
            lastElement ? '100%' : '85%'
          }, 50% 100%, 0 ${lastElement ? '100%' : '85%'})`
        : '',
  }),
  otherItem: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rightOtherItem: (positionElement: 'left' | 'right') => ({
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: positionElement === 'left' ? 'flex-end' : 'flex-start',
  }),
  imgOtherItem: (positionElement: 'left' | 'right') => ({
    position: 'relative',
    [positionElement]: '20%',
  }),
  lineOtherItem: {
    position: 'relative',
    display: 'flex',
    width: '60%',
    bottom: '50%',
    height: '1px',
    zIndex: ' -1',
    background: theme.palette.custom?.main.borderColor || '',
  },
  containerTextOtherItem: (positionElement: 'left' | 'right') => ({
    width: '100%',
    display: 'flex',
    justifyContent: positionElement === 'left' ? 'flex-start' : 'flex-end',
  }),
  textOtherItem: {
    width: '50%',
    padding: '0 8vw',
  },
};
