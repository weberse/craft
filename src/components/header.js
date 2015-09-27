import React from 'react';
import Menu from './Menu';
import { Router, Route, Link } from 'react-router'

var Header = React.createClass({
    render: function() {
        return (
            <header style={this.props.style}>
                <div className="content pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Link to=''><div className="pure-menu" style={this.props.style.brand}>
                            Web page
                        </div></Link>
                    </div>
                    <div className="pure-u-1 pure-u-md-2-3">
                        <Menu menu={this.props.menuContent}/>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;