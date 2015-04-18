var React = require('react');

var ContentHeader = React.createClass({
	
	render : function(){
		return (
				<nav>
					<a href="#">Featers</a>
					<a href="#">Contact</a>
					<a href="#">Docs</a>
					<a href="#">Support</a>
				</nav>
		)
	}
});

React.render(<ContentHeader />,  document.getElementById('menu'));