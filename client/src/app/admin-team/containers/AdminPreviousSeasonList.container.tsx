import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPreviousSeasons } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import Spinner from 'lib/components/loading/Spinner';
import AdminPrevSeasonsList from '../components/AdminPrevSeasonsList';
import { IPreviousSeason } from 'shared/types';

export default () => {
  const dispatch = useDispatch();
  const [seasons, setSeasons] = useState<IPreviousSeason[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getPreviousSeasons()).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setSeasons(data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch]);

  return !loading ? <AdminPrevSeasonsList seasons={seasons} /> : <Spinner />;
};