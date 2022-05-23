import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { errorActions, errorReducer } from './reducers/errorSlice';
import { newsReducer, newsActions } from '../modules/News/newsSlice';
import { thingsReducer, thingsActions } from '../modules/ThingsWeDo/thingsSlice';

// Main store of the app.
export const store = configureStore({
  reducer: {
    error: errorReducer,
    news:newsReducer,
    things:thingsReducer

  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export reducer and action of each slice

export const errorSlice = {
  state: (state: RootState) => state.error,
  actions: errorActions,
  
};



export const thingsSlice = {
  state: (state: RootState) => state.things,
  actions: thingsActions,
  
};

export const newsSlice = {
  state: (state: RootState) => state.news,
  actions: newsActions,
  
};




