import React from 'react';

import Select from 'components/Select';
import { DEFAULT_FILTER_BY_CURRENCY } from 'helpers/constants/filter';
import FilterBlock from './FilterBlock';
import styles from './FilterPanel.module.css';

// const handleFilterCurrency = e => {
//   const filteredAccounts = this.props.accounts.data.filter(el => {
//     if(e.target.value === 'all') {
//       return true
//     }
//     return el.Currency === e.target.value;
//   })
//   this.setState({ filteredAccounts: { ...this.props.accounts, data: filteredAccounts }})
// }

const FilterPanel = ({ setFilterByCurrency, byCurrency }) => (
  <div className={styles.wrapper}>
    <Select
      label="Select currency"
      options={[
        { label: 'All currencies', value: DEFAULT_FILTER_BY_CURRENCY },
        { label: 'USD', value: 'USD'},
        { label: 'RUB', value: 'RUB'},
      ]}
      input={{
        name: "currency",
        value: byCurrency,
        onChange: e => {
          setFilterByCurrency(e.target.value);
        }
      }}
    />
    <FilterBlock 
      title="TITLE_1"
      filterItems={['item1', 'item2', 'item3']}
    />
  </div>
)

export default FilterPanel