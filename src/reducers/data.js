import { Map } from 'immutable';
import * as types from '../actions';

const initialState = new Map({
  isFetching: false,
  message: '',
});

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_DATA:
      return state
              .set('isFetching', true);
    case types.RECEIVE_DATA:
      return state
              .set('isFetching', false)
              .set('message', action.data.message);
    default:
      return state;
  }
};

export default data;
