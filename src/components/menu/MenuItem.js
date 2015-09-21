import React, { Component } from 'react';

export default class MenuItem extends Component {
    render() {
        return (
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">{this.props.item.title}</a></li>
        );
    }
}