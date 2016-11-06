const TODOS_LOCALSTORAGE_KEY = 'TODOS'

const todoUtils = {
    getTodosFromClient() {
        const store = localStorage.getItem(TODOS_LOCALSTORAGE_KEY)
        return (store && JSON.parse(store)) || []
    },

    setTodosToClient(todos) {
        localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(todos))
    }
}

export default todoUtils
