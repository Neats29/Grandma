var React = require('react');
var Button = require('./../components/Button');

var Categories = React.createClass({
	getInitialState: function() {
		return {
			selectedDiet: {
				veg: false,
				vegan: false,
				gf: false
			}
		};
	},

	handleClick: function(e) {
		var selectedDiet = this.state.selectedDiet;
		selectedDiet[e.target.value] = !this.state.selectedDiet[e.target.value];
		this.setState({selectedDiet});
		console.log(this.state);
	},

	render: function(i) {
		var specialDiet = ['veg', 'vegan', 'gf'];
			return (
				<div>
					<Button selected={this.state.selectedDiet} clickHandler={this.handleClick} dietTypes={specialDiet } />
				</div>
			)
	}
});

module.exports = Categories;
