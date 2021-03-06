import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam, deleteTrophy } from 'reduxStore/team';
import { onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import { ITrophy } from 'shared/types';
import DeleteTrophy from '../components/DeleteTrophy.component';
import { RootState, AppDispatch } from 'reduxStore/rootReducer';

interface Props {
  trophy: ITrophy;
}

export default ({ trophy }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const team = useSelector((state: RootState) => state.team.data);
  // State
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteTrophy = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteTrophy(team._id, trophy._id!)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_TROPHIES);
      }
    );

  return <DeleteTrophy loading={loading} onDeleteTrophy={onDeleteTrophy} />;
};
