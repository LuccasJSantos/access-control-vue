import Vue from 'vue'
import VueRouter from 'vue-router'
import MapEditor from '../views/MapEditor.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'mdi-home',
    component: MapEditor,
  }, {
    path: '/users',
    name: 'Usuários',
    icon: 'mdi-account',
    component: MapEditor,
  }, {
    path: '/map',
    name: 'Editor de Mapa',
    icon: 'mdi-map-marker-radius',
    component: MapEditor,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
