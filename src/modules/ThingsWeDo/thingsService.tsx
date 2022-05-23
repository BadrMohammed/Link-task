/* eslint-disable import/prefer-default-export */
import { thingsSlice } from '../../redux/store';
import {_things} from '../../data/things';
const fetchThings = (dispatch: Function) => {
  dispatch(thingsSlice.actions.getThinges(_things.data.things));
};

export { fetchThings };
