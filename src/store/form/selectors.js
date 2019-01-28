import { List } from 'immutable';
import { formValueSelector } from 'redux-form/immutable';
import { 
  FILTER_PANEL_FORM, 
  DEFAULT_FILTER_BY_TYPE, 
  DEFAULT_FILTER_BY_CATEGORY,
  DEFAULT_FILTER_BY_WALLET,
} from 'helpers/constants/filter';

const selector = formValueSelector(FILTER_PANEL_FORM);

export const getFilterPanelFormValuesForTags = state => {
  const tags = selector(state, "tags");
  return tags ? tags.reduce((list, val, key) => {
    return val ? list.push(key) : list;
  }, List()) : List();
}

export const getFilterPanelFormValueForType = state => {
  return selector(state, "type") || DEFAULT_FILTER_BY_TYPE;
}

export const getFilterPanelFormValueForCategory = state => {
  return selector(state, "category") || DEFAULT_FILTER_BY_CATEGORY;
}

export const getFilterPanelFormValueForWallet = state => {
  return selector(state, "wallet") || DEFAULT_FILTER_BY_WALLET;
}