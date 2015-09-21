var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header className="pure-g">
                <div className="pure-u-1 pure-u-md-1-3">
                    <h2>Web page</h2>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <nav>
                        <a href="#">Featers</a>
                        <a href="#">Contact</a>
                        <a href="#">Docs</a>
                        <a href="#">Support</a>
                    </nav>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <a href="#" className="button">Login</a>
                    <a href="#" className="button btn-border">Sign Up</a>
                </div>
            </header>
        );
    }
});

module.exports = Header;