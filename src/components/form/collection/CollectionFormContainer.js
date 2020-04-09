import { connect } from 'react-redux';
import { createCollection } from '../../../modules/collections/CollectionsActions';

import CollectionForm from './CollectionForm';


function mapDispatchToProps(dispatch) {
	return {
		createCollection(name) {
			dispatch(createCollection(name));
		},
	};
}


export default connect(null, mapDispatchToProps)(CollectionForm);
