import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contacts.vue'
import EditPost from '../views/EditPost.vue'
import AddAPost from '../views/AddAPost.vue'
import auth from '@/auth'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
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
    props: true,
    beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
  },
  {
    path: '/addpost',
    name: 'AddAPost',
    component: AddAPost,
    beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
