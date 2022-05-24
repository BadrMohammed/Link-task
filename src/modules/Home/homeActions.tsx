/* eslint-disable no-param-reassign */
/**
 * The Rule above is disabled as Redux-toolkit does NOT mutate state
 * check the link below
 * https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
 */
import { PayloadAction } from '@reduxjs/toolkit';

const GET_BANNERS_DATA = (state: any, action: PayloadAction<any>) => {
  state.data = action.payload;
};


export { GET_BANNERS_DATA };
