import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contacts.vue'
import EditPost from '../views/EditPost.vue'
import AddAPost from '../views/AddAPost.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact
  },
  {
    path: '/post/:id',
    name: 'EditPost',
    component: EditPost,
    props: true
  },
  {
    path: '/addpost',
    name: 'AddAPost',
    component: AddAPost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
