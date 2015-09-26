import React from 'react';
import Menu from './Menu';

var Header = React.createClass({
    render: function() {
        return (
            <header style={this.props.style}>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <div className="pure-menu">
                            <a href="#" className="pure-menu-heading">Webpage</a>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Menu menu={this.props.menu}/>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <div className="pure-menu pure-menu-horizontal">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Signup</a></li>
                                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;