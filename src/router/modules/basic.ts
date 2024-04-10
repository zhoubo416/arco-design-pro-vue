const functionRoute: AuthRoute.Route = {
  name: 'basic',
  path: '/basic',
  component: 'basic',
  children: [
    {
      name: 'basic_config',
      path: '/basic/config',
      component: 'self',
      meta: {
        title: '自定义配置',
        requiresAuth: true,
        icon: 'ic:round-tab',
      },
    },
  ],
  meta: {
    title: '功能',
    icon: 'ri:function-line',
    order: 6,
  },
};

export default functionRoute;
