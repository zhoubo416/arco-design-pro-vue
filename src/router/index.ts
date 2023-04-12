import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { transformAuthRoutesToVueRoutes, transformRouteNameToRoutePath } from '@/utils';
import { constantRoutes } from './routes';
import { scrollBehavior } from './helpers';
import { createRouterGuard } from './guard';

// TODO: 可以挪到配置文件的方法里，然后读取
const { VITE_HASH_ROUTE = false, VITE_BASE_URL } = import.meta.env;

export const router = createRouter({
  history: VITE_HASH_ROUTE ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRoutesToVueRoutes(constantRoutes),
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior, // TODO: 再议
});

/** 安装vue路由 */
export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}

/** 路由名称 */
export const routeName = (key: AuthRoute.RouteKey) => key;
/** 路由路径 */
export const routePath = (key: Exclude<AuthRoute.RouteKey, 'not-found-page'>) =>
  transformRouteNameToRoutePath(key);

export * from './routes';
export * from './modules';
