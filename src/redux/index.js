import { combineReducers } from 'redux'
import todos from './modules/todos'
import sort from './modules/sort'
import visibilityFilter from './modules/visibilityFilter'

const App = combineReducers({
  todos,
  sort,
  visibilityFilter
})

export default App
