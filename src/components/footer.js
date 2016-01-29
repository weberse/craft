var React = require('react');
var Styles = require('styles/index');

var Footer = React.createClass({
    render: function() {
        return (
            <footer style={this.props.style} >
                <div className="content pure-g">
                    <div className="pure-u-1-1 pure-u-md-1-5">
                        <div>Info</div>
                        <div href="#"><a href="#">Pricing</a></div>
                        <div href="#"><a href="#">Clients</a></div>
                        <div href="#"><a href="#">Partners</a></div>
                    </div>
                    <div className="pure-u-1-1 pure-u-md-1-5">
                        <div>About us</div>
                        <div><a href="#">Docs</a></div>
                        <div><a href="#">About</a></div>
                        <div><a href="#">Careers</a></div>
                        <div><a href="#">Team</a></div>
                    </div>
                    <div className="pure-u-1-1 pure-u-md-1-5">
                        <div>Help</div>
                        <div><a href="#">FAQ</a></div>
                        <div><a href="#">Blog</a></div>
                        <div><a href="#">Status</a></div>
                        <div><a href="#">Security</a></div>
                    </div>
                </div>
                <div style={this.props.style.copyright}>
                    <small style={this.props.style.copyright.text} className="center">
                        © Copyright 2016, Example Corporation
                    </small>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;