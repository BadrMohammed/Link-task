import { createSlice } from '@reduxjs/toolkit';
// Imported actions
import { GET_THINGS } from './thingsActions';

const initialState = {
  things: [],
};

export const thingsSlice = createSlice({
  name: 'things',
  initialState,
  reducers: {
    getThinges: GET_THINGS,
  },
});

export const thingsActions = thingsSlice.actions;
export const thingsReducer = thingsSlice.reducer;
