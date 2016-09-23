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

	toggleSearchVisibility: function(value){
		var clone = Object.assign({}, this.searchVisiblity);
		this.searchVisiblity = clone;
		this.searchVisiblity.display = value;
	},
	
	clickSearch: function() {
		this.setState({ searched: true });
		this.toggleSearchVisibility("none");
	},

	getPostCode: function(e) {
		this.setState({ postCode: e.target.value.toUpperCase() });
	},

	ChangeAddress: function() {
		this.setState({ searched: false });
		this.toggleSearchVisibility("inline-block");
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
