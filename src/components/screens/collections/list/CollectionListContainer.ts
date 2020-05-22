import { connect } from 'react-redux';
import CollectionList from './CollectionList';


function mapStateToProps(state) {
	return {
		collections: Object.keys(state.collections.list),
	};
}

export default connect(mapStateToProps, null)(CollectionList);
