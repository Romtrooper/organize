// import firebase from 'firebase';
// import { config } from '../../firebase';

export function firebaseConnect() {
	console.log('connect to firebase');
	// return firebase.initializeApp(config);
}

export function createAccount(email, password): Promise<any> {
	console.log('login with firebase');
	return;
	// firebase.auth().createUserWithEmailAndPassword(email, password);
}
