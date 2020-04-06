import { ACCOUNT } from './AccountActions';

const initialState = {
	account: null,
	connected: false,
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case ACCOUNT.CREATE:
		return {
			...state,
			account: 'creating',
		};

	case ACCOUNT.CREATE_SUCCESS:
		return {
			...state,
			account: 'account id',
			connected: true,
		};

	case ACCOUNT.CREATE_ERROR:
		return {
			...state,
			error: 'error',
		};

	default:
		return state;
	}
};
