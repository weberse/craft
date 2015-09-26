import React, { Component } from 'react';



export default class MenuItem extends Component {
    render() {
    	const defaultStyle = {
    		float: "right",
    		padding: "10px 25px 0 0"
  		};
        return (
            <li className="" style={defaultStyle}>
            	<a href="#">{this.props.item.title}</a>
            </li>
        );
    }
}