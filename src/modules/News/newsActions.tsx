/* eslint-disable no-param-reassign */
/**
 * The Rule above is disabled as Redux-toolkit does NOT mutate state
 * check the link below
 * https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
 */
import { PayloadAction } from '@reduxjs/toolkit';

const GET_CATEGORIES = (state: any, action: PayloadAction<any>) => {
  state.categories = action.payload;
};

const GET_NEWS = (state: any, action: PayloadAction<any>) => {
  const { news, id } = action.payload;
  state.news = news;
  state.active_category = id;
};

export { GET_CATEGORIES, GET_NEWS };
