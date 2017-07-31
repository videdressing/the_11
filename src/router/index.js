import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import Hello from '@/components/Hello'
import Venue from '@/components/Venue'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
// import Auth from '@/components/Auth'
// import AuthSuccess from '@/components/AuthSuccess'

Vue.use(Router)

const router = new Router({
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
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          next('Hello')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          firebase.auth().signOut()
          next('/')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/**
 * Check if a route requires authentication.
 * This is a global before hook for all routes,
 * checks if there are `meta: { requiresAuth: true }`
 * in all matched routes and sub routes.
 * If yes, redirect to `/login` and add original path to the query.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router

