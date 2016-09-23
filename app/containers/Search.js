var React = require('react');
var Address = require('./../components/GetAddress');
var ShowAddress = require('./../components/ShowAddress');
var Categories = require('./Categories');
var Results = require('./Results');

var Search = React.createClass({
	getInitialState: function() {
		return { postCode: null, searched: false }
	},

	searchVisiblity:{
		"display": "" 
	},
	
	clickSearch: function() {
		this.setState({ searched: true });
		this.searchVisiblity.display = "none";
	},

	getPostCode: function(e) {
		this.setState({ postCode: e.target.value.toUpperCase() });
	},

	ChangeAddress: function() {
		this.setState({ searched: false });
		this.searchVisiblity.display = "inline-block";
	},

	render: function() {
		var ShowResults = (
			<div>
				<ShowAddress onClick={this.ChangeAddress} value={this.state.postCode}/> <Categories />
				<Results />
			</div>
			);
			return (
				<div>
					<Address style={this.searchVisiblity} onClick={this.clickSearch} onChange={this.getPostCode} />
					{ this.state.searched ? ShowResults : null }
				</div>
			)
	}
});

module.exports = Search;
