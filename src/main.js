// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// polyfills
import 'es6-promise/auto'
import 'weakmap' // for vuexfire, using (imports-loader)

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

// bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

// firebase
import './initFirebase'
import VueFire from 'vuefire'
Vue.use(VueFire)

// algolia
import InstantSearch from 'vue-instantsearch'
Vue.use(InstantSearch)

// resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
