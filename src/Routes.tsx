import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionsScreen from './components/screens/collections/CollectionsScreen';
import AccountScreen from './components/screens/account/AccountScreenContainer';
import CollectionScreen from './components/screens/collection/CollectionScreen';
import LoginScreen from './components/screens/login/LoginScreenContainer';

import AppLayout from './components/layouts/AppLayout';

export default function Routes() {
	return (
		<AppLayout>
			<Switch>
				<Route exact path='/' component={CollectionsScreen} />
				<Route exact path='/account' component={AccountScreen} />
				<Route path='/collection/:name' component={CollectionScreen} />
				<Route path='/login' component={LoginScreen} />
			</Switch>
		</AppLayout>
	);
}
