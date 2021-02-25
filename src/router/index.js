import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/comparison',
    name: 'Comparison',
    component: () => import(/* webpackChunkName: "comparison" */ '../views/Comparison.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/vote/:name',
    name: 'Vote',
    component: () => import(/* webpackChunkName: "vote" */ '../views/Vote.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
