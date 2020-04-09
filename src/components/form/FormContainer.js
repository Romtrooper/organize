import { connect } from 'react-redux';
import { createList } from '../../modules/lists/ListsActions';

import Form from './Form';


function mapDispatchToProps(dispatch) {
	return {
		saveTask(name) {
			dispatch(createList(name));
		},
	};
}


export default connect(null, mapDispatchToProps)(Form);
