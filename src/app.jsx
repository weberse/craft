var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('./components/main');
var App = require('./components/app');
var Contact = require('./components/index/footer');

var routes = (
    <Route handler={App}>
        <Route name="page1" handler={Main} />
        <Route name="page2" handler={Contact} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

//React.render(<Main />,  document.getElementById('app'));

