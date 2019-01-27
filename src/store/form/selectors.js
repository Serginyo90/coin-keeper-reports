import { List } from 'immutable';
import { formValueSelector } from 'redux-form/immutable';
import { FILTER_PANEL_FORM, DEFAULT_FILTER_BY_TYPE } from 'helpers/constants/filter';

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