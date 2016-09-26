import React from 'react';
var GetAddress = require('./../components/GetAddress');
var ShowAddress = require('./../components/ShowAddress');
var CategorisedResults = require('./CategorisedResults');

var Search = React.createClass({
	getInitialState: function() {
		return { postCode: null, searched: false }
	},

	searchVisiblity:{
		"display": "flex",
		"justifyContent": "center"
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
		//TODO: nullify the postcode and clearn the input field 
		this.setState({ searched: false });
		this.toggleSearchVisibility("flex");
	},

	render: function() {

		var ShowResults = (
			<div>
				<ShowAddress onClick={this.ChangeAddress} value={this.state.postCode}/> 
				<CategorisedResults />
			</div>
			);
			return (
				<div>
					<GetAddress style={this.searchVisiblity} onClick={this.clickSearch} onChange={this.getPostCode} />
					{ this.state.searched ? ShowResults : null }
				</div>
			)
	}
});

module.exports = Search;
