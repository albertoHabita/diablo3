import { createRouter, createWebHashHistory } from 'vue-router'

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' }
]

// Rutas
const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/IndexView.vue`)
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
