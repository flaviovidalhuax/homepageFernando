import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Servicio1 from '../views/Servicio1.vue'
import Servicio2 from '../views/Servicio2.vue'
import Servicio3 from '../views/Servicio3.vue'
import Contac from '../views/Contac.vue'
import Galery from '../views/Galery.vue'
import ServiceOport from '../views/ServiceOport.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/servicio1', name: 'Servicio1', component: Servicio1 },
  { path: '/servicio2', name: 'Servicio2', component: Servicio2 },
  { path: '/servicio3', name: 'Servicio3', component: Servicio3 },
  { path: '/Cont', name: 'Contact', component: Contac },
  { path: '/Galery', name: 'Galery', component: Galery },
  { path: '/ServiceOport', name: 'ServiceOport', component: ServiceOport }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router