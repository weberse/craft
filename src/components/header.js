import React from 'react';
import Radium from 'radium';
import Menu from './Menu';
import { Router, Route, Link } from 'react-router'

class Header extends React.Component {
    render() {
        return (
            <header style={this.props.Styles.header}>
                <div className="content pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Link to='' style={this.props.Styles.header.a}>
                            <div className="pure-menu" style={this.props.Styles.header.brand}>
                                {this.props.menuContent.name}
                            </div>
                        </Link>
                    </div>
                    <div className="pure-u-1 pure-u-md-2-3">
                        <Menu Styles={this.props.Styles} menu={this.props.menuContent.menu}/>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = Header;