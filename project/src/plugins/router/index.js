import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
  },

  {
    path: '/search',
    name: 'SearchResult',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SearchResults.vue')
  },
  // {
  //   path: '/restaurant',
  //   name: 'Restaurant',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/Restaurant.vue')
  // },
  {
    path: '/submit',
    name: 'Add Restaurant',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SubmitObject.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  { path: "/:catchAll(.*)", component: Home }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
})

export default router
