import React, { Component } from 'react'
import TodoItem from './TodoItem'

const renderTodoList = (editItemId, toggleEditMode, props) => {
  return props.todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        editItemId={editItemId}
        todo={todo}
        toggleEditMode={toggleEditMode}
        {...props.actions}
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
    return (
      <section role="todoList">
        {renderTodoList(this.state.editItemId, this.toggleEditMode, this.props)}
      </section>
    )
  }

}


export default TodoList
