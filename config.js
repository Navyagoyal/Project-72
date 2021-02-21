import firebase from 'firebase';
require('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfie2BavpCX7nG9jahxE6wjhM-DVynr6Q",
    authDomain: "newsletter-66b5a.firebaseapp.com",
    databaseURL: "https://newsletter-66b5a-default-rtdb.firebaseio.com",
    projectId: "newsletter-66b5a",
    storageBucket: "newsletter-66b5a.appspot.com",
    messagingSenderId: "487103661836",
    appId: "1:487103661836:web:100563ba09006e6058eb29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()