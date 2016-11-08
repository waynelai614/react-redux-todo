import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import Tabs from './Tabs'
import TodoBottom from './TodoBottom'
import './MainSection.css'

const MainSection = (props) => {
  const { filter, sort, actions } = props
  return (
    <section className="section MainSection">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="box">
              <TodoForm
                addTodo={actions.addTodo}
              />
              {props.todos.length > 0
                &&
                  <section>
                    <Tabs
                      currentSort={sort}
                      sortBy={actions.sortBy}
                    />
                    <TodoList {...props} />
                    <TodoBottom
                      selectedFilter={filter}
                      setVisibilityFilter={actions.setVisibilityFilter}
                    />
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
