import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyB5NU7AK3W8Sf6pWCylx-wKJxDTn7_GxTc',
  authDomain: 'easy-ride-ac44f.firebaseapp.com',
  projectId: 'easy-ride-ac44f',
  storageBucket: 'easy-ride-ac44f.appspot.com',
  messagingSenderId: '126283125070',
  appId: '1:126283125070:web:f93752ca7f7fe424198e1f',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// export
const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleAuthProvider }
