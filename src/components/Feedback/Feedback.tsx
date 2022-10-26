import React, {
  ChangeEvent,
  FormEvent,
  useLayoutEffect,
  useState,
} from 'react';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

import CustomButton from '../CustomButton';
import { DEFAULT_FEEDBACK_CHECKBOXES } from '../../constants/feedback';
import { TErrorsFeedback, TFeedback } from '../../types/feedback';

import { classes } from './Feedback.styles';

const initialValues: TFeedback = {
  name: '',
  phone: '',
  email: '',
  recaptcha: false,
  activity: [],
  taxationSystem: [],
  ownership: [],
};

const validate = (values: TFeedback) => {
  const errors: TErrorsFeedback = {};
  const validationEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!values.name.length) errors.name = `Будьласка напишіть ваше ім'я`;
  if (values.name.length < 2 || values.name.length > 15)
    errors.name = `Довжина імені повинна бути мінімум 2 символи та не більше 15символів`;
  if (values.phone.length < 7)
    errors.phone = `Невірно введений вам номер телефону`;
  if (values.email !== undefined && !/^[A-Za-z]/i.test(String(values.email)))
    errors.email = `Введіть будьласка вашу електронну адресу`;
  else if (
    values.email !== undefined &&
    !validationEmail.test(String(values.email))
  )
    errors.email = 'Некоректно введена електронна адреса';
  if (!values.recaptcha) errors.recaptcha = 'Пройдіть провірку на бота';

  if (!values.activity.length)
    errors.activity = 'Виберіть хочаб один варіант зі списку';
  if (!values.taxationSystem.length)
    errors.taxationSystem = 'Виберіть хочаб один варіант зі списку';
  if (!values.ownership.length)
    errors.ownership = 'Виберіть хочаб один варіант зі списку';

  return errors;
};

const Feedback = () => {
  const [showErrors, setShowErrors] = useState<TErrorsFeedback>({});
  const [showOtherError, setShowOtherError] = useState(false);
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 1920
  );

  useLayoutEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWidthWindow(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else return () => false;
  });
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const { handleSubmit, handleChange, values, errors, isValid } = formik;

  const recaptchaSubmit = (result: string) => {
    const resultFormik = {
      target: { name: 'recaptcha', value: Boolean(result) },
    };
    setShowOtherError(false);
    handleChange(resultFormik);
  };

  const customSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valuesArray = Object.values(values);
    const verifyValues =
      valuesArray.findIndex((value) => {
        if (typeof value === 'boolean') return !value;
        return value.length === 0;
      }) >= 0;
    verifyValues && setShowOtherError(true);
    isValid ? handleSubmit(event) : setShowErrors(errors);
  };

  const customHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setShowOtherError(false);
    setShowErrors({});
    handleChange(e);
  };

  return (
    <Box
      id="feedback"
      component={'form'}
      onSubmit={customSubmit}
      sx={classes.feedback(widthWindow)}
    >
      <Box sx={classes.formInputs(widthWindow)}>
        <FormControl
          required
          sx={{ width: '100%' }}
          error={Boolean(showErrors.name)}
        >
          <TextField
            sx={classes.phoneInput}
            name={'name'}
            error={Boolean(showErrors.name)}
            value={values.name}
            onChange={customHandleChange}
            placeholder={`Ім'я`}
            InputProps={{ style: classes.inputPhone }}
          />
          <FormHelperText sx={classes.formHelperText}>
            {showErrors.name}
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ width: '100%' }} error={Boolean(showErrors.phone)}>
          <MuiTelInput
            value={values.phone}
            onChange={(value) =>
              handleChange({ target: { value, name: 'phone' } })
            }
            name={'phone'}
            placeholder="Ваш телефон"
            sx={classes.phoneInput}
            InputProps={{ style: classes.inputPhone }}
            FormHelperTextProps={{ style: classes.inputPhone }}
            MenuProps={{
              PaperProps: { style: classes.listCountryPhone },
            }}
            SelectProps={{ style: classes.inputPhone }}
          />
          <FormHelperText sx={classes.formHelperText}>
            {showErrors.phone}
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ width: '100%' }} error={Boolean(showErrors.email)}>
          <TextField
            type={'email'}
            sx={classes.phoneInput}
            name={'email'}
            value={values.email}
            onChange={customHandleChange}
            placeholder={`Ваш email`}
            InputProps={{ style: classes.inputPhone }}
          />
          <FormHelperText sx={classes.formHelperText}>
            {showErrors.email}
          </FormHelperText>
        </FormControl>
        <FormControl error={Boolean(showErrors.recaptcha)}>
          <ReCAPTCHA
            name="recaptcha"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            sitekey={process.env.KEY_GOOGLE_RECAPTCHA}
            onChange={recaptchaSubmit}
          />
          <FormHelperText sx={classes.formHelperText}>
            {showErrors.recaptcha}
          </FormHelperText>
        </FormControl>
        {widthWindow > 680 && <CustomButton type="submit" />}
        <Typography sx={classes.otherErrorText(showOtherError)}>
          Будьласка заповніть форму
        </Typography>
        <Typography sx={classes.otherText}>
          Ваші дані у повній безпеці і не будуть нікому передані
        </Typography>
      </Box>
      <Box sx={classes.formCheckbox(widthWindow)}>
        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_ACTIVITY.title}
          </Typography>
          <FormControl
            sx={classes.formControlCheckbox(widthWindow)}
            error={Boolean(showErrors.activity)}
          >
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_ACTIVITY.checkboxes.map(
              (checkbox, i) => {
                return (
                  <FormControlLabel
                    key={`checkbox_activity_${i}`}
                    control={
                      <Checkbox
                        checked={
                          values.activity.findIndex(
                            (variant: string) => variant === checkbox
                          ) >= 0
                        }
                        onChange={customHandleChange}
                        name="activity"
                        value={checkbox}
                        sx={classes.checkboxInput(Boolean(showErrors.activity))}
                      />
                    }
                    label={checkbox}
                  />
                );
              }
            )}
            <FormHelperText sx={classes.formHelperText}>
              {showErrors.activity}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {
              DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_TAXATION_SYSTEM
                .title
            }
          </Typography>
          <FormControl
            sx={classes.formControlCheckbox(widthWindow)}
            error={Boolean(showErrors.taxationSystem)}
          >
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_TAXATION_SYSTEM.checkboxes.map(
              (checkbox, i) => {
                return (
                  <FormControlLabel
                    key={`checkbox_activity_${i}`}
                    control={
                      <Checkbox
                        checked={
                          values.taxationSystem.findIndex(
                            (variant: string) => variant === checkbox
                          ) >= 0
                        }
                        onChange={customHandleChange}
                        name="taxationSystem"
                        value={checkbox}
                        sx={classes.checkboxInput(
                          Boolean(showErrors.taxationSystem)
                        )}
                      />
                    }
                    label={checkbox}
                  />
                );
              }
            )}
            <FormHelperText sx={classes.formHelperText}>
              {showErrors.taxationSystem}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_OWNERSHIP.title}
          </Typography>
          <FormControl
            sx={classes.formControlCheckbox(widthWindow)}
            error={Boolean(showErrors.ownership)}
          >
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_OWNERSHIP.checkboxes.map(
              (checkbox, i) => {
                return (
                  <FormControlLabel
                    key={`checkbox_activity_${i}`}
                    control={
                      <Checkbox
                        checked={
                          values.ownership.findIndex(
                            (variant: string) => variant === checkbox
                          ) >= 0
                        }
                        onChange={customHandleChange}
                        name="ownership"
                        value={checkbox}
                        sx={classes.checkboxInput(
                          Boolean(showErrors.ownership)
                        )}
                      />
                    }
                    label={checkbox}
                  />
                );
              }
            )}
            <FormHelperText sx={classes.formHelperText}>
              {showErrors.ownership}
            </FormHelperText>
          </FormControl>
        </Box>
        {widthWindow <= 680 && <CustomButton type="submit" />}
      </Box>
    </Box>
  );
};

export default Feedback;
