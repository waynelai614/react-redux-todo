import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MainSection from '../components/MainSection'

import { setVisibilityFilter } from '../redux/modules/visibilityFilter'
import { actions as TodoActions } from '../redux/modules/todos'

const App = (props) => (
  <div>
    <Navbar/>
    <Hero/>
    <MainSection {...props} />
  </div>
)

const mapStateToProps = (state) => ({
    todos: state.todos,
    filter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ setVisibilityFilter, ...TodoActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
