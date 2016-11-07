import React, { Component } from 'react'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'

const renderEditMode = (state, toggleEditMode, handleChange, handleEditTodo) => {
  const { text, priority } = state
  return (
    <article className="media">
      <div className="media-content">
        <div className="columns">
          <div className="column">
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
          <div className="column">
            <input type="text" className="input" />
          </div>
          <div className="column">
            <p className="control">
              <span className="select is-fullwidth">
                <select value={priority} onChange={(e) => handleChange(TODO_PROIORITY, e)}>
                  <option value="2">High</option>
                  <option value="1">Low</option>
                  <option value="0">None</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-2">
            <div className="control is-grouped">
              <p className="control">
                <a className="button is-primary" onClick={handleEditTodo}>
                  Update
                </a>
              </p>
              <p className="control">
                <a className="button" onClick={() => toggleEditMode(null)}>
                  X
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const renderViewMode = (todo, toggleEditMode, toggleTodo, deleteTodo) => {
  const { id, text, priority } = todo
  return (
    <article className="media">
      <figure className="media-left">
        <input type="checkbox" onClick={() => toggleTodo(id)} />
      </figure>
      <div className="media-content" onDoubleClick={() => toggleEditMode(id)}>
        <div className="content">
          <p><strong>{text}</strong> - {priority}</p>
          <p>Due date: Today</p>
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
          dueDate: '',
          dueDateFoucsed: false,
      }
      this.toggleEditMode = this.toggleEditMode.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleEditTodo = this.handleEditTodo.bind(this)
  }

  toggleEditMode(id) {
      const { text, priority } = this.props.todo
      this.setState({
          [TODO_TEXT]: text,
          [TODO_PROIORITY]: priority,
      })
      this.props.toggleEditMode(id)
  }

  handleChange(propertyName, e) {
    const value = (propertyName === TODO_PROIORITY) ? parseInt(e.target.value, 10) : e.target.value
    this.setState({
      [propertyName]: value
    })
  }

  handleEditTodo() {
    const { text, priority } = this.state

    if (!text) {
      this.refs.taskInput.focus()
      return
    }

    const todo = this.props.todo

    this.props.editTodo({ ...todo, text: text, priority: priority })
    this.props.toggleEditMode(null)
  }

  render() {
    const { editItemId, todo, toggleTodo, deleteTodo } = this.props
    if (editItemId === todo.id) {
      return renderEditMode(this.state, this.toggleEditMode, this.handleChange, this.handleEditTodo)
    } else {
      return renderViewMode(todo, this.toggleEditMode, toggleTodo, deleteTodo)
    }
  }
}

export default TodoItem
