var React = require('react');
var ReactDOM = require('react-dom');
var Categories = require('./containers/Categories');
var Results = require('./containers/Results');
var Search = require('./containers/Search');
//var Routes = require('./config/routes')

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Search />
			</div>
		)
	}
});

//ReactDOM.render(Routes, document.getElementById('app'));
ReactDOM.render(<Main />, document.getElementById('app'));
