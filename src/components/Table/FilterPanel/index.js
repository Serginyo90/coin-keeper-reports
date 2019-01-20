import { connect } from 'react-redux';

import { setFilterByCurrency } from 'store/filter/actions';
import { getFilterByCurrency } from 'store/filter/selectors';

import FilterPanel from './FilterPanel';

const mapStateToProps = state => ({
  byCurrency: getFilterByCurrency(state)
})

const mapDispatchToProps = {
  setFilterByCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);

