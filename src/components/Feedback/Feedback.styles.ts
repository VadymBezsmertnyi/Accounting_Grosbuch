import { createAppTheme } from '../../theme/theme';
import { feedbackImg } from '../../images';

const theme = createAppTheme();

export const classes = {
  feedback: {
    background: `url(${feedbackImg}) center center/cover no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '130px',
    margin: '200px 0 0 0',
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    width: '472px',
    height: '564px',
    margin: '60px 0',
    background: 'rgba(35, 28, 38, 0.7)',
    borderRadius: '24px',
  },
  phoneInput: {
    width: '100%',
    padding: '0 46px',
  },
  inputPhone: {
    color: theme.palette.common.black,
    background: theme.palette.common.white,
  },
  listCountryPhone: {
    background: theme.palette.custom?.main.backgroundRaisinBlack,
    color: 'white',
    maxHeight: '500px',
  },

  formCheckbox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '20px 120px',
    width: '834px',
    height: '564px',
    margin: '60px 0',
    background: 'rgba(35, 28, 38, 0.7)',
    borderRadius: '24px',
    padding: '80px',
  },
  checkBoxesInputs: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxInput: {
    [`&, &.MuiCheckbox-colorPrimary`]: {
      color: theme.palette.custom?.main.coolGrey,
    },
  },
  titleCheckBoxesInputs: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '31px',
  },
};
