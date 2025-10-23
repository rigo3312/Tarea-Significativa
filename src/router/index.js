import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/orgint',
    name: 'orgint',
    // lazy-loaded when the route is visited
    component: () => import(/* webpackChunkName: "orgint" */ '../views/Orgint.vue')
  }
  ,
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  }
  ,
  {
    path: '/programas',
    name: 'programas',
    component: () => import(/* webpackChunkName: "programas" */ '../views/Programas.vue')
  },
  {
    path: '/ContactenosView',
    name: 'ContactenosView',
    component: () => import(/* webpackChunkName: "ContactenosView" */ '../views/ContactenosView.vue')
  },
    {
    path: '/EducacionSuperiorView',
    name: 'EducacionSuperiorView',
    component: () => import(/* webpackChunkName: "EducacionSuperiorView" */ '../views/EducacionSuperiorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
