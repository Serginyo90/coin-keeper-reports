import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { Map } from 'immutable';

import { setFilterByCurrency } from 'store/filter/actions';
import { getFilterByCurrency } from 'store/filter/selectors';
import { getTagsData, getAccountsDataCurrencies, getAccountsDataTypes, getCategoriesDataForSelect } from 'store/information/selectors';
import { FILTER_PANEL_FORM, DEFAULT_FILTER_BY_TYPE } from 'helpers/constants/filter';

import FilterPanel from './FilterPanel';

const mapStateToProps = state => ({
  byCurrency: getFilterByCurrency(state),
  tags: getTagsData(state),
  currencies: getAccountsDataCurrencies(state),
  types: getAccountsDataTypes(state),
  categories: getCategoriesDataForSelect(state)
})

const mapDispatchToProps = {
  setFilterByCurrency
}

const formProps = {
  form: FILTER_PANEL_FORM,
  initialValues: Map({ type: DEFAULT_FILTER_BY_TYPE })
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formProps)(FilterPanel));

