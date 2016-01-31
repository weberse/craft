import React from 'react';
import Radium from 'radium';
import Menu from './Menu';
import { Router, Route, Link } from 'react-router'
import Styles from 'styles/index'

class Header extends React.Component {
    render() {
        return (
            <header style={Styles.header}>
                <div className="content pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Link to='' style={Styles.header.a}>
                            <div className="pure-menu" style={Styles.header.brand}>
                                Web page
                            </div>
                        </Link>
                    </div>
                    <div className="pure-u-1 pure-u-md-2-3">
                        <Menu menu={this.props.menuContent}/>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = Header;