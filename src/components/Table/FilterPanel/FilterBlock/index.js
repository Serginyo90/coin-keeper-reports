import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import { Field } from 'redux-form/immutable';

import styles from './FilterBlock.module.css';

const FilterBlock = ({ title, filterItems, className }) => (
  <div className={cn(styles.wrapper, { [className]: className })}>
    <span className={styles.title}>{title}</span>
    <div className={styles.body}>
      {filterItems.map((el, i) => <div key={i}>
        <Field
          type="checkbox" 
          id={i} 
          name={el['Name']} 
          component='input'
        />
        <label htmlFor={i}>{el['Name']}</label>
      </div>)}
    </div>
  </div>
)

FilterBlock.propTypes = {
  title: PropTypes.string.isRequired,
  // filterItems: PropTypes.arrayOf(PropTypes.string)
}

export default FilterBlock