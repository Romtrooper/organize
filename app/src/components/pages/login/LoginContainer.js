import { connect } from 'react-redux';
import Login from './Login';
import { createUserAccount } from '../../../modules/account/accountActions';


const mapDispatchToProps = dispatch => ({
  createUserAccount(email, password) {
    dispatch(createUserAccount(email, password));
  },
});

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default LoginContainer;
