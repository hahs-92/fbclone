import firebase from 'firebase'
import 'firebase/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKn3Y4cgn5IxjJofjkMGk0kcthvcEz4t4",
  authDomain: "fb-clone-f53e6.firebaseapp.com",
  projectId: "fb-clone-f53e6",
  storageBucket: "fb-clone-f53e6.appspot.com",
  messagingSenderId: "496427498034",
  appId: "1:496427498034:web:d70b6eba672879deb4da2b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export  { db, storage }