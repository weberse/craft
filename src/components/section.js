var React = require('react');

var Section = React.createClass({
    render: function() {
        return (
            <section className="content pure-g">
                <div className="pure-u-1">
                    <h3>Development from the past until today</h3>
                </div>
                <div className="pure-u-1-4">
                    <a href="#" className="button info">Sign Up</a>
                </div>
                <div className="pure-u-1-3">
                    <a href="#" className="button btn-bkg">Try Editor</a>
                </div>
            </section>
        );
    }
});

module.exports = Section;