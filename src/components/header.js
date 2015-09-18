var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header className="row">
                <div className="container">
                    <div className="col span_3">
                        <h2>Web page</h2></div>
                    <div className="col span_4">
                        <nav>
                            <a href="#">Featers</a>
                            <a href="#">Contact</a>
                            <a href="#">Docs</a>
                            <a href="#">Support</a>
                        </nav>
                    </div>
                    <div class="right">
                        <a href="#" className="button">Login</a>
                        <a href="#" className="button btn-border">Sign Up</a>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;