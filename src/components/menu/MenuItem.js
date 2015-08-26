import React, { Component } from 'react';

export default class MenuItem extends Component {
    render() {
        return (
            <a>{this.props.item.title}</a>
        );
    }
}