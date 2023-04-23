import { useAppStore } from '@/store';
import { computed } from 'vue';
import { ThemeEnum } from '@/enums';

export function useAppSetting() {
  const appStore = useAppStore();

  // 获取项目配置的抽屉可见状态
  const getShowSettingButton = computed(() => appStore.getProjectButton.setting);

  // 获取header配置
  const getHeaderSetting = computed(() => appStore.getHeaderSetting);
  // 获取tab配置
  const getTabSetting = computed(() => appStore.getTabSetting);
  // 获取sider配置
  const getSiderSetting = computed(() => appStore.getSiderSetting);
  // 获取menu配置
  const getMenuSetting = computed(() => appStore.getMenuSetting);
  // 获取footer配置
  const getFooterSetting = computed(() => appStore.getFooterSetting);
  // 获取Layout配置
  const getLayoutSetting = computed(() => appStore.getLayoutSetting);
  // 获取Page配置
  const getPageSetting = computed(() => appStore.getPageSetting);

  // 获取固定头部和多页签
  const getFixedHeaderAndMultiTab = computed(() => appStore.getProjectSetting.fixedHeaderAndTab);
  // 获取主题色
  const getThemeColor = computed(() => appStore.getProjectSetting.themeColor);
  // 获取模式
  const getDarkMode = computed(() => appStore.getDarkMode);
  // 获取国际化
  const getLocale = computed(() => appStore.getLocale);

  // 获取项目配置
  const getSettingByJson = computed(() => appStore.getProjectSetting);

  // 修改
  const setDarkMode = (darkMode: ThemeEnum) => {
    appStore.setDarkMode(darkMode);
  };
  // 修改主题色
  const setThemeColor = (themeColor: string) => {
    appStore.setThemeColor(themeColor);
  };
  return {
    getShowSettingButton,

    getHeaderSetting,
    getTabSetting,
    getSiderSetting,
    getMenuSetting,
    getFooterSetting,
    getLayoutSetting,
    getPageSetting,

    getFixedHeaderAndMultiTab,
    getThemeColor,
    getLocale,
    getDarkMode,

    getSettingByJson,

    setDarkMode,
    setThemeColor,
  };
}
