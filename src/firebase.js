import Firebase from 'firebase'

let firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCramd7M5btluFH6cvt25AMjOthN_roP2U',
  authDomain: 'the-11.firebaseapp.com',
  databaseURL: 'https://the-11.firebaseio.com',
  projectId: 'the-11',
  storageBucket: 'the-11.appspot.com',
  messagingSenderId: '442759699979'
})

let db = firebaseApp.database()

import FirebaseUi from 'firebaseui'

let ui = new FirebaseUi.auth.AuthUI(Firebase.auth())

export {db as default, ui}
