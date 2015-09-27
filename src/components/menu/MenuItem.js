import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'


export default class MenuItem extends Component {
    render() {
    	const defaultStyle = {
    		float: "right",
    		padding: "10px 25px 0 0"
  		};
        return (
            <li className="" style={defaultStyle}>
            	<Link to={this.props.link}>
            		{this.props.item.title} 
            	</Link>
            </li>
        );
    }
}