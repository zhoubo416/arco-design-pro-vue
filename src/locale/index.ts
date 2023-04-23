import { createI18n } from 'vue-i18n';
import en from './en-US';
import zh from './zh-CN';
import { storage } from '@/utils/storage/storage';
import { LOCALE_KEY } from '@/enums/cacheEnum';

const defaultLocale = storage.get(LOCALE_KEY) || 'zh-CN';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': zh,
  },
  sync: true,
  availableLocales: ['zh-CN', 'en-US'],
  silentTranslationWarn: true, // true - 关闭警告
  missingWarn: false,
  silentFallbackWarn: true, // true - 仅在根本没有可用的转换时生成警告，而不是在回退时
});

export default i18n;
