var React = require('react');
var ReactDOM = require('react-dom');

var Address = React.createClass({
	render: function(){
		return (
			<div>
				<span>Address: </span>
				<input type="text"/>
				<button>Search</button>
			</div>
		)
	}
});

module.exports = Address;
