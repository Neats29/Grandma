var React = require('react');
var Button = require('./../components/Button');
var EachResult = require('./../components/EachResult.js');

var CategorisedResults = React.createClass({
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
	},

	render: function(i) {
		var specialDiet = ['veg', 'vegan', 'gf'];
		var path = "../assets/img/";
		var meals = [{
			image: path + 'pizza.png',
			cusine: 'Italian',
			diet: ['vegan']
		}, {
			image: path + 'tahchin.png',
			cusine: 'Persian',
			diet: null
		}, {
			image: path + 'arepa.png',
			cusine: 'Venezuelan',
			diet: ['veg', 'vegan', 'gf']
		}];

			return (
				<div>
					<Button selectedDiet={this.state.selectedDiet} clickHandler={this.handleClick} dietTypes={specialDiet } />
					<EachResult selectedDiet={this.state.selectedDiet} meals={meals} />
				</div>
			)
	}
});

module.exports = CategorisedResults;
