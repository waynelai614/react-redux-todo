import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import { SORT_BY_DEFAULT, SORT_BY_DUE_DATE, SORT_BY_PRIORITY } from '../../constants/TodoSorting'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'
import './MainSection.css'

const TODO_SORTING = {
  [SORT_BY_DEFAULT]: 'Default',
  [SORT_BY_DUE_DATE]: 'Due Date',
  [SORT_BY_PRIORITY]: 'Priority'
}

const renderSortingLink = (sort, sortKey, sortBy) => {
  const { key, isDescending } = sort
  const sortIconClassName = isDescending ? 'fa fa-caret-down' : 'fa fa-caret-up'
  const iconClassName = (key === sortKey) ? sortIconClassName : 'fa fa-sort'
  return (
    <a onClick={() => sortBy(sortKey)}>
      <span>{TODO_SORTING[sortKey]}</span>
      <span className="icon is-small"><i className={iconClassName}></i></span>
    </a>
  )
}

const MainSection = (props) => {
  const { filter, sort } = props
  return (
    <section className="section MainSection">
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
                    <div className="tabs TodoSorting is-right is-small">
                      <ul>
                        <li style={{ paddingRight: '1em' }}>Sort by</li>
                        <li className={sort.key === SORT_BY_DEFAULT && "is-active"}>
                          {renderSortingLink(sort, SORT_BY_DEFAULT, props.actions.sortBy)}
                        </li>
                        <li className={sort.key === SORT_BY_DUE_DATE && "is-active"}>
                          {renderSortingLink(sort, SORT_BY_DUE_DATE, props.actions.sortBy)}
                        </li>
                        <li className={sort.key === SORT_BY_PRIORITY && "is-active"}>
                          {renderSortingLink(sort, SORT_BY_PRIORITY, props.actions.sortBy)}
                        </li>
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
