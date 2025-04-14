import { createRouter, createWebHashHistory } from 'vue-router'
import DemoOne from '@/views/DemoOne.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DemoOne
  },
  {
    path: '/materials',
    name: 'materials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MaterialsPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
