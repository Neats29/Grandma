var React = require('react');

var ShowAddress = React.createClass({
	render: function(){
		return (
			<div>
				<h4>{this.props.value}</h4>
				<button>Change Postcode</button>
			</div>
		)
	}
});


module.exports = ShowAddress;
