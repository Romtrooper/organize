import { combineReducers } from 'redux';
import tasks from '../modules/tasks/tasksReducer';
import account from '../modules/account/accountReducer';

export default combineReducers({
  tasks,
  account,
});
