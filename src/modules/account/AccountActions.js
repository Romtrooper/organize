import ACCOUNT from './AccountConstants';
import { createAccount } from './AccountClient';


export function createUserAccount() {
	return (dispatch) => {
		dispatch({ type: ACCOUNT.CREATE });

		return createAccount()
			.then(response => {

				dispatch({ type: ACCOUNT.CREATE_SUCCESS });
				return response;

			})
			.catch(error => {
				dispatch({ type: ACCOUNT.CREATE_ERROR });
			});
	};
}
