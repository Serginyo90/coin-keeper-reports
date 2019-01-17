import * as types from './actionTypes'

export default function reducer(state, action) {
  switch (action.type) {
    case types.ADD_ACCOUNTS:
    console.log('accounts');
      return state;
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}