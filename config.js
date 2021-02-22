import firebase from 'firebase';
require('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQlYFq3iKj5KQMGJLi6auF3u2YWONldNU",
    authDomain: "story-hub-98481.firebaseapp.com",
    projectId: "story-hub-98481",
    storageBucket: "story-hub-98481.appspot.com",
    messagingSenderId: "1072371396423",
    appId: "1:1072371396423:web:cba29dbd988579dbc7e662"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()