var React = require('react');

var Address = React.createClass({
	render: function(){
		return (
			<div style={this.props.style}>
				<span>Enter your postcode: </span>
				<input onChange={this.props.onChange} type="text"/>
				<button onClick={this.props.onClick}>Search</button>
			</div>
		)
	}
});


module.exports = Address;
