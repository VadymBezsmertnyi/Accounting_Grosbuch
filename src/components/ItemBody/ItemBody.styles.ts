import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  itemList: (
    lastElement: boolean,
    imgElement: string,
    type: 'other' | 'list'
  ) => ({
    background: `url(${imgElement}) center center/cover no-repeat`,
    marginTop: type === 'list' ? '20px' : '100px',
    width: '100%',
    minHeight: '500px',
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
  elementOtherItem: (positionElement: 'left' | 'right') => ({
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
    bottom: '50px',
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
    padding: '3vh 8vw',
  },

  listItem: {
    margin: '150px 0 130px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleListItem: {
    fontSize: '40px',
    margin: '0 0 150px 0',
  },
  elementsListItem: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  elementListItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '380px',
    background: theme.palette.custom?.main.backgroundRaisinBlack70 || '',
    borderRadius: '25px',
    padding: '2px',
  },
  titleElementListItem: {
    background: theme.palette.custom?.main.backgroundRaisinBlack || '',
    borderRadius: '25px',
    padding: '16px 46px',
    position: 'relative',
    bottom: '6%',
  },
  textListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    bottom: '5%',
    paddingTop: '5px',
  },
  secondTitle: { textAlign: 'center', padding: '0 0 50px 0', fontSize: '20px' },
};
