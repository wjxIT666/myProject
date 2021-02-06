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
    path: '/index5',
    name: 'index5',
    component: () => import('../views/Index5.vue')
  },
  {
    path: '/index6',
    name: 'index6',
    component: () => import('../views/Index6.vue')
  },
  {
    path: '/index7',
    name: 'index7',
    component: () => import('../views/Index7.vue')
  },
  {
    path: '/index8',
    name: 'index8',
    component: () => import('../views/Index8.vue')
  },
  {
    path: '/index9',
    name: 'index9',
    component: () => import('../views/Index9.vue')
  },
  {
    path: '/index10',
    name: 'index10',
    component: () => import('../views/Index10.vue')
  },
  {
    path: '/index11',
    name: 'index11',
    component: () => import('../views/Index11.vue')
  },
  {
    path: '/index12',
    name: 'index12',
    component: () => import('../views/Index12.vue')
  },
  {
    path: '/index13',
    name: 'index13',
    component: () => import('../views/Index13.vue')
  },
  {
    path: '/index14',
    name: 'index14',
    component: () => import('../views/Index14.vue')
  },
  {
    path: '/index15',
    name: 'index15',
    component: () => import('../views/Index15.vue')
  },
  {
    path: '/index17',
    name: 'index17',
    component: () => import('../views/Index17.vue')
  },
  {
    path: '/index18',
    name: 'index18',
    component: () => import('../views/Index18.vue')
  },
  {
    path: '/index19',
    name: 'index19',
    component: () => import('../views/Index19.vue')
  },
  {
    path: '/index20',
    name: 'index20',
    component: () => import('../views/Index20.vue')
  },
  {
    path: '/index21',
    name: 'index21',
    component: () => import('../views/Index21.vue')
  },
  {
    path: '*',
    redirect: '/index20'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
