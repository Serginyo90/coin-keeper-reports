import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { Map } from 'immutable';

import information from './information/reducers'
import filter from './filter/reducers';

const store = createStore(
  combineReducers({ information, filter }), 
  Map(), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store