import ACCOUNT from './AccountConstants';
import { createAccount } from './AccountClient';


export function createUserAccount(email, password) {
	return (dispatch) => {
		dispatch({ type: ACCOUNT.CREATE });

		return createAccount(email, password)
			.then(response => {

				dispatch({ type: ACCOUNT.CREATE_SUCCESS });
				return response;

			})
			.catch(error => {
				dispatch({ type: ACCOUNT.CREATE_ERROR });
			});
	};
}
