import React, { Fragment } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

const DateTimePickerComponent = ({
  label,
  input: { value, onChange },
  defaultValue
}) => (
  <Fragment>
    {label && <label>{label}</label>}
    <DateTimePicker
      value={!value ? defaultValue : new Date(value)}
      time={false}
      onChange={onChange}
      format="DD/MM/YYYY"
    />
  </Fragment>
)

DateTimePickerComponent.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf(Date) ]).isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  label: PropTypes.string,
}

DateTimePickerComponent.defaultValue = {
  defaultValue: null,
}

export default DateTimePickerComponent;