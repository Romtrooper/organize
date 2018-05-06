import { compose, createStore } from 'redux';
import reducers from './reducers';


let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

const enhancers = compose(...devTools);

const store = createStore(reducers, enhancers);

export default store;
