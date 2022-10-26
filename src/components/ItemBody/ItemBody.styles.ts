import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  itemList: (
    imgElement: string,
    type: 'other' | 'list',
    widthWindow: number
  ) => ({
    background: `url(${imgElement}) center center/cover no-repeat`,
    marginTop: type === 'list' ? '20px' : widthWindow > 700 ? '100px' : '20px',
    width: '100%',
    minHeight: '500px',
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
    width: '100px',
    height: '100px',
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
  textOtherItem: (widthWindow: number) => ({
    width: widthWindow > 700 ? '50%' : '80%',
    padding: '3vh 8vw',
  }),

  listItem: (widthWindow: number) => ({
    margin: widthWindow > 700 ? '150px 0 130px 0' : '150px 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  titleListItem: (widthWindow: number) => ({
    fontSize: widthWindow > 700 ? '40px' : '20px',
    margin: widthWindow > 700 ? '0 0 150px 0' : '0 0 15px 0',
  }),
  elementsListItem: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  elementListItem: (widthWindow: number) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '380px',
    background: theme.palette.custom?.main.backgroundRaisinBlack70 || '',
    borderRadius: '25px',
    padding: '2px',
    marginTop: widthWindow > 700 ? '' : '30px',
  }),
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
