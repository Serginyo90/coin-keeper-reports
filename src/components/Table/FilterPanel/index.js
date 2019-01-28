import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { Map } from 'immutable';

import { setFilterByCurrency } from 'store/filter/actions';
import { getFilterByCurrency } from 'store/filter/selectors';
import { 
  getTagsData,
  getAccountsDataCurrencies,
  getAccountsDataTypes,
  getCategoriesDataNamesList,
  getWalletsDataNamesList
 } from 'store/information/selectors';
import { 
  FILTER_PANEL_FORM, 
  DEFAULT_FILTER_BY_TYPE,
  DEFAULT_FILTER_BY_CATEGORY,
  DEFAULT_FILTER_BY_WALLET
} from 'helpers/constants/filter';

import FilterPanel from './FilterPanel';

const mapStateToProps = state => ({
  byCurrency: getFilterByCurrency(state),
  tags: getTagsData(state),
  currencies: getAccountsDataCurrencies(state),
  types: getAccountsDataTypes(state),
  categories: getCategoriesDataNamesList(state),
  wallets: getWalletsDataNamesList(state)
})

const mapDispatchToProps = {
  setFilterByCurrency
}

const formProps = {
  form: FILTER_PANEL_FORM,
  initialValues: Map({ 
    type: DEFAULT_FILTER_BY_TYPE,
    wallet: DEFAULT_FILTER_BY_WALLET,
    category: DEFAULT_FILTER_BY_CATEGORY,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formProps)(FilterPanel));

