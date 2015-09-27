// var React = require('react');
// var Main = require('./components/main');

import React from 'react'
import { Router, Route, Link } from 'react-router'
// import Main from './components/main'
import Main from './layouts/onepage'
import About from './components/about'

React.render((
	<Router>
		<Route path="/" component={Main} />
	    <Route path="about" component={About}/>
	    <Route path="features" component={Main}/>
	    <Route path="contact" component={Main}/>
	</Router>
),document.getElementById('app'));