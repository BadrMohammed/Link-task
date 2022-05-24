import { createSlice } from '@reduxjs/toolkit';
// Imported actions
import { GET_BANNERS_DATA } from './homeActions';

const initialState = {
  data: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getBannersData: GET_BANNERS_DATA,
  },
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
