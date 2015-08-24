var React = require('react');
var Header = require('./index/header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render () {
        return (
            <div>
                <Header />
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;
