import { connect } from 'react-redux';
import CollectionList from './CollectionList';


function mapStateToProps(state) {
	const collections = Object.keys(state.collections.list);
	const arrFirstIndex = 0;

	return {
		collections,
		empty: collections.length === arrFirstIndex
	};
}

export default connect(mapStateToProps, null)(CollectionList);
