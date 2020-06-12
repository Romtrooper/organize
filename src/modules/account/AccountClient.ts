import * as firebaseClient from 'firebase';
import { firebaseConfig } from '../../../config/firebase'


// Initialize Firebase
firebaseClient.initializeApp(firebaseConfig);


export function login(username: string, password: string) {
	return firebaseClient.auth()
		.setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL)
		.then(() => {
			return firebaseClient.auth().signInWithEmailAndPassword(username, password)
				.then(response => response.user);
			// .catch(error => error);
		});
}

export function logout() {
	return firebaseClient.auth().signOut()
		.then(response => response);
	// .catch(error => error);
}

export function checkCredentials() {
	return new Promise((resolve, reject) => {
		firebaseClient.auth().onAuthStateChanged(user => {
			if (user) {
				resolve('firebase');
			} else {
				reject(Error('not connected'));
			}
		});
	});
}

export function createAccount(/*email, password*/): Promise<void> {
	console.log('login with firebase');
	return;
	// firebase.auth().createUserWithEmailAndPassword(email, password);
}
