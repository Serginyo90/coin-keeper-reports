import * as types from './actionTypes';

export function setFilterByCurrency(payload) {
  return {
    type: types.FILTER_SET_BY_CURRENCY,
    payload
  }
}