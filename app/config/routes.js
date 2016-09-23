var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Address = require('../components/Input');
var Categories = require('../containers/Categories');

var routes = (
	<Router history={browserHistory}>
		<Route handler={Address} path="/" > 
			//<IndexRoute component={Categories}/>
		<Route path="/home" component={Address}/> 
		<Route path="/diet" component={Categories}/> 

		</Route>
	</Router>
);

module.exports = routes;
