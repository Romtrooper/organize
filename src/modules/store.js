// import { compose, createStore } from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import AccountMiddleware from './account/accountMiddleware';

const middlewares = applyMiddleware(AccountMiddleware);

let devTools = [];
if (window.devToolsExtension) {
	devTools = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
}


const enhancers = compose(middlewares, ...devTools);

const store = createStore(reducers, enhancers);

export default store;
