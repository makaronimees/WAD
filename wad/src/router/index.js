import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
