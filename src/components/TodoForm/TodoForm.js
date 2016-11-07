import React, {Component} from 'react'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'

class TodoForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          [TODO_TEXT]: '',
          [TODO_PROIORITY]: 0,
          dueDate: '',
          dueDateFoucsed: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleChange(propertyName, e) {
    let value = (propertyName === TODO_PROIORITY) ? parseInt(e.target.value, 10) : e.target.value
    this.setState({
      [propertyName]: value
    })
  }

  handleAddTodo() {
    const { text, priority } = this.state

    if (!text)
    return

    this.props.addTodo(text)
    this.setState({
      [TODO_TEXT]: '',
      [TODO_PROIORITY]: 0
    })
  }

  render () {
    const { handleChange, handleAddTodo } = this
    const { text, priority } = this.state
    return (
        <div className="columns is-multiline">
          <div className="column is-7">
            <label className="label">Task</label>
            <p className="control">
              <input
                className="input"
                type="text"
                value={text}
                onChange={(e) => handleChange(TODO_TEXT, e)}
                placeholder="What needs to be done?" />
            </p>
          </div>
          <div className="column is-3">
            <label className="label">Due Date</label>
            <p className="control">
              <input className="input" type="text" placeholder="Text input" />
            </p>
          </div>
          <div className="column is-2">
            <label className="label">Priority</label>
            <p className="control">
              <span className="select is-fullwidth">
                <select
                  value={priority}
                  onChange={(e) => handleChange(TODO_PROIORITY, e)}
                >
                  <option value="2">High</option>
                  <option value="1">Low</option>
                  <option value="0">None</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column">
            <a className="button is-primary is-fullwidth" onClick={handleAddTodo}>Add Todo</a>
          </div>
        </div>
    )
  }
}

export default TodoForm
