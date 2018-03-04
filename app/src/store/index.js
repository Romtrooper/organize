import { compose, createStore } from 'redux';

import reducer from './reducer';


let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

const enhancers = compose(...devTools);

const store = createStore(reducer, enhancers);

export default store;
