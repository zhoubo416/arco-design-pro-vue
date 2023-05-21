import { useAppStore } from '@/store';
import { computed } from 'vue';

export function useLocaleSetting() {
  const appStore = useAppStore();

  // 获取国际化
  const getLocale = computed(() => appStore.getLocale);
  // 获取国际化语言
  const getLocaleLanguage = computed(() => appStore.getLocale.language);
  // 获取国际化默认语言
  const getLocaleDefault = computed(() => appStore.getLocale.default);
  // 获取国际化语言列表
  const getLocaleLanguageList = computed(() => appStore.getLocale.languageList);

  return {
    getLocale,
    getLocaleLanguage,
    getLocaleDefault,
    getLocaleLanguageList,
  };
}
