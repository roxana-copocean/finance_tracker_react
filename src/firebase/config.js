import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
	messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
	appId: `1:${process.env.REACT_APP_MESSAGE_ID}:web:${process.env.REACT_APP_APP_ID}`
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
