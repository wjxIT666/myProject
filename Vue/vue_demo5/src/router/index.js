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
    path: '/index3/:id',
    name: 'index3',
    component: () => import('../views/Index3.vue'),
    children: [
      {
        path: 'news',
        name: 'news',
        component: () => import('../components/news.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index4',
    name: 'index4',
    component: () => import('../views/Index4.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/Back.vue')
  },
  {
    path: '/index5',
    name: 'index5',
    component: () => import('../views/Index5.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//设置全局导航守卫
router.beforeEach( (to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = sessionStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    } 
  };
} );

export default router
