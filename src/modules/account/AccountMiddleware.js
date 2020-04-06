import { ACCOUNT } from './AccountActions';
import { createAccount } from './AccountClient';

const AccountMiddleware = store => next => (action) => {
	switch (action.type) {
	case ACCOUNT.CREATE: {
		createAccount();
		break;
	}
	default:
		console.log('action');
	}

	// Go to the next
	next(action);
};

export default AccountMiddleware;

// store.dispatch(saveDataFromApi(data));
