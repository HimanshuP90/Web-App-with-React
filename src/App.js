import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/pages/UserRoute';
import GuestRoute from './components/pages/GuestRoute';


const App = ({ location }) => (
	<div className="ui container"> 
		<Route location={location} path="/" exact component={HomePage} />
		<GuestRoute location={location} path="/login" exact component={LoginPage} />	
		<UserRoute 
			location={location} 
			path="/dashboard" 
			exact 
			component={DashboardPage} 
		/>	
	</div>
);

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default App;
