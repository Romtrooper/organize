import { combineReducers } from 'redux';
import lists from './lists/ListsReducer';
import account from './account/AccountReducer';

export default combineReducers({
	lists,
	account,
});
