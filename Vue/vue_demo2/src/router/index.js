import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/index2',
    name: 'index2',
    component: () => import('../views/Index2.vue')
  },
  {
    path: '/index3',
    name: 'index3',
    component: () => import('../views/Index3.vue')
  },
  {
    path: '/index4',
    name: 'index4',
    component: () => import('../views/Index4.vue')
  },
  {
    path: '/index5/:newsid',
    name: 'index5',
    component: () => import('../views/Index5.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
