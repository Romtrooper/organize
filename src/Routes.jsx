import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionsScreen from './components/collections/CollectionsScreen';
import AccountScreen from './components/account/AccountScreenContainer';
import AppLayout from './components/layouts/AppLayout';

export default function Routes() {
	return (
		<AppLayout>
			<Switch>
				<Route exact path='/' component={CollectionsScreen} />
				<Route exact path='/account' component={AccountScreen} />
			</Switch>
		</AppLayout>
	);
}
