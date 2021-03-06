import firebase from 'firebase';

//grab the firebase object from firebase under Firebase SDK snippet and put it here. Make it a const and it will eventually go in the env files.
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
try {
	firebase.initializeApp(firebaseConfig);
} catch (error) {
	if (!/already exists/.test(error.message)) {
		console.error('firebase error');
	}
}

const firebaseInstance = firebase;
export default firebaseInstance;
