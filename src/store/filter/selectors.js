import { createSelector } from 'reselect';
import { DEFAULT_FILTER_BY_CURRENCY } from 'helpers/constants/filter';

const getFilter = state => state.filtration;

export const getFilterByCurrency = createSelector(getFilter, 
  filter => filter.get('byCurrency') || DEFAULT_FILTER_BY_CURRENCY
);