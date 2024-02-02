export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: 'route.dashboard.analysis',
            requiresAuth: true,
            affix: true,
            // icon: 'icon-park-outline:analysis',
          },
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: 'route.dashboard.workbench',
            requiresAuth: true,
            // icon: 'icon-park-outline:workbench',
          },
        },
      ],
      meta: {
        title: 'route.dashboard',
        icon: 'ant-design:dashboard-outlined',
        order: 1,
      },
    },
  ],
  admin: [],
  user: [],
};
