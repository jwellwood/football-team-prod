import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onInputChange, onInputCheck, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { IUserPermissionInput, UserPermissionState } from '../shared/types';
import {
  getUserById,
  setPermissions,
  resetImage,
} from 'reduxStore/user/user_admin_actions';
import { removeAdminImage } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { admin_routes } from 'router';
import UserPermissionForm from '../components/UserPermissionForm.component';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState<IUserData>(null);
  const [input, setInput] = useState<IUserPermissionInput>({
    ...UserPermissionState,
  });
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    dispatch(getUserById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setUser(data);
        setLoading(false);
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      const { canEdit } = user;
      const initState: IUserPermissionInput = {
        name: user.name,
        isPlayer: user.isPlayer,
        isCaptain: user.isCaptain,
        isAdmin: user.role === 'admin',
        squadNumber: user.squadNumber,
        position: user.position,
        appsTarget: user.appsTarget,
        goalsTarget: user.goalsTarget,
        assistsTarget: user.assistsTarget,
        canEditPhoto: canEdit ? canEdit.photo : null,
        canEditDetails: canEdit ? canEdit.details : null,
        canEditTargets: canEdit ? canEdit.targets : null,
        isVerified: user.isVerified,
      };
      setInput({ ...initState });
    }
  }, [user]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);
  const dataToSubmit: IUserPermissionInput = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(setPermissions(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getAllPlayers());
        history.push(admin_routes.ADMIN_USERS);
      }
    );

  const onResetImage = () => {
    dispatch(resetImage(id)).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(removeAdminImage(user.image.public_id)).then((res) => {
          const { success, message, type } = res.payload;
          if (success) {
            dispatch(showMessage(true, message, type));
            history.push(admin_routes.ADMIN_USERS);
          } else {
            dispatch(showMessage(true, message, type));
          }
        });
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  };

  return (
    <UserPermissionForm
      user={user}
      input={input}
      loading={loading}
      onChange={onChange}
      onCheck={onCheck}
      onSubmit={onSubmit}
      onResetImage={onResetImage}
    />
  );
};
