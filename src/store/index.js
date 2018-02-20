import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
// import venues from './modules/venues'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null, // Will be bound as an object
    venues: null
  },
  actions: {
  },
  mutations: {
    UPDATE_USER (state, user) {
      state.user = user
    },
    UPDATE_VENUES (state, venues) {
      state.venues = venues
    },
    ...firebaseMutations
  },
  getters: {
    venues: state => { return state.venues },
    user: state => { return state.user }
  },
  // modules: {
  //   venues
  // },
  strict: false // (can not use strict mode with vuexfir) debug
})

export default store

