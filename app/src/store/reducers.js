import { combineReducers } from 'redux';
import tasks from '../modules/tasks/tasksReducer';

export default combineReducers({
  tasks,
});
