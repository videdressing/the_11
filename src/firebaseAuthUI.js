import Firebase from 'firebase'
import FirebaseUi from 'firebaseui'

const authUI = new FirebaseUi.auth.AuthUI(Firebase.auth())

export default authUI
