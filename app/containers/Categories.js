var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./../components/Button.js');
var Address = require('./../components/Input.js');

var Categories = React.createClass({
	getInitialState: function() {
		return { dietSelected: false }
	},

	handleClick: function() {
		this.setState({ dietSelected: true });
	},

	render: function() {
		var isSelected = this.state.dietSelected;
		var style = isSelected ?
		{"backgroundColor":"yellow"} :
		{"backgroundColor":""};

		var specialDiet = ['Veg', 'Vegan', 'Kosher', 'Halal'];
			return (
				<div>
					<Address />
					<Button onClick={this.handleClick} style={style} dietTypes={specialDiet } /> </div>
			)
	}
});

module.exports = Categories;
