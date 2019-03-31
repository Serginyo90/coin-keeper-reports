import { connect } from 'react-redux'

import Graph from './Graph'
import { getFilteredAccountsDataForChart } from 'store/information/selectors'

const mapStateToProps = state => ({
  data: getFilteredAccountsDataForChart(state)
})

export default connect(mapStateToProps)(Graph)