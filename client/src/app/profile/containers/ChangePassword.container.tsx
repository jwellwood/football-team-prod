import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkCurrentPassword,
  updatePassword,
} from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { user_routes } from 'router';
import ChangePassword from '../components/ChangePassword.component';

export interface IChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ICurrentPasswordData {
  currentPassword: string;
}
interface INewPasswordData {
  currentPassword: string;
  user: IUserData;
}

const ChangePasswordState = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export default () => {
  const user: IUserData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState<IChangePasswordForm>({
    ...ChangePasswordState,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);

  const currentData: ICurrentPasswordData = { ...input };
  const onSubmitCurrent = () =>
    onFormSubmit(
      setLoading,
      dispatch(checkCurrentPassword(currentData)),
      dispatch,
      () => setOpen(true)
    );

  const newData: INewPasswordData = { ...input, user };
  const onSubmitNew = () =>
    onFormSubmit(setLoading, dispatch(updatePassword(newData)), dispatch, () =>
      history.push(user_routes.PROFILE)
    );

  return (
    <ChangePassword
      onSubmitCurrent={onSubmitCurrent}
      onSubmitNew={onSubmitNew}
      loading={loading}
      open={open}
      onChange={onChange}
      input={input}
    />
  );
};
