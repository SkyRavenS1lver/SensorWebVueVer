import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/pressure',
      component: Dashboard
    },
    {
      path: '/light',
      component: Dashboard
    },
    {
      path: '/humidity',
      component: Dashboard
    },
    {
      path: '/airQ',
      component: Dashboard
    },
    {
      path: '/altitude',
      component: Dashboard
    },
    {
      path: '/rain',
      component: Dashboard
    },
    {
      path: '/airH',
      component: Dashboard
    },
    {
      path: '/temp1',
      component: Dashboard
    },
    {
      path: '/temp2',
      component: Dashboard
    },
  ]
})

export default router
