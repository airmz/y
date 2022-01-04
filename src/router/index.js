/*
 * @Author: airmz
 * @Date: 2021-10-07 11:42:25
 * @LastEditTime: 2021-10-27 21:28:25
 * @FilePath: \yeb\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  }
  // , {
  //   path: '/home',
  //   name: '导航1',
  //   component: Home,
  //   children: [{
  //     path: '/Test1',
  //     name: '选项一',
  //     component: Test1
  //   }, {
  //     path: '/Test2',
  //     name: '选项二',
  //     component: Test2
  //   }]
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router