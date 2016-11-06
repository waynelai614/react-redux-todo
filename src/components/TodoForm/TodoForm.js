import React, {Component} from 'react'

class TodoForm extends Component {
    render () {
      return (
          <div className="columns is-multiline">
            <div className="column is-7">
              <label className="label">Text</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input" />
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
                  <select>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="column">
              <a className="button is-primary is-fullwidth" onClick={() => { this.props.addTodo('New Todo')}}>Add Todo</a>
            </div>
          </div>
      )
    }
}

export default TodoForm
