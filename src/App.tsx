import { hot } from 'react-hot-loader/root'

import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from './modules/store';

import Routes from './Routes';


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	)
}

export default hot(App)