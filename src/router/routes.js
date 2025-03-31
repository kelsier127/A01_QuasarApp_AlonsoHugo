const routes = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/api',
    component: () => import('../pages/ApiPage.vue')
  },
  {
    path: '/componentes',
    component: () => import('../pages/ComponentesPage.vue')
  }
]

export default routes
