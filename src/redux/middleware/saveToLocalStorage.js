import todoUtils from '../utils'

const saveToLocalStorage = store => next => action => {
  let preTodos = store.getState().todos
  let result = next(action)
  let nextTodos = store.getState().todos
  if (preTodos !== nextTodos) {
    todoUtils.setTodosToClient(store.getState().todos)
  }
  return result
}

export default saveToLocalStorage
