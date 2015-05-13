var React = require('react');

var Header = require('./index/header');
var Section = require('./index/section');
var Aside = require('./index/aside');
var Footer = require('./index/footer');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Section />
                <Aside />
                <Footer />
            </div>
        );
    }
});

module.exports = Main;