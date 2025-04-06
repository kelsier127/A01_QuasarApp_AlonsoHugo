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
    path: '/formulario',
    component: () => import('../pages/FormPage.vue')
  },
  {
    path: '/producto/:id',
    component: () => import('../pages/ProductPage.vue')
  },
  {
    path: '/carrito',
    component: () => import('../pages/CarritoPage.vue')
  }
]

export default routes
