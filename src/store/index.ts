import type { App } from 'vue';
import { createPinia, Pinia } from 'pinia';
// 持久化存储
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store: Pinia = createPinia();

export function setupStore(app: App<Element>) {
  store.use(piniaPluginPersistedstate);
  app.use(store);
}

export * from './modules';
// export * from './subscribe';
