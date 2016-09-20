var React = require('react');
var ReactDOM = require('react-dom');
var EachResult = require('./../components/Each_result.js');

var Results = React.createClass({

	render: function() {
		var path = "../assets/img/";
		var meals = [{
			image: path + 'pizza.png',
			cusine: 'Italian'
		}, {
			image: path + 'tahchin.png',
			cusine: 'Persian'
		}, {
			image: path + 'arepa.png',
			cusine: 'Venezuelan'
		}];
			return (
				<div>
					<EachResult meals={meals} />
				</div>
			)
	}
});

module.exports = Results;
