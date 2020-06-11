import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
import World from '../pages/world/World.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/world',
    component: World
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
