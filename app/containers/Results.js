var React = require('react');
var EachResult = require('./../components/Each_result.js');

var Results = React.createClass({

	render: function() {
		var path = "../assets/img/";
		var meals = [{
			image: path + 'pizza.png',
			cusine: 'Italian',
			diet: ['veg']
		}, {
			image: path + 'tahchin.png',
			cusine: 'Persian',
			diet: []
		}, {
			image: path + 'arepa.png',
			cusine: 'Venezuelan',
			diet: ['veg', 'vegan', 'gluten-free']
		}];
			return (
				<div>
					<EachResult meals={meals} />
				</div>
			)
	}
});

module.exports = Results;
