import React, { Fragment } from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
import 'react-table/react-table.css'

const columns = [{
  Header: '№',
  Cell: row => row.index + 1
}, {
  Header: 'Amount',
  accessor: 'Amount'
}, {
  Header: 'Amount converted',
  accessor: 'Amount converted',
}, {
  Header: 'Currency',
  accessor: 'Currency',
  filterMethod: (a, b, c, d) => {
    console.log('fff', { a, b, c, d });
    return false
  },
  filterAll: true,
}, {
  Header: 'Currency of conversion',
  accessor: 'Currency of conversion'
}, {
  Header: 'Data',
  accessor: 'Data'
}, {
  Header: 'Note',
  accessor: 'Note'
}, {
  Header: 'Recurrence',
  accessor: 'Recurrence'
}, {
  Header: 'Tags',
  accessor: 'Tags'
}, {
  Header: 'From',
  accessor: 'From'
}, {
  Header: 'To',
  accessor: 'To'
}, {
  Header: 'Type',
  accessor: 'Type'
}]

const Table = ({ accounts: { data }, filterByCurrency }) => (
  <Fragment>
    <label htmlFor="currency">Select currency</label>
    <select name="currency" id="currency" onChange={filterByCurrency}>
      <option value="USD">USD</option>
      <option value="RUB">RUB</option>
    </select>
    <ReactTable
      data={data}
      columns={columns}
    />
  </Fragment>
)

Table.propTypes = {
  data: PropTypes.object,
  filterByCurrency: PropTypes.func.isRequired,
}

export default Table