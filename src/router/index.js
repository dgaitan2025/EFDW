import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/productos', name: 'productos', component: ProductosView },
  { path: '/contacto', name: 'contacto', component: ContactoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
