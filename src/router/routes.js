const routes = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/api',
    component: () => import('../pages/ShopPage.vue'),

  },
  {
    path: '/componentes',
    component: () => import('../pages/ComponentesPage.vue')
  },
  {
    path: '/producto/:id',
    component: () => import('../pages/ProductPage.vue')
  }
]

export default routes
