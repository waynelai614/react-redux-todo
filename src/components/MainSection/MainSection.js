import React from 'react'
import Tabs from './Tabs'
import TodoForm from './TodoForm'
import TodoBottom from './TodoBottom'
import TodoList from '../TodoList'
import './MainSection.css'

const MainSection = (props) => {
  const { todos, filter, sort, actions } = props
  const completedCount = todos.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  )
  const activeCount = todos.length - completedCount

  return (
    <section className="section MainSection">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="box">
              <TodoForm
                addTodo={actions.addTodo}
              />
              {todos.length > 0
                &&
                  <section>
                    <Tabs
                      currentSort={sort}
                      sortBy={actions.sortBy}
                    />
                    <TodoList {...props} />
                    <TodoBottom
                      activeCount={activeCount}
                      completedCount={completedCount}
                      selectedFilter={filter}
                      setVisibilityFilter={actions.setVisibilityFilter}
                      clearCompleted={actions.clearCompleted}
                    />
                  </section>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
