import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import NProgress from 'nprogress';
import { createPermissionGuard } from './permission';
import 'nprogress/nprogress.css';
import { setRouteChange } from '@/logics/mitt/routeChange';
import { getToken } from '@/utils';
import { useAppStore } from '@/store';
import { useI18n } from '@/hooks/web/useI18n';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  createPageGuard(router); // 处理页面加载状态的钩子
  createPageLoadingGuard(router); // 处理页面加载状态的钩子
  createProgressGuard(router); // 处理页面加载进度的钩子
  createTitleGuard(router); // 处理页面标题的钩子
  createPermissionGuard(router); // 处理路由页面的权限
  // 监视滚动
  // 监视http
  // 监视消息
  // 监视退出操作
}

/**
 * 处理页面加载状态的钩子
 * @param router
 */
function createPageGuard(router: Router) {
  // 用来存储没有跳转过的页面
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    // 页面已经加载过，再次打开会更快，不需要再做loading等处理
    to.meta.loaded = !!loadedPageMap.get(to.path);
    // 通知路由更改
    console.log('to', to);
    setRouteChange(to);
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

/**
 * 处理页面加载状态的钩子
 * @param router
 */
function createPageLoadingGuard(router: Router) {
  const appStore = useAppStore();
  // const { getOpenPageLoading } = useTransitionSetting();
  router.beforeEach(async (to) => {
    if (!getToken()) {
      return true;
    }
    if (to.meta.loaded) {
      return true;
    }

    // if (unref(getOpenPageLoading)) {
    //   appStore.setPageLoadingAction(true);
    //   return true;
    // }

    return true;
  });

  router.afterEach(() => {
    // if (unref(getOpenPageLoading)) {
    // TODO Looking for a better way
    // The timer simulates the loading time to prevent flashing too fast,
    setTimeout(() => {
      appStore.setPageLoading(false);
    }, 220);
    // }
    return true;
  });
}

/**
 * 处理页面加载进度条的钩子
 * @param router
 */
export function createProgressGuard(router: Router) {
  // const { getOpenNProgress } = useTransitionSetting();
  router.beforeEach(async (to) => {
    if (to.meta.loaded) {
      return true;
    }
    // unref(getOpenNProgress) && nProgress.start();
    NProgress.start();
    return true;
  });

  router.afterEach(async () => {
    // unref(getOpenNProgress) && nProgress.done();
    NProgress.done();
    return true;
  });
}

/**
 * 处理页面标题的钩子
 * @param router
 */
export function createTitleGuard(router: Router) {
  router.afterEach((to) => {
    // 为了解决第一次刷新没办法自动获取到中英文问题
    setTimeout(() => {
      const { t } = useI18n();
      // 设置document title
      useTitle(to.meta.title ? t(to.meta.title as string) : '');
    }, 100);
  });
}
