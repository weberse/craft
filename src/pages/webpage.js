import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import Main from '../components/main'
// import Main from './layouts/onepage'
import About from '../components/about'

export default class App extends Component {
    render() {
        let menu = this.props.menu;
        return (
           	<Router>
				<Route path="/" component={Main} />
				<Route path="/about" component={About}/>
				<Route path="/features" component={Main}/>
				<Route path="/contact" component={Main}/>
			</Router>
        );
    }
}