import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainSection from '../components/MainSection'

import { actions as TodoActions } from '../redux/modules/todos'

const App = (props) => (
  <div>
    <Navbar/>
    <Hero/>
    <MainSection {...props} />
  </div>
)

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
