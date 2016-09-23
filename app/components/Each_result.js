var React = require('react');

var EachResult = React.createClass({
	render: function(){
		var result = this.props.meals.map((meal, index) => {
			return (
				<div key={`meal-${index}`} style={{"width": "25%"}}>
					<h2 style={{"textAlign":"center"}}>{meal.cusine}</h2>
					<img style={{"width":"100%"}} src={meal.image}></img>
					<br />
					<button style={{"width":"100%"}}>I want it!</button>
				</div>
			)
		});
		return (
			<div>
				{result}
			</div>
		)
	}
});

module.exports = EachResult;
