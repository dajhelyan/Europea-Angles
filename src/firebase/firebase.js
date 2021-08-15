import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAF2nPdaXOqkHo3ZkhgRaJ-f7ixhI7jVWw",
  authDomain: "europea-cc640.firebaseapp.com",
  projectId: "europea-cc640",
  storageBucket: "europea-cc640.appspot.com",
  messagingSenderId: "185229536495",
  appId: "1:185229536495:web:edff9e3decbb4c4fb0bf1a"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app)
}