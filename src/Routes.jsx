import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/LoginContainer';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/dashboard' component={Dashboard} />
		<Route exact path='/login' component={Login} />
	</Switch>
);

export default Routes;
