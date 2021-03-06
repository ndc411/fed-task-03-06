import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

Vue.use(VueRouter)

// 路由配置规则
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/*  webpackChunkName: 'home */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/*  webpackChunkName: 'home */ '@/views/home/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/*  webpackChunkName: 'role */ '@/views/role/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/*  webpackChunkName: 'menu */ '@/views/menu/index.vue')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/*  webpackChunkName: 'resource */ '@/views/resource/index.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/*  webpackChunkName: 'course */ '@/views/course/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/*  webpackChunkName: 'user */ '@/views/user/index.vue')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/*  webpackChunkName: 'advert */ '@/views/advert/index.vue')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/*  webpackChunkName: 'advert-space */ '@/views/advert-space/index.vue')
      },
      {
        path: '/menu-create',
        name: 'menu-create',
        component: () => import(/*  webpackChunkName: 'menu-create-edit */ '@/views/menu/create.vue')
      },
      {
        path: '/menu/:id/edit',
        name: 'menu-edit',
        component: () => import(/*  webpackChunkName: 'menu-create-edit */ '@/views/menu/edit.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import(/*  webpackChunkName: '404 */ '@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('进入了路由全局守卫')
  console.log('to => ', to)
  console.log('from => ', from)
  console.log('next => ', next)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({
        name: 'login',
        query: { // 通过 url 传递查询字符串参数
          redirect: to.fullPath // 把登录成功需要返回的页面告诉登录页面
        }
      })
    } else {
      next()
    }
  } else {
    // 路由守卫中一定要调用 next 方法，否则页面无法展示
    next()
  }
})

export default router
