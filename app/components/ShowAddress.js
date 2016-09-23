var React = require('react');

var ShowAddress = React.createClass({
	render: function(){
		return (
			<div>
				<h4 style={{"display":"inline-block"}}>{this.props.value}</h4>
				<button onClick={this.props.onClick} >Change Postcode</button>
			</div>
		)
	}
});


module.exports = ShowAddress;
