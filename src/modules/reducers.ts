import { combineReducers } from 'redux';
import collections from './collections/CollectionsReducer';
import account from './account/AccountReducer';

export default combineReducers({
	collections,
	account,
});
