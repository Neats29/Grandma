var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
	render: function(){
		var dietButtons = this.props.dietTypes.map((diet, index) => {
			return <button onClick={this.props.onClick} style={this.props.style} key={`diet-${index}`}>{diet}</button>
		});
		return (
			<div>{dietButtons}</div>
		)
	}
});

module.exports = Button;
