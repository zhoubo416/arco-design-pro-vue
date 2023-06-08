/**
 * copy to https://github.com/vbenjs/vue-vben-admin/blob/main/src/logics/mitt/routeChange.ts
 * Used to monitor routing changes to change the status of menus and tabs. There is no need to monitor the route, because the route status change is affected by the page rendering time, which will be slow
 */

import mitt from '@/utils/mitt';
import type { RouteLocationNormalized } from 'vue-router';
import { getRawRoute } from '@/utils';

const emitter = mitt();

const key = Symbol();

let lastChangeTab: RouteLocationNormalized;

export function setRouteChange(lastChangeRoute: RouteLocationNormalized) {
  const r = getRawRoute(lastChangeRoute);
  console.log('r: ', r);
  emitter.emit(key, r);
  console.log('消息发送完毕');
  console.log('lastChangeTab: ', lastChangeTab);
  lastChangeTab = r;
  console.log('lastChangeTab2: ', lastChangeTab);
}

export function listenerRouteChange(
  callback: (route: RouteLocationNormalized) => void,
  immediate = true
) {
  console.log('listenerRouteChange');
  emitter.on(key, callback);
  console.log('listenerRouteChange2', immediate, lastChangeTab);
  immediate && lastChangeTab && callback(lastChangeTab);
}

export function removeTabChangeListener() {
  emitter.clear();
}
