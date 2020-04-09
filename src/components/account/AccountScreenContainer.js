import { connect } from 'react-redux';
import AccountScreen from './AccountScreen';
import { createUserAccount } from '../../modules/account/AccountActions';


const mapDispatchToProps = dispatch => ({
	createUserAccount(email, password) {
		dispatch(createUserAccount(email, password));
	},
});

export default connect(null, mapDispatchToProps)(AccountScreen);
