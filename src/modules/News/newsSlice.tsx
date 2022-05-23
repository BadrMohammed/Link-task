import { createSlice } from '@reduxjs/toolkit';
// Imported actions
import { GET_CATEGORIES, GET_NEWS } from './newsActions';

const initialState = {
  news: [],
  categories: [],
  active_category: '0',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getCategories: GET_CATEGORIES,
    getNews: GET_NEWS,
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
