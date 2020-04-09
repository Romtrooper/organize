import { connect } from 'react-redux';
import Lists from './Lists';

const mapStateToProps = state => ({
	lists: state.lists.listsCollection,
});

export default connect(mapStateToProps, null)(Lists);
