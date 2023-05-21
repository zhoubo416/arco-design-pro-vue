import { useAppStore } from '@/store';
import { computed } from 'vue';
import { ThemeEnum } from '@/enums';

export function useAppSetting() {
  const appStore = useAppStore();

  // 获取项目配置的抽屉可见状态
  const getShowSettingButton = computed(() => appStore.getProjectButton.setting);

  // 获取固定头部和多页签
  const getFixedHeaderAndMultiTab = computed(() => appStore.getProjectSetting.fixedHeaderAndTab);
  // 获取主题色
  const getThemeColor = computed(() => appStore.getProjectSetting.themeColor);
  // 获取模式
  const getDarkMode = computed(() => appStore.getDarkMode);
  // 获取模式
  const getIsDarkMode = computed(() => appStore.getDarkMode === ThemeEnum.DARK);

  // 获取项目配置
  const getSettingByJson = computed(() => appStore.getProjectSetting);

  // 修改模式
  const setDarkMode = (darkMode: ThemeEnum) => {
    appStore.setDarkMode(darkMode);
  };
  // 修改主题色
  const setThemeColor = (themeColor: string) => {
    appStore.setThemeColor(themeColor);
  };

  // 修改固定头部和多页签
  const setFixedHeaderAndMultiTab = (fixedHeaderAndTab: boolean) => {
    appStore.setProjectSetting({ fixedHeaderAndTab });
  };

  return {
    getShowSettingButton,

    getFixedHeaderAndMultiTab,
    getThemeColor,
    getDarkMode,
    getIsDarkMode,

    getSettingByJson,

    setDarkMode,
    setThemeColor,
    setFixedHeaderAndMultiTab,
  };
}
