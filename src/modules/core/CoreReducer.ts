import CORE from './CoreConstants';

import { ICoreState } from './CoreInterface';

const initialState = {
	connection: {
		connected: false,
		error: false,
	},
};

export default (
	state: ICoreState = initialState,
	action: {
		type: string,
		payload: Object,
		error: any,
	}
) => {
	switch (action.type) {


	case CORE.LOGIN_SUCCESS: {
		return {
			...state,
			connection: { 
				connected: true,
				error: false,
			},
		};
	}

	case CORE.LOGIN_ERROR: {
		return {
			...state,
			connection: {
				connected: false,
				// error: action.error,
				error: true,
			},
		};
	}

	case CORE.LOGOUT_SUCCESS: {
		return {
			...state,
			...initialState,
		};
	}


	default:
		return state;
	}
};
