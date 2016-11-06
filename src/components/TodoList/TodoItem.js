import React from 'react'

const TodoItem = () => (
    <article className="media">
      <figure className="media-left">
        <input type="checkbox" />
      </figure>
      <div className="media-content">
        <div className="content">
          <p><strong>do something...</strong></p>
          <p>Due date: Today</p>
        </div>
      </div>
      <div className="media-right">
        <button className="delete"></button>
      </div>
    </article>
)

export default TodoItem
