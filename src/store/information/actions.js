import * as types from './actionTypes';

export function setData(payload) {
  return {
    type: types.INFORMATION_SET_DATA,
    payload
  }
}