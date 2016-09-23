var React = require('react');

var Address = React.createClass({
	render: function(){
		return (
			<div>
				<span>Enter your postcode: </span>
				<input onChange={this.props.onChange} type="text"/>
				<button onClick={this.props.onClick}>Search</button>
				<div style={{"display":"none"}}>{this.props.value}</div>
			</div>
		)
	}
});


module.exports = Address;
