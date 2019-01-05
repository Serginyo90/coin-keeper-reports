import React from 'react';
import FilterBlock from './FilterBlock';
import styles from './FilterPanel.module.css';

const FilterPanel = () => (
  <div className={styles.wrapper}>
    <FilterBlock 
      title="TITLE_1"
      filterItems={['item1', 'item2', 'item3']}
    />
  </div>
)

export default FilterPanel