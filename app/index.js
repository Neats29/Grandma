var React = require('react');
var ReactDOM = require('react-dom');
var Categories = require('./containers/Categories');
var Results = require('./containers/Results');

var Main = React.createClass({
	render: function() {
		return (
			<div>
			 <Categories />
			 <Results />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));
