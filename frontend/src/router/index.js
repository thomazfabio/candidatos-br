import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // Importa as rotas geradas

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
