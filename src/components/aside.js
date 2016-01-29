var React = require('react');

var styles = {
    base: {
        color: '#fff',

        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
            //background: color('#0074d9').lighten(0.2).hexString()
        }
    },

    primary: {
        background: '#0074D9'
    },

    warning: {
        background: '#FF4136'
    }
};

var Aside = React.createClass({
    render: function() {
        return (
            <aside className="content pure-g">
                <div className="pure-u-1 pure-u-md-1-4" style={this.props.style}>
                    <h3>One Touch</h3>
                    <p>Fast web prototyping. Every day it's growing.</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
                <div className="pure-u-1 pure-u-md-1-4" style={this.props.style}>
                    <h3>It's free</h3>
                    <p>Just choose your template, adjust and download it</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
                <div className="pure-u-1 pure-u-md-1-4" style={this.props.style}>
                    <h3>Minimalism</h3>
                    <p>Download source files after editing, it's simple to understand and rebuild for your needs</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
            </aside>
        );
    }
});

module.exports = Aside;