import Vue from 'vue'
import VueRouter from 'vue-router'
import MapEditor from '../views/MapEditor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/map',
    name: 'MapEditor',
    component: MapEditor,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
