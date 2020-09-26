import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAgDjSZfZFVFcOP_deJAfvz8SNHQ8v9yd0',
  authDomain: 'clone-41942.firebaseapp.com',
  databaseURL: 'https://clone-41942.firebaseio.com',
  projectId: 'clone-41942',
  storageBucket: 'clone-41942.appspot.com',
  messagingSenderId: '881498478217',
  appId: '1:881498478217:web:26f59543535472c038d858',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
