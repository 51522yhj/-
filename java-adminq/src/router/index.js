import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GongView from '../views/Gong/GongView.vue'
import MyView from '../views/Gong/MyView.vue'
import DongView from '../views/Gong/DongView.vue'
import CangView from '../views/Gong/CangView.vue'
const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('../views/index/index')
      }, {
        path: '/userCenter',
        name: '个人中心',
        component: () => import('../views/userCenter/index')
      }
      //   {
      //     path:'/sys/user',
      //     name:'用户管理',
      //     component:User
      //   },
      //   {
      //     path:'/sys/role',
      //     name:'角色管理',
      //     component:Role
      //   },
      //   {
      //     path:'/sys/menu',
      //     name:'菜单管理',
      //     component:Menu
      //   },
      //   {
      //     path:'/bsns/department',
      //     name:'部门管理',
      //     component:Department
      //   },
      //   {
      //     path:'/bsns/post',
      //     name:'岗位管理',
      //     component:Post
      //   }
    ]

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')

  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestView.vue'),
    children: [
      { path: '/test/gong', component: GongView },
      { path: '/test/dong', component: DongView },
      { path: '/test/my', component: MyView },
      { path: '/test/cang', component: CangView },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
/* // 全局前置守卫
router.beforeEach((to, from, next) => {
  // 如果要去 'Protected' 路由，且不是从其他页面跳转过来，则不允许访问
  if (to.path === '/' && !from.name) {
    next('/login'); // 可以重定向到登录页或其他页面
  } else {
    next(); // 否则，允许正常跳转
  }
}) */

export default router
