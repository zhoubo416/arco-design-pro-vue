// import { computed, unref } from 'vue';
// import type { LocalType } from '@/typings/system';
// import { useAppStore } from '@/store';
// import i18n from '@/locale';
// import { setHtmlLang } from '@/locale/helper';
//
// export function setI18nLanguage(locale: LocalType) {
//   const appStore = useAppStore();
//
//   if (i18n.mode === 'legacy') {
//     (i18n.global.locale as any) = locale;
//   } else {
//     (i18n.global.locale as any).value = locale;
//   }
//   appStore.setLocale({ language: locale });
//   setHtmlLang(locale);
// }
//
// export function useLocale() {
//   const appStore = useAppStore();
//   const getLocale = computed(() => appStore.getLocale);
//   // TODO: currentLocale 无用
//   const currentLocale = computed(() => {
//     return i18n.global.locale.value;
//   });
//   const changeLocale = (locale: LocalType) => {
//     // Message.success(i18.t('navbar.action.locale'));
//     const globalI18n = i18n.global;
//     const current = unref(globalI18n.locale);
//     if (current === locale) {
//       return locale;
//     }
//
//     setI18nLanguage(locale);
//   };
//   return {
//     currentLocale,
//     changeLocale,
//     getLocale,
//   };
// }
