<template>
  <b-col>
    <h1>Login</h1>
    <div id="firebaseui-auth-container" />
  </b-col>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { ui } from '../initFirebase'

const uiConfig = {
  callbacks: {
    // Called when the user has been successfully signed in
    signInSuccess (user, credential, redirectUrl) {
      // router.push('/')
      // Do not redirect.
      return false
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Opens IDP Providers sign-in flow in a popup
  signInFlow: 'redirect',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    }
  ]
}
export default {
  mounted () {
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    user (val) {
      if (val) {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.replace(this.$router.currentRoute.query.redirect)
        } else {
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>

<style scopped>

</style>
