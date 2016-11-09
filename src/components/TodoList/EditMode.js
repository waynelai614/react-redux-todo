import React from 'react'
import PrioritySelect from '../Common/PrioritySelect'
import SingleDatePickerWrapper from '../Common/SingleDatePickerWrapper'
import './TodoItem.css'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'

// edit mode
const EditMode = (props) => {
  const { text, priority, dueDate, dueDateFoucsed, toggleEditMode, handleChange, handleDateChange, handleDateFocusChange, handleEditTodo } = props
  return (
    <article className="media TodoItem">
      <div className="media-content edit-mode">
        <div className="columns">
          <div className="column is-6">
            <input
              type="text"
              className="input"
              autoFocus="true"
              value={text}
              onChange={(e) => handleChange(TODO_TEXT, e)}
              placeholder="What needs to be done?"
            />
          </div>
          <div className="column is-2">
            <SingleDatePickerWrapper
              date={dueDate}
              focused={dueDateFoucsed}
              onDateChange={handleDateChange}
              onFocusChange={handleDateFocusChange}
            />
          </div>
          <div className="column is-2">
            <p className="control">
              <span className="select is-fullwidth">
                <PrioritySelect
                  value={priority}
                  onChange={(e) => handleChange(TODO_PROIORITY, e)}
                />
              </span>
            </p>
          </div>
          <div className="column is-2">
            <div className="control is-grouped">
              <p className="control">
                <a className="button is-primary" onClick={handleEditTodo}>
                  <span className="icon is-small">
                    <i className="fa fa-check"></i>
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button" onClick={() => toggleEditMode(null)}>
                  <span className="icon is-small">
                    <i className="fa fa-times"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default EditMode
