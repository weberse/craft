import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from '../actions'

import Main from '../components/main'

function mapStateToProps(state) {
    return {
        counter: state.editor
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(EditorActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
