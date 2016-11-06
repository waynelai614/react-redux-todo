import { combineReducers } from 'redux'
import todos from './modules/todos'

const App = combineReducers({
  todos
})

export default App
