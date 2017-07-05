import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Venue from '@/components/Venue'

Vue.use(Router)

export default new Router({
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
      path: '*',
      redirect: '/'
    }
  ]
})
