import React, { Component } from 'react'
import moment from 'moment'
import './TodoItem.css'
import EditMode from './EditMode'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'


// view mode
const repeatStr = (str, times) => {
  return (new Array(times + 1)).join(str);
}
const renderViewMode = (todo, toggleEditMode, toggleTodo, deleteTodo) => {
  const { id, text, priority, dueDate, completed } = todo
  const dueDateStr = moment(dueDate).format('YYYY/MM/DD')
  return (
    <article className={`media TodoItem ${ completed ? 'completed' : ''}`}>
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
          {dueDate && <p className="todo-date">Due date: {dueDateStr}</p> }
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
      dueDateFoucsed: focused === null ? false : focused
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
      return <EditMode
              toggleEditMode={this.toggleEditMode}
              handleChange={this.handleChange}
              handleDateChange={this.handleDateChange}
              handleDateFocusChange={this.handleDateFocusChange}
              handleEditTodo={this.handleEditTodo}
              {...this.state}
              />
    } else {
      return renderViewMode(todo, this.toggleEditMode, toggleTodo, deleteTodo)
    }
  }
}

export default TodoItem
