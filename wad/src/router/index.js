import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contacts.vue'
import APost from '../views/APost.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'

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
    path: '/apost/:id',
    name: 'APost',
    component: APost,
    props: true
  },
  /* pille branch
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
    props: true
   
  }
    */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
