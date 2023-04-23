import { generate, getRgbStr } from '@arco-design/color';
import { useAppSetting } from '@/hooks/setting/useAppSetting';
import { unref } from 'vue';

export const setBaseColor = (val: string) => {
  const { getDarkMode } = useAppSetting();

  for (let i = 1; i < 10; i += 1) {
    document.body.style.setProperty(
      `--arcoblue-${i}`,
      getRgbStr(generate(val, { index: i, dark: unref(getDarkMode) === 'dark' }))
    );
  }
};
