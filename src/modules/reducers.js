import { combineReducers } from 'redux';
import tasks from './tasks/TasksReducer';
import account from './account/AccountReducer';

export default combineReducers({
	tasks,
	account,
});
