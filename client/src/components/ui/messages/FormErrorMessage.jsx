import React from 'react';
// MUI
import Typography from '@material-ui/core/Typography';

const FormErrorMessage = ({ type, error }) => {
  let message = null;
  switch (error.type) {
    case 'required':
      message = 'required';
      break;
    case 'minLength':
      message = 'is too short';
      break;
    case 'maxLength':
      message = 'is too long';
      break;
    case 'max':
      message = 'is too high';
      break;
    case 'min':
      message = 'is too low';
      break;
    case 'pattern':
      message = "doesn't match the pattern";
      break;
    default:
      return message;
  }
  return (
    <Typography variant='caption' color='error'>
      {`${type} is ${message}`}
    </Typography>
  );
};

export default FormErrorMessage;
