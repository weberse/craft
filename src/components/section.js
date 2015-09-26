var React = require('react');

var Section = React.createClass({
    render: function() {
        return (
            <section className="content pure-g" style={this.props.style}>
                <div className="pure-u-1">
                    <h3>{this.props.sliderContent.title}</h3>
                </div>
                <div className="pure-u-1-3 pure-u-md-1-6">
                    <a href="#" className="button info">{this.props.sliderContent.buttons.primary}</a>
                </div>
                <div className="pure-u-1-2 pure-u-md-1-6">
                    <a href="#" className="button btn-bkg">{this.props.sliderContent.buttons.default}</a>
                </div>
            </section>
        );
    }
});

module.exports = Section;