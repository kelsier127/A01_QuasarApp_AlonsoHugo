const routes = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/api',
    component: () => import('../pages/ApiPage.vue'),
    children: [
      {
        path: ':apiSearch',
        component: () => import('../pages/ApiSearchPage.vue')
      },

    ]
  },
  {
    path: '/componentes',
    component: () => import('../pages/ComponentesPage.vue')
  }
]

export default routes
