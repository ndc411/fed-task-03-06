import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

// 路由配置规则
const routes: Array<RouteConfig> = [
  {
    path: 'login',
    name: 'login',
    component: () => import(/*  webpackChunkName: 'home */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/*  webpackChunkName: 'home */ '@/views/home/index.vue')
      },
      {
        path: 'course',
        name: 'course',
        component: () => import(/*  webpackChunkName: 'home */ '@/views/course/index.vue')
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

export default router
