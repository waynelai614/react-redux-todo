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
            <TodoList
              {...props}
             />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default MainSection
