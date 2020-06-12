import { connect } from 'react-redux';
import CollectionScreenList from './CollectionScreenList';


function mapStateToProps(state, ownProps) {
	const { collectionId } = ownProps;

	return {
		itemsList: Object.values(state.collections.list[collectionId]),
	};
}

export default connect(mapStateToProps, null)(CollectionScreenList);
