import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

// const mapDispatchToProps = dispatch => ({
// // actions: {
//   saveTask: (task) => {
//     dispatch(saveTask(task));
//   },
//   // },
// });

/*
 * Component
 */
const ListContainer = connect(mapStateToProps, null)(List);
export default ListContainer;
