var React = require('react');
var request = require('superagent');
var NavMenuButton = require('./navmenuButton.js');
var NavItem = require('./navitem.js');

var NavBar = React.createClass({
	getNavigationItems: function(){
		var that = this;
		request.get('https://navigation.localpf.dev/pf13/navigationitems?federatedid=' + that.props.FederatedId)
		.end(function(err, res){
			if(!err)
			{
				that.setState({navItems: res.body.Results});
			}
		});
	},
	getInitialState: function(){
		return {
			customerSettings: null,
			menuOpen: false,
			navItems: []
		};
	},
	componentDidMount: function(){
		var that = this;
		request.get('https://navigation.localpf.dev/navbarsettings/unit')
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(!err)
			{
				that.setState({customerSettings: res.body});
			}
		});
		this.getNavigationItems();
	},
	handleClick: function(event) {
    	this.setState({menuOpen: !this.state.menuOpen});
  	},
	render: function(){
		var that = this;

		if(that.state.customerSettings == null)
			return(<div id='pf-navigation'></div>);

		var navItemNodes = this.state.navItems.map(function(navItem) {
      		return (
        		<NavItem 
        			Label={navItem.Label} 
        			Url={navItem.Url} 
        			IconUrl={'https://d18mhp9r2it6yv.cloudfront.net/Navigation/Content/NavitemIcons/' + navItem.Icon} 
        			HoverColor={that.state.customerSettings.NavBarHoverColor}
        			key={navItem.Id} />
      		);
    	});

    	var customStyle = {
    		backgroundColor: that.state.customerSettings.NavBarBackgroundColor,
    		color: that.state.customerSettings.NavBarFontColor
    	}

		return (
			<div id='pf-navigation' className={that.state.menuOpen ? 'pf-navigation pf-navigation-open' : 'pf-navigation  pf-navigation-closed'} style={customStyle}>
				<NavMenuButton menuOpen={that.state.menuOpen} handleClick={that.handleClick} />
				<div id='pf-nav-content'>
					<ul className='pf-nav-top'>
						{navItemNodes}
					</ul>
				</div>
			</div>);
	}
});

module.exports = NavBar;