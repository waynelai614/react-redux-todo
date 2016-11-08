import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const SingleDatePickerWrapper = (props) => (
  <SingleDatePicker
    numberOfMonths={1}
    displayFormat="YYYY/MM/DD"
    id="date_input"
    date={props.date}
    focused={props.focused}
    onDateChange={props.onDateChange}
    onFocusChange={props.onFocusChange}
    showClearDate
  />
)

SingleDatePickerWrapper.propTypes = {
  focused: React.PropTypes.bool.isRequired,
  onDateChange: React.PropTypes.func,
  onFocusChange: React.PropTypes.func
}

export default SingleDatePickerWrapper
