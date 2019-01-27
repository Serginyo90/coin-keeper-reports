import { createSelector } from 'reselect';
import { List } from 'immutable';
import uniq from 'lodash/uniq';

import { getFilterByCurrency } from 'store/filter/selectors';
import { getFilterPanelFormValuesForTags, getFilterPanelFormValueForType, getFilterPanelFormValueForCategory } from 'store/form/selectors';
import { DEFAULT_FILTER_BY_CURRENCY, DEFAULT_FILTER_BY_TYPE, DEFAULT_FILTER_BY_CATEGORY } from 'helpers/constants/filter';

const getInformation = state => state.get('information');
export const getAccountsData = createSelector(getInformation, inf => inf.getIn(['accounts', 'data']));
export const getSources = createSelector(getInformation, inf => inf.get('sources'));
export const getWallets = createSelector(getInformation, inf => inf.get('wallets'));
const getCategories = createSelector(getInformation, inf => inf.get('categories'));
const getCategoriesData = createSelector(getCategories, categories => categories.get('data'));
export const getCategoriesDataForSelect = createSelector(getCategoriesData, categories => List(categories.map(el => el.Name)));
const getTags = createSelector(getInformation, inf => inf.get('tags'));
export const getTagsData = createSelector(getTags, tags => {
    return tags.get('data').sort((a, b) => {
      const NameA = a['Name'];
      const NameB = b['Name'];
      if (NameA < NameB) { return -1; }
      if (NameA > NameB) { return 1; }
      return 0;
    });
  }
);

export const getAccountsDataFilteredByCurrency = createSelector(
  [getAccountsData, getFilterByCurrency], (accounts, byCurrency) => {
    return byCurrency === DEFAULT_FILTER_BY_CURRENCY ? 
      accounts : accounts.filter(el => el.Currency === byCurrency)
  }
);

export const getAccountsDataFilteredByType = createSelector(
  [getAccountsDataFilteredByCurrency, getFilterPanelFormValueForType], (accounts, byType) => {
    return byType === DEFAULT_FILTER_BY_TYPE ? 
      accounts : accounts.filter(el => el.Type === byType)
  }
);

export const getAccountsDataFilteredByCategory = createSelector(
  [getAccountsDataFilteredByType, getFilterPanelFormValueForCategory], (accounts, byCategory) => {
    return byCategory === DEFAULT_FILTER_BY_CATEGORY ? 
      accounts : accounts.filter(el => el.To === byCategory)
  }
);

export const getAccountsDataFilteredByTags = createSelector(
  [getAccountsDataFilteredByCategory, getFilterPanelFormValuesForTags], (accounts, tags) => {
    return !tags.size ? accounts : (
      accounts && accounts.filter(account => {
        if (!!account.Tags) {
          const accountTags = account.Tags.split(',');
          return accountTags.some(tag => tags.includes(tag));
        } else {
          return false
        }
      })
    )
  }
);

export const getFilteredAccountsData = createSelector(getAccountsDataFilteredByTags, accounts => accounts);
export const getAccountsDataCurrencies = createSelector(getAccountsData, accounts => {
  const currencies = accounts.map(el => el.Currency);
  return List(uniq(currencies));
})

export const getAccountsDataTypes = createSelector(getAccountsData, accounts => {
  const types = accounts.map(el => el.Type);
  return List(uniq(types));
})