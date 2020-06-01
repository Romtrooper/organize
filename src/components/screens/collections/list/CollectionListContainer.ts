import { connect } from 'react-redux';
import CollectionList from './CollectionList';


function mapStateToProps(state) {
	const collections = Object.keys(state.collections.list);

	return {
		collections,
		empty: collections.length === 0
	};
}

export default connect(mapStateToProps, null)(CollectionList);
