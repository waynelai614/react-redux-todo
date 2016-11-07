import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MainSection from '../components/MainSection'

import { setVisibilityFilter } from '../redux/modules/visibilityFilter'
import { actions as TodoActions } from '../redux/modules/todos'

const mapStateToProps = (state) => ({
    todos: state.todos,
    filter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ setVisibilityFilter, ...TodoActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
