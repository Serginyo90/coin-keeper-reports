import React from 'react'
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

const Body = ({ accounts }) => (
  <ReactTable
    data={accounts}
    columns={columns}
  />
)

Body.propTypes = {
  data: PropTypes.object,
}

export default Body