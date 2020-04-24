import { connect } from 'react-redux';
import { createCollectionItem } from '../../../modules/collections/CollectionsActions';

import CollectionItemForm from './CollectionItemForm';


function mapDispatchToProps(dispatch) {
	return {
		createCollectionItem(collectionId, item) {
			dispatch(createCollectionItem(collectionId, item));
		},
	};
}


export default connect(null, mapDispatchToProps)(CollectionItemForm);
