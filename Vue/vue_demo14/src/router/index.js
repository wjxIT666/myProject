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
    path: '/index10/:id',
    name: 'index10',
    components: {
      default: () => import('../views/Index10.vue'),
      listOne: () => import('../components/listOne.vue'),
      listTwo: () => import('../components/listTwo.vue')
    },
    children: [
      {
        path: 'listOne',
        name: 'listOne',
        components: {
          listOne: () => import('../components/listOne.vue')
        }
      },
      {
        path: 'listTwo',
        name: 'listTwo',
        components: {
          listTwo: () => import('../components/listTwo.vue')
        }
      }
    ]
  },
  {
    path: '/index11',
    name: 'index11',
    component: () => import('../views/Index11.vue'),
    meta: {
      keepAlive: true
    }
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
    path: '/index16',
    name: 'index16',
    component: () => import('../views/Index16.vue')
  },
  {
    path: '/index17',
    name: 'index17',
    component: () => import('../views/Index17.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/index18',
    name: 'index18',
    component: () => import('../views/Index18.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/index19',
    name: 'index19',
    component: () => import('../views/Index19.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//设置全局导航守卫
router.beforeEach( (to, from, next) => {
  if (to.meta.auth) {
    next();
  } else {
    let token = sessionStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    };
  }
} );

export default router
