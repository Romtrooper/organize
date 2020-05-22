import { connect } from 'react-redux';
import { createUserAccount, login } from '../../../modules/account/AccountActions';

import AccountScreen from './AccountScreen';

function mapStateToProps(state) {
	const { 
		connected,
		error,
		processing,
	} = state.account;

	return {
		connected,
		error,
		processing
	};
}

const mapDispatchToProps = dispatch => ({
	createUserAccount(email, password) {
		dispatch(createUserAccount(email, password));
	},
	onSubmit(username, password) {
		return dispatch(login(username, password));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
