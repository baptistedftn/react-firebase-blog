import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAj3hMXas3t7YIq7AY2VRBn4qei1tjjPqQ",
	authDomain: "cocodressing-guyane.firebaseapp.com",
	databaseURL: "https://cocodressing-guyane.firebaseio.com",
	projectId: "cocodressing-guyane",
	storageBucket: "cocodressing-guyane.appspot.com",
	messagingSenderId: "576072609810",
	appId: "1:576072609810:web:11bdc425767b0d00"
  };

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}
export default firebase