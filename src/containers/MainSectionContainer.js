import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MainSection from '../components/MainSection'

import { sortBy } from '../redux/modules/sort'
import { setVisibilityFilter } from '../redux/modules/visibilityFilter'
import { actions as TodoActions } from '../redux/modules/todos'

const mapStateToProps = (state) => ({
    todos: state.todos,
    sort: state.sort,
    filter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ sortBy, setVisibilityFilter, ...TodoActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
