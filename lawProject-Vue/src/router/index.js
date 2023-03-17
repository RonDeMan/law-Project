import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView2 from '../views/LoginView2.vue'
// import {isLoggedIn} from '../DL/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginView',
    component: loginView2
  },
  {
    path: '/Home',
    name: 'HomePage',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// eslint-disable-next-line
// router.beforeEach(async (to, from, next) => {
//   let loggedIn = await isLoggedIn()
//   if (
//     // make sure the user is authenticated
//     !loggedIn &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== ''
//   ) {
//     // redirect the user to the login page
//     return { name: '' }
//   }else{
//     next()
//   }
// })


export default router
