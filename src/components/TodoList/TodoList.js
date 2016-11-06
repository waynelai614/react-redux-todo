import React from 'react'
import TodoItem from './TodoItem'

const renderTodoList = (props) => {
  return props.todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        {...props.actions}
      />
    )
  })
}

const TodoList= (props) => {
  if (props.todos.length > 0) {
    return (
      <div>
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><a>All</a></li>
            <li><a>Active</a></li>
            <li><a>Completed</a></li>
          </ul>
        </div>
        {renderTodoList(props)}
      </div>
    )
  } else {
    return null
  }
}

export default TodoList
