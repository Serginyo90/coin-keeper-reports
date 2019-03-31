import { createSelector } from 'reselect';
import { List, Map } from 'immutable';
import uniq from 'lodash/uniq';
import Moment from 'moment';

import { getFilterByCurrency } from 'store/filter/selectors';
import { sortListByName, getCountDaysBetweenDate } from 'helpers/storeHelper.js';
import { prepareDataForLineGraph } from 'helpers/graphHelper.js';
import {
  getFilterPanelFormValuesForTags, 
  getFilterPanelFormValueForType, 
  getFilterPanelFormValueForCategory,
  getFilterPanelFormValueForWallet,
  getFilterPanelFormValueForRange
} from 'store/form/selectors';
import { 
  DEFAULT_FILTER_BY_CURRENCY, 
  DEFAULT_FILTER_BY_TYPE, 
  DEFAULT_FILTER_BY_CATEGORY,
  DEFAULT_FILTER_BY_WALLET
} from 'helpers/constants/filter';

const getInformation = state => state.information;

export const getAccountsData = createSelector(getInformation, inf => inf.getIn(['accounts', 'data']));

export const getSources = createSelector(getInformation, inf => inf.get('sources'));

const getWallets = createSelector(getInformation, inf => inf.get('wallets'));

const getWalletsData = createSelector(getWallets, wallets => wallets.get('data'));

export const getWalletsDataNamesList = createSelector(getWalletsData, wallets => sortListByName(List(wallets)).map(wallet => `${wallet.Name} - ${wallet.Currency}`));

const getCategories = createSelector(getInformation, wallets => wallets.get('categories'));

const getCategoriesData = createSelector(getCategories, categories => categories.get('data'));

export const getCategoriesDataNamesList = createSelector(getCategoriesData, categories => sortListByName(List(categories)).map(category => category.Name));

const getTags = createSelector(getInformation, inf => inf.get('tags'));

export const getTagsData = createSelector(getTags, tags => sortListByName(tags.get('data')));

export const getAccountsDataFilteredByCurrency = createSelector(
  [getAccountsData, getFilterByCurrency], (accounts, byCurrency) => {
    return byCurrency === DEFAULT_FILTER_BY_CURRENCY ? 
      accounts : accounts.filter(el => el.Currency === byCurrency)
  }
);

export const getAccountsDataFilteredByRange = createSelector(
  [getAccountsDataFilteredByCurrency, getFilterPanelFormValueForRange], (accounts, byRange) => {
    return byRange ? accounts && accounts.filter(account => {
      const { from, to } = byRange;
      const date = Moment(account.Data, "MM/DD/YYYY");
      return from <= date && to >= date;
    }) : accounts;
  }
);

export const getAccountsDataFilteredByType = createSelector(
  [getAccountsDataFilteredByRange, getFilterPanelFormValueForType], (accounts, byType) => {
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

export const getAccountsDataFilteredByWallet = createSelector(
  [getAccountsDataFilteredByCategory, getFilterPanelFormValueForWallet], (accounts, byWallet) => {
    return byWallet === DEFAULT_FILTER_BY_WALLET ? 
      accounts : accounts.filter(el => el.From === byWallet)
  }
);

export const getAccountsDataFilteredByTags = createSelector(
  [getAccountsDataFilteredByWallet, getFilterPanelFormValuesForTags], (accounts, tags) => {
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
});

export const getAccountsDataDatesMinAndMax = createSelector(getAccountsData, accounts => {
  return Map({
    min: new Date(accounts[0]['Data']),
    max: new Date(accounts[accounts.length - 1]['Data']),
  });
});

export const getAccountsDataTypes = createSelector(getAccountsData, accounts => {
  const types = accounts.map(el => el.Type);
  return List(uniq(types));
});

export const getFilteredAccountsDataForChart = createSelector([getFilteredAccountsData, getFilterPanelFormValueForRange],
  (accounts, byRange) => {
  const { from, to } = byRange;
  const countDays = getCountDaysBetweenDate(from, to);
  let prepearedData = null;
  if (countDays <= 31) {
    prepearedData = prepareDataForLineGraph(accounts, 'DD');
  } else if (countDays <= 368) {
    prepearedData = prepareDataForLineGraph(accounts, 'MMMM');
  }
  return prepearedData;
});