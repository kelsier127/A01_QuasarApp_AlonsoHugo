const routes = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/api',
    component: () => import('../pages/ApiPage.vue'),
    children: [{
      path: ':filmId',
      component: () => import('../pages/FilmPage.vue')
    }]
  },
  {
    path: '/componentes',
    component: () => import('../pages/ComponentesPage.vue')
  }
]

export default routes
