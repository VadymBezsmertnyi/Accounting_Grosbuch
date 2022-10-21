import React from 'react';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Checkbox,
  FormControlLabel,
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
  return errors;
};

const Feedback = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, handleChange, values, errors, isValid } = formik;

  const recaptchaSubmit = (result: string) => {
    const resultFormik = {
      target: { name: 'recaptcha', value: Boolean(result) },
    };
    handleChange(resultFormik);
  };

  return (
    <Box component={'form'} sx={classes.feedback}>
      <Box sx={classes.formInputs}>
        <TextField
          sx={classes.phoneInput}
          name={'name'}
          value={values.name}
          onChange={handleChange}
          placeholder={`Ім'я`}
          InputProps={{ style: classes.inputPhone }}
        />
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
        <TextField
          type={'email'}
          sx={classes.phoneInput}
          name={'email'}
          value={values.email}
          onChange={handleChange}
          placeholder={`Ваш email`}
          InputProps={{ style: classes.inputPhone }}
        />
        <ReCAPTCHA
          name="recaptcha"
          style={{ display: 'inline-block' }}
          sitekey={process.env.KEY_GOOGLE_RECAPTCHA}
          onChange={recaptchaSubmit}
          hl="en"
        />
        <CustomButton type="other" />
        <Typography>
          Ваші дані у повній безпеці і не будуть нікому передані
        </Typography>
      </Box>
      <Box sx={classes.formCheckbox}>
        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_ACTIVITY.title}
          </Typography>
          {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_ACTIVITY.checkboxes.map(
            (checkbox, i) => {
              return (
                <FormControlLabel
                  key={`checkbox_activity_${i}`}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="activity"
                      value={checkbox}
                      sx={classes.checkboxInput}
                    />
                  }
                  label={checkbox}
                />
              );
            }
          )}
        </Box>

        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {
              DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_TAXATION_SYSTEM
                .title
            }
          </Typography>
          {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_TAXATION_SYSTEM.checkboxes.map(
            (checkbox, i) => {
              return (
                <FormControlLabel
                  key={`checkbox_activity_${i}`}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="activity"
                      value={checkbox}
                      sx={classes.checkboxInput}
                    />
                  }
                  label={checkbox}
                />
              );
            }
          )}
        </Box>

        <Box sx={classes.checkBoxesInputs}>
          <Typography sx={classes.titleCheckBoxesInputs}>
            {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_OWNERSHIP.title}
          </Typography>
          {DEFAULT_FEEDBACK_CHECKBOXES.DEFAULT_CHECKBOXES_OWNERSHIP.checkboxes.map(
            (checkbox, i) => {
              return (
                <FormControlLabel
                  key={`checkbox_activity_${i}`}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="activity"
                      value={checkbox}
                      sx={classes.checkboxInput}
                    />
                  }
                  label={checkbox}
                />
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
