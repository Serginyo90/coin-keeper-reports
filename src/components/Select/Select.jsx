import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import uniqueId from 'lodash/uniqueId'

import styles from './Select.module.css'

const Select = ({
  id,
  options,
  disabled,
  label,
  input,
  size,
  getLabel,
  getValue,
  getKey,
  className,
}) => {
  const selectId = id || uniqueId()

  return (
    <div className={cn(styles.wrapper, { [className]: className})}>
      {label && (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        {...input}
        id={selectId}
        disabled={disabled}
        size={size}
        className={styles.select}
      >
        {options.map(option => (
          <option key={getKey(option)} value={getValue(option)}>
            {getLabel(option)}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.defaultProps = {
  disabled: false,
  options: [],
  input: {},
  getLabel: option => (option && option.label ? option.label : option),
  getValue: option => (option && option.value ? option.value : option),
  getKey: option => (option && option.key ? option.key : uniqueId()),
}

Select.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.any,
    name: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  size: PropTypes.number,
  getLabel: PropTypes.func,
  getValue: PropTypes.func,
  getKey: PropTypes.func,
}

export default Select
