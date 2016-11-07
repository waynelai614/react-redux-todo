import { SORT_BY_DEFAULT } from '../../constants/TodoSorting'

// constants
const SET_SORTING = 'SET_SORTING'

// actions
export const sortBy = (key) => ({
  type: SET_SORTING,
  key
})

// reducers
const initialState = {
  key: SORT_BY_DEFAULT,
  isDescending: true
}

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      if (state.key === action.key) {
        return { ...state, isDescending: !state.isDescending }
      } else {
        return { ...initialState, key: action.key }
      }
    default:
      return state
  }
}

export default sort
