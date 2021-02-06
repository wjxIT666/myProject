import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录',
      auth: true
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta: {
      title: '首页'
    }
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
  };

  //设置页面title
  document.title = to.meta.title;
} );

export default router
