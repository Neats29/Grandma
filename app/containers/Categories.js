var React = require('react');
var Button = require('./../components/Button');

var Categories = React.createClass({
	getInitialState: function() {
		//return { selectedDiets: [] }
		return {
			selectedDiet: false,
			obj: {
				veg: false,
				vegan: false,
				gf: false
			}
		}
		//return { liked: false };
	},

	handleClick: function(e) {
		if (e.target.style.backgroundColor === "yellow") {
			e.target.style.backgroundColor = null;
		} else {
			e.target.style.backgroundColor = "yellow";
		}

		this.setState({selectedDiet: !this.state.selectedDiet});

			for (var key in this.state.obj) {
				if (e.target.innerHTML == key){
					this.state.obj[key] = this.state.selectedDiet;
				}
			}
			console.log(this.state.obj)
			console.log(this.state.selectedDiet)
		//var updateSelectedDiets = this.state.selectedDiets.concat([
				//e.target.innerHTML
		//]);
		//console.log(this.state.selectedDiets);
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
