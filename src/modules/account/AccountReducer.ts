import ACCOUNT from './AccountConstants';

const initialState = {
	account: null,
	connected: false,
};

export default function account(
	state = initialState,
	action: { type: string, payload: any }
) {
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
