import { Map } from 'immutable';

import * as types from './actionTypes';

const initState = Map({
  byCurrency: null,
});

export default function(state = initState, action) {
  switch (action.type) {
    case types.FILTER_SET_BY_CURRENCY:
      return state.set('byCurrency', action.payload);
    default:
      return state;
  }
}