import { useLocaleSetting } from '@/hooks';
import { unref } from 'vue';

export function initAppConfig() {
  const { setLocale, getLocaleDefault } = useLocaleSetting();

  setLocale(unref(getLocaleDefault));
}
