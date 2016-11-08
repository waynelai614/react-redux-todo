import React from 'react'

const OPTIONS = [
  {
    id: 3,
    text: 'High'
  }, {
    id: 2,
    text: 'Medium'
  }, {
    id: 1,
    text: 'Low'
  }, {
    id: 0,
    text: 'None'
  }
]

const renderOptions = (options) => (
  options.map((option) => {
    return (
      <option key={option.id} value={option.id}>{option.text}</option>
    )
  })
)

const PrioritySelect = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
  >
    {renderOptions(OPTIONS)}
  </select>
)

PrioritySelect.propTypes = {
  onChange: React.PropTypes.func
}

export default PrioritySelect
