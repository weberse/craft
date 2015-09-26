// var React = require('react');
// var Main = require('./components/main');

import React from 'react'
import { Router, Route, Link } from 'react-router'
import Main from './components/main'
import About from './components/about'

React.render((
	<Router>
		<Route path="/" component={Main} />
	    <Route path="about" component={About}/>
	</Router>
),document.getElementById('app'));