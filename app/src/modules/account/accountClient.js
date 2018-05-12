import firebase from 'firebase';

export function firebaseConnect() {
  return firebase.initializeApp(config);
}

export function createAccount(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password);
}
