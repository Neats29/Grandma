var React = require('react');

var Button = React.createClass({
	render: function(){
		var dietButtons = this.props.dietTypes.map((diet, index) => {
			return (
					 <div key={`diet-${index}`}>
						 <button onClick={this.props.onClick} key={diet}>{diet}</button>
					 </div>
			 )
		});
		return (
			<div>{dietButtons}</div>
		)
	}
});

//function Button(props) {
	//var dietButtons = props.dietTypes.map((diet, index) => {
		//return (
			 //<div key={`diet-${index}`}>
				 //<button onClick={props.onClick} key={diet}>{diet}</button>
				 //</div>
		 //)
		//});
		//return (
			//<div>{dietButtons}</div>
		//)
	//}

module.exports = Button;
