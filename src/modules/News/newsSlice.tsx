import { createSlice } from '@reduxjs/toolkit';
// Imported actions
import { GET_CATEGORIES, GET_NEWS ,GET_NEW, ADD_TO_FAVOURITE} from './newsActions';

const initialState = {
  news: [],
  categories: [],
  active_category: '0',
  new_details: {},
  favourite_list:[]
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getCategories: GET_CATEGORIES,
    getNews: GET_NEWS,
    getNew:GET_NEW,
    addToFavourite:ADD_TO_FAVOURITE
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
