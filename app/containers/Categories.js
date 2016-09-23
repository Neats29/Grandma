var React = require('react');
var Button = require('./../components/Button');

var Categories = React.createClass({
	handleClick: function(e) {
		//used to have the click event here
	},

	render: function(i) {
		var specialDiet = ['veg', 'vegan', 'gf'];
			return (
				<div>
					<Button onClick={this.handleClick} dietTypes={specialDiet } />
				</div>
			)
	}
});

module.exports = Categories;
