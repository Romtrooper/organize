import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardScreen from './components/screens/dashboard/DashboardScreen';
import CollectionsScreen from './components/screens/collections/CollectionsScreen';
import AccountScreen from './components/screens/account/AccountScreenContainer';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={DashboardScreen} />
		<Route exact path='/collections' component={CollectionsScreen} />
		<Route exact path='/account' component={AccountScreen} />
	</Switch>
);

export default Routes;
