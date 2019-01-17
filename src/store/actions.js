import * as types from './actionTypes';

export function addAccounts(arr) {
  return {
    type: types.ADD_ACCOUNTS,
    arr
  }
}