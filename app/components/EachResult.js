var React = require('react');

var EachResult = React.createClass({

	noCategorySelected: function() {
		var unselected = 0, selectable = 0;
		for (var prop in this.props.selectedDiet) {
			selectable++;
			if (!this.props.selectedDiet[prop]) {
				unselected++;
			}
		}
		return unselected === selectable;
	},

	render: function(){
		let result = this.props.meals.map((meal, index) => {
			let renderedMeal = (key) => {
				return (
					<div key={`meal-${index}-${key}`} style={{"width": "25%"}}>
						<h2 style={{"textAlign":"center"}}>{meal.cusine}</h2>
						<img style={{"width":"100%"}} src={meal.image}></img>
						<br />
						<button style={{"width":"100%"}}>I want it!</button>
					</div>
				)
			};

			if (this.noCategorySelected()) {
				return renderedMeal('unselected');
			} else if (meal.diet !== null) {
				return meal.diet.map((selected) => {
					if (this.props.selectedDiet[selected]) {
						return renderedMeal('selected');
					}
				})
			}
		});
		return (
			<div>
				{result}
			</div>
		)
	}
});

module.exports = EachResult;
