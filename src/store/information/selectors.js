import { createSelector } from 'reselect';

import { getFilterByCurrency } from 'store/filter/selectors';
import { DEFAULT_FILTER_BY_CURRENCY } from 'helpers/constants/filter';

const getInformation = state => state.information;
export const getAccountsData = createSelector(getInformation, inf => inf.getIn(['accounts', 'data']));
export const getSources = createSelector(getInformation, inf => inf.get('sources'));
export const getWallets = createSelector(getInformation, inf => inf.get('wallets'));
export const getCategories = createSelector(getInformation, inf => inf.get('categories'));
export const getTags = createSelector(getInformation, inf => inf.get('tags'));

export const getAccountsDataFilteredByCurrency = createSelector(
  [getAccountsData, getFilterByCurrency], (accounts, byCurrency) => {
    return byCurrency === DEFAULT_FILTER_BY_CURRENCY ? 
      accounts : accounts.filter(el => el.Currency === byCurrency)
  }
);

export const getFilteredAccountsData = createSelector(getAccountsDataFilteredByCurrency, accounts => accounts);