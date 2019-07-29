const routes = [
  {
    path: '/',
    component: () => import('layouts/GeneralLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'items', component: () => import('pages/Items/Index.vue') }
    ]
  },
  {
    path: '/signin',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Sign.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
