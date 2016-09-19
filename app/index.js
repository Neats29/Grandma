var React = require('react');
var ReactDOM = require('react-dom');
var Categories = require('./containers/Categories');

var Main = React.createClass({
	render: function() {
		return <Categories />;
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));
