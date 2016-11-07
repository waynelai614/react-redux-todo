import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import 'bulma/css/bulma.css'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux'

import saveToLocalStorage from './redux/middleware/saveToLocalStorage'

const store = createStore(reducer,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                          applyMiddleware(saveToLocalStorage)
                        )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
