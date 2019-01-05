import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterBlock.css';

const FilterBlock = ({ title, filterItems }) => (
  <div className={styles.wrapper}>
    <span>{title}</span>
    {filterItems.map((el, i) => <div key={i}>{el}</div>)}
  </div>
)

FilterBlock.propTypes = {
  title: PropTypes.string.isRequired,
  filterItems: PropTypes.arrayOf(PropTypes.string)
}

export default FilterBlock