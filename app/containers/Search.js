var React = require('react');
var Address = require('./../components/GetAddress');
var ShowAddress = require('./../components/ShowAddress');
var Categories = require('./Categories');
var Results = require('./Results');

var Search = React.createClass({
	getInitialState: function() {
		return { postCode: null, searched: false }
	},

	clickSearch: function() {
		this.setState({ searched: true });
	},

	getPostCode: function(e) {
		this.setState({ postCode: e.target.value.toUpperCase() });
	},

	render: function() {
		var ShowResults = (
			<div>
				<ShowAddress value={this.state.postCode}/>
				<Categories />
				<Results />
			</div>
			);
			return (
				<div>
					<Address onClick={this.clickSearch} onChange={this.getPostCode} />
					{ this.state.searched ? ShowResults : null }
				</div>
			)
	}
});

module.exports = Search;
