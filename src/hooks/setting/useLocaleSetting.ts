import { useAppStore } from '@/store';
import { computed, unref } from 'vue';
import { LocalType } from '@/typings/system';
import i18n from '@/locale';
import { setHtmlLang } from '@/locale/helper';

export function useLocaleSetting() {
  const appStore = useAppStore();

  // 获取国际化
  const getLocale = computed(() => appStore.getLocale);
  // 获取国际化语言
  const getLocaleLanguage = computed(() => appStore.getLocale.language);
  // 获取国际化默认语言
  const getLocaleDefault = computed(() => {
    if (unref(getLocaleLanguage)) {
      return appStore.getLocale.language;
    } else {
      return appStore.getLocale.default;
    }
  });
  // 获取国际化语言列表
  const getLocaleLanguageList = computed(() => appStore.getLocale.languageList);
  // 获取语言是不是中文
  const getLocaleIsZhCn = computed(() => appStore.getLocale.language === 'zh-CN');

  // 设置国际化
  const setLocale = (locale: LocalType) => {
    const globalI18n = i18n.global;
    const current = unref(globalI18n.locale);
    if (current === locale) {
      return;
    }

    if (i18n.mode === 'legacy') {
      (i18n.global.locale as any) = locale;
    } else {
      (i18n.global.locale as any).value = locale;
    }
    appStore.setLocale({ language: locale });
    setHtmlLang(locale);
  };

  // 切换中英文
  const toggleLocale = () => {
    const locale = unref(getLocaleLanguage) === 'zh-CN' ? 'en-US' : 'zh-CN';
    setLocale(locale);
  };

  return {
    getLocale,
    getLocaleLanguage,
    getLocaleDefault,
    getLocaleLanguageList,
    getLocaleIsZhCn,

    setLocale,
    toggleLocale,
  };
}
