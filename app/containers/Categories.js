var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./../components/Button.js');
var Address = require('./../components/Input.js');

var Categories = React.createClass({
	render: function() {
		var specialDiet = ['Veg', 'Vegan', 'Kosher', 'Halal'];
			return (
				<div>
					<Address />
					<Button dietTypes={specialDiet } />
				</div>
			)
	}
});

module.exports = Categories;
