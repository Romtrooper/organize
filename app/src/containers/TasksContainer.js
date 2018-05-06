import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => ({
  tasks: state.tasks.tasksList,
});

const ListContainer = connect(mapStateToProps, null)(List);
export default ListContainer;
