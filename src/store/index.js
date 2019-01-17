import { createStore } from 'redux'
import { fromJS } from 'immutable';

import reducers from './reducers'

const initState = fromJS({
  accounts: [],
  sources: [],
  wallets: [],
  categories: [],
  tags: [],
  filteredAccounts: [],
})

const store = createStore(reducers, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store