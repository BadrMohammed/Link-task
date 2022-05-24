import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { homeSlice } from '../../redux/store';
import { fetchBannersData } from './homeService';
import { HomeView } from './HomeView';

export const HomeController = () => {

  const [loading,setLoading]=useState<boolean>(false)

  const dispatch = useAppDispatch();
  const homeState = useAppSelector(homeSlice.state);

  useEffect(() => {
    fetchBannersData(dispatch, setLoading);
  }, []);

  return <HomeView homeState={homeState} loading={loading} />;
};
