import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'

const MainSection = (props) => {
  const { filter } = props
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="box">
              <TodoForm
                addTodo={props.actions.addTodo}
              />
              {props.todos.length > 0
                &&
                  <section>
                    <div className="tabs is-right is-small">
                      <ul>
                        <li>Sort by</li>
                        <li className="is-active"><a>Default</a></li>
                        <li><a>Due Date</a></li>
                        <li><a>Priority</a></li>
                      </ul>
                    </div>
                    <TodoList {...props} />
                    <div className="tabs is-centered is-toggle">
                      <ul>
                        <li className={filter === SHOW_ALL && "is-active"}><a onClick={() => props.actions.setVisibilityFilter(SHOW_ALL)}>All</a></li>
                        <li className={filter === SHOW_ACTIVE && "is-active"}><a onClick={() => props.actions.setVisibilityFilter(SHOW_ACTIVE)}>Active</a></li>
                        <li className={filter === SHOW_COMPLETED && "is-active"}><a onClick={() => props.actions.setVisibilityFilter(SHOW_COMPLETED)}>Completed</a></li>
                      </ul>
                    </div>
                  </section>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
