var React = require('react');

var NavMenuButton = React.createClass({
	render: function(){
		return (
			<div id='pf-nav-menu-btn' 
				className={this.props.menuOpen ? 'pf-nav-menu-btn  pf-nav-close-icon' : 'pf-nav-menu-btn  pf-nav-open-icon'} 
				onClick={this.props.handleClick}>
			</div>);
	}
});

module.exports = NavMenuButton;