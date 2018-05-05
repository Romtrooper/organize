import { connect } from 'react-redux';
import Form from '../components/Form';
import { saveTask } from '../store/reducer';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
// actions: {
  saveTask: (task) => {
    dispatch(saveTask(task));
  },
  // },
});

/*
 * Component
 */
const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);
export default FormContainer;
