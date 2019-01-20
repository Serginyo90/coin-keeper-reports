import { createStore, combineReducers } from 'redux';

import information from './information/reducers'
import filter from './filter/reducers';

const store = createStore(
  combineReducers({ information, filter }), 
  {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store