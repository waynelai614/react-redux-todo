import React, {Component} from 'react'
import PrioritySelect from '../Common/PrioritySelect'
import SingleDatePickerWrapper from '../Common/SingleDatePickerWrapper'

const TODO_TEXT = 'text'
const TODO_PROIORITY = 'priority'

class TodoForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          [TODO_TEXT]: '',
          [TODO_PROIORITY]: 0,
          dueDate: null,
          dueDateFoucsed: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.handleDateFocusChange = this.handleDateFocusChange.bind(this)
      this.handleAddTodo = this.handleAddTodo.bind(this)
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

  handleAddTodo() {
    const { text, priority, dueDate } = this.state

    if (!text) {
      this.refs.taskInput.focus()
      return
    }

    const dueDateTimeStamp = (dueDate !== null) ? dueDate.valueOf() : dueDate

    this.props.addTodo(text, priority, dueDateTimeStamp)
    this.setState({
      [TODO_TEXT]: '',
      [TODO_PROIORITY]: 0,
      dueDate: null
    })
  }

  render () {
    const { handleChange, handleAddTodo } = this
    const { text, priority, dueDate, dueDateFoucsed } = this.state
    return (
        <div className="columns is-multiline">
          <div className="column is-7">
            <label className="label">Task</label>
            <p className="control">
              <input
                ref="taskInput"
                className="input"
                type="text"
                value={text}
                onChange={(e) => handleChange(TODO_TEXT, e)}
                placeholder="What needs to be done?"
              />
            </p>
          </div>
          <div className="column is-3">
            <label className="label">Due Date</label>
            <SingleDatePickerWrapper
              date={dueDate}
              focused={dueDateFoucsed}
              onDateChange={this.handleDateChange}
              onFocusChange={this.handleDateFocusChange}
            />
          </div>
          <div className="column is-2">
            <label className="label">Priority</label>
            <p className="control">
              <span className="select is-fullwidth">
                <PrioritySelect
                  value={priority}
                  onChange={(e) => handleChange(TODO_PROIORITY, e)}
                />
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
