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

const GET_NEW = (state: any, action: PayloadAction<any>) => {
  state.new_details = action.payload;
};


const ADD_TO_FAVOURITE = (state: any, action: PayloadAction<any>) => {
  state.favourite_list = action.payload;
};


export { GET_CATEGORIES, GET_NEWS, GET_NEW ,ADD_TO_FAVOURITE};
