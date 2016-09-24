var React = require('react');

var Button = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.dietTypes.map((diet, index) => {
					return <SingleButton value={diet} text={diet} clickHandler={this.props.clickHandler} selectedDiet={this.props.selectedDiet[diet]} key={diet}/> }, this) }
			</div>
	 )
	}
});


var SingleButton = React.createClass({
  render: function() {
    var style = this.props.selectedDiet ? { "backgroundColor":"yellow" } : {"backgroundColor":""};
    return (
      <button style={style} value={this.props.value} onClick={this.props.clickHandler}> 
        {this.props.text}
      </button>
    )
  }
});



module.exports = Button;
