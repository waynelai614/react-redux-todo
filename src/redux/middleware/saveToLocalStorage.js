import todoUtils from '../utils'

const saveToLocalStorage = store => next => action => {
  let result = next(action)
  todoUtils.setTodosToClient(store.getState().todos)
  return result
}

export default saveToLocalStorage
