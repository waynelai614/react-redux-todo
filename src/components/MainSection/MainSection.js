import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

const MainSection = (props) => (
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
                <section role="todo-section">
                  <div className="tabs is-right is-small">
                    <ul>
                      <li>Sort By</li>
                      <li className="is-active"><a>Default</a></li>
                      <li><a>Due Date</a></li>
                      <li><a>Priority</a></li>
                    </ul>
                  </div>
                  <TodoList {...props} />
                  <hr/>
                  <div className="tabs is-centered is-toggle">
                    <ul>
                      <li className="is-active"><a>All</a></li>
                      <li><a>Active</a></li>
                      <li><a>Completed</a></li>
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

export default MainSection
