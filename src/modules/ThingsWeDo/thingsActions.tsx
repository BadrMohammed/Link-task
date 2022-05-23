/* eslint-disable no-param-reassign */
/**
 * The Rule above is disabled as Redux-toolkit does NOT mutate state
 * check the link below
 * https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
 */
import { PayloadAction } from '@reduxjs/toolkit';
const GET_THINGS = (state: any, action: PayloadAction<any>) => {
  state.things = action.payload;
};

export { GET_THINGS };
