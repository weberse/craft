var React = require('react');

var patterns = {
    "colors": {
        "buisness": {
            "dark": "#3e3c42",
            "light": "white",
            "brand": "#f9276f",
            "primary": "#428bca",
            "success": "#5cb85c",
            "warning": "#d9534f",
            "info": "#ffdd8a"
        },
        "web": {
            "dark": "#205081",
            "light": "#fff",
            "brand": "#BA2A29",
            "primary": "#3b73af",
            "success": "#707070",
            "warning": "#d9534f",
            "info": "#ffd351"
        }
    }
};

var Colors = React.createClass({
    render: function() {
        return (
            <select>
                {Object.keys(this.props.patterns).map(function(object, i){
                    return <option>{object}</option>;
                })}
            </select>
        );
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
        return (
            <div style={editorStyles.box} >
                <div style={editorStyles.close}>
                    <a
                        onMouseDown={this.handleMouseDown}
                        onTouchStart={this.handleTouchStart}>
                    </a>
                </div>
                <div>
                    <Colors patterns={patterns.colors}/>
                </div>
            </div>
        );
    }
});

module.exports = Editor;