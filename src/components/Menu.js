import React, { Component } from 'react';
import MenuItem from './menu/MenuItem';

export default class Menu extends Component {
    render() {
        let menu = this.props.menu;
        let Styles = this.props.Styles;
        return (
            <div className="pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                    {Object.keys(menu).map(function(object, i){
                        return <MenuItem Styles={Styles} item={menu[object]} link={object} /> ;
                    })}
                </ul>
            </div>
        );
    }
}