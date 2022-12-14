import { createAppTheme } from '../../theme/theme';
import { feedbackImg } from '../../images';

const theme = createAppTheme();

export const classes = {
  feedback: (widthWindow: number) => ({
    background: `url(${feedbackImg}) center center/cover no-repeat`,
    display: 'flex',
    flexDirection: widthWindow > 680 ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: widthWindow > 1100 ? '130px' : '20px',
    padding: '10px',
    margin: '50px 0 0 0',
  }),
  formInputs: (widthWindow: number) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '472px',
    minHeight: '564px',
    margin: widthWindow > 680 ? '60px 0' : '10px 0',
    background: 'rgba(35, 28, 38, 0.7)',
    borderRadius: '24px',
  }),
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
    color: theme.palette.common.white,
    maxHeight: '500px',
  },
  formHelperText: { textAlign: 'center', height: '30px' },

  formCheckbox: (widthWindow: number) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '0 120px',
    maxWidth: '834px',
    minHeight: '564px',
    margin: widthWindow > 680 ? '60px 0' : '10px 0',
    background: 'rgba(35, 28, 38, 0.7)',
    borderRadius: '24px',
    padding: widthWindow > 1350 ? '80px' : '10px',
  }),
  checkBoxesInputs: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '260px',
  },
  checkboxInput: (error: boolean) => ({
    color: error
      ? theme.palette.error.main
      : theme.palette.custom?.main.coolGrey,
    [`&, &.MuiCheckbox-colorPrimary`]: {
      color: error
        ? theme.palette.error.main
        : theme.palette.custom?.main.coolGrey,
    },
  }),
  titleCheckBoxesInputs: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '31px',
  },

  otherErrorText: (showError: boolean) => ({
    opacity: showError ? 1 : 0,
    color: '#d32f2f',
    fontSize: '0.75rem',
    lineHeight: '1.66',
    marginTop: '3px',
    height: '30px',
  }),
  otherText: {
    width: '80%',
    textAlign: 'center',
    fontSize: '12px',
  },
  formControlCheckbox: (widthWindow: number) => ({
    flexDirection: widthWindow > 680 ? '' : 'row',
    flexWrap: widthWindow > 680 ? '' : 'wrap',
  }),
};
