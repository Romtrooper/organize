import { connect } from 'react-redux';
import Tasks from './Tasks';

const mapStateToProps = state => ({
  tasks: state.tasks.tasksList,
});

const ListContainer = connect(mapStateToProps, null)(Tasks);
export default ListContainer;
