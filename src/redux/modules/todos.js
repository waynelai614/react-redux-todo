import todoUtils from '../utils'

// constants
const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

// actions
export const addTodo = (text, priority, dueDate) => ({
  type: ADD_TODO,
  text,
  priority,
  dueDate
})

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
})

export const actions = {
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted
}

// reducers
const initialState = todoUtils.getTodosFromClient()

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          priority: action.priority,
          dueDate: action.dueDate
        },
        ...state
      ]
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.todo.id ?
          { ...action.todo } :
          todo
      )
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case CLEAR_COMPLETED:
      return state.filter(todo =>
        !todo.completed
      )
    default:
      return state
  }
}

export default todos
