import React from 'react'

const TodoItem = (props) => {
  const {todo, deleteTodo} = props
  return (
    <article className="media">
      <figure className="media-left">
        <input type="checkbox" />
      </figure>
      <div className="media-content">
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

export default TodoItem
