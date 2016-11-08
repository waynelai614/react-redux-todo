import React from 'react'
import { SORT_BY_DEFAULT, SORT_BY_DUE_DATE, SORT_BY_PRIORITY } from '../../constants/TodoSorting'

const SORT_TITLES = {
  [SORT_BY_DEFAULT]: 'Default',
  [SORT_BY_DUE_DATE]: 'Due Date',
  [SORT_BY_PRIORITY]: 'Priority'
}

const renderLink = (currentSort, sortKey, sortBy, title) => {
  const { key, isDescending } = currentSort
  const caretIconClassName = isDescending ? 'fa fa-caret-down' : 'fa fa-caret-up'
  return (
    <a onClick={() => sortBy(sortKey)}>
      <span>{title}</span>
      <span className="icon is-small">
        <i className={key === sortKey ? caretIconClassName : 'fa fa-sort'}></i>
      </span>
    </a>
  )
}

const renderTab = (currentSort, sortBy) => (
  [ SORT_BY_DEFAULT, SORT_BY_DUE_DATE, SORT_BY_PRIORITY ].map((sortKey) => {
    const title = SORT_TITLES[sortKey]
    return (
      <li key={sortKey} className={currentSort.key === sortKey ? 'is-active' : ''}>
        {renderLink(currentSort, sortKey, sortBy, title)}
      </li>
    )
  })
)

const Tabs = ({ currentSort, sortBy }) => {
  return (
    <div className="tabs TodoSorting is-right is-small">
      <ul>
        <li style={{ paddingRight: '1em', color: 'grey' }}>Sort by</li>
        {renderTab(currentSort, sortBy)}
      </ul>
    </div>
  )
}

export default Tabs
