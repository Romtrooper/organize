import { connect } from 'react-redux';
import Collection from './Collection';

const mapStateToProps = state => ({
	collections: state.collections.list,
});

export default connect(mapStateToProps, null)(Collection);
