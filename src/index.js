import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from './modules/store';

import Routes from './Routes';

document.addEventListener('DOMContentLoaded', () => {

	const rootComponent = (
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	);
	render(rootComponent, document.getElementById('root'));
});
