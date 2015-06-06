var React = require('react');

var Controls = React.createClass({
    render: function() {
        return (
            <div>
                <a onClick={this._changeSlide.bind(this, 1)}>o</a>
                <a onClick={this._changeSlide.bind(this, 2)}>o</a>
                <a onClick={this._changeSlide.bind(this, 3)}>o</a>
            </div>
        );
    },
    _changeSlide: function(index){
        console.log(index);
    }
});


module.exports = Controls;