var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer className="">
                <div className="content pure-g">
                    <div className="pure-u-1-4">
                        <a href="#">Pricing</a>
                        <a href="#">Clients</a>
                        <a href="#">Partners</a>
                        <a href="#">Press</a>
                    </div>
                    <div className="pure-u-1-4">
                        <div><a href="#">Docs</a></div>
                        <div><a href="#">About</a></div>
                        <div><a href="#">Careers</a></div>
                        <div><a href="#">Team</a></div>
                    </div>
                    <div className="pure-u-1-4">
                        <div><a href="#">FAQ</a></div>
                        <div><a href="#">Blog</a></div>
                        <div><a href="#">Status</a></div>
                        <div><a href="#">Security</a></div>
                    </div>
                </div>
                <div className="">
                    <small className="center">© Copyright 2058, Example Corporation</small>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;