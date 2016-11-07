import { SHOW_ALL } from '../../constants/TodoFilters'

// constants
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// actions
export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

// reducers
const initialState = SHOW_ALL

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
