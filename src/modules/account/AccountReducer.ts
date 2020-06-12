import ACCOUNT from './AccountConstants';

import { IAccountState } from './AccountInterface';

const initialState = {
	user: null,
	connected: false,
	error: false,
	processing: false,
};

export default function account(
	state: IAccountState = initialState,
	action: {
		type: string;
		payload: Record<string, any>;
		error: any;
	}
) {
	switch (action.type) {

		case ACCOUNT.CREATE:
		case ACCOUNT.LOGIN:
		case ACCOUNT.LOGOUT:

			return {
				...state,
				processing: true,
				error: false,
			};

		case ACCOUNT.CREATE_SUCCESS:
			return {
				...state,
				processing: false,
				account: 'Username',
				connected: true,
			};

		case ACCOUNT.CREATE_ERROR:
			return {
				...state,
				processing: false,
				error: true,
			};


		case ACCOUNT.LOGIN_SUCCESS: {
			return {
				...state,
				connected: true,
				error: false,
				processing: false,
			};
		}


		case ACCOUNT.LOGOUT_SUCCESS: {
			return {
				...state,
				...initialState,
			};
		}

		case ACCOUNT.LOGOUT_ERROR:
		case ACCOUNT.LOGIN_ERROR: {
			return {
				...state,
				error: true,
				processing: false,
			};
		}

		default:
			return state;
	}
}
