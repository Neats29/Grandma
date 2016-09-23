var React = require('react');
var Button = require('./../components/Button');

var Categories = React.createClass({
	handleClick: function(e) {
		if (e.target.style.backgroundColor === "yellow") {
			e.target.style.backgroundColor = null;
		} else {
			e.target.style.backgroundColor = "yellow";
		}
	},

	render: function() {
		var specialDiet = ['Veg', 'Vegan', 'Kosher', 'Halal', 'Gluten-free'];
			return (
				<div>
					<Button onClick={this.handleClick} dietTypes={specialDiet } />
				</div>
			)
	}
});

module.exports = Categories;
