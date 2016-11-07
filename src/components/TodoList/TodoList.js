import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

const renderTodoList = (editItemId, toggleEditMode, todos, actions) => {
  return todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        editItemId={editItemId}
        todo={todo}
        toggleEditMode={toggleEditMode}
        {...actions}
      />
    )
  })
}

class TodoList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          editItemId: null
      }
      this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode(id) {
      this.setState({
          editItemId: id
      })
  }

  render() {
    const { editItemId } = this.state
    const { todos, filter, actions } = this.props
    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    return (
      <section>
        {renderTodoList(editItemId, this.toggleEditMode, filteredTodos, actions)}
      </section>
    )
  }

}


export default TodoList
