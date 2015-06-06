var React = require('react');
var Slides = require('./slides/slides');
var Controls = require('./slides/controls');

var slides = {
    main: {
        active: 'false'
    },
    meta: {
        active: 'true'
    }
};

var Section = React.createClass({
    render: function() {
        return (
            <div>
                <Slides slides={slides} />
                <Controls slides={slides} />
            </div>
        );
    }
});

module.exports = Section;