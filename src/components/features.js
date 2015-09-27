import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
var Isvg = require('react-inlinesvg');


export default class Features extends Component {
    render() {
        return (
        	<div className="content">
                <div className="" style={this.props.style}>
                	<Isvg className="pure-u-1-5" src={this.props.content.icon1}/>
                	<div className="pure-u-1-3" ></div>
                    <div className="pure-u-1-3">
                    	<h3>Fast</h3>
                    	<p>Fast web prototyping. Every day it's growing.</p>
                   </div>
                </div>
                <div className="" style={this.props.style}>
                    <div className="pure-u-1-3">
                    	<h3>Simple</h3>
                    	<p>Just choose your template, adjust and download it</p>
                    </div>
                	<div className="pure-u-1-3" ></div>
                    <Isvg className="pure-u-1-5" src={this.props.content.icon2}/>
                </div>
                <div className="" style={this.props.style}>
					<Isvg className="pure-u-1-5" src={this.props.content.icon3}/>
                	<div className="pure-u-1-4" ></div>
                    <div className="pure-u-1-3">
                    	<h3>Responsive frandly</h3>
                    	<p>Download source files after editing, it's simple to understand and rebuild for your needs</p>
                    </div>
                </div>
			</div>
        );
    }
}