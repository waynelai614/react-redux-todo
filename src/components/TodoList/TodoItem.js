import React from 'react'

const TodoItem = (props) => {
  const {editItemId, todo, deleteTodo} = props
  if (editItemId === todo.id) {
    return (
      <article className="media">
        <div className="media-content">
          <div className="columns">
            <div className="column">
              <input type="text" className="input" />
            </div>
            <div className="column">
              <input type="text" className="input" />
            </div>
            <div className="column">
              <input type="text" className="input" />
            </div>
            <div className="column is-2">
              <div className="control is-grouped">
                <p className="control">
                  <a className="button is-primary">
                    Update
                  </a>
                </p>
                <p className="control">
                  <a className="button" onClick={() => props.toggleEditMode(null)}>
                    X
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  } else {
    return (
      <article className="media">
        <figure className="media-left">
          <input type="checkbox" />
        </figure>
        <div className="media-content" onDoubleClick={() => props.toggleEditMode(todo.id)}>
          <div className="content">
            <p><strong>{todo.text}</strong></p>
            <p>Due date: Today</p>
          </div>
        </div>
        <div className="media-right">
          <button
            className="delete"
            onClick={() => { deleteTodo(todo.id) }}
          />
        </div>
      </article>
    )
  }
}

export default TodoItem
