import { createAppTheme } from '../../theme/theme';

const theme = createAppTheme();

export const classes = {
  infoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '178px 0 0',
  },
  mainText: {},
  title: {
    fontSize: '24px',
    lineHeight: '130%',
    margin: '0 0 30px',
  },
  containerOtherTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  otherTitle: {
    fontWeight: 700,
    fontSize: '45px',
    lineHeight: '130%',
  },
  otherTitleLine: {
    width: '50px',
    height: '1px',
    margin: '0 10px',
    background: theme.palette.custom?.main.borderColor,
  },
  containerLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '251px',
    height: '66px',
    margin: '70px 0 166px',
    borderRadius: '5% / 50%',
    fontSize: '20px',
    color: theme.palette.custom?.main.backgroundRaisinBlack,
    background: theme.palette.custom?.main.borderColor,
    textDecoration: 'auto',
  },
  containerLinkHover: {
    color: theme.palette.common.white,
  },
  otherHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '220px',
    background: theme.palette.custom?.main.backgroundRaisinBlack70,
  },
  containerOtherHeader: {
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '35px 25px',

    border: `2px solid ${theme.palette.custom?.main.borderTumbleweed}`,
  },
  containerOne: {
    position: 'relative',
    borderImage: `linear-gradient(to bottom, #00000000 50%,${theme.palette.custom?.main.borderDesertSand} 0%,${theme.palette.custom?.main.borderTumbleweed} 100%,${theme.palette.custom?.main.borderTumbleweed} 55%)`,
    borderImageSlice: 1,
  },
  containerTwo: {
    borderImage: `linear-gradient(to bottom, ${theme.palette.custom?.main.borderDesertSand} 0%,${theme.palette.custom?.main.borderDesertSand} 0%,${theme.palette.custom?.main.borderDesertSand} 50%,#00000000 50%)`,
    borderImageSlice: 1,
  },
};
