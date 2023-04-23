// 注册i8n实例并引入语言文件
import { App } from 'vue';
import i18n from '@/locale';

export const { t, ...methods } = i18n.global;

// setup i18n instance with glob
export function setupI18n(app: App) {
  app.use(i18n);
}
