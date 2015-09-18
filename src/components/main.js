var React = require('react');
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Section />
                <Aside />
                <Footer />
            </div>
        );
    }
});

module.exports = Main;