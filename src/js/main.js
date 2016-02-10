var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/navbar.js');

module.exports = PlatformNavigation;

function PlatformNavigation(fedid){
	ReactDOM.render(
       <NavBar FederatedId={fedid} />,
       document.getElementById('main')
    );
}

