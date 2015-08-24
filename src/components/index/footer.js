var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col span_2">
                            <a href="#">Pricing</a>
                            <a href="#">Clients</a>
                            <a href="#">Partners</a>
                            <a href="#">Press</a>
                        </div>
                        <div className="col span_2">
                            <div><a href="#">Docs</a></div>
                            <div><a href="#">About</a></div>
                            <div><a href="#">Careers</a></div>
                            <div><a href="#">Team</a></div>
                        </div>
                        <div className="col span_2">
                            <div><a href="#">FAQ</a></div>
                            <div><a href="#">Blog</a></div>
                            <div><a href="#">Status</a></div>
                            <div><a href="#">Security</a></div>
                        </div>
                    </div>
                    <div className="row">
                        <small className="row center">© Copyright 2058, Example Corporation</small>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;