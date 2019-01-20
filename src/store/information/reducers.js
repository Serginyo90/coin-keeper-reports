import { Map, fromJS } from 'immutable'
import * as types from './actionTypes'

export const initState = fromJS({
  accounts: [],
  sources: [],
  wallets: [],
  categories: [],
  tags: [],
  filteredAccounts: [],
})

export default function(state = initState, action) {
  switch (action.type) {
    case types.INFORMATION_SET_DATA:
    const {
      accounts,
      sources,
      wallets,
      categories,
      tags,
    } = action.payload
      return state
      .set('accounts', Map(accounts))
      .set('sources', Map(sources))
      .set('wallets', Map(wallets))
      .set('categories', Map(categories))
      .set('tags', Map(tags))
    default:
      return state
  }
}