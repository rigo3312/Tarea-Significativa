import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Orgint from '@/views/Orgint.vue'
import Servicios from '@/views/Servicios.vue'
import Programas from '@/views/Programas.vue'
import ContactenosView from '@/views/ContactenosView.vue'
import EducacionSuperiorView from '../views/EducacionSuperiorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/orgint',
    name: 'orgint',
    component: Orgint
  }
  ,
  {
    path: '/servicios',
    name: 'servicios',
    component: Servicios
  }
  ,
  {
    path: '/programas',
    name: 'programas',
    component: Programas
  },
  {
    path: '/ContactenosView',
    name: 'ContactenosView',
    component: ContactenosView
  },
    {
    path: '/EducacionSuperiorView',
    name: 'EducacionSuperiorView',
    component: EducacionSuperiorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
