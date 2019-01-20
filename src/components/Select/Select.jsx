import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'

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
}) => {
  const selectId = id || uniqueId()

  return (
    <div>
      {label && (
        <label htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        {...input}
        id={selectId}
        disabled={disabled}
        size={size}
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
