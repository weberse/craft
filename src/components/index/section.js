var React = require('react');

var Section = React.createClass({
    render: function() {
        return (
            <section className="row">
                <div className="container">
                    <div>
                        <h3>Development from the past until today</h3>
                    </div>
                    <div className="col span_2">
                        <a href="#" className="button info">Sign Up</a>
                    </div>
                    <div class="col span_3">
                        <a href="#" className="button btn-bkg">Try Editor</a>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Section;