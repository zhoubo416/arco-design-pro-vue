import { useAppStore } from '@/store';
import { computed } from 'vue';

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

  // 获取固定头部和多页签
  const getFixedHeaderAndMultiTab = computed(() => appStore.getProjectSetting.fixedHeaderAndTab);
  // 获取主题色
  const getThemeColor = computed(() => appStore.getProjectSetting.themeColor);

  // 获取项目配置
  const getSettingByJson = computed(() => appStore.getProjectSetting);
  return {
    getShowSettingButton,

    getHeaderSetting,
    getTabSetting,
    getSiderSetting,
    getMenuSetting,
    getFooterSetting,
    getLayoutSetting,

    getFixedHeaderAndMultiTab,
    getThemeColor,

    getSettingByJson,
  };
}
