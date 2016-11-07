import React, { Component } from 'react'
import PrioritySelect from '../Common/PrioritySelect'
import SingleDatePickerWrapper from '../Common/SingleDatePickerWrapper'
import moment from 'moment'
import './TodoItem.css'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'

// edit mode
const renderEditMode = (state, toggleEditMode, handleChange, handleDateChange, handleDateFocusChange, handleEditTodo) => {
  const { text, priority, dueDate, dueDateFoucsed } = state
  return (
    <article className="media todo-item">
      <div className="media-content edit-mode">
        <div className="columns">
          <div className="column is-6">
            <input
              ref="taskInput"
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

// view mode
const repeatStr = (str, times) => {
  return (new Array(times + 1)).join(str);
}
const renderViewMode = (todo, toggleEditMode, toggleTodo, deleteTodo) => {
  const { id, text, priority, dueDate, completed } = todo
  const dueDateStr = moment(dueDate).format('YYYY/MM/DD')
  return (
    <article className={`media todo-item ${ completed ? 'completed' : ''}`}>
      <figure className="media-left">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
      </figure>
      <div className="media-content" onDoubleClick={() => toggleEditMode(id)}>
        <div className="content">
          <p
            className="todo-task"
            data-priority={repeatStr('!', priority)}
          >{text}</p>
          {dueDate && <p className="todo-date has-text-right">Due date: {dueDateStr}</p> }
        </div>
      </div>
      <div className="media-right">
        <button
          className="delete"
          onClick={() => deleteTodo(id)}
        />
      </div>
    </article>
  )
}

class TodoItem extends Component {
  constructor(props) {
      super(props)
      this.state = {
          [TODO_TEXT]: '',
          [TODO_PROIORITY]: 0,
          dueDate: null,
          dueDateFoucsed: false,
      }
      this.toggleEditMode = this.toggleEditMode.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.handleDateFocusChange = this.handleDateFocusChange.bind(this)
      this.handleEditTodo = this.handleEditTodo.bind(this)
  }

  toggleEditMode(id) {
      const { text, priority, dueDate } = this.props.todo
      this.setState({
          [TODO_TEXT]: text,
          [TODO_PROIORITY]: priority,
          dueDate: dueDate !== null ? moment(dueDate) : null
      })
      this.props.toggleEditMode(id)
  }

  handleChange(propertyName, e) {
    const value = (propertyName === TODO_PROIORITY) ? parseInt(e.target.value, 10) : e.target.value
    this.setState({
      [propertyName]: value
    })
  }

  handleDateChange(moment) {
    this.setState({
      dueDate: moment
    })
  }

  handleDateFocusChange({ focused }) {
    this.setState({
      dueDateFoucsed: focused
    })
  }

  handleEditTodo() {
    const { text, priority, dueDate } = this.state

    if (!text) {
      this.refs.taskInput.focus()
      return
    }

    const todo = this.props.todo
    const dueDateTimeStamp = (dueDate !== null) ? dueDate.valueOf() : dueDate

    this.props.editTodo({ ...todo,
      text: text,
      priority: priority,
      dueDate: dueDateTimeStamp
     })
    this.props.toggleEditMode(null)
  }

  render() {
    const { editItemId, todo, toggleTodo, deleteTodo } = this.props
    if (editItemId === todo.id) {
      return renderEditMode(this.state, this.toggleEditMode, this.handleChange, this.handleDateChange, this.handleDateFocusChange, this.handleEditTodo)
    } else {
      return renderViewMode(todo, this.toggleEditMode, toggleTodo, deleteTodo)
    }
  }
}

export default TodoItem
