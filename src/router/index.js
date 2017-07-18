import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Venue from '@/components/Venue'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/venue/:id(\\d+)',
      name: 'Venue',
      component: Venue
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/success',
      component: AuthSuccess
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
