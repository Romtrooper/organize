import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './modules/store';

document.addEventListener('DOMContentLoaded', () => {

	const rootComponent = (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
	render(rootComponent, document.getElementById('root'));
});
