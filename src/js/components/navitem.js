var React = require('react');

var NavItem = React.createClass({
	getInitialState: function () {
        return {hover: false};
    },
    
    mouseOver: function () {
        this.setState({hover: true});
    },
    
    mouseOut: function () {
        this.setState({hover: false});
    },
	render: function(){
		var iconStyle = {
			backgroundImage: 'url("' + this.props.IconUrl + '")'
		};

		var itemStyle = {
			backgroundColor: 'inherit'
		};

		if(this.state.hover){ 
			itemStyle = {
			    backgroundColor: this.props.HoverColor
		    };
	    };

		return (
			<li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={itemStyle}>
				<a title={this.props.Label} href={this.props.Url}>
					<span className='pf-nav-icon' style={iconStyle}></span>
					<span className='pf-nav-name'>{this.props.Label}</span>
				</a>
			</li>);
	}
});

module.exports = NavItem;