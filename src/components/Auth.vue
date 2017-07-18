<template>
  <div id="firebaseui-auth-container"></div>
</template>


<script>
import {db, ui} from '../firebase.js'
import Firebase from 'firebase'

export default {
  name: 'auth',
  mounted () {
    var toto = db
    console.log(toto)
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [Firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
