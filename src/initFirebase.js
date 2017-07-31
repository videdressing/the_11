import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from './store'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCramd7M5btluFH6cvt25AMjOthN_roP2U',
  authDomain: 'the-11.firebaseapp.com',
  databaseURL: 'https://the-11.firebaseio.com',
  projectId: 'the-11',
  storageBucket: 'the-11.appspot.com',
  messagingSenderId: '442759699979'
})

// if (__DEV__) {
//   window.firebase = firebase
// }

export const ui = new firebaseui.auth.AuthUI(firebase.auth())
export const db = firebaseApp.database()

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit('UPDATE_USER', user)
})
