import React from 'react';
import Menu from './Menu';

var Header = React.createClass({
    render: function() {
        return (
            <header style={this.props.style}>
                <div className="content pure-g">
                    <div className="pure-u-1 pure-u-md-1-5">
                        <div className="pure-menu" style={this.props.style.brand}>
                            <a href="#" className="" >Web page</a>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <Menu menu={this.props.menuContent}/>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
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