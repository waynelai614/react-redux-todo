import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'
import { SORT_BY_DEFAULT, SORT_BY_DUE_DATE, SORT_BY_PRIORITY } from '../../constants/TodoSorting'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

const TODO_SORT_BY = {
  [SORT_BY_DEFAULT]: (a, b) => b.id - a.id,
  [SORT_BY_DUE_DATE]: (a, b) => b.dueDate - a.dueDate,
  [SORT_BY_PRIORITY]: (a, b) => b.priority - a.priority
}

const renderTodoList = (editItemId, toggleEditMode, todos, actions) => (
  todos.map((todo) => {
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
)

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
    const { todos, filter, sort, actions } = this.props

    const filteredAndSortedTodos = todos.filter(TODO_FILTERS[filter]).sort(TODO_SORT_BY[sort.key])
    let visibilityTodos = sort.isDescending ? filteredAndSortedTodos : filteredAndSortedTodos.reverse()

    return (
      <section>
        {renderTodoList(editItemId, this.toggleEditMode, visibilityTodos, actions)}
      </section>
    )
  }

}


export default TodoList
