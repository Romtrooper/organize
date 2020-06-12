import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const composeEnhancers = composeWithDevTools({
	actionsBlacklist: [],
});


const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

const store = createStore(reducers, enhancers);

export default store;
