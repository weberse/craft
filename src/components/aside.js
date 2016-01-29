var React = require('react');
var Styles = require('styles/index');


var Aside = React.createClass({
    render: function() {
        return (
            <aside className="content pure-g">
                <div className="pure-u-1 pure-u-md-1-4" style={Styles.aside}>
                    <h3>One Touch</h3>
                    <p>Fast web prototyping. Every day it's growing.</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
                <div className="pure-u-1 pure-u-md-1-4" style={Styles.aside}>
                    <h3>It's free</h3>
                    <p>Just choose your template, adjust and download it</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
                <div className="pure-u-1 pure-u-md-1-4" style={Styles.aside}>
                    <h3>Minimalism</h3>
                    <p>Download source files after editing, it's simple to understand and rebuild for your needs</p>
                    <div><a href="#">learn more &#8594;</a></div>
                </div>
            </aside>
        );
    }
});

module.exports = Aside;