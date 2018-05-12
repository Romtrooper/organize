import firebase from 'firebase';
import { config } from '../../firebase';

export function firebaseConnect() {
  return firebase.initializeApp(config);
}

export function createAccount(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password);
}
