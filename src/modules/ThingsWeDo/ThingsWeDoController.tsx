import { ThingsWeDoView } from './ThingsWeDoView';
import {fetchThings} from './thingsService'
import { thingsSlice } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
export const ThingsWeDoController = () => {
  
  const dispatch = useAppDispatch();
  const thingsState = useAppSelector(thingsSlice.state);
  useEffect(() => {
    fetchThings(dispatch);
  }, []);
  return <ThingsWeDoView thingsState={thingsState} />;
};
