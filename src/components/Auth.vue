<template>
  <div id="firebaseui-auth-container"></div>
</template>


<script>
import authUI from '../firebaseAuthUI.js'
import Firebase from 'firebase'

export default {
  name: 'auth',
  mounted () {
    var uiConfig = {
      /* signInSuccessUrl: '/success', */
      signInOptions: [Firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }
    authUI.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
