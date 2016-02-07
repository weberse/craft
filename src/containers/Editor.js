var React = require('react');
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from '../actions'


var Colors = React.createClass({
    render: function() {
        return (
            <select onChange={this.handleChange} >
                {Object.keys(this.props.patterns).map(function(object, i){
                    return <option value={object}>{object}</option>;
                })}
            </select>
        );
    },
    handleChange: function(event) {
        this.props.changeColor(event.target.value)
    }
});

var editorStyles = {
    box: {
        position: "fixed",
        padding: "10px 10px",
        right:0,
        top: "120px",
        border: "1px solid gray",
        "background-color": "#fff"
    },
    close: {
        "position": "absolute",
        "left": "-25px"
    }
};

var Editor = React.createClass({

    render: function() {

        const { changeColor, colors } = this.props
        return (
            <div style={editorStyles.box} >
                <div>
                    <Colors
                        patterns={colors.colors}
                        changeColor={changeColor}
                        />
                </div>
            </div>
        );
    }
});


function mapStateToProps(state) {
    return {
        colors: state.editor.patterns
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(EditorActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)