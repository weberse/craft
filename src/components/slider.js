var React = require('react');


var Slider = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div>
					<h3>{this.props.slides.main.title}</h3>
				</div>
				<div className="col span_2">
					<a href="#" className="button info">{this.props.slides.main.buttons.primery}</a>
				</div>
				<div className="col span_3">
					<a href="#" className="button btn-bkg">{this.props.slides.main.buttons.default}</a>
				</div>
			</div>
		)
	}
});

module.exports = Slider;