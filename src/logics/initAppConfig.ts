import { useAppStore } from '@/store';
import { setI18nLanguage } from '@/hooks/locale';

export function initAppConfig() {
  const appStore = useAppStore();

  setI18nLanguage(appStore.getLocale.language);
}
