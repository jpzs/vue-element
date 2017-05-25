export const routes = [
  { path: '/', redirect: {name: 'logout'} },
  { path: '/auth', name: 'logout', component: () => import('../pages/auth.vue') },
  { path: '/admin', component: () => import('../pages/admin.vue'),
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../pages/welcome.vue'),
      },
      {
        path: 'current',
        name: 'admin',
        component: () => import('../pages/components/write/index.vue')
      }
    ]
  }
]
