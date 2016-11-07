import { combineReducers } from 'redux'
import todos from './modules/todos'
import visibilityFilter from './modules/visibilityFilter'

const App = combineReducers({
  todos,
  visibilityFilter
})

export default App
