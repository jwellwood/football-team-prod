import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'reduxStore/app/message_actions';
// MUI
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { IAlert } from '../shared';

interface IAppState {
  app: any;
}

const AlertMessage: React.FC = () => {
  const message: IAlert = useSelector((state: IAppState) => state.app.message);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showMessage(false, ''));
  };

  return message ? (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={message ? message.open : false}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={message.type}>
        {message.text}
      </Alert>
    </Snackbar>
  ) : null;
};

export default AlertMessage;
