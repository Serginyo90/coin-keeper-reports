import { List } from 'immutable';
import { formValueSelector } from 'redux-form/immutable';
import { FILTER_PANEL_FORM } from 'helpers/constants/filter';

export const getFilterPanelFormValuesForTags = state => {
  const selector = formValueSelector(FILTER_PANEL_FORM);
  console.log('__getFilterPanelFormValuesForTags__');
  const tags = selector(state, "tags");
  return tags ? tags.reduce((list, val, key) => {
    console.log('_reduce_', {
      list, val, key
    });
    return val ? list.push(key) : list;
  }, List()) : List();
}