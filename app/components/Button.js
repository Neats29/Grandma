var React = require('react');

var Button = React.createClass({
	render: function(){
			return (
				<div>
					{this.props.dietTypes.map((diet, index) => {
						return <SingleButton text={diet} onClick={this.props.onClick} key={diet}/>
					}, this) }
				</div>
		 )
	}
});

var SingleButton = React.createClass({
	getInitialState: function() {
		return { selected: false,
			obj: {
				veg: false,
				vegan: false,
				gf: false
			}
		};
	},
	handleClick: function(event) {
		this.setState({
			selected: !this.state.selected,
		});

		var x = event.target.innerHTML;
		var text = this.props.text;
		if (this.props.text == 'veg'){
			this.setState({
				obj: {
					veg: !this.state.obj.veg,
					vegan: this.state.obj.vegan,
					gf: this.state.obj.gf
				}
			})
		} else if (this.props.text == 'vegan') {

			this.setState({
				obj: {
					veg: this.state.obj.veg,
					vegan: !this.state.obj.vegan,
					gf: this.state.obj.gf
				}
			})
		} else {
			this.setState({
				obj: {
					gf: !this.state.obj.gf,
				}
			})
		}
		console.log(this.state.obj);
	},

	render: function() {
		var style = this.state.selected ? { "backgroundColor":"yellow" } : {
			"backgroundColor":""
		};
		return (
			<button style={style} onClick={this.handleClick}> 
				{this.props.text}
			</button>
		)
	}
});

module.exports = Button;
