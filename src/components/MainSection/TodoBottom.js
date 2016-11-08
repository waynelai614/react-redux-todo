import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const renderTodoCount = (activeCount) => {
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <p className="todo-count">
      <strong>{activeCount || 'No'}</strong> {itemWord} left
    </p>
  )
}

const renderClearLink = (completedCount, clearCompleted) => {
  if (completedCount > 0) {
    return (
      <p className="clear-completed">
        <a onClick={clearCompleted}>Clear completed</a>
      </p>
    )
  }
}

const renderFilterLink = (selectedFilter, setVisibilityFilter) => (
   [ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map((filter) => {
    const title = FILTER_TITLES[filter]
    return (
      <li key={filter} className={selectedFilter === filter ? 'is-active' : ''}>
        <a onClick={() => setVisibilityFilter(filter)}>{title}</a>
      </li>
    )
  })
)

const TodoBottom = (props) => {
  const { activeCount, completedCount, selectedFilter, setVisibilityFilter, clearCompleted} = props
  return (
    <div className="columns">
      <div className="column has-text-left">
        {renderTodoCount(activeCount)}
      </div>
      <div className="column">
        <div className="tabs is-centered is-toggle">
          <ul>
            {renderFilterLink(selectedFilter, setVisibilityFilter)}
          </ul>
        </div>
      </div>
      <div className="column has-text-right">
        {renderClearLink(completedCount, clearCompleted)}
      </div>
    </div>
  )
}

export default TodoBottom
