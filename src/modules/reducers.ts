import { combineReducers } from 'redux';

import collections from './collections/CollectionsReducer';
import account from './account/AccountReducer';
import core from './core/CoreReducer';

export default combineReducers({
	collections,
	account,
	core,
});
