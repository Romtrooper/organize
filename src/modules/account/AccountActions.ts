import ACCOUNT from './AccountConstants';
import * as AccountClient from './AccountClient';



export function login(username: string, password: string) {
	return dispatch => {

		dispatch({ type: ACCOUNT.LOGIN });

		return AccountClient.login(username, password)
			.then(response => {

				dispatch({ type: ACCOUNT.LOGIN_SUCCESS });

				return response;

			})
			.catch(error => {
				dispatch({
					type: ACCOUNT.LOGIN_ERROR,
					error,
				});
			});
	};
}

export function logout() {
	return dispatch => {

		dispatch({ type: ACCOUNT.LOGOUT });

		return AccountClient.logout()
			.then(response => {
				dispatch({ type: ACCOUNT.LOGOUT_SUCCESS });
				return response;
			})
			.catch(error => {
				dispatch({
					type: ACCOUNT.LOGOUT_ERROR,
					error,
				});
			});
	};
}


export function checkAppCredentials() {
	return dispatch => {
		dispatch({ type: ACCOUNT.LOGIN });

		return AccountClient.checkCredentials()
			.then(response => {

				dispatch({ type: ACCOUNT.LOGIN_SUCCESS });

				return response;

			})
			// No need to dispatch error when not alreandy logged
			.catch(error => dispatch({ type: ACCOUNT.LOGOUT_SUCCESS }));
	};
}

export function createUserAccount(email, password) {
	return dispatch => {
		dispatch({ type: ACCOUNT.CREATE });

		return AccountClient.createAccount(email, password)
			.then(response => {

				dispatch({ type: ACCOUNT.CREATE_SUCCESS });
				return response;

			})
			.catch(error => {
				dispatch({ type: ACCOUNT.CREATE_ERROR });
			});
	};
}
