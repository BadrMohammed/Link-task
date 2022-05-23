import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { newsSlice } from '../../redux/store';
import { fetchCategories, fetchNews } from './newsService';
import { NewsView } from './NewsView';

export const NewsController = () => {
  const [loading, setLoading] = useState<boolean>();
  const dispatch = useAppDispatch();
  const newsState = useAppSelector(newsSlice.state);

  useEffect(() => {
    fetchCategories(dispatch);
    fetchNews(dispatch, null, setLoading);
  }, []);

  return (
    <NewsView
      newsState={newsState}
      fetchNews={fetchNews}
      dispatch={dispatch}
      loading={loading}
    />
  );
};
