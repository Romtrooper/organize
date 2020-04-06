import { connect } from 'react-redux';
import Form from './Form';
import { saveTask } from '../../modules/tasks/tasksReducer';

// const mapStateToProps = state => ({
//   tasks: state.tasks,
// });

const mapDispatchToProps = dispatch => ({
  saveTask: (task) => {
    dispatch(saveTask(task));
  },
});

const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;
