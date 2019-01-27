import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { setFilterByCurrency } from 'store/filter/actions';
import { getFilterByCurrency } from 'store/filter/selectors';
import { getTagsData, getAccountsDataCurrencies } from 'store/information/selectors';
import { FILTER_PANEL_FORM } from 'helpers/constants/filter';

import FilterPanel from './FilterPanel';

const mapStateToProps = state => ({
  byCurrency: getFilterByCurrency(state),
  tags: getTagsData(state),
  currencies: getAccountsDataCurrencies(state)
})

const mapDispatchToProps = {
  setFilterByCurrency
}

const formProps = {
  form: FILTER_PANEL_FORM,
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formProps)(FilterPanel));

