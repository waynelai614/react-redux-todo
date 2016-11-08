import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
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

const TodoBottom = ({ selectedFilter, setVisibilityFilter }) => {
  return (
    <div className="tabs is-centered is-toggle">
      <ul>
        {renderFilterLink(selectedFilter, setVisibilityFilter)}
      </ul>
    </div>
  )
}

export default TodoBottom
